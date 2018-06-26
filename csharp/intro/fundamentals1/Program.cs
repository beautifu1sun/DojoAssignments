using System;

namespace fundamentals1
{
    class Program
    {}
        public static void Main(string[] args)
        {
            // --- 1 ---
            // Create a Loop that prints all values from 1-255
            // for (int i = 1; i <= 255; i++){
            //     Console.WriteLine(i);
            // }
            // --- 2 ---
            // Create a new loop that prints all values from 1-100 that are divisible by 3 or 5, but not both
            // for (int i = 3; i <= 100; i++){
            //     if ((i%3==0||i%5==0)&&(!(i%3==0&&i%5==0))){
            //         Console.WriteLine(i);
            //     }
            // }
            // --- 3 --- w/ modulus
            // Modify the previous loop to print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for numbers that are multiples of both 3 and 5
            // for (int i = 3; i <= 100; i++){
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
            // Modify the previous loop to print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for numbers that are multiples of both 3 and 5
            // for (int i = 3; i <= 100; i++){
            //     if ((i/3*3)==i&&(i/5*5)==i){
            //         Console.WriteLine("FizzBuzz");
            //     }    
            //     else if ((i/3*3)==i){
            //         Console.WriteLine("Fizz");
            //     }
            //     else if ((i/5*5)==i){
            //         Console.WriteLine("Buzz");
            //     }
            // }
            // --- 5 ----
            // Generate 10 random values and output the respective word, in relation to step three, for the generated values
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
