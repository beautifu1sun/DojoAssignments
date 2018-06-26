using System;

namespace human{
    public class Samurai : Human{
        public static int count { get; set; }
        public Samurai(string name) : base(name){
            this.health = 200;
            Samurai.count ++;
        }
        public void DeathBlow(object target){
            Human enemy = target as Human;
            if(enemy == null)
            {
                Console.WriteLine("Failed Attack");
            }
            else
            {
                Console.Write("Samurai '{0}' is performing deathblow! ", this.name);
                if (enemy.health<50){
                    enemy.health = 0;
                    Console.WriteLine("'{0}' has been killed...", enemy.name);
                }
                else{
                    Console.WriteLine("Unsuccessfully...");
                }
            }
        }
        public void Meditate(){
            Console.WriteLine("Samurai '{0}' is meditating.", this.name);
            this.health = 200;
        }
        public static void HowMany(){
            Console.WriteLine("{0} samurai objects have been created.", Samurai.count);
        }
    }
}