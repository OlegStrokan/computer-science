package main

import (
	"errors"
	"net/url"
	"sync"
	"time"
)

type Server struct {
	URL             *url.URL
	AvgResponseTime time.Duration
}

type LoadBalancer struct {
	servers []*Server
	mu      sync.Mutex
}

func CreateLoadBalancer() *LoadBalancer {
	return &LoadBalancer{
		servers: make([]*Server, 0),
	}
}

func (lb *LoadBalancer) AddServer(serverURL *url.URL) {
	lb.mu.Lock()
	defer lb.mu.Unlock()

	lb.servers = append(lb.servers, &Server{
		URL:             serverURL,
		AvgResponseTime: 0,
	})
}

func (lb *LoadBalancer) RemoveServer(serverURL *url.URL) error {
	lb.mu.Lock()
	defer lb.mu.Unlock()

	for i, server := range lb.servers {
		if server.URL.String() == serverURL.String() {
			lb.servers = append(lb.servers[:i], lb.servers[i+1:]...)
			return nil
		}
	}
	return errors.New("server not found")
}

func (lb *LoadBalancer) GetServer() (*Server, error) {
	lb.mu.Lock()
	defer lb.mu.Unlock()

	if len(lb.servers) == 0 {
		return nil, errors.New("no servers available")
	}

	midInx := 0
}
