using System.ComponentModel.DataAnnotations;

namespace wedding.Models{
    public class LoginViewModel{
        [Required]
        [EmailAddress]
        [Display (Name="Email")]
        public string EmailLog { get; set; }
        [Required]
        [Display (Name="Password")]
        [DataType(DataType.Password)]
        public string PasswordLog { get; set; }
    }
}