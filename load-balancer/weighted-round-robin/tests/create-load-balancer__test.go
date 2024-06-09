package test

import (
	. "load-balancer/app"
	"reflect"
	"testing"
)

func TestCreateLoadBalancer(t *testing.T) {

	port := "8080"
	server1 := CreateServer("http://localhost:8000", 10)
	server2 := CreateServer("http://localhost:8001", 2)
	server3 := CreateServer("http://localhost:8002", 8)

	servers := []Server{server1, server2, server3}
	lb := CreateLoadBalancer(port, servers)

	if lb.Port != port {
		t.Errorf("Expected port to be %s but got %s", port, lb.Port)
	}

	if lb.RoundRubinCount != 0 {
		t.Errorf("Expected roundRobin to be0 but got %d", lb.RoundRubinCount)
	}

	if !reflect.DeepEqual(lb.Servers, servers) {
		t.Errorf("Expected servers to be %v, got %v", servers, lb.Servers)
	}

}
