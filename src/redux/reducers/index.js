import { combineReducers } from 'redux';
import { cards } from './cards';
import { genres } from './genres';
import { likes } from './likes';

export const rootReducer = combineReducers({
    cards,
    genres,
    likes,
});