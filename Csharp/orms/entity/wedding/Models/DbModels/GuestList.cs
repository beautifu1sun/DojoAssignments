using System.ComponentModel.DataAnnotations.Schema;

namespace wedding.Models{
    public class GuestList : BaseEntity{
        public int GuestListId { get; set; }
        [ForeignKey("User")]
        public int GuestId { get; set; }
        public User Guest { get; set; }
        [ForeignKey("Wedding")]
        public int WeddingId { get; set; }
        public Wedding Wedding { get; set; }
    }
}


