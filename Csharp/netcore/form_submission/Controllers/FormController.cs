using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using form_submission.Models;
using System.Collections.Generic;

namespace form_submission.Controllers{
    public class FormController : Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            ViewBag.submitted = false;
            return View();
        }

        [HttpPost]
        [Route("submit_form")]
        public IActionResult SubmitForm(string firstName, string lastName, int age, string email, string password){
            User NewUser = new User
            {
                firstName = firstName,
                lastName = lastName,
                age = age,
                email = email,
                password = password
            };
            TryValidateModel(NewUser);
            List<string> errorList = new List<string>(); 
            foreach(var each in ModelState.Values) { 
                foreach(var error in each.Errors) { 
                    errorList.Add(error.ErrorMessage); 
                    } 
                } 
            ViewBag.submitted = true;
            if (errorList.Count>0){
                ViewBag.errors = errorList;
            }
            return View("Index");
        }
    }
}