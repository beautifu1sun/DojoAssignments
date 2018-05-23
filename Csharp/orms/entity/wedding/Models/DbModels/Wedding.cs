using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wedding.Models{
    public class Wedding : BaseEntity {
        public int WeddingId { get; set; }
        [Required]
        [Display (Name = "Wedder One")]
        public string WedderOne { get; set; }
        [Required]
        [Display (Name = "Wedder Two")]
        public string WedderTwo { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        [Display (Name = "Wedding Address")]
        public string WeddingAddress { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        [ForeignKey("Creator")]
        public int CreatorId { get; set; }
        public User Creator { get; set; }
        public List<GuestList> Guests { get; set; }
        public Wedding()
        {
            Guests = new List<GuestList>();
        }

    }
}