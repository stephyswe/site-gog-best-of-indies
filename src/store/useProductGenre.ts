import { create } from "zustand";

interface State {
    genreIds: string[];
    setGenreIds: (genres: string[] | ((prev: string[]) => string[])) => void;
}

const updateURLWithGenres = (genres: string[]) => {
    // Convert array to comma-separated string
    const genreString = genres.join('.').toLocaleLowerCase().replace(/ /g, "-");

    const url = new URL(window.location.href);
    if (genreString) {
        url.searchParams.set('genres', genreString);
    } else {
        url.searchParams.delete('genres');
    }

    // Push the new URL into the browser history
    window.history.pushState({}, '', url.toString());
}

export const useProductGenreState = create<State>((set, get) => {
    return {
        genreIds: [],
        setGenreIds: (genres) => {
            const currentGenreIds = get().genreIds;
            const updatedGenres = typeof genres === 'function' ? genres(currentGenreIds) : genres;
            set({ genreIds: updatedGenres });
            
            // Update the URL with the current genres
            updateURLWithGenres(updatedGenres);
        }
    };
});
