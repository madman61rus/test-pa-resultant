import * as types from './actionTypes';

const initState = {
  stock: [],
  isFetching: false,
  success: false,
  errors: []
} 

export default function currenciesReducer(state = initState, action) {
  switch (action.type) {
    case types.ADD_CURRANCIES:
      return {
            ...state,
            isFetching: false,
            success: true,
            stock: action.payload
        }
    case types.CURRANCIES_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case types.CURRANCIES_SET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: action.payload
      }
    case types.CURRANCIES_SET_ERRORS:
      return {
        ...state,
        isFetching: false,
        success: false,
        errors: action.payload
      }

    default:
      return state
  }
}