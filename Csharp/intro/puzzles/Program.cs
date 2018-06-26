using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        public static int[] RandomArray(Random rand){
            int [] arr = new int[10];
            int sum = 0;
            for (int i = 0; i < arr.Length; i++){
                arr[i]=rand.Next(5,25);
                sum += arr[i];
            }
            int max = arr[0];
            int min = arr[0];
            foreach (int each in arr){
                if (each<min){
                    min=each;
                }
                if (each>max){
                    max=each;
                }
            }
            Console.WriteLine("Min: {0}", min);
            Console.WriteLine("Max: {0}", max);
            Console.WriteLine("Sum: {0}", sum);
            return arr;
        }
        public static string TossCoin(Random rand){
            Console.WriteLine("Tossing a Coin!");
            if (rand.Next()%2==0){
                Console.WriteLine("Heads");
                return "Heads";
            }
            else{
                Console.WriteLine("Tails");
                return "Tails";
            }
        }
        public static double TossMultipleCoins(int num, Random rand){
            double tailsCount = 0;
            double headsCount = 0;
            for (int i = 0; i < num; i++){
                string flip = TossCoin(rand);
                if (flip=="Tails"){
                    tailsCount++;
                }
                else if (flip=="Heads"){
                    headsCount++;
                }
            }
            return headsCount/tailsCount;
        }
        public static string[] Names(Random rand){
            string [] arr = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            for (int i = 0; i < arr.Length; i++){
                string tmp = arr[i];
                int randInd = rand.Next(arr.Length);
                arr[i] = arr[randInd];
                arr[randInd] = tmp;
            }
            List<string> result = new List<string>();
            foreach (string name in arr){
                if (name.Length>5){
                    result.Add(name);
                }
            }
            return result.ToArray();
        }
        public static void Main(string[] args)
        {
            Random rand = new Random();

            int[] randArr = RandomArray(rand); 
            string res = TossCoin(rand);
            Console.WriteLine("Heads:Tails ratio - {0}", TossMultipleCoins(5, rand));
            string[] names = Names(rand);
            foreach (string name in names){
                Console.WriteLine(name);
            }
        }
    }
}
