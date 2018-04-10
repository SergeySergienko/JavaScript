/**
 * Created by Сергей on 01.04.2018.
 */
import { connect } from 'react-redux';
import Reviews from './components';
import {changeReview} from './actions';

const mapStateToProps = (state) => {
	return state;
};
const mapDispatchToProps = (dispatch) => {
	return {
		   next: () => dispatch(changeReview(1)),
		   prev: () => dispatch(changeReview(-1))
	};
};

export const ReviewSelector = connect(mapStateToProps, mapDispatchToProps)(Reviews);