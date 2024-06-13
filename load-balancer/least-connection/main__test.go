package main

import (
	"errors"
	"net/url"
	"sync"
	"testing"
)

func TestCreateLeastConnection_NoServers(t *testing.T) {
	_, err := CreateLeastConnection([]*url.URL{})
	if !errors.Is(err, ErrServersNotExist) {
		t.Fatalf("expected error: %v, got: %v", ErrServersNotExist, err)
	}
}

func TestCreateLeastConnection_WithServers(t *testing.T) {
	serverURLs := []*url.URL{
		{Scheme: "http", Host: "server1"},
		{Scheme: "http", Host: "server2"},
		{Scheme: "http", Host: "server3"},
	}

	lc, err := CreateLeastConnection(serverURLs)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if lc == nil {
		t.Fatalf("expected non-nil LeastConnection")
	}
}

func TestLeastConnection_Next(t *testing.T) {
	serverURLs := []*url.URL{
		{Scheme: "http", Host: "server1"},
		{Scheme: "http", Host: "server2"},
		{Scheme: "http", Host: "server3"},
	}

	lc, err := CreateLeastConnection(serverURLs)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	leastConn := lc.(*leastConnections)

	url1, done1 := leastConn.Next()

	if url1.Host != "server1" {
		t.Fatalf("expected server1, got: %s", url1.Host)
	}

	url2, done2 := leastConn.Next()
	if url2.Host != "server2" {
		t.Fatalf("expected server2, got: %s", url2.Host)
	}

	url3, done3 := leastConn.Next()
	if url3.Host != "server3" {
		t.Fatalf("expected server3, got: %s", url3.Host)
	}

	done1()
	done2()
	done3()

	if leastConn.connections[0].connectionsCount != 0 {
		t.Fatalf("expected 0 connection for server1, got: %d", leastConn.connections[0].connectionsCount)
	}
	if leastConn.connections[1].connectionsCount != 0 {
		t.Fatalf("expected 0 connection for server2, got: %d", leastConn.connections[1].connectionsCount)
	}
	if leastConn.connections[2].connectionsCount != 0 {
		t.Fatalf("expected 0 connection for server3, got: %d", leastConn.connections[2].connectionsCount)
	}
}

func TestLeastConnection_Concurrent(t *testing.T) {
	serverURLs := []*url.URL{
		{Scheme: "http", Host: "server1"},
		{Scheme: "http", Host: "server2"},
		{Scheme: "http", Host: "server3"},
	}

	lc, err := CreateLeastConnection(serverURLs)

	if err != nil {
		t.Fatalf("unexpected error %v", err)
	}

	leastConn := lc.(*leastConnections)

	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_, done := leastConn.Next()
			done()
		}()
	}

	wg.Wait()

	for _, conn := range leastConn.connections {
		if conn.connectionsCount != 0 {
			t.Fatalf("expected 0 connections, got: %d", conn.connectionsCount)
		}
	}

}
