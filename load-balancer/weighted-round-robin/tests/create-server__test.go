package test

import (
	. "load-balancer/app"
	"net/http/httputil"
	"net/url"
	"testing"
)

func TestCreateServer(t *testing.T) {

	expectedAddress := "http://localhost8080"
	weight := 2

	server := CreateServer(expectedAddress, weight)
	if server.Address() != expectedAddress {
		t.Errorf("Expected %s but got %s", expectedAddress, server.Address())
	}

	if server.Weight != weight {
		t.Errorf("Expected %d but got %d", weight, server.Weight)
	}

	expectedUrl, _ := url.Parse(expectedAddress)
	expectedProxy := httputil.NewSingleHostReverseProxy(expectedUrl)

	if server.Proxy == nil {
		t.Errorf("Expected %v but got %v", expectedProxy, server.Proxy)
	}
}
