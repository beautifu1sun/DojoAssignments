using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace activities.Models{
    public class Activity : BaseEntity {
        public int ActivityId { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Duration { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        [ForeignKey("Creator")]
        public int CreatorId { get; set; }
        public User Creator { get; set; }
        public List<GuestList> Guests { get; set; }
        public Activity()
        {
            Guests = new List<GuestList>();
        }

    }
}