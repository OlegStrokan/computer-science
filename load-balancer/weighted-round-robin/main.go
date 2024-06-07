package main

import (
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
)

type Server interface {
	Address() string
	IsAlive() bool
	isOverloaded() bool
	Serve(rw http.ResponseWriter, r *http.Request)
}

type simpleServer struct {
	addr   string
	weight int
	queue  int
	proxy  *httputil.ReverseProxy
}

func createServer(addr string, weight int) *simpleServer {
	serverUrl, err := url.Parse(addr)
	handleError(err)

	return &simpleServer{
		addr:   addr,
		weight: weight,
		queue:  0,
		proxy:  httputil.NewSingleHostReverseProxy(serverUrl),
	}
}

type LoadBalancer struct {
	port            string
	roundRubinCount int
	servers         []Server
}

func CreateLoadBalancer(port string, servers []Server) *LoadBalancer {
	return &LoadBalancer{
		port:            port,
		roundRubinCount: 0,
		servers:         servers,
	}
}

func handleError(err error) {
	if err != nil {
		fmt.Printf("error %v\n", err)
	}
}

func (s *simpleServer) Address() string { return s.addr }

func (s *simpleServer) isOverloaded() bool {
	if s.queue > s.weight-1 {
		return true
	}
	return false
}

func (s *simpleServer) IsAlive() bool { return true }

func (s *simpleServer) Serve(rw http.ResponseWriter, req *http.Request) {
	s.proxy.ServeHTTP(rw, req)
}

func (lb *LoadBalancer) getNextAvailableServer() Server {
	totalWeight := 0
	for _, server := range lb.servers {
		totalWeight += server.(*simpleServer).weight
	}

	for {
		server := lb.servers[lb.roundRubinCount%len(lb.servers)]
		if server.(*simpleServer).weight > lb.roundRubinCount/totalWeight {
			lb.roundRubinCount = (lb.roundRubinCount + 1) % totalWeight
			return server
		}
		lb.roundRubinCount = (lb.roundRubinCount + 1) % totalWeight
	}
}

func (lb *LoadBalancer) serveProxy(rw http.ResponseWriter, req *http.Request) {
	targetServer := lb.getNextAvailableServer()
	fmt.Printf("forwarding request to %q\n", targetServer.Address())
	targetServer.Serve(rw, req)
}

func main() {
	servers := []Server{
		createServer("https://google.com/", 10),
		createServer("https://www.yahoo.com", 2),
		createServer("https://www.bing.com/", 5),
	}

	lb := CreateLoadBalancer("8080", servers)
	handleRedirect := func(rw http.ResponseWriter, req *http.Request) {
		lb.serveProxy(rw, req)
	}

	http.HandleFunc("/", handleRedirect)

	fmt.Printf("serving requests at 'localhost:%s'\n", lb.port)
	http.ListenAndServe(":"+lb.port, nil)

}
