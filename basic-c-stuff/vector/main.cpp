#include "main.h"

template <typename T>
Vector<T>::Vector() : size(0), capacity(1) {
    arr = new T[capacity];
}

template <typename T>
Vector<T>::Vector() {
    delete[] arr;
}

// copy type shit
template <typename T>
Vector<T>::Vector(const Vector& other) : size(other.size), capacity(other.capacity) {
    arr = new T[capacity];
    for (size_t i = 0; i < size; i++) {
        arr[i] = other.arr[i];
    }
}

template <typename T>
Vector<T>& Vector<T>::operator=(const Vector other) {
    if (this == &other) return *this; // self assignment check
    
    // without it we override old one, but old one remains in memory
    delete[] arr; // free existing memory

    size = other.size;
    capacity = other.capacity;
    arr = new T[capacity];
    for (size_t i = 0; i < size; i++) {
        arr[i] = other.arr[i];
    }

    return *this;
}

// move type shit
template <typename T>
Vector<T>::Vector(Vector&& other) noexcept
    : arr(other.arr), size(other.size), capacity(other.capacity) {
        other.arr = nullptr; // make others cry (null)
        other.size = 0;
        other.capacity = 0;
}

template <typename T>
Vector<T>& Vector<T>::operator=(Vector&& oher) noexcept {
    if (this == &other) return *this;

    delete[] arr;

    arr = other.arr;
    size = other.size;
    capacity = other.capacity;

    other.arr = nullptr;
    other.size = 0;
    other.capacity = 0;

    return *this;
}


template <typename T>
void Vector<T>::resize() {
    capacity *= 2;
    T* new_arr = new T[capacity];
    for (size_t i = 0; i < size; ++i) {
        new_arr[i] = arr[i];
    }

    delete[] arr;
    arr = new_arr;
}

template <typename T>
void Vector<T>::push_back(const T& element) {
    if (size == capacity) {
        resize();
    }
    arr[size] = element;
    ++size;
}

template<typename T>
void Vector<T>::pop_back() {
    if (size > 0) {
        --size;
    }
}

template <typename T>
&T Vector<T>::operator[](size_t index) {
    if (index >= size) {
        throw std::out_of_range("Index out of bounds");
    }
    return arr[index];
}