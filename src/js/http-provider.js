export const obtenerUltimasPeliculas = async () => {
  try {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US"
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const obtenerTopPeliculas = async () => {
  try {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US"
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const obtenerPeliculasPopulares = async () => {
  try {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US"
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const obtenerDatosID = async (id) => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4ca59c5dedbecff899a790a9aae37660`
    );
    const data = await resp.json();
    const resp2 = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US`
    );
    const data2 = await resp2.json();
    return { data, data2 };
  } catch (error) {
    throw error;
  }
};
export const obtenerDatosIDS = async (id) => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=4ca59c5dedbecff899a790a9aae37660`
    );
    const data = await resp.json();
    const resp2 = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US`
    );
    const data2 = await resp2.json();
    return { data, data2 };
  } catch (error) {
    throw error;
  }
};

export const obtenerUM = async () => {
  const resp = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US&page=1"
  );
  const data = await resp.json();
  return await data;
};
export const obtenerMovies = async () => {
  const resp = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US&page=1"
  );
  const data = await resp.json();
  const resp2 = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US&page=2"
  );
  const data2 = await resp2.json();
  return {data, data2};
};
export const obtenerTRM = async () => {
  const resp = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US&page=1"
  );
  const data = await resp.json();
  return await data;
};
export const obtenerPP = async () => {
  const resp = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US"
  );
  const data = await resp.json();
  return await data;
};
export const obtenerSP = async () => {
  const resp = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US&page=1"
  );
  const data = await resp.json();
  return await data;
};

export const obtenerPeliIndividual = async (name) => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4ca59c5dedbecff899a790a9aae37660&language=es&query=${name}`
    );
    
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const viewTrailerMovie = async(id) => {
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US`);
        const data = await resp.json()
        return data
    } catch (error) {
     throw error   
    }
}
export const viewTrailerSerie = async(id) => {
  try {
      const resp = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=4ca59c5dedbecff899a790a9aae37660&language=en-US`);
      const data = await resp.json()
      return data
  } catch (error) {
   throw "No se cargo el link de redireccionamiento de forma optima, vuelva a intentarlo"   
  }
}