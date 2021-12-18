export const SHOW = 'modal/SHOW';
export const DROP = 'modal/DROP';

export const show = ({content}) => ({
	type: SHOW,
	payload: content
});

export const drop = () => ({
	type: DROP
});

export const initialState = {
	isVisible: false,
	content: null
};

const modal = (state=initialState, action) => {
	switch (action.type) {
		case SHOW:
			return { 
				isVisible : true,
        content: action.payload
			};
    case DROP:
      return {
        isVisible: false,
        content: null
      };
		default:
			return state;
	}
};

export default modal;