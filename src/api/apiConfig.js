const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4c658433e31a6b07e2e63748a3b6ca80",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
