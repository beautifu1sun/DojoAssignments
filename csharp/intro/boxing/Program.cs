using System;
using System.Collections.Generic;

namespace boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> emptyList = new List<object>();
            emptyList.Add(7); //not empty anymore ;)
            emptyList.Add(28);
            emptyList.Add(-1);
            emptyList.Add(true);
            emptyList.Add("chair");

            var sum = 0;
            foreach (object each in emptyList){
                Console.WriteLine(each);
                if (each is int){
                    sum += (int)each;
                }
            }
            if (sum!=0){
                Console.WriteLine("Sum is {0}", sum);
            }
        }
    }
}
