using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ajax_notes.Connectors;

namespace ajax_notes.Controllers{
    public class NotesController : Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            var allNotes = MySqlConnector.Query("SELECT * FROM notes");
            ViewBag.allNotes = allNotes;
            return View();
        }
        [HttpPost]
        [Route("add_note")]
        public IActionResult addNote(string title){
            MySqlConnector.Execute($"INSERT INTO notes (title, created_at, updated_at) VALUES ('{title}', NOW(), NOW())");
            return RedirectToAction("Index");
        }
        [HttpGet]
        [Route("delete_note/{id}")]
        public IActionResult deleteNote(int id){
            MySqlConnector.Execute($"DELETE FROM notes WHERE id={id}");
            return RedirectToAction("Index");
        }
        [HttpPost]
        [Route("update_note/{id}")]
        public IActionResult updateNote(int id, string note){
            MySqlConnector.Execute($"UPDATE notes SET note='{note}', updated_at=NOW() WHERE id={id}");
            return RedirectToAction("Index");
        }
    }
}