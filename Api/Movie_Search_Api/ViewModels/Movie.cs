﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movie_Search_Api.ViewModels
{
    public class Movie
    {
        public string Title { get; set; }
        public string Year { get; set; }
        public string Rated { get; set; }
        public DateTime Released { get; set; }
        public string Runtime { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public string Writer { get; set; }
        public string Actors { get; set; }
        public string Plot { get; set; }
        public string Language { get; set; }
        public string Country { get; set; }
        public string Awards { get; set; }
        public string Poster { get; set; }
        public Rating[] Ratings { get; set; }
        public string Metascore { get; set; }
        public string imdbRating { get; set; }
        public string imdbVotes { get; set; }
        public string imdbID { get; set; }
        public string Type { get; set; }
        public DateTime DVD { get; set; }
        public string BoxOffice { get; set; }
        public string Production { get; set; }
        public string Website { get; set; }
        public Boolean Response { get; set; }
    
    }
}
