// close and open pop up
document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

document
  .querySelector("#open-popup")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".popup").style.display = "block";
  });

// search engine

// modal movie
var modalMovie = [
  {
    title: "365 Days",
    imgSrc: "./365.jpg",
    link: "./MovieDetail.html"
  },
  {
    title: "Love in the Air",
    imgSrc: "./love in the air.webp",
    link: "./MovieDetail.html"
  },
  {
    title: "Twinkling Watermelon",
    imgSrc: "./twinkling watermelon.jpg",
    link: "./MovieDetail.html"
  },
  {
    title: "Go East",
    imgSrc: "./go east.webp",
    link: "./MovieDetail.html"
  },
  {
    title: "All of Us Are Dead",
    imgSrc: "./all of us are dead.jpg",
    link: "./MovieDetail.html"
  },
  {
    title: "Queen of Tears",
    imgSrc: "./queen of tear.jpg",
    link: "./MovieDetail.html"
  }
]


// container movie
var movies = [
  {
    title: "365 Days",
    imgSrc: "./365.jpg",
    link: "/MovieDetail.html"
  },
  {
    title: "Love in the Air",
    imgSrc: "./love in the air.webp",
    link: "/MovieDetail.html"
  },
  {
    title: "Twinkling Watermelon",
    imgSrc: "./twinkling watermelon.jpg",
    link: "./MovieDetail.html"
  },
  {
    title: "Go East",
    imgSrc: "./go east.webp",
    link: "./MovieDetail.html"
  },
  {
    title: "All of Us Are Dead",
    imgSrc: "./all of us are dead.jpg",
    link: "./MovieDetail.html"
  },
  {
    title: "Queen of Tears",
    imgSrc: "./queen of tear.jpg",
    link: "./MovieDetail.html"
  },
  {
      title: "Lovely Runner",
      imgSrc: "./lovely runner.webp",
      link: "./MovieDetail.html"
  },
  {
      title: "My Demon",
      imgSrc: "./my demon.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "Exhuma",
      imgSrc: "./exhuma.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "Marry My Husband",
      imgSrc: "./marry my husband.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "Snowdrop",
      imgSrc: "./snowdrop.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "True Beauty",
      imgSrc: "./true beauty.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "Falling Into Your Smile",
      imgSrc: "./falling into your smile.webp",
      link: "./MovieDetail.html"
  },
  {
      title: "Forever Love",
      imgSrc: "./forever love.avif",
      link: "./MovieDetail.html"
  },
  {
      title: "Hidden Love",
      imgSrc: "./hidden love.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "Only For Love",
      imgSrc: "./only for love.avif",
      link: "./MovieDetail.html"
  },
  {
      title: "Inside Out 2",
      imgSrc: "./inside out2.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "The Boy-season 4",
      imgSrc: "./the boy4.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "Under Paris",
      imgSrc: "./under paris.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "House of the Dragon",
      imgSrc: "./house of the dragon.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "My Hero Academia",
      imgSrc: "./my hero academia.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "Wind Breaker",
      imgSrc: "./wind breaker.jpg",
      link: "./MovieDetail.html"
  },
  {
      title: "The Dragon Prince Yuan",
      imgSrc: "./the dragon prince yuan.avif",
      link: "./MovieDetail.html"
  },
  {
      title: "Perfect World",
      imgSrc: "/perfect world.webp",
      link: "/MovieDetail.html"
  },
  {
      title: "Beauty Lie",
      imgSrc: "./a beautiful lie.webp",
      link: "./MovieDetail.html"
  },
  {
      title: "Blossom",
      imgSrc: "./blossom.avif",
      link: "./MovieDetail.html"
  },
  {
      title: "In Between",
      imgSrc: "./in between.jpg",
      link: "./MovieDetail.html"
  }
];

function Search() {
  var searchInput = document.getElementById('search').value.trim().toLowerCase();  // trim() use for remove whitecase, newline, and tap
  var movieContainer = document.querySelector('.modal-footer .container .d-flex.flex-wrap');
  
  movieContainer.innerHTML = ''; // Clear previous results

  if (searchInput === '') {
    moviesToDisplay = modalMovie; // Display movies in html modal if search input is empty
  } else {
    moviesToDisplay = movies.filter(function(movie) {
      return movie.title.toLowerCase().includes(searchInput); // Filter movies by title containing search input
    });
  }

  // use for display movie that you search
  for (var i = 0; i < moviesToDisplay.length; i++) {
    var movie = moviesToDisplay[i];
    var movieElement = `
        <div class="movie col-6 col-lg-4 col-xl-3 mb-3 px-2">
            <a href="${movie.link}" class="text-decoration-none link-dark">
                <div class="card overflow-hidden border border-0">
                    <div class="card-body p-0">
                        <img class="w-100" src="${movie.imgSrc}" alt="">
                    </div>
                    <div class="card-footer text-center fw-bolder border border-0 text-white" style="background-color: rgb(56, 54, 54);">
                        <p class="movie-title">${movie.title}</p>
                    </div>
                </div>
            </a>
        </div>
    `;
    movieContainer.insertAdjacentHTML('beforeend', movieElement);
  }
}
