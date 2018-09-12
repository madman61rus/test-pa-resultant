import * as types from './actionTypes';
import axios from 'axios';
import {SERVER_URL,GET_STOCK} from '../../settings/urls';

const curranciesIsFetching = (state) => {
    return {
        type: types.CURRANCIES_FETCHING,
        payload: state
    }
}

const fetchCurranciesSuccess = (currancies) => {
    return {
        type: types.ADD_CURRANCIES,
        payload: currancies
    }
}

const curranciesFetchingErrors = (errors) => {
    return {
        type: types.CURRANCIES_SET_ERRORS,
        payload: errors
    }
}


export const fetchCurrancies = () => {
    return dispatch => {
        dispatch(curranciesIsFetching(true))

        const fullUrl = SERVER_URL + GET_STOCK;

        axios.get(fullUrl)
            .then((response) => {
                dispatch(fetchCurranciesSuccess(response.data.stock));
            }).catch((error) => {
            dispatch(curranciesFetchingErrors(errors))
        });

    }

}