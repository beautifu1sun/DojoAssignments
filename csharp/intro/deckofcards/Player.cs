using System.Collections.Generic;

namespace deckofcards{
    public class Player{
        public string name { get; set; }
        public List<Card> hand { get; set; } = new List<Card>();
        public Player(string name){
            this.name = name;
        }
        public Card Draw(Deck deck){
            Card newCard = deck.Deal();
            this.hand.Add(newCard);
            return newCard;
        }
        public Card Discard(int ind){
            if ((ind>0)&&(ind<this.hand.Count)){
                Card disCard = this.hand[ind];
                this.hand.RemoveAt(ind);
                return disCard;
            }
            else return null;
        }
    }
}