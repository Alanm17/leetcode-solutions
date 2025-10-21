#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Partition function
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // pivot element (last one)
    int i = low - 1;       // place for smaller elements

    printf("\nPartitioning from %d to %d with pivot = %d\n", low, high, pivot);

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
            printf("  Swapped %d and %d → ", arr[i], arr[j]);
            for (int k = low; k <= high; k++) printf("%d ", arr[k]);
            printf("\n");
        }
    }

    // Place pivot in the correct position
    swap(&arr[i + 1], &arr[high]);
    printf("  Moved pivot %d to position %d → ", pivot, i + 1);
    for (int k = low; k <= high; k++) printf("%d ", arr[k]);
    printf("\n");

    return i + 1; // new pivot index
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        printf("\nQuickSort called on range [%d, %d]\n", low, high);

        int pi = partition(arr, low, high);

        printf("Pivot %d is now fixed at position %d\n", arr[pi], pi);

        quickSort(arr, low, pi - 1);   // left side
        quickSort(arr, pi + 1, high);  // right side
    }
}

int main() {
    int arr[] = {4, 2, 5, 1, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");

    quickSort(arr, 0, n - 1);

    printf("\nSorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");

    return 0;
}
