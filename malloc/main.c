#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <assert.h>


#define u8 uint8_t
#define u16 uint16_t
#define STACK_SIZE 32
#define HEAP_SIZE STACK_SIZE * 4
#define HEADER 4

typedef struct virtual_memory {
    u8 stack[STACK_SIZE];
    char** unmapped;
    u8 heap[HEAP_SIZE];

    struct  {
        char** data;
        char** bss;
        char* test;
    }data_t;
}virtual_memory_t;

void* my_malloc(size_t size) {
    assert(size <= HEAP_SIZE);
}

void my_free(void* pt) {
    int* a = my_malloc(sizeof(int));
}
void test() {

}

int main(int argc, char **argv) {

    return 0;
}

