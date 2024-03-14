import { create } from "zustand";

const useMovieStore = create((set) => ({
  selectedMovie: {},
  keyword: '',
  handleSetSelectedMovie: (data) =>
    set((state) => ({
      ...state,
      selectedMovie: data,
    })),
  resetSelectedMovie: () =>
    set((state) => ({
      ...state,
      selectedMovie: {},
    })),
  setKeyword: (key) =>
    set((state) => ({
      ...state,
      keyword: key,
    })),
}));

export default useMovieStore;
