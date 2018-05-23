using System.ComponentModel.DataAnnotations;
using bank.Models.CustomValidations;

namespace bank.Models{
    public class RegisterViewModel{
        [Required]
        [MinLength(2)]
        [Display (Name="First Name")]
        [RegularExpression(@"^[a-zA-Z]+$")]
        public string FirstName { get; set; }
        [Required]
        [MinLength(2)]
        [Display (Name="Last Name")]
        [RegularExpression(@"^[a-zA-Z]+$")]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        [UniqueUser]
        [Display (Name="Email Address")]
        public string Email { get; set; }
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Compare("Password", ErrorMessage = "Password and confirmation must match.")]
        [DataType(DataType.Password)]
        [Display (Name="Confirm Password")]
        public string PasswordConfirmation { get; set; }
    }
}