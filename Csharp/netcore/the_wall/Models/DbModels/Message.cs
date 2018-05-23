using System;

namespace the_wall.Models{
    public class Message : BaseEntity{
        public int Id{ get;set; }
        public int UserId{ get;set; }
        public string Content{ get;set; }
        public DateTime CreatedAt{ get;set; }
        public DateTime UpdatedAt{ get;set; }
    }
}