using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using log_reg.Models;
using log_reg.Connectors;

namespace log_reg.Controllers{
    public class LogregController : Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View();
        }
        [HttpPost]
        [Route("register")]
        public IActionResult Register(User user){
            if(ModelState.IsValid){
                MySqlConnector.Execute($"INSERT INTO logregusers (first_name, last_name, email, password, created_at, updated_at) VALUES ('{user.firstName}', '{user.lastName}', '{user.email}', '{user.password}', NOW(), NOW())");
                return View("success");
            }
            return View("index");
        }
        [HttpPost]
        [Route("login")]
        public IActionResult login(string emailLog, string passwordLog){
            var user = MySqlConnector.Query($"SELECT * FROM consoledb.logregusers WHERE email='{emailLog}' AND password='{passwordLog}'");
            if (user.Count == 1){
                return View("success");
            }
            else{ 
                ViewBag.error = "User doesn't exist or password is incorrect.";
                return View("index");
            }
        }
    }
}