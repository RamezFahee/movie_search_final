using Movie_Search_Api.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movie_Search_Api
{
    public interface IMovieSearchService
    {
        Task<Movie> GetMovie(string Name);       
    }
}
