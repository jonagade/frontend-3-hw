const initialStateOfLikes = {
    likedMovies: [],
};

export const likes = (state = initialStateOfLikes, action) => {
    switch (action.type) {
        case 'like':
            // pridedam naują palaikintą filmą
            const addedLikedMovies = [...state.likedMovies, action.movies];
            return {
                ...state,
                likedMovies: addedLikedMovies,
            };
        case 'dislike':
            const likedMovies = [...state.likedMovies];
            // išimam dislikintą filmą
            likedMovies.splice(state.likedMovies.indexOf(action.movies), 1);
            return {
                ...state,
                likedMovies,
            };
        default: return state;
    }
};
