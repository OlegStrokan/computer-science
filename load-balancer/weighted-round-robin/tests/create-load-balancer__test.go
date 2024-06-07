package test

import (
	. "load-balancer/app"
	"testing"
)

func TestLoadBalancerTest(t *testing.T) {

	testPort := "8080"
	googleServer := CreateServer("https://google.com/", 10)
	metaServer := CreateServer("https://meta.com/", 2)

	loadBalancer := CreateLoadBalancer(testPort, []Server{googleServer, metaServer})

	if loadBalancer.Port != testPort {
		t.Errorf("Expected %s but got %s", testPort, loadBalancer.Port)
	}

	if loadBalancer.RoundRubinCount != 0 {
		t.Errorf("Expected %d but got %d", 0, loadBalancer.RoundRubinCount)
	}
}
