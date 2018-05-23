using System;
using System.Collections.Generic;

namespace wedding.Models{
    public class User : BaseEntity{
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Wedding> CreatedWeddings { get; set; }
        public List<GuestList> AttendedWeddings { get; set; }
        public User(){
            CreatedWeddings = new List<Wedding>();
            AttendedWeddings = new List<GuestList>();
        }
    }
}