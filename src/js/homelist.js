import { cambioSeccionHome, cambioSeccionSearch } from "./cambioSeccion";
import {
  obtenerTopPeliculas,
  obtenerUltimasPeliculas,
  obtenerSeriesPopulares,
  obtenerDatosID,
  obtenerDatosIDS,
  obtenerUM,
  obtenerTRM,
  obtenerSP,
  obtenerPeliIndividual,
  viewTrailerSerie,
  viewTrailerMovie,
  obtenerMovies,
  obtenerPeliculasPopulares,
  obtenerPP,
} from "./http-provider";
// Referencias
const peliculaUP = document.querySelector(".upcmovies");
const peliculasTR = document.querySelector(".trmovies");
const peliculasPopulares = document.querySelector(".pmovies");
const informacion = document.getElementById("1");
const btnum = document.querySelector(".btn__um");
const btntrm = document.querySelector(".btn__trm");
const btntps = document.querySelector(".btn__ps");
const hero_container = document.getElementById("2");
const nav = document.querySelector("nav");
const hero = document.getElementById("3");
const hero2 = document.getElementById("4");
const list = document.getElementById("5");
const home = document.querySelector(".home");
const aMovies = document.querySelector('.amovies')

const form = document.querySelector("form");
const buttonRM = document.querySelector(".hero__btn__rm");
const spinnerContainer = document.querySelector(".cspn")

const spinnerLoader = () => {
 spinnerContainer.classList.replace("spinner__container__none", "spinner__container")


 setTimeout(() => {
  spinnerContainer.classList.replace("spinner__container", "spinner__container__none")
 }, 1500);
}
spinnerLoader()

let dataForm = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  hero2.innerHTML = "";
  let peliSearch = e.target[0].value;
  dataForm.push(peliSearch.replace(/ /g, "%20"));
  console.log(dataForm);
  e.target[0].value = "";
  const peliIndividual = async () => {
    spinnerLoader()
    cambioSeccionSearch(hero_container, nav, hero, hero2, list);
    hero2.innerHTML = '';
    const { results } = await obtenerPeliIndividual(dataForm.join(""));
    results.forEach(({ poster_path, id }) => {
      if (poster_path != null) {
        const html = `
                <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
                alt="">`;
        const divUM = document.createElement("div");
        divUM.classList.add("swiper-slide", "hero2__img", "imgEvent");
        divUM.innerHTML = html;
        hero2.appendChild(divUM);
      }
      console.log(hero2);
    });
    dataForm = [];
    eventos();
  };
  peliIndividual();
});

// Creacion HTML - INICIO

const agregarUltimasPeliculas = async () => {
  const { results } = await obtenerUltimasPeliculas();
  results.forEach(({ poster_path, id }) => {
    const html = `
        <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
        alt="">`;
    const divPeli = document.createElement("div");
    divPeli.classList.add("swiper-slide", "swiper-slide-active", "imgEvent");
    divPeli.innerHTML = html;
    peliculaUP.appendChild(divPeli);
  });
};
const agregarTopPeliculas = async () => {
  const { results } = await obtenerTopPeliculas();
  results.forEach(({ poster_path, id }) => {
    const html = `
        <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
        alt="">`;
    const divPeli = document.createElement("div");
    divPeli.classList.add("swiper-slide", "swiper-slide-active", "imgEvent");
    divPeli.innerHTML = html;
    peliculasTR.appendChild(divPeli);
  });
};

const agregarSeriesPopulares = async () => {
  const { results } = await obtenerPeliculasPopulares();
  results.forEach(({ poster_path, id }) => {
    const html = `
        <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
        alt="">`;
        const divPeli = document.createElement("div");
        divPeli.classList.add("swiper-slide", "swiper-slide-active", "imgEvent");
        divPeli.innerHTML = html;
    peliculasPopulares.appendChild(divPeli);
  });
};



const eventos = () => {
  buttonRM.addEventListener("click", () => {
    console.log("Leer mas");
    const htmlInfo = `<div class="grid__container">
    <div class="grid__container__info">
    <i class="i__none" style="color: #ff0000;"></i>
    <h1>My Hero Academia: World Heroes Mission</h1>
    <div class="grid__container__genres">
   <button>Animation</button>
   <button>Action</button>
   <button>Adventure</button>
   <button>Science Fiction</button>
   
    </div>
    <p>
    A mysterious group called Humarize strongly believes in the Quirk
              Singularity Doomsday theory which states that when quirks get
              mixed further in with future generations, that power will bring
              forth the end of humanity. In order to save everyone, the
              Pro-Heroes around the world ask UA Academy heroes-in-training to
              assist them and form a world-class selected hero team. It’s up to
              the heroes to save the world and the future of heroes in what is
              the most dangerous crisis to take place yet in My Hero Academia.
    </p>
    <a href="" class="btn__trailer btn__trailer2" target="_blank" >View Trailer</a>
    </div>
    <div class="grid__container__img">
    <img src="https://image.tmdb.org/t/p/w300/AsTlA7dj2ySGY1pzGSD0MoHFhEF.jpg" alt="" width="50%" height="75%">
    <i class="fa-regular fa-circle-xmark" style="color: #ff0000;"></i>
    <a href="" class="btn__trailer" >View Trailer</a>
    </div>
    <div class="grid__container__moviecast">
    <div class="cast2"><img src="https://image.tmdb.org/t/p/w300/rQNdJdZewk7VGP16ZNbpfJ9ZeMd.jpg" alt=""><p>Daiki Yamashita</p></div>
    <div class="cast2"><img src="https://image.tmdb.org/t/p/w300/qyZpSYva9O9JQIZ0nVmXTf90FlL.jpg" alt=""><p>Nobuhiko Okamoto</p></div>
    <div class="cast2"><img src="https://image.tmdb.org/t/p/w300/8wKdPV11IwowfwoqGqMMNt9hmp6.jpg" alt=""><p>Yuki Kaji</p></div>
    <div class="cast2"><img src="https://image.tmdb.org/t/p/w300/qnJ2BL0l4c6tsRtkM0CENNAm6L.jpg" alt=""><p>Ryo Yoshizawa</p></div>
    
    
    </div>
    </div>`;
    informacion.innerHTML = htmlInfo;
    // <img src="https://image.tmdb.org/t/p/original/${poster_path}" alt="" width="50%" height="75%">

    informacion.classList.replace("movie__selected__none", "movie__selected");

    document
      .querySelector(".fa-regular")
      .addEventListener("click", () =>
        informacion.classList.replace(
          "movie__selected",
          "movie__selected__none"
        )
      );
    const boton = document.querySelectorAll(".btn__trailer");
    boton.forEach(btn => btn.href = `https://www.youtube.com/watch?v=ZclBluzAZVE}`);
    
    
  });
  const crearHtmlInfo = (
    original_title,
    overview,
    poster_path,
    genres,
    cast,
    trailer,
    id
  ) => {
    const htmlInfo = `<div class="grid__container">
            <div class="grid__container__info">
            <i class="fa-regular fa-circle-xmark i__none" style="color: #ff0000;"></i>
            <h1>${original_title}</h1>
            <div class="grid__container__genres">
            ${genres.map((genre) => `<button>${genre.name}</button>`).join("")}
                
            </div>
            <p>
            ${overview}
            </p>
            <a href="" class="btn__trailer btn__trailer2" target="_blank" >View Trailer</a>
            </div>
            <div class="grid__container__img">
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" width="50%" height="75%">
            <i class="fa-regular fa-circle-xmark fa-regular2" style="color: #ff0000;"></i>
            <a href="" class="btn__trailer" target="_blank" >View Trailer</a>
            </div>
            <div class="grid__container__moviecast">
        
                ${cast
                  .map(
                    (pj) =>
                      `<div class="cast2"><img src="https://image.tmdb.org/t/p/w200/${pj[1]}" alt=""><p>${pj[0]}</p></div>`
                  )
                  .join("")}
        
            
            </div>
            </div>`;
    informacion.innerHTML = htmlInfo;

    informacion.classList.replace("movie__selected__none", "movie__selected");

    document
      .querySelector(".fa-regular")
      .addEventListener("click", (e) =>
        informacion.classList.replace(
          "movie__selected",
          "movie__selected__none"
        )
      );
      document
      .querySelector(".fa-regular2")
      .addEventListener("click", (e) =>
        informacion.classList.replace(
          "movie__selected",
          "movie__selected__none"
        )
      );
    const boton = document.querySelectorAll(".btn__trailer");
    
   trailer(id)
     .then((data) => {
      if (data.results.length != 0) {
        boton.forEach(btn => {
          btn.href = `https://www.youtube.com/watch?v=${data.results[0].key}`;
          console.log(btn);
        })
      }else {
        boton.forEach(btn => {
          
          btn.innerText = "No Trailer Available"
          btn.addEventListener("click", (e) => {
            e.preventDefault()
     
    
          })
        })
      }
      })
     .catch((err) => alert(err));

     
  };

  setTimeout(() => {
    let imgS = document.querySelectorAll(".imgEventS");
    let imgMS = document.querySelectorAll(".imgEvent");
    imgS.forEach((element) => {
      element.addEventListener("click", (e) => {
        // obtenerDatosID(e.target.id).then(({original_title, overview, poster_path}) => {
        //     console.log(original_title,overview,poster_path, informacion);
        //     // https://api.themoviedb.org/3/movie/804150/credits?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US

        // })
        obtenerDatosIDS(e.target.id).then(({ data, data2 }) => {
          let genres = [data.genres];
          let { name, overview, poster_path } = data;
          //   console.log(original_title, overview, poster_path);
          let cast = [];
          for (let i = 0; i <= 3; i++) {
            cast.unshift([data2.cast[i].name, data2.cast[i].profile_path]);
          }
          if (poster_path === null) {
            return "";
          } else {
            crearHtmlInfo(
              name,
              overview,
              poster_path,
              genres[0],
              cast,
              viewTrailerSerie,
              data.id
            );
          }

          //   let cast = [data2.]
        });
      });
    });
    imgMS.forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log(e.target.id);
        // obtenerDatosID(e.target.id).then(({original_title, overview, poster_path}) => {
        //     console.log(original_title,overview,poster_path, informacion);
        //     // https://api.themoviedb.org/3/movie/804150/credits?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US

        // })
        obtenerDatosID(e.target.id).then(({ data, data2 }) => {
          console.log(data);
          let genres = [data.genres];
          let { title, overview, poster_path } = data;
          //   console.log(original_title, overview, poster_path);
          let cast = [];
          if (data2.cast.length >= 3) {
            for (let i = 0; i <= 3; i++) {
              cast.unshift([data2.cast[i].name, data2.cast[i].profile_path]);
            }
          } else {
            for (const { name, profile_path } of data2.cast) {
              cast.unshift([name, profile_path]);
            }
          }

          crearHtmlInfo(
            title,
            overview,
            poster_path,
            genres[0],
            cast,
            viewTrailerMovie,
            data.id
          );

          //   let cast = [data2.]
        });
      });
    });
  }, 2000);
};
aMovies.addEventListener('click', (e)=> {
  e.target.disabled = true;
  spinnerLoader()
  const pelisUM = async () => {
    cambioSeccionSearch(hero_container, nav, hero, hero2, list);
    hero2.innerHTML = '';
    const {data, data2} = await obtenerMovies();
    
    data.results.forEach(({ poster_path, id }) => {
      const html = `
              <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
              alt="">`;
      const divUM = document.createElement("div");
      divUM.classList.add("swiper-slide", "hero2__img", "imgEvent");
      divUM.innerHTML = html;
      hero2.appendChild(divUM);
      console.log(hero2);
    });
    data2.results.forEach(({ poster_path, id }) => {
      const html = `
              <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
              alt="">`;
      const divUM = document.createElement("div");
      divUM.classList.add("swiper-slide", "hero2__img", "imgEvent");
      divUM.innerHTML = html;
      hero2.appendChild(divUM);
      
    });
    eventos();
  };
  pelisUM();
  
})
btnum.addEventListener("click", () => {
  spinnerLoader()
  const pelisUM = async () => {
    cambioSeccionSearch(hero_container, nav, hero, hero2, list);
    const { results } = await obtenerUM();
    results.forEach(({ poster_path, id }) => {
      const html = `
              <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
              alt="">`;
      const divUM = document.createElement("div");
      divUM.classList.add("swiper-slide", "hero2__img", "imgEvent");
      divUM.innerHTML = html;
      hero2.appendChild(divUM);
      console.log(hero2);
    });
    eventos();
  };
  pelisUM();
});
btntrm.addEventListener("click", () => {
  spinnerLoader()
  const pelisTRM = async () => {
    cambioSeccionSearch(hero_container, nav, hero, hero2, list);
    const { results } = await obtenerTRM();
    results.forEach(({ poster_path, id }) => {
      const html = `
              <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
              alt="">`;
      const divUM = document.createElement("div");
      divUM.classList.add("swiper-slide", "hero2__img", "imgEvent");
      divUM.innerHTML = html;
      hero2.appendChild(divUM);
      console.log(hero2);
    });
    eventos();
  };
  pelisTRM();
});
btntps.addEventListener("click", () => {
  spinnerLoader()
  const pelisPopus = async () => {
    cambioSeccionSearch(hero_container, nav, hero, hero2, list);
    const { results } = await obtenerPP();
    results.forEach(({ poster_path, id }) => {
      const html = `
              <img src="https://image.tmdb.org/t/p/w300/${poster_path}" id="${id}"
              alt="">`;
      const divUM = document.createElement("div");
      divUM.classList.add("swiper-slide", "hero2__img", "imgEvent");
      divUM.innerHTML = html;
      hero2.appendChild(divUM);
      console.log(hero2);
    });
    eventos();
  };
  pelisPopus();
});
home.addEventListener("click", () => {
  spinnerLoader()
  aMovies.disabled = false;
  hero2.innerHTML = "";
  cambioSeccionHome(hero_container, nav, hero, hero2, list);
});

// Creacion HTML - FIN
export const init = () => {
  agregarTopPeliculas();
  agregarUltimasPeliculas();
  agregarSeriesPopulares();
  eventos();
};
