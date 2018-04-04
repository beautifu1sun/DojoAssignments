namespace deckofcards{
    public class Card{
        public string stringVal { get; set; }
        public string suit { get; set; }
        public int val { get; set; }
        public Card(string name, int val, string suit){
            this.stringVal = name;
            this.val = val;
            this.suit = suit;
        }
    }
}