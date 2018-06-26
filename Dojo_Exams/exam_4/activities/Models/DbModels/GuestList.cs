using System.ComponentModel.DataAnnotations.Schema;

namespace activities.Models{
    public class GuestList : BaseEntity{
        public int GuestListId { get; set; }
        [ForeignKey("User")]
        public int GuestId { get; set; }
        public User Guest { get; set; }
        [ForeignKey("Activity")]
        public int ActivityId { get; set; }
        public Activity Activity { get; set; }
    }
}


