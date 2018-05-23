using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using restauranter.Models;
using System;
using System.Linq;
using System.Collections.Generic;

namespace restauranter.Controllers{
    public class RestController : Controller{
        private RestfulContext context;
        public RestController(RestfulContext context){
            this.context = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            return View();
        }

        [HttpGet]
        [Route("reviews")]
        public IActionResult Reviews(){
            ViewBag.allReviews = (List<Review>)context.Reviews.OrderByDescending(reviewers => reviewers.DateOfVisit).ToList();
            return View();
        }

        [HttpPost]
        [Route("post")]
        public IActionResult Post(Review review){
            if (ModelState.IsValid){
                if (review.DateOfVisit > DateTime.Now){
                    ViewBag.ErrorDate = "Date Of Visit must be in the past.";
                    return View("Index");
                }
                context.Add(review);
                context.SaveChanges();
                return RedirectToAction("Reviews");
            }
            if (review.DateOfVisit.ToString().Contains("1/1/0001")){  //user hasn't chose the date
                ViewBag.ErrorDate = "The Date Of Visit field is required.";
            }
            else if (review.DateOfVisit > DateTime.Now){
                ViewBag.ErrorDate = "Date Of Visit must be in the past.";
            }
            return View("Index");
        }
        [HttpGet]
        [Route("voteup/{id}")]
        public IActionResult VoteUp(int id){
            Review RetrievedReview = context.Reviews.SingleOrDefault(review => review.ReviewId == id);
            RetrievedReview.UsefulCount += 1;
            context.SaveChanges();
            return RedirectToAction("Reviews");
        }
        [HttpGet]
        [Route("votedown/{id}")]
        public IActionResult VoteDown(int id){
            Review RetrievedReview = context.Reviews.SingleOrDefault(review => review.ReviewId == id);
            RetrievedReview.NotusefulCount += 1;
            context.SaveChanges();
            return RedirectToAction("Reviews");
        }
    }
}