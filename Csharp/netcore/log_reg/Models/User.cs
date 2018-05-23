using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace log_reg.Models{
    public class User : BaseEntity{
        [Required]
        [MinLength(2)]
        [RegularExpression("^([a-zA-Z]+)$", ErrorMessage = "Letters only")]
        [Display(Name = "First Name")]
        public string firstName { get;set; }
        [Required]
        [MinLength(2)]
        [RegularExpression("^([a-zA-Z]+)$", ErrorMessage = "Letters only")]
        [Display(Name = "Last Name")]
        public string lastName { get;set; }
        [Required]
        [EmailAddress]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Email address")]
        public string email { get;set; }
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string password { get;set; }
        [NotMapped] // Does not effect with the database
        [Compare("password", ErrorMessage = "Passwords don't match")]
        [DataType(DataType.Password)]
        [Display(Name = "Password Confirmation")]
        public string confirmPassword { get; set; }
    }
}