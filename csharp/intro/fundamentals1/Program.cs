using System;

namespace fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            // --- 1 ---
            // for (int i = 1; i <= 255; i++){
            //     Console.WriteLine(i);
            // }
            // --- 2 ---
            // for (int i = 1; i <= 100; i++){
            //     if ((i%3==0||i%5==0)&&(!(i%3==0&&i%5==0))){
            //         Console.WriteLine(i);
            //     }
            // }
            // --- 3 --- w/ modulus
            // for (int i = 1; i <= 100; i++){
            //     if (i%3==0&&i%5==0){
            //         Console.WriteLine("FizzBuzz");
            //     } 
            //     else if (i%3==0){
            //         Console.WriteLine("Fizz");
            //     }
            //     else if (i%5==0){
            //         Console.WriteLine("Buzz");
            //     }
            // }
            // --- 4 --- w/o modulus
            // for (int i = 1; i <= 100; i++){
            //     int num3 = i;
            //     int num5 = i;
            //     while (num3 > 0){
            //         num3 -= 3; 
            //     }
            //     while (num5 > 0){
            //         num5 -= 5; 
            //     }
            //     if (num3==0&&num5==0){
            //         Console.WriteLine("FizzBuzz");
            //     } 
            //     else if (num3==0){
            //         Console.WriteLine("Fizz");
            //     }
            //     else if (num5==0){
            //         Console.WriteLine("Buzz");
            //     }
            // }
            // --- 5 ---
            // Random rand = new Random();
            // for (int i = 0; i < 10; i++){
            //     int randNum = rand.Next();
            //     if (randNum%3==0&&randNum%5==0){
            //         Console.WriteLine("FizzBuzz");
            //     } 
            //     else if (randNum%3==0){
            //         Console.WriteLine("Fizz");
            //     }
            //     else if (randNum%5==0){
            //         Console.WriteLine("Buzz");
            //     }
            // }
        }
    }
}
