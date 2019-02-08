using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Movie_Search_Api.Controllers
{
    [Produces("application/json")]
    
    public class MovieController : Controller
    {
        private readonly IMovieSearchService _movieSearch;

        // GET: Movie?name=moviename
        public MovieController(IMovieSearchService movieSearch)
        {

            _movieSearch = movieSearch;
        }
        [HttpGet ]
        [Route("Movie/{name?}")]
        public async Task<IActionResult> GetMovie(string name)
        {
            try
            {
                var result = await _movieSearch.GetMovie(name);
                if (result != null && result.Response==true)
                {
                    return Ok(result);

                }
                else
                {

                    return NotFound();
                }
            }
            catch (Exception ex)
            {

                return   StatusCode(500);
            }
            
        }
        
     
    }
}
