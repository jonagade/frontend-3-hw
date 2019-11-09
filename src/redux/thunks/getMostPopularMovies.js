import axios from 'axios';
import { setMostPopularMovies } from '../actions/setMostPopularMovies';
import { endpoints } from '../../config';

export const getMostPopularMovies = () => (dispatch) => {
    axios.get(endpoints.mostPopularMovies()).then((response) => {
        dispatch(setMostPopularMovies(response.data.results));
    });
};
