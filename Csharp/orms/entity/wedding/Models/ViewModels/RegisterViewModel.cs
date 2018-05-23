using System.ComponentModel.DataAnnotations;
using wedding.Models.CustomValidations;

namespace wedding.Models{
    public class RegisterViewModel{
        [Required]
        [Display (Name="First Name")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage="Only letters are allowed.")]
        public string FirstName { get; set; }
        [Required]
        [Display (Name="Last Name")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage="Only letters are allowed.")]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        [UniqueUser]
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