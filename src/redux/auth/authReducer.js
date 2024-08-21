const initialState = {
    user: null,
    token: null,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'SIGNUP_SUCCESS':
        return { ...state, user: action.payload.user, token: action.payload.token };
      case 'LOGIN_FAILURE':
      case 'SIGNUP_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  