#include <stdio.h>


void selectionSort (int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
      int minIndex = i;

      for (int j = i + 1; j < size; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
      }

      int temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
}

void printArray (int arr[], int size) {
   for (int i = 0; i < size - 1; i++) {
        printf("%d\n", arr[i]);
   }
}

int main() {
    int arr[] = {23, 94, 12, 48, 85, 37};
    int size = sizeof(arr) / sizeof(arr[0]);

    printf("Original array:\n");
    printArray(arr, size);

    selectionSort(arr, size);

    printf("Sorted array:\n");
    printArray(arr, size);
}