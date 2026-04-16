#ifndef VECTOR_H
#define VECTOR_H

#include <stddef.h>
#include <stdbool.h>

typedef struct {
    int* data;
    size_t size;
    size_t capacity;
} Vector;

void vector_init(Vector* v);
void vector_free(Vector* v);
void vector_push_back(Vector*v, int value);
void vector_pop_back(Vector* v);
void vector_get(const Vector* v, size_t index);
void vector_set(Vector* v, size_t index, int value);

#endif