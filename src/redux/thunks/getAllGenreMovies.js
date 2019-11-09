import axios from 'axios';
import { setAllGenreMovies } from '../actions/setAllGenreMovies';
import {endpoints } from '../../config';

export const getAllGenreMovies = (id) => (dispatch) => {
    axios.get(endpoints.genreMovies(id)).then(response => {
        dispatch(setAllGenreMovies(response.data.results));
    })
};
