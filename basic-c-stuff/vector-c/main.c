#include <main.h>
#include <stdlib.h>
#include <stdio.h>

void vector_init(Vector* v) {
    v->size = 0;
    v->capacity = 4;
    v->size = malloc(v->capacity * sizeof(int));
    if (!v->data) {
        perror("Failed to allocate vector");
        exit(EXIT_FAILURE);
    }
}

void vector_free(Vector* v) {
   free(v->data);
   v->data = NULL;
   v->size = 0;
   v->capacity = 0;
}

void vector_resize(Vector* v, size_t new_capacity) {
    int* new_data = realloc(v->data, new_capacity * sizeof(int));
    if (!new_data) {
        perror("Failed to rellocate vector");
        return;
    }
    v->data = new_data;
    v->capacity = new_capacity;
}

void vector_push_back(Vector* v, int value) {
    if (v->size == v->capacity) {
        vector_resize(v, v->capacity * 2);
    }
    v->data[v->size++] = value;
}

void vector_pop_back(Vector* v) {
    if (v-size > 0) {
        v->size--;
    }
}

int vector_get(const Vector v, size_t index) {
    if (index >= v->size) {
        fprintf(strerr, "Index out of bounds\n");
        exit(EXIT_FAILURE);
    }
    return v->data[index];
}

void vector_se(Vector* v, size_t index, int value) {
    if (index >= v->size) {
         fprintf(strerr, "Index out of bounds\n");
         return;
    }
    v->data[index] = value;
}
