using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace calling_card.Controllers{
    public class HelloController : Controller{
        [HttpGetAttribute]

        [HttpGet]
        [Route("{fname}/{lname}/{age}/{color}")]
        public JsonResult Example(string fname, string lname, string age, string color){
            var anonObj = new {
                FirstName = fname,
                LastName = lname,
                Age = age,
                FavoriteColor = color
            };
            return Json(anonObj);
        }   
    } 
}