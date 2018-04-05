/**
 * Created by Сергей on 01.04.2018.
 */
import { connect } from 'react-redux';
import Reviews from './components';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export const ReviewSelector = connect(mapStateToProps, mapDispatchToProps)(Reviews);