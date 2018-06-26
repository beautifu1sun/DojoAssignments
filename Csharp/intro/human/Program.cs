using System;

namespace human
{
    class Program
    {
        static void Main(string[] args)
        {
            Wizard wiz = new Wizard("Dima");
            Samurai sam1 = new Samurai("Eric");
            Samurai sam2 = new Samurai("Quon");
            Ninja ninja = new Ninja("Craig");
            Samurai.HowMany();
            wiz.Heal();
            wiz.Fireball(sam1);
            wiz.Attack(sam2);
            sam1.Meditate();
            sam2.Meditate();
            sam2.DeathBlow(wiz);
            ninja.Steal(sam2);
            sam2.Attack(ninja);
            wiz.Fireball(ninja);
            ninja.GetAway();
            sam1.DeathBlow(ninja);
        }
    }
}
