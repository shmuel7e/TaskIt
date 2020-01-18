import ReviewService from '../services/ReviewService';

export function loadReviews() {
  return async dispatch => {
    try {
      const reviews = await ReviewService.query();
      dispatch(setReviews(reviews));

    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err);
    }
  };
}

export function addReview(review) {
  return async dispatch => {
    try {
      const addedReview = await ReviewService.add(review);
      dispatch(_addReview(addedReview));
    } catch (err) {
      console.log('ReviewActions: err in addReview', err);
    }
  };
}

function setReviews(reviews) {
  return {
    type: 'SET_REVIEWS',
    reviews
  };
}

function _addReview(review) {
  return {
    type: 'REVIEW_ADD',
    review
  };
}
