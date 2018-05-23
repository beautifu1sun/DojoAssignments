using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;

namespace dojodachi.Controllers{
    public class dojodachiController : Controller{
        Random rand = new Random();

        [HttpGet]
        [Route("dojodachi")]
        public IActionResult Index(){
            HttpContext.Session.SetInt32("fullness", 20);
            HttpContext.Session.SetInt32("happiness", 20);
            HttpContext.Session.SetInt32("energy", 50);
            HttpContext.Session.SetInt32("meals", 3);
            return View();
        }

        [HttpGet]
        [Route("feed")]
        public IActionResult Feed(){
            Dictionary<string,string> result = new Dictionary<string,string>();
            int meals = HttpContext.Session.GetInt32("meals") ?? default(int);
            if (meals > 0){
                int likeOMeter = rand.Next(1,101);
                int happiness = HttpContext.Session.GetInt32("happiness") ?? default(int);
                int energy = HttpContext.Session.GetInt32("energy") ?? default(int);
                int fullness = HttpContext.Session.GetInt32("fullness") ?? default(int);
                HttpContext.Session.SetInt32("meals", --meals);
                result["meals"] = meals.ToString();
                int fullnessAchieved = 0; 
                string dontLike = "";
                if (likeOMeter>25){
                    fullnessAchieved = rand.Next(5,11);
                }
                else{
                    dontLike = "But it didn't like it :C "; 
                }
                result["fullness"] = (fullness + fullnessAchieved).ToString();
                result["energy"] = energy.ToString();
                result["happiness"] = happiness.ToString();
                HttpContext.Session.SetInt32("fullness", fullness + fullnessAchieved);
                result["response"] = $"You fed well your Dojodachi! {dontLike}Fullness +{fullnessAchieved}, Meals -1";}
            else{
                result["error"] = "You don't have any meals!";
            }
            return Json(result);
        }

        [HttpGet]
        [Route("play")]
        public IActionResult Play(){
            Dictionary<string,string> result = new Dictionary<string,string>();
            int energy = HttpContext.Session.GetInt32("energy") ?? default(int);
            int fullness = HttpContext.Session.GetInt32("fullness") ?? default(int);
            energy -= 5;
            HttpContext.Session.SetInt32("energy", energy);
            result["energy"] = energy.ToString();
            int happinessAchieved = 0;
            string dontLike = "";
            int happiness = HttpContext.Session.GetInt32("happiness") ?? default(int);
            int likeOMeter = rand.Next(1,101);
            if (likeOMeter > 25){
                happinessAchieved = rand.Next(5,11);
            }else{
                dontLike = "But it didn't like it :C ";
            }
            result["happiness"] = (happiness + happinessAchieved).ToString();
            result["fullness"] = fullness.ToString();
            HttpContext.Session.SetInt32("happiness", happiness + happinessAchieved);
            result["response"] = $"You played with your Dojodachi! {dontLike}Happines +{happinessAchieved}, Energy -5";
            return Json(result);
        }

        [HttpGet]
        [Route("work")]
        public IActionResult Work(){
            Dictionary<string,string> result = new Dictionary<string,string>();
            int energy = HttpContext.Session.GetInt32("energy") ?? default(int);
            energy -= 5;
            HttpContext.Session.SetInt32("energy", energy);
            result["energy"] = energy.ToString();
            int mealsAchieved = rand.Next(1,4);
            int meals = HttpContext.Session.GetInt32("meals") ?? default(int);
            HttpContext.Session.SetInt32("meals", meals+mealsAchieved);
            result["meals"] = (meals + mealsAchieved).ToString();
            result["response"] = $"Your Dojodachi went to work! Meals +{mealsAchieved}, Energy -5";
            return Json(result);
        }

        [HttpGet]
        [Route("sleep")]
        public IActionResult Sleep(){
            Dictionary<string,string> result = new Dictionary<string,string>();
            int energy = HttpContext.Session.GetInt32("energy") ?? default(int);
            int fullness = HttpContext.Session.GetInt32("fullness") ?? default(int);
            int happiness = HttpContext.Session.GetInt32("happiness") ?? default(int);
            energy += 15;
            fullness -= 5;
            happiness -= 5;
            result["fullness"] = fullness.ToString();
            result["happiness"] = happiness.ToString();
            result["energy"] = energy.ToString();
            result["response"] = "Your Dojodachi had a wonderful night and feels well rested! Energy +15, Happiness -5, Fullness -5";
            HttpContext.Session.SetInt32("energy", energy);
            HttpContext.Session.SetInt32("fullness", fullness);
            HttpContext.Session.SetInt32("happiness", happiness);
            return Json(result);
        }
    }
}