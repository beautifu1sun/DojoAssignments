using System;

namespace human{
    public class Wizard : Human {
        public Wizard(string name) : base(name){
            this.health = 50;
            this.intelligence = 25;
        }
        public void Heal(){
            Console.WriteLine("Wizard '{0}' is healing.", this.name);
            this.health += 10 * this.intelligence;
        }
        public void Fireball(object target){
            Human enemy = target as Human;
            Random rand = new Random();
            if(enemy == null)
            {
                Console.WriteLine("Failed Attack");
            }
            else
            {
                Console.WriteLine("Wizard '{0}' is throwing a fireball towards '{1}'!", this.name, enemy.name);
                enemy.health -= rand.Next(20,51);
            }
        }
    }
}