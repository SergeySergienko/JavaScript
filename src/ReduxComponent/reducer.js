/**
 * Created by Сергей on 31.03.2018.
 */
 
export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return { ...state, status: action.status, text: action.text, data: action.data  };
	  
    case 'FETCH_COMPLETED':
      return { ...state, status: action.status, text: action.text, data: action.data };
	  
	case 'FETCH_ERROR':
      return { ...state, status: action.status, text: action.text };
	  
    default:
      return state;
    }
};