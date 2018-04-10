/**
 * Created by Сергей on 31.03.2018.
 */


export const CHANGE_REVIEW = 'CHANGE_REVIEW'
export function changeReview(step) {
	return {
		type: CHANGE_REVIEW,
		step: step
	}
}
 
export const FETCH_STARTED = 'FETCH_STARTED'
export function fetchStarted(amount) {
  return {
    type: FETCH_STARTED,
	status: 'loading...',
	text: 'Data fetching gets started.',
	data: [],
	startPhoto: 0,
	photosAmount: amount
  }
}

export const FETCH_COMPLETED = 'FETCH_COMPLETED'
export function fetchCompleted(data) {
  return {
    type: FETCH_COMPLETED,
	status: 'completed',
	text: 'All is OK !',
	data
  }
}

export const FETCH_ERROR= 'FETCH_ERROR'
export function fetchError(text) {
  return {
    type: FETCH_ERROR,
	status: 'error',
	text
  }
}

export function fetchAll(amount) {
  return function (dispatch) {
    dispatch(fetchStarted(amount));

    return fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(json => dispatch(fetchCompleted(json.results)))
      .catch(() => dispatch(fetchError('Oops!... Something has gone wrong...')));
  }
}