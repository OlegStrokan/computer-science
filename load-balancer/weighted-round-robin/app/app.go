package app

import (
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
)

type Server interface {
	Address() string
	IsAlive() bool
	Serve(rw http.ResponseWriter, r *http.Request)
}

type SimpleServer struct {
	Addr   string
	Weight int
	Proxy  *httputil.ReverseProxy
}

func CreateServer(addr string, weight int) *SimpleServer {
	serverUrl, err := url.Parse(addr)
	handleError(err)

	return &SimpleServer{
		Addr:   addr,
		Weight: weight,
		Proxy:  httputil.NewSingleHostReverseProxy(serverUrl),
	}
}

type LoadBalancer struct {
	Port            string
	RoundRubinCount int
	Servers         []Server
}

func CreateLoadBalancer(port string, servers []Server) *LoadBalancer {
	return &LoadBalancer{
		Port:            port,
		RoundRubinCount: 0,
		Servers:         servers,
	}
}

func handleError(err error) {
	if err != nil {
		fmt.Printf("error %v\n", err)
	}
}

func (s *SimpleServer) Address() string { return s.Addr }

func (s *SimpleServer) IsAlive() bool { return true }

func (s *SimpleServer) Serve(rw http.ResponseWriter, req *http.Request) {
	s.Proxy.ServeHTTP(rw, req)
}

func (lb *LoadBalancer) GetNextAvailableServer() Server {
	totalWeight := 0
	for _, server := range lb.Servers {
		totalWeight += server.(*SimpleServer).Weight
	}

	for {
		for _, server := range lb.Servers {
			if lb.RoundRubinCount%totalWeight < server.(*SimpleServer).Weight {
				lb.RoundRubinCount++
				return server
			}
			lb.RoundRubinCount++
		}
	}
}

func (lb *LoadBalancer) ServeProxy(rw http.ResponseWriter, req *http.Request) {
	targetServer := lb.GetNextAvailableServer()
	fmt.Printf("forwarding request to %q\n", targetServer.Address())
	targetServer.Serve(rw, req)
}
