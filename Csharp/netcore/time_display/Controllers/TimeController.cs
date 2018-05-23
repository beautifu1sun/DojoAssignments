using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace time_display.Controllers{
    public class TimeController : Controller{
        [HttpGetAttribute]
        [HttpGet]
        [Route ("")]
        public IActionResult Index(){
            return View();
        }
    }
}