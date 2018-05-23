using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace dojo_survey.Controllers{
    public class SurveyController : Controller {
        [HttpGet]
        [Route ("")]
        public IActionResult Index(){
            return View();
        }
        [HttpPost]
        [Route ("submit")]
        public IActionResult Submit(string name, string location, string language, string comment){
            TempData["name"] = name;
            TempData["language"] = language;
            TempData["location"] = location;
            TempData["comment"] = comment;
            return RedirectToAction("Result");
        }
        [HttpGet]
        [Route ("result")]
        public IActionResult Result(){
            ViewBag.result = TempData;
            return View();
        }
    }
}