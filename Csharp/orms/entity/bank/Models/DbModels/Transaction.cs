using System; 
using System.ComponentModel.DataAnnotations;

namespace bank.Models{
    public class Transaction : BaseEntity{
        public int TransactionId { get; set; }
        public int Amount { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public int UserId { get; set; }
        public User user { get; set; }
    }
}