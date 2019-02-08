using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Movie_Search_Api.ViewModels;

namespace Movie_Search_Api
{
    public class MovieSearchService : IMovieSearchService
    {
        public async Task<Movie> GetMovie(string Name)
        {
            if (Name !=null && Name.Length>0)
            {
                using (var client = new HttpClient())
                {

                    client.BaseAddress = new Uri("http://www.omdbapi.com");
                    var response = await client.GetAsync($"/?i=tt3896198&apikey=e9083ab1&t={Name}");
                    response.EnsureSuccessStatusCode();

                    var stringResult = await response.Content.ReadAsStringAsync();
                    var rawMovie = JsonConvert.DeserializeObject<Movie>(stringResult);
                    return rawMovie;

                }

            }
            else
            {

                throw new Exception("Movie Name Is Required");
            }
          
        }
    }
}
