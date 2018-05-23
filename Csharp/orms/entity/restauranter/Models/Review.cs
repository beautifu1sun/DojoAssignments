using System;
using System.ComponentModel.DataAnnotations;

namespace restauranter.Models{
    public class Review{
        public int ReviewId { get; set; }
        [Required]
        public string Reviewer { get; set; }
        [Required]
        public string Restaurant { get; set; }
        [Required]
        [MinLength(11)]
        public string Content { get; set; }
        [Range(1,5)]
        [Required]
        public int Rating { get; set; }
        public int UsefulCount { get; set; } = 0;
        public int NotusefulCount { get; set; } = 0;
        [Display (Name="Date Of Visit")]
        public DateTime DateOfVisit { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}