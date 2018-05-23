using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace random_passcode.Controllers{
    public class RandpassController : Controller {
        [HttpGet]
        [Route ("")]
        public IActionResult Index(){
            HttpContext.Session.SetInt32("counter", 0);
            @ViewBag.counter = HttpContext.Session.GetInt32("counter") ?? default(int);
            return View();
        }

        [HttpGet]
        [Route ("new")]
        public IActionResult New(){
            int currentCount = HttpContext.Session.GetInt32("counter") ?? default(int);
            HttpContext.Session.SetInt32("counter", ++currentCount);
            Dictionary<string,string> result = new Dictionary<string, string>();
            result["counter"] = currentCount.ToString();
            result["passcode"] = RandomString(15);
            return Json(result);
        }

        private static string RandomString(int length)
        {
            const string pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var builder = new System.Text.StringBuilder();
            Random rand = new Random();
            for (var i = 0; i < length; i++)
            {
                var ch = pool[rand.Next(0, pool.Length)];
                builder.Append(ch);
            }
            return builder.ToString();
        }
    }
}