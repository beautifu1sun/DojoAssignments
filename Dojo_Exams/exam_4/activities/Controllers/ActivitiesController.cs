using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using activities.Models;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace activities.Controllers{
    public class ActivitiesController : Controller{
        private ActivitiesContext context;
        public ActivitiesController(ActivitiesContext context){
            this.context = context;
        }
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View();
        }
        [HttpPost]
        [Route("reg")]
        public IActionResult Register(RegisterViewModel model){
            if (ModelState.IsValid){
                User newUser = new User{
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Password = model.Password                    
                };
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                context.Add(newUser);
                context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", newUser.UserId);
                return RedirectToAction("Home"); 
            }
            return View("Index");
        }
        [HttpPost]
        [Route("log")]
        public IActionResult Login(LoginViewModel model){
            User ReturnedUser = context.Users.SingleOrDefault(user => user.Email == model.EmailLog);
            if (ReturnedUser != null && model.PasswordLog != null){
                var Hasher = new PasswordHasher<User>();
                if(0 != Hasher.VerifyHashedPassword(ReturnedUser, ReturnedUser.Password, model.PasswordLog))
                {
                    //success
                    HttpContext.Session.SetInt32("UserId", ReturnedUser.UserId);
                    return RedirectToAction("Home");
                }
            }
            @ViewBag.loginError = "Email or/and password doesn't exist.";
            return View("Index");
        }
        [HttpGet]
        [Route("home")]
        public IActionResult Home(){
            if (HttpContext.Session.GetInt32("UserId") == null){
                return View("Index");
            }
            List<Activity> activities = context.Activities.Where(activity => activity.StartDate > DateTime.Now).OrderBy(activity => activity.StartDate).Include(p => p.Guests).Include(c => c.Creator).ToList();
            List<User> retrievedUsers = context.Users.Where(user => user.UserId == (int)HttpContext.Session.GetInt32("UserId")).Include(a => a.AttendedActivities).ToList();
            ViewBag.user = retrievedUsers[0];
            ViewBag.activities = activities;
            return View();
        }
        [HttpGet]
        [Route("new")]
        public IActionResult NewActivity(){
            if (HttpContext.Session.GetInt32("UserId") == null){
                return View("Index");
            }
            return View();
        }
        [HttpPost]
        [Route("new/post")]
        public IActionResult PostNewActivity(ActivityViewModel model){
            if (HttpContext.Session.GetInt32("UserId") == null){
                return View("Index");
            }
            if (ModelState.IsValid){
                int hours = Int32.Parse(model.Time.Substring(0,2));
                if (((string)(model.Time.Substring(5,2)) == (string)"pm")&&(hours!=12)){
                    hours += 12;
                }
                else if (((string)(model.Time.Substring(5,2)) == (string)"am")&&(hours!=12)){
                    hours -= 12;
                }
                int minutes = Int32.Parse(model.Time.Substring(3,2));
                TimeSpan ts = new TimeSpan(hours, minutes, 0);
                DateTime startDate = model.Date.Date + ts;
                if (startDate < DateTime.Now){
                    ViewBag.ErrorDate = "Date/Time Of Activity must be in the future.";
                    return View("NewActivity");
                }
                int durationInMinutes = 0;
                if(model.TimeLength.Equals("Hours")){
                    durationInMinutes = Int32.Parse(model.Duration)*60;
                }
                else if (model.TimeLength.Equals("Days")){
                    durationInMinutes = Int32.Parse(model.Duration)*60*24;
                }
                else {
                     durationInMinutes = Int32.Parse(model.Duration);
                }
                DateTime endDate = startDate.AddMinutes(durationInMinutes);
                string duration = model.Duration + " " + model.TimeLength;
                Activity NewActivity = new Activity{
                    CreatorId = (int)HttpContext.Session.GetInt32("UserId"),
                    Title = model.Title,
                    StartDate = startDate,
                    EndDate = endDate,
                    Duration = duration,
                    Description = model.Description
                };
                context.Add(NewActivity);
                context.SaveChanges();
                return Redirect($"/activity_info/{NewActivity.ActivityId}");
            }
            if (model.Date.ToString().Contains("1/1/0001")){  //user hasn't chose the date
                ViewBag.ErrorDate = "The Date Of Visit field is required.";
            }
            else if (model.Date < DateTime.Now){
                ViewBag.ErrorDate = "Date Of Activity must be in the future.";
            }
            return View("NewActivity");
        }
        [HttpGet]
        [Route("activity_info/{id}")]
        public IActionResult ActivityInfo(int id){
            if (HttpContext.Session.GetInt32("UserId") == null){
                return View("Index");
            }
            List<Activity> RetrievedActivity = context.Activities.Where(activity => activity.ActivityId == id).Include(c => c.Creator).Include(p => p.Guests).ThenInclude(g => g.Guest).ToList();
            ViewBag.activity = RetrievedActivity[0];
            ViewBag.userId = (int)HttpContext.Session.GetInt32("UserId");
            return View();
        }
        [HttpGet]
        [Route("delete_activity/{id}")]
        public IActionResult DeleteActivity(int id){
            if (HttpContext.Session.GetInt32("UserId") == null){
                return View("Index");
            }
            Activity RetrievedActivity = context.Activities.SingleOrDefault(activity => activity.ActivityId == id);
            context.Activities.Remove(RetrievedActivity);
            context.SaveChanges();
            return RedirectToAction("Home");
        }
        [HttpGet]
        [Route("join_activity/{id}")]
        public IActionResult JoinActivity(int id){
            if (HttpContext.Session.GetInt32("UserId") == null){
                return View("Index");
            }
            User activeUser = context.Users.Where(user => user.UserId == (int)HttpContext.Session.GetInt32("UserId")).Include(c => c.CreatedActivities).Include(a => a.AttendedActivities).ThenInclude(ac => ac.Activity).ToList()[0];
            Activity currentActivity = context.Activities.Where(activity => activity.ActivityId == id).ToList()[0];
            bool free = true;
            foreach(var activity in activeUser.AttendedActivities){
                if ((currentActivity.StartDate < activity.Activity.StartDate)&&(currentActivity.EndDate > activity.Activity.StartDate)){
                    free = false;
                    ViewBag.ErrorJoin = $"Can't join the activity because you are participating here: {activity.Activity.Title}";
                }
                else if ((currentActivity.StartDate > activity.Activity.StartDate)&&(currentActivity.StartDate < activity.Activity.EndDate)){
                    free = false;
                    ViewBag.ErrorJoin = $"Can't join the activity because you are participating here: {activity.Activity.Title}";
                }
            }
            foreach(var activity in activeUser.CreatedActivities){
                if ((currentActivity.StartDate < activity.StartDate)&&(currentActivity.EndDate > activity.EndDate)){
                    free = false;
                    ViewBag.ErrorJoin = $"Can't join the activity because you are participating here: {activity.Title}";
                }
                else if ((currentActivity.StartDate > activity.StartDate)&&(currentActivity.StartDate < activity.EndDate)){
                    free = false;
                    ViewBag.ErrorJoin = $"Can't join the activity because you are participating here: {activity.Title}";
                }
            }
            if (free){
                GuestList newListItem = new GuestList{
                GuestId = (int)HttpContext.Session.GetInt32("UserId"),
                ActivityId = id
                };
                context.GuestLists.Add(newListItem);
                context.SaveChanges();
            }
            ViewBag.user = context.Users.Where(user => user.UserId == (int)HttpContext.Session.GetInt32("UserId")).Include(a => a.AttendedActivities).ToList()[0];
            ViewBag.activities = context.Activities.Where(activity => activity.StartDate > DateTime.Now).OrderBy(activity => activity.StartDate).Include(p => p.Guests).Include(c => c.Creator).ToList();
            return View("Home");
        }
        [HttpGet]
        [Route("leave_activity/{id}")]
        public IActionResult LeaveActivity(int id){
            if (HttpContext.Session.GetInt32("UserId") == null){
                return View("Index");
            }
            GuestList RetrievedListItem = context.GuestLists.SingleOrDefault(list => list.ActivityId == id && list.GuestId == (int)HttpContext.Session.GetInt32("UserId"));
            context.GuestLists.Remove(RetrievedListItem);
            context.SaveChanges();
            return RedirectToAction("Home");
        }
        [HttpGet]
        [Route("logout")]
        public IActionResult Logout(){
            if (HttpContext.Session.GetInt32("UserId") == null){
                return View("Index");
            }
            HttpContext.Session.Clear();
            return View("Index");
        }
    }
}