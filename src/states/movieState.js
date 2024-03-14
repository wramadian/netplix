import { create } from "zustand";

const useMovieStore = create((set) => ({
  selectedMovie: {},
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
}));

export default useMovieStore;
