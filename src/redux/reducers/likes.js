const initialStateOfLikes = {
    likedMovies: [],
};

export const likes = (state = initialStateOfLikes, action) => {
    switch (action.type) {
        case 'like':
            // pridedam naują palaikintą filmą
            const addedLikedMovies = [...state.likedMovies, action.movie];
            return {
                ...state,
                likedMovies: addedLikedMovies,
            };
        case 'dislike':
            const likedMovies = [...state.likedMovies];
            // išimam dislikintą filmą
            likedMovies.splice(state.likedMovies.indexOf(action.movie), 1);
            return {
                ...state,
                likedMovies,
            };
        default: return state;
    }
};
