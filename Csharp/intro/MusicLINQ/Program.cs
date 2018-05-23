using System;
using System.Collections.Generic;
using System.Linq;

namespace MusicLINQ
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //=========================================================
            //Solve all of the prompts below using various LINQ queries
            //=========================================================

            //=========================================================
            //There is only one artist in this collection from Mount 
            //Vernon. What is their name and age?
            //=========================================================
            var foundArtist = Artists.Where(match => match.Hometown=="Mount Vernon");
            Console.WriteLine("*** One artist from Mount Vernon ***");
            foreach (var each in foundArtist.ToList()){
                Console.WriteLine("{0} - {1}", each.ArtistName, each.Age);
            }
            //=========================================================
            //Who is the youngest artist in our collection of artists?
            //=========================================================
            var foundYoungest = Artists.OrderBy(match => match.Age).First();
            Console.WriteLine("*** Youngest artist ***");
            Console.WriteLine("{0} - {1}", foundYoungest.ArtistName, foundYoungest.Age);
            //=========================================================
            //Display all artists with 'William' somewhere in their 
            //real name        
            //=========================================================
            var foundWilliams = Artists.Where(musicians => musicians.RealName.Contains("William"));
            Console.WriteLine("*** All artists with 'William' somewhere in their real name ***");
            foreach (var each in foundWilliams.ToList()){
                Console.WriteLine("{0} - {1}", each.RealName, each.Age);
            }
            //=========================================================
            //Display all groups with names less than 8 characters
            //=========================================================
            var foundBands = Groups.Where(match => match.GroupName.Length < 8);
            Console.WriteLine("*** All groups with names less than 8 characters ***");
            foreach (var each in foundBands.ToList()){
                Console.WriteLine(each.GroupName);
            }
            //=========================================================
            //Display the 3 oldest artists from Atlanta
            //=========================================================
            var foundOldest = from match in Artists
                              where match.Hometown=="Atlanta"
                              orderby match.Age descending
                              select new { match.ArtistName, match.Age };
            Console.WriteLine("*** The 3 oldest artists from Atlanta ***");
            for(int i = 0; i < 3; i++){
                Console.WriteLine(foundOldest.ToList()[i]);
            }            
            //=========================================================
            //(Optional) Display the Group Name of all groups that have 
            //at least one member not from New York City
            //=========================================================
            HashSet<string> bands = Artists.Where(artist => artist.Hometown!="New York City").Join(Groups,
                                               artistItem => artistItem.GroupId,
                                               groupItem => groupItem.Id,
                                               (artistItem, groupItem) =>{
                                                   return groupItem.GroupName;
                                               }).ToHashSet();
            Console.WriteLine("***All groups that have at least one member not from New York City***");
            foreach (var each in bands){
                Console.WriteLine(each);
            }
            //=========================================================
            //(Optional) Display the artist names of all members of the 
            //group 'Wu-Tang Clan'
            //=========================================================
            List<string> members = Groups.Where(group => group.GroupName=="Wu-Tang Clan").Join(Artists,
                                               groupItem => groupItem.Id,
                                               artistItem => artistItem.GroupId,
                                               (groupItem, artistItem) =>{
                                                   return artistItem.ArtistName;
                                               }).ToList();
            Console.WriteLine("***All members of the group 'Wu-Tang Clan***");
            foreach (var each in members){
                Console.WriteLine(each);
            }
        }
    }
}
