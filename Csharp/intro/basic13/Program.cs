using System;

namespace basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            // Print 1-255
            // for (int i = 1; i <= 255; i++){
            //     Console.WriteLine(i);
            // }
            // Print odd numbers between 1-255
            // for (int i = 1; i <= 255; i+=2){
            //     Console.WriteLine(i);
            // }
            // Print Sum
            // int sum = 0;
            // for (int i = 0; i <= 255; i++){
            //     sum += i;
            //     Console.WriteLine("New Number: {0} Sum: {1}", i, sum);
            // } 
            // Iterating through an Array
            // int [] arr = {1,3,5,7,9,13};
            // foreach (int each in arr){
            //     Console.WriteLine(each);
            // }
            // Find Max
            // int [] arr = {1,-3,5,7,-9,0,13};
            // var max = arr[0];
            // foreach (int each in arr){
            //     if (each>max){
            //         max=each;
            //     }
            // }
            // Console.WriteLine(max);
            // Get Average
            // int [] arr = {1,-3,5,7,-9,0,12};
            // double sum = 0;
            // foreach (int each in arr){
            //     sum+=each;
            // }
            // Console.WriteLine(sum/arr.Length);
            // Array with Odd Numbers
            // int [] y = new int[128];
            // for (int i = 1; i <= 255; i+=2){
            //     y[(i-1)/2]=i;
            // }
            // foreach (int each in y){
            //     Console.Write(each);
            // }
            // Greater than Y
            // int [] sample = {1, 3, 5, 7};
            // Console.WriteLine(GreaterThanY(sample, 3));
            // Square the Values
            // int [] test = {1,5,10,-2};
            // for (int i = 0; i < test.Length; i++){
            //     test[i] = test[i]*test[i];
            // }
            // Eliminate Negative Numbers
            // int[] test = {1, 5, 10, -2};
            // for (int i = 0; i < test.Length; i++){
            //     if (test[i]<0){
            //         test[i] = 0;
            //     }
            // }
            // Min, Max, and Average
            // int[] test = {1, 5, 10, -2};
            // MinMaxAverage(test);
            // Shifting the values in an array
            // int[] test = {1, 5, 10, 7, -2};
            // for (int i = 0; i < test.Length-1; i++){
            //     test[i]=test[i+1];
            // }
            // test[test.Length-1]=0;
            // Number to String
            //
            object[] test = {-1,-3,2};
            for (int i = 0; i< test.Length; i++){
                if (test[i] is int){
                    if ((int)test[i]<0){
                    test[i]="Dojo";
                    }   
                }
            }
            foreach(object each in test){
                Console.WriteLine(each);
            }
        }

        public static int GreaterThanY (int[] arr, int y){
            int count = 0;
            foreach (int each in arr){
                if (each > y){
                    count++;
                }
            }
                return count;
            }
        public static void MinMaxAverage(int[] arr){
            double sum = 0;
            int max = arr[0];
            int min = arr[0];
            foreach (int each in arr){
                if (each<min){
                    min = each;
                }
                if (each>max){
                    max = each;
                }
                sum += each;
            }
            Console.WriteLine("Max: {0}", max);
            Console.WriteLine("Min: {0}", min);
            Console.WriteLine("Average: {0}", sum/arr.Length);
        }
    }
}
