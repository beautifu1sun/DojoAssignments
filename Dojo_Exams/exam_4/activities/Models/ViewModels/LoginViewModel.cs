using System.ComponentModel.DataAnnotations;

namespace activities.Models{
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