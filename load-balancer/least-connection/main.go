package main

import (
	"errors"
	"net/url"
	"sync"
)

var ErrServersNotExist = errors.New("server dose not exist")

type LeastConnection interface {
	Next() (next *url.URL, done func())
}

type connection struct {
	url              *url.URL
	connectionsCount int
}

type leastConnections struct {
	connections []connection
	mutex       *sync.Mutex
}

func CreateLeastConnection(urls []*url.URL) (LeastConnection, error) {
	if len(urls) == 0 {
		return nil, ErrServersNotExist
	}

	connections := make([]connection, len(urls))

	for i := range connections {
		connections[i] = connection{
			url: urls[i], connectionsCount: 0,
		}
	}

	return &leastConnections{
		connections: connections,
		mutex:       new(sync.Mutex),
	}, nil
}

func (lc *leastConnections) Next() (*url.URL, func()) {
	var (
		min = -1
		idx int
	)

	lc.mutex.Lock()

	for i, conn := range lc.connections {
		if min == -1 || conn.connectionsCount < min {
			min = conn.connectionsCount
			idx = i
		}
	}

	lc.connections[idx].connectionsCount++
	lc.mutex.Unlock()

	var done bool

	return lc.connections[idx].url, func() {
		lc.mutex.Lock()
		if !done {
			lc.connections[idx].connectionsCount--
			done = true
		}
		lc.mutex.Unlock()
	}
}
