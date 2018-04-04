using System;

namespace human{
    public class Ninja : Human{
        public Ninja(string name) : base(name){
            this.dexterity = 175;
        }
        public void Steal(object target){
            Console.WriteLine("Ninja '{0}' is performing his stealing ability.", this.name);
            base.Attack(target);
            this.health += 10;
        }
        public void GetAway(){
            Console.WriteLine("Ninja '{0}' gets away.", this.name);
            this.health -= 15;
        }
    }
}