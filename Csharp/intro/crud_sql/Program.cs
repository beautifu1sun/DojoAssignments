using System;
using System.Collections.Generic;
using DbConnection;

namespace crud_sql
{
    class Program
    {
        public static void Read(){
            string query = "SELECT users.first_name, users.last_name, users.favorite_number FROM users";
            List<Dictionary<string,object>> list = DbConnector.Query(query);
            foreach (var each in list){
                foreach(var innerEach in each){
                    Console.Write("{0}: {1}; ", innerEach.Key, innerEach.Value);
                }
                Console.WriteLine();
            }
        }
        public static void Create(){
            Console.Write("Enter the first name: ");
            string firstName = Console.ReadLine();
            Console.Write("Enter the last name: ");
            string lastName = Console.ReadLine();
            Console.Write("Enter the favorite number: ");
            string favNum = Console.ReadLine();
            string query = $"INSERT INTO users (first_name, last_name, favorite_number, created_at, updated_at) VALUES ('{firstName}', '{lastName}', {favNum}, NOW(), NOW())";
            DbConnector.Execute(query);
        }
        public static void Update(){
            Console.Write("Please, enter id number of the user you would like to update: ");
            string id = Console.ReadLine();
            Console.Write("Enter the updated first name: ");
            string firstName = Console.ReadLine();
            Console.Write("Enter the updated last name: ");
            string lastName = Console.ReadLine();
            Console.Write("Enter the updated favorite number: ");
            string favNum = Console.ReadLine();
            string query = $"UPDATE users SET first_name='{firstName}', last_name='{lastName}', favorite_number={favNum}, updated_at=NOW() WHERE id={id}";
            DbConnector.Execute(query);
        }
        public static void Delete(){
            Console.Write("Please, enter id number of the user you would like to delete: ");
            string id = Console.ReadLine();
            string query = $"DELETE FROM users WHERE id={id}";
            DbConnector.Execute(query);
        }
        static void Main(string[] args)
        {
            Delete();
            Read();
        }
    }
}
