import { like, dislike } from '../actions/setLikedMovies';

export const clickedLike = (id) => (dispatch) => {
    dispatch(like(id));
};

export const clickedDislike = (id) => (dispatch) => {
    dispatch(dislike(id));
};