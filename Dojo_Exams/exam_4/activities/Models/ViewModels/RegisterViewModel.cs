using System.ComponentModel.DataAnnotations;
using activities.Models.CustomValidations;

namespace activities.Models{
    public class RegisterViewModel{
        [Required]
        [Display (Name="First Name")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage="Non-numeric characters only.")]
        public string FirstName { get; set; }
        [Required]
        [Display (Name="Last Name")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage="Non-numeric characters only.")]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        [UniqueUser]
        public string Email { get; set; }
        [Required]
        [MinLength(8, ErrorMessage="Minimum length of 8 characters.")]
        [RegularExpression(@"^(?=.*\d)(?=.*[a-zA-Z])(?=.*[._^%$#!~@,-]).{3,}$", ErrorMessage="Must contain at least 1 number, 1 letter, and a special character")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Compare("Password", ErrorMessage = "Password and confirmation must match.")]
        [DataType(DataType.Password)]
        [Display (Name="Confirm Password")]
        public string PasswordConfirmation { get; set; }
    }
}