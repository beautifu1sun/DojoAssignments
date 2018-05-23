using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using movie_api.Connectors;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace movie_api.Controllers {
    public class WebRequest{
        public static async Task GetMovieDataAsync(string movieName, Action<Dictionary<string, object>> Callback)
        {
            using (var Client = new HttpClient()){
                try{
                    Client.BaseAddress = new Uri($"https://api.themoviedb.org/3/search/movie?api_key=b2c88a3af35b5e6d04f47c6ad4c38999&language=en-US&query={movieName}");
                    HttpResponseMessage response = await Client.GetAsync("");
                    response.EnsureSuccessStatusCode();
                    string stringResponse = await response.Content.ReadAsStringAsync();
                    Callback(JsonConvert.DeserializeObject<Dictionary<string,object>>(stringResponse));
                }
                catch(HttpRequestException ex){
                    System.Console.WriteLine($"Request exception: {ex.Message}");
                }
            }
        }
    }
    public class MovieController:Controller{

        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            ViewBag.allMovies = getMovies();
            return View();
        }

        [HttpGet]
        [Route("get_movies")]
        public List<Dictionary<string,object>> getMovies(){
            return MySqlConnector.Query("SELECT * FROM movies ORDER BY created_at DESC");
        }

        
        [HttpPost]
        [Route("movie_search")]
        public IActionResult MovieSearch(string movieName){
            var movieInfo = new Dictionary<string,object>();
            WebRequest.GetMovieDataAsync(movieName, response =>{
                movieInfo=response;
            })
            .Wait();
            string name = (string)((JObject)((JArray)movieInfo["results"])[0])["title"];
            float rating = (float)((JObject)((JArray)movieInfo["results"])[0])["vote_average"];
            string released = DateTime.ParseExact((string)((JObject)((JArray)movieInfo["results"])[0])["release_date"], "yyyy-MM-dd", System.Globalization.CultureInfo.CurrentCulture).ToString("MMMM dd, yyyy", System.Globalization.CultureInfo.InvariantCulture);
            MySqlConnector.Execute($"INSERT INTO movies (name, rating, released, created_at, updated_at) VALUE ('{name}','{rating}','{released}',NOW(),NOW())");
            return RedirectToAction("Index");
        }
    }
}