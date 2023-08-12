import { create } from "zustand";

interface State {
    cateIds: string[];
    setCateIds: (cate: string[] | ((prev: string[]) => string[])) => void;
}

const updateURLWithGenres = (cate: string[]) => {
    // Convert array to comma-separated string
    const generalString = cate.join('.').toLocaleLowerCase().replace(/ /g, "-");

    const url = new URL(window.location.href);
    if (generalString) {
        url.searchParams.set('categories', generalString);
    } else {
        url.searchParams.delete('categories');
    }

    // Push the new URL into the browser history
    window.history.pushState({}, '', url.toString());
}

export const useProductCategoriesState = create<State>((set, get) => {
    return {
        cateIds: [],
        setCateIds: (genres) => {
            const currentGenreIds = get().cateIds;
            const updatedGenres = typeof genres === 'function' ? genres(currentGenreIds) : genres;
            set({ cateIds: updatedGenres });
            
            // Update the URL with the current genres
            updateURLWithGenres(updatedGenres);
        }
    };
});
