using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using wedding.Models;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace wedding.Controllers{
    public class WeddingController : Controller{
        private WeddingContext context;
        public WeddingController(WeddingContext context){
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
                return RedirectToAction("Dashboard"); 
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
                    return RedirectToAction("Dashboard");
                }
            }
            @ViewBag.loginError = "Email or/and password doesn't exist.";
            return View("Index");
        }
        [HttpGet]
        [Route("Dashboard")]
        public IActionResult Dashboard(){
            List<Wedding> weddings = context.Weddings.OrderBy(wedding => wedding.Date).Include(p => p.Guests).ToList();
            //check if wedding is expired.
            foreach(var each in weddings){
                if (each.Date < DateTime.Now){
                    context.Weddings.Remove(each);
                }
            }
            context.SaveChanges();
            ViewBag.weddings = context.Weddings.OrderBy(wedding => wedding.Date).Include(p => p.Guests).ToList();
            ViewBag.userId = (int)HttpContext.Session.GetInt32("UserId");
            return View();
        }
        [HttpGet]
        [Route("new_wedding")]
        public IActionResult NewWedding(){
            return View();
        }
        [HttpPost]
        [Route("create_wedding")]
        public IActionResult CreateWedding(Wedding wedding){
            if (ModelState.IsValid){
                if (wedding.Date < DateTime.Now){
                    ViewBag.ErrorDate = "Date Of Wedding must be in the future.";
                    return View("NewWedding");
                }
                wedding.CreatorId = (int)HttpContext.Session.GetInt32("UserId");
                context.Add(wedding);
                context.SaveChanges();
                return Redirect($"wedding_info/{wedding.WeddingId}");
            }
            if (wedding.Date.ToString().Contains("1/1/0001")){  //user hasn't chose the date
                ViewBag.ErrorDate = "The Date Of Visit field is required.";
            }
            else if (wedding.Date < DateTime.Now){
                ViewBag.ErrorDate = "Date Of Visit must be in the future.";
            }
            return View("NewWedding");
        }
        [HttpGet]
        [Route("wedding_info/{id}")]
        public IActionResult WeddingInfo(int id){
            List<Wedding> RetrievedWedding = context.Weddings.Where(wedding => wedding.WeddingId == id).Include(p => p.Guests).ThenInclude(g => g.Guest).ToList();
            ViewBag.wedding = RetrievedWedding[0];
            return View();
        }
        [HttpGet]
        [Route("delete_wedding/{id}")]
        public IActionResult DeleteWedding(int id){
            Wedding RetrievedWedding = context.Weddings.SingleOrDefault(wedding => wedding.WeddingId == id);
            context.Weddings.Remove(RetrievedWedding);
            context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        [HttpGet]
        [Route("rvsp/{id}")]
        public IActionResult Rvsp(int id){
            GuestList newListItem = new GuestList{
                GuestId = (int)HttpContext.Session.GetInt32("UserId"),
                WeddingId = id
            };
            context.GuestLists.Add(newListItem);
            context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        [HttpGet]
        [Route("unrvsp/{id}")]
        public IActionResult Unrvsp(int id){
            GuestList RetrievedListItem = context.GuestLists.SingleOrDefault(list => list.WeddingId == id && list.GuestId == (int)HttpContext.Session.GetInt32("UserId"));
            context.GuestLists.Remove(RetrievedListItem);
            context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        [HttpGet]
        [Route("Logout")]
        public IActionResult Logout(){
            HttpContext.Session.Clear();
            return View("Index");
        }
    }
}