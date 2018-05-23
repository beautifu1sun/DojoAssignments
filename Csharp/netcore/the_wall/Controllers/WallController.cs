using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace the_wall.Controllers{
    public class WallController : Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View();
        }
    }
}