using System;
using System.Collections.Generic;

namespace activities.Models{
    public class User : BaseEntity{
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Activity> CreatedActivities { get; set; }
        public List<GuestList> AttendedActivities { get; set; }
        public User(){
            CreatedActivities = new List<Activity>();
            AttendedActivities = new List<GuestList>();
        }
    }
}