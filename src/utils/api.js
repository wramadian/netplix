const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODI3ODk0MWEwZTEyM2EzYjA4NDNiNjBmNDAxMDI3NCIsInN1YiI6IjY1ZjE2MmI2NmRlYTNhMDE3Yzc5ODNkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XrHiHcloKpsWsCbH-fI281IXKftjfvq-5rdPVlJonKc",
  },
};

export const getMovieList = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getSeriesList = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
