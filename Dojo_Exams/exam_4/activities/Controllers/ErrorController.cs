using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace activities.Controllers{
    public class ErrorController : Controller
    {
        public IActionResult Default()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
    }
}