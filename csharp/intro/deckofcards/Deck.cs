using System;
using System.Collections.Generic;

namespace deckofcards{
    public class Deck{
        public List<Card> cards { get; set; } = new List<Card>();
        public Deck(){
            this.Reset();
        }
        public void Reset(){
            //init the deck - 52 cards
            this.cards.Clear();
            string[] suits = {"Clubs", "Spades", "Hearts", "Diamonds"};
            foreach (string suit in suits){ // for each suit
                for (int i = 1 ; i <= 13; i++){
                    if (i == 1){
                        this.cards.Add(new Card("Ace", 11, suit));
                    }
                    else if (i == 11){
                        this.cards.Add(new Card("Jack", 10, suit));
                    }
                    else if (i == 12){
                        this.cards.Add(new Card("Queen", 10, suit));
                    }
                    else if (i == 13){
                        this.cards.Add(new Card("King", 10, suit));
                    }
                    else{
                        this.cards.Add(new Card(i.ToString(), i, suit));
                    }
                }
            }
        }
        public Card Deal(){
            Card gotCard = this.cards[cards.Count-1];
            this.cards.RemoveAt(cards.Count-1);
            return gotCard;
        }
        public void Shuffle(){
            Random rand = new Random();
            int numOfUnshuffledCards = this.cards.Count;
            int randIndex;
            // double shuffle
            for (int i = this.cards.Count-1; i > 0; i--){
                randIndex = rand.Next(i);
                Card tmp = this.cards[i];
                this.cards[i] = this.cards[randIndex];
                this.cards[randIndex] = tmp;
            }
            for (int i = 0; i < this.cards.Count; i++){
                randIndex = rand.Next(i+1,this.cards.Count);
                Card tmp = this.cards[i];
                this.cards[i] = this.cards[randIndex];
                this.cards[randIndex] = tmp;
            }
        }
    }
}