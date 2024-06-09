package mocks

import . "load-balancer/app"

type SimpleServerOverrides struct {
	Address *string
	Weight  *int
}

// GetRandomServer didn't use yet
func GetRandomServer(overrides *SimpleServerOverrides) *SimpleServer {
	testAddress := "http://localhost:8080"
	testWeight := 10
	if overrides.Address != nil {
		testAddress = *overrides.Address
	}
	if overrides.Weight != nil {
		testWeight = *overrides.Weight
	}
	server := CreateServer(testAddress, testWeight)
	return server
}
