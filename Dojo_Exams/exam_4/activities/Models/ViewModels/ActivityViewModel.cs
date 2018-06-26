using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace activities.Models{
    public class ActivityViewModel : BaseEntity {
        [Required]
        [MinLength(2, ErrorMessage="Minimum length of 2 characters.")]
        public string Title { get; set; }
        [Required]
        [RegularExpression(@"^((0[1-9])|(1[0-2])){1}:{1}([0-5][0-9]){1}((pm)|(am)){1}$", ErrorMessage="Please, use the right format 06:00am")]
        public string Time { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        [RegularExpression(@"\d+", ErrorMessage="Digits only")]
        public string Duration { get; set; }
        public string TimeLength { get; set; }
        [Required]
        [MinLength(10)]
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}