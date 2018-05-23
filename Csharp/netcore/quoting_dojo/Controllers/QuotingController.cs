using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quoting_dojo.Connectors;

namespace quoting_dojo.Controllers{
    public class QuotingController : Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View();
        }
        [HttpGet]
        [Route("/quotes")]
        public IActionResult Quotes(){
            var allQuotes = MySqlConnector.Query("SELECT * FROM quotes ORDER BY created_at DESC");
            ViewBag.allQuotes = allQuotes;
            return View();
        }
        [HttpPost]
        [Route("/quotes")]
        public IActionResult PostQuote(string name, string quote){
            MySqlConnector.Execute($"INSERT INTO quotes (name,quote,created_at,updated_at) VALUES ('{name}', '{quote}', NOW(), NOW())");
            return RedirectToAction("Quotes");
        }
    }
}