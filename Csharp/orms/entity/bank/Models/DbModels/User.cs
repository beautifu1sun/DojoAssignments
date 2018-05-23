using System;
using System.Collections.Generic;

namespace bank.Models{
    public class User : BaseEntity{
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Balance { get; set; } = 0;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Transaction> Transactions { get; set; }
 
        public User()
        {
            Transactions = new List<Transaction>();
        }
    }
}