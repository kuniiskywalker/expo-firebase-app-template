import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
  email: "",
  password: "",
  displayName: "",
  loading: false,
  loggedIn: ""
}
 
const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'change_email':
      return { ...state, email: action.payload }
    case 'change_password':
      return { ...state, password: action.payload }
    case 'change_display_name':
        return { ...state, displayName: action.payload }
    case 'signin_start':
      return { ...state, loading: true }
    case 'signin_end':
      return { ...state, loading: false }
    case 'signin_success':
      return { ...state, loggedIn: "ログイン中" }
    case 'signin_fail':
      return { ...state, loggedIn: ""}
    default:
      return state;
  }
};
 
export default combineReducers({
  auth: AuthReducer
});
