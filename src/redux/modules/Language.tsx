const LANGUAGE_CHANGE = 'language_change';

export function changeLanguage(language) {
	return {
		type: LANGUAGE_CHANGE,
		payload: { language },
	}
}

const INITIAL_STATE = {
	language: 'en',
};

const Language = (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case LANGUAGE_CHANGE:
			return Object.assign({}, state, {
				language: action.payload.language,
			});
		default:
			return state;
	}
}
export default Language;