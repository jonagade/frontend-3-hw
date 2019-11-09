const initialStateOfGenres = {
    allGenres: [],
};

export const genres = (state = initialStateOfGenres, action) => {
    switch (action.type) {
        case 'setAllGenres': return {
            ...state,
            allGenres: action.list,
        };
        default: return state;
    }
};
