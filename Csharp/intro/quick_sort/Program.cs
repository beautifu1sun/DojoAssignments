using System;

namespace quick_sort
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[] unsorted_arr = { 2, 6, 5, 1, 9, 3, 7, 4, 8 };
            QuickSort(unsorted_arr, 0, unsorted_arr.Length-1);
            foreach (int num in unsorted_arr){
                Console.Write(num + " ");
            }
        }

        public static void QuickSort(int[] arr, int lowIndex, int highIndex){
            if (lowIndex < highIndex){
                int pi = QuickSortPartition(arr, lowIndex, highIndex);

                QuickSort(arr, lowIndex, pi);
                QuickSort(arr, pi+1, highIndex);
            }
            else return;
        }

        public static int QuickSortPartition(int[] arr, int lowIndex, int highIndex){
            int pivot = arr[highIndex];
            int wall = lowIndex-1;
            for (int current = lowIndex; current < highIndex; current++){
                if (arr[current] <= pivot){
                    wall++;
                    int tmp = arr[wall];
                    arr[wall] = arr[current];
                    arr[current] = tmp;
                }
            }
            arr[highIndex] = arr[++wall];
            arr[wall] = pivot;
            return wall;
        }
    }
}
