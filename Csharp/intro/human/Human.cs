using System;

namespace human{
    public class Human{
        public string name { get; set; }
        public int strength { get; set; }
        public int intelligence { get; set; }
        public int dexterity { get; set; }
        public int health { get; set; }
        public Human(string name){
            this.name = name;
            this.strength = 3;
            this.intelligence = 3;
            this.dexterity = 3;
            this.health = 100;
        }
        public Human(string name, int strength, int intelligence, int dexterity, int healt){
            this.name = name;
            this.strength = strength;
            this.intelligence = intelligence;
            this.dexterity = dexterity;
            this.health = healt;
        }
        public void Attack(object target){
            Human enemy = target as Human;
            if(enemy == null)
            {
                Console.WriteLine("Failed Attack");
            }
            else
            {
                enemy.health -= this.strength * 5;
            }
        }
    }
}