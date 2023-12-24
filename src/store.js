import { createStore } from 'redux';

const initialState = {
  variables: {
    departureAirport: null,
    departureDate: null,
    arrivalAirport: null,
    returnDate: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DepartureAirport':
      return {
        ...state,
        variables: {
          ...state.variables,
          departureAirport: action.payload,
        },
      };
    case 'DepartureDate':
      return {
        ...state,
        variables: {
          ...state.variables,
          departureDate: action.payload,
        },
      };
    case 'ArrivalAirport':
      return {
        ...state,
        variables: {
          ...state.variables,
          arrivalAirport: action.payload,
        },
      };
    case 'ReturnDate':
      return {
        ...state,
        variables: {
          ...state.variables,
          returnDate: action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
