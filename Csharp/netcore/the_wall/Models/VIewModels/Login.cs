using System.ComponentModel.DataAnnotations;

namespace the_wall.Models {
    public class Login : BaseEntity{
        [Required]
        [EmailAddress]
        public string EmailLog{ get;set; }
        [Required]
        [DataType(DataType.Password)]
        public string PasswordLog{ get;set; }
    }
}