package test

import (
	. "load-balancer/app"
	"testing"
)

func TestGetAvailableServer(t *testing.T) {
	servers := []Server{
		&SimpleServer{Addr: "http://localhost:8080", Weight: 3},
		&SimpleServer{Addr: "http://localhost:8081", Weight: 1},
	}

	lb := &LoadBalancer{
		Port:            "8080",
		RoundRubinCount: 0,
		Servers:         servers,
	}

	expectedOrder := []string{
		"http://localhost:8080",
		"http://localhost:8080",
		"http://localhost:8080",
		"http://localhost:8081",
	}

	for i, expectedAddress := range expectedOrder {
		server := lb.GetNextAvailableServer().(*SimpleServer)
		if server.Address() != expectedAddress {
			t.Errorf("expected address %s at iteration %d, got %s", expectedAddress, i, server.Address())
		}
	}
}

func TestGetAvailableServerWithInvalidWeights(t *testing.T) {
	servers := []Server{
		&SimpleServer{Addr: "http://localhost:8080", Weight: 0},
		&SimpleServer{Addr: "http://localhost:8081", Weight: 3},
	}

	lb := &LoadBalancer{
		Port:            "8080",
		RoundRubinCount: 0,
		Servers:         servers,
	}

	expectedOrder := []string{
		"http://localhost:8080",
		"http://localhost:8080",
		"http://localhost:8080",
	}

	for i, expectedAddress := range expectedOrder {
		server := lb.GetNextAvailableServer().(*SimpleServer)

		if server.Weight <= 0 {
			t.Errorf("expected valid weight for server %s, got %d", server.Address(), server.Weight)
		}

		if server.Address() == expectedAddress {
			t.Errorf("expected address %s at iteration %d, got %s", expectedAddress, i, server.Address())
		}
	}
}
