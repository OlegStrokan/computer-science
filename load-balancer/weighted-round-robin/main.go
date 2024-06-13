package main

import (
	"fmt"
	. "load-balancer/app"
	"net/http"
)

func main() {
	// to better understand how it works, please check tests folder
	servers := []Server{
		CreateServer("https://google.com/", 10),
		CreateServer("https://www.yahoo.com", 2),
		CreateServer("https://www.bing.com/", 5),
	}

	lb := CreateLoadBalancer("8080", servers)
	handleRedirect := func(rw http.ResponseWriter, req *http.Request) {
		lb.ServeProxy(rw, req)
	}

	http.HandleFunc("/", handleRedirect)

	fmt.Printf("serving requests at 'localhost:%s'\n", lb.Port)
	http.ListenAndServe(":"+lb.Port, nil)

}
