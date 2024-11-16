#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TABLE_SIZE 10

typedef struct Entry {
    char *key;
    int value;
    struct Entry *next;
} Entry;

typedef struct HashTable {
    Entry *buckets[TABLE_SIZE];
} HashTable;

unsigned int hash(const char *key) {
    unsigned long hash = 5381;
    int c;

    while ((c = *key++)) {
        hash = ((hash << 5) + hash) + c;
    }

    return hash % TABLE_SIZE;
}

HashTable* createTable() {
    HashTable *table = malloc(sizeof(HashTable));
    for (int i = 0; i < TABLE_SIZE; i++) {
        table->buckets[i] = NULL;
    }
    return table;
}

Entry* createEntry(const char *key, int value) {
    Entry *newEntry = malloc(sizeof(Entry));
    newEntry->key = strdup(key);
    newEntry->value = value;
    newEntry->next = NULL;
    return newEntry;
}

void insert(HashTable *table, const char *key, int value) {
    unsigned int index = hash(key);
    Entry *newEntry = createEntry(key, value);

    if (table->buckets[index] == NULL) {
        table->buckets[index] = newEntry;
    } else {
        Entry *current = table->buckets[index];
        while (current->next != NULL) {
            if (strcmp(current->key, key) == 0) {
                current->value = value;
                free(newEntry->key);
                free(newEntry);
                return;
            }
            current = current->next;
        }
        if (strcmp(current->key, key) == 0) {
            current->value = value;
            free(newEntry->key);
            free(newEntry);
        } else {
            current->next = newEntry;
        }
    }
}

int search(HashTable *table, const char *key) {
    unsigned int index = hash(key);
    Entry *current = table->buckets[index];

    while (current != NULL) {
        if (strcmp(current->key, key) == 0) {
            return current->value;
        }
        current = current->next;
    }
    return -1;

void deleteEntry(HashTable *table, const char *key) {
    unsigned int index = hash(key);
    Entry *current = table->buckets[index];
    Entry *prev = NULL;

    while (current != NULL) {
        if (strcmp(current->key, key) == 0) {
            if (prev == NULL) {
                table->buckets[index] = current->next;
            } else {
                prev->next = current->next;
            }
            free(current->key);
            free(current);
            return;
        }
        prev = current;
        current = current->next;
    }
}

void freeTable(HashTable *table) {
    for (int i = 0; i < TABLE_SIZE; i++) {
        Entry *current = table->buckets[i];
        while (current != NULL) {
            Entry *temp = current;
            current = current->next;
            free(temp->key);
            free(temp);
        }
    }
    free(table);
}

int main() {
    HashTable *table = createTable();

    insert(table, "apple", 1);
    insert(table, "banana", 2);
    insert(table, "orange", 3);
    printf("Value for 'apple': %d\n", search(table, "apple"));
    printf("Value for 'banana': %d\n", search(table, "banana"));

    deleteEntry(table, "apple");
    printf("Value for 'apple' after deletion: %d\n", search(table, "apple"));

    freeTable(table);
    return 0;
}
