const AUTH_SUCCESS = 'auth_success';
const AUTH_FAIL = 'auth_fail';

const INITIAL_STATE = {
	token: null,
};

const Auth = (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case AUTH_SUCCESS:
			return state;
		case AUTH_FAIL:
			return state;
		default:
			return state;
	}
}
export default Auth;