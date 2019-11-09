import axios from 'axios';
import { setAllGenres } from '../actions/setAllGenres';
import { endpoints } from '../../config';

export const getAllGenres = () => (dispatch) => {
    axios.get(endpoints.genres()).then(response => {
        dispatch(setAllGenres(response.data.genres));
    })
};
