using System;
using System.Collections.Generic;

namespace collections
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr1 = new int[10];
            for (int i = 0; i < 10; i++){
                arr1[i] = i;
            }
            // foreach (int num in arr1){
            //     Console.WriteLine(num);
            // }

            string[] arr2 = { "Tim", "Martin", "Nikki", "Sara" };

            bool[] arr3 = new bool[10];
            for (int i = 0; i < 9; i+=2){
                arr3[i] = true;
                arr3[i+1] = false;
            }
            // foreach (Boolean each in arr3){
            //     Console.WriteLine(each);
            // }

            int[,] arr4 = new int[10,10];
            for (int i = 0; i < 10; i++){
                for (int j = 0; j < 10; j++){
                    arr4[i,j] = (i+1)*(j+1);
                    // Console.Write(arr4[i,j] + " ");
                }
                // Console.WriteLine();
            }
            List<string> iceCreams = new List<string>();
            iceCreams.Add("Chocolate ice cream");
            iceCreams.Add("Strawberry ice cream");
            iceCreams.Add("Spumoni");
            iceCreams.Add("Tutti frutti");
            iceCreams.Add("Tiger tail ice cream");
            // Console.WriteLine(iceCreams.Count);
            // Console.WriteLine(iceCreams[2]);
            // iceCreams.RemoveAt(2);
            // Console.WriteLine(iceCreams.Count);

            Random rand = new Random();
            Dictionary<string,string> dict = new Dictionary<string,string>();
            foreach (string name in arr2){
                dict.Add(name, "");
            }
            List<string> dictKeys = new List<string>();
            foreach (string eachKey in dict.Keys){
                dictKeys.Add(eachKey);
            }
            foreach (string eachKey in dictKeys){
                dict[eachKey] = iceCreams[rand.Next(iceCreams.Count)];
                Console.WriteLine(eachKey + "|" + dict[eachKey]);
            }
        }
    }
}
