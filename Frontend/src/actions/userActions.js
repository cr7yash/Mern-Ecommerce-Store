import { USER_SIGNIN_REQUEST } from '../constants/userConstants';
export const signin = (email, password) => async (dispatch) => {
	dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
};
