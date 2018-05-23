using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using bank.Models;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace bank.Controllers{
    public class BankController:Controller{
        private BankContext context;
        public BankController(BankContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View();
        }
        [HttpGet]
        [Route("login")]
        public IActionResult Login(){
            return View();
        }
        [HttpGet]
        [Route("account")]
        public IActionResult Account(){
            List<User> RetrievedUsers = context.Users.Where(user => user.UserId == HttpContext.Session.GetInt32("UserId")).Include(t => t.Transactions).ToList();
            List<Transaction> transactions = RetrievedUsers[0].Transactions.OrderByDescending(transaction => transaction.CreatedAt).ToList();
            ViewBag.user = RetrievedUsers[0];
            ViewBag.transactions = transactions;
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
                return RedirectToAction("Account");
            }
            return View("Index");
        }
        [HttpPost]
        [Route("log")]
        public IActionResult Login(LoginViewModel model){
            User ReturnedUser = context.Users.SingleOrDefault(user => user.Email == model.Email);
            if (ReturnedUser != null && model.Password != null){
                var Hasher = new PasswordHasher<User>();
                if(0 != Hasher.VerifyHashedPassword(ReturnedUser, ReturnedUser.Password, model.Password))
                {
                    //success
                    HttpContext.Session.SetInt32("UserId", ReturnedUser.UserId);
                    return RedirectToAction("Account");
                }
            }
            @ViewBag.loginError = "Email or/and password doesn't exist.";
            return View();
        }
        [HttpPost]
        [Route("transaction")]
        public IActionResult Transaction(int amount){
            List<User> RetrievedUsers = context.Users.Where(user => user.UserId == HttpContext.Session.GetInt32("UserId")).Include(t => t.Transactions).ToList();
            var RetrievedUser = RetrievedUsers[0];
            if (amount != 0){
                if (RetrievedUser.Balance + amount < 0){
                ViewBag.fundsError = "Insufficient funds.";
                List<Transaction> transactions = RetrievedUsers[0].Transactions.OrderByDescending(transaction => transaction.CreatedAt).ToList();
                ViewBag.user = RetrievedUser;
                ViewBag.transactions = transactions;
                return View("Account");
                } 
                else{
                    Transaction newTrans = new Transaction {
                        Amount = amount,
                        UserId = (int)HttpContext.Session.GetInt32("UserId")
                    };
                    RetrievedUser.Balance += amount;
                    context.Add(newTrans);
                    context.SaveChanges();
                }
            }
            return RedirectToAction("Account");
        }
        [HttpGet]
        [Route("logout")]
        public IActionResult Logout(){
            HttpContext.Session.Clear();
            return View("Login");
        }
    }
}