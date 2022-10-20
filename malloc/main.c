#include <stdio.h>
#include <stdlib.h>
 #include <stdint.h>
#include <assert.h>


#define u8 uint8_t
#define u16 uint16_t
#define STACK_SIZE 32
#define HEAP_SIZE STACK_SIZE * 4
#define HEADER 4

static u16 IN_USE;

typedef struct virtual_memory {
    u8 stack[STACK_SIZE];
    char **unmapped;
    u8 heap[HEAP_SIZE];

    struct {
        char **data;
        char **bss;
        char *test;
    } data_t;
} virtual_memory_t;

typedef struct entity {
    u8 *ptr;
    u16 size;
} entity_t;

entity_t LIST[40];

entity_t* new_entity(size_t size) {
    if (LIST[0].ptr == NULL && LIST[0].size == 0) {
        static virtual_memory_t vm;
        LIST[0].ptr = vm.heap;
        LIST[0].size = HEAP_SIZE;
        IN_USE++;
    }
}

void *my_malloc(size_t size) {
    // if size less than max heap size
    assert(size <= HEAP_SIZE);
    // header fro meta data
    size += HEADER;

    entity_t *e = new_entity(size);

    u8* start = e->ptr;
    u8* user_ptr = start + HEADER;

    *start = size;
    e->ptr += size;
    e->size -= size;

    return user_ptr;


}

void my_free(void *pt) {
    int *a = my_malloc(sizeof(int));
}

void test() {

}

int main(int argc, char **argv) {

    return 0;
}

