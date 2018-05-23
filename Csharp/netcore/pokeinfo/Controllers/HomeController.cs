using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using pokeinfo.Models;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace pokeinfo.Controllers
{
    public class WebRequest
    {
        // The second parameter is a function that returns a Dictionary of string keys to object values.
        // If an API returned an array as its top level collection the parameter type would be "Action>"
        public static async Task GetPokemonDataAsync(int PokeId, Action<Dictionary<string, object>> Callback)
        {
            // Create a temporary HttpClient connection.
            using (var Client = new HttpClient())
            {
                try
                {
                    Client.BaseAddress = new Uri($"http://pokeapi.co/api/v2/pokemon/{PokeId}");
                    HttpResponseMessage Response = await Client.GetAsync(""); // Make the actual API call.
                    Response.EnsureSuccessStatusCode(); // Throw error if not successful.
                    string StringResponse = await Response.Content.ReadAsStringAsync(); // Read in the response as a string.
                     
                    // Then parse the result into JSON and convert to a dictionary that we can use.
                    // DeserializeObject will only parse the top level object, depending on the API we may need to dig deeper and continue deserializing
                    Dictionary<string, object> JsonResponse = JsonConvert.DeserializeObject<Dictionary<string, object>>(StringResponse);
                     
                    // Finally, execute our callback, passing it the response we got.
                    Callback(JsonResponse);
                }
                catch (HttpRequestException e)
                {
                    // If something went wrong, display the error.
                    Console.WriteLine($"Request exception: {e.Message}");
                }
            }
        }
    }
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("{PokeId}")]
        public IActionResult Index(int PokeId)
        {
            var PokeInfo = new Dictionary<string, object>();
            WebRequest.GetPokemonDataAsync(PokeId, ApiResponse =>
                {
                    PokeInfo = ApiResponse;
                })
                .Wait();
            var result = new Dictionary<string, object>();
            result["Name"] = PokeInfo["name"];
            result["All Types"]=((JArray)PokeInfo["types"]);
            List<string>types = new List<string>();
            foreach (var type in ((JArray)result["All Types"]).Children()){
                types.Add((string)type["type"]["name"]);
            }
            result["All Types"]=types.ToArray();
            result["Primary Type"] = ((JArray)PokeInfo["types"])[0];
            result["Primary Type"] = ((JObject)result["Primary Type"])["type"];
            result["Primary Type"] = (string)((JObject)result["Primary Type"])["name"];
            result["Height"]=PokeInfo["height"];
            result["Weight"]=PokeInfo["weight"];
            return Json(result);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
