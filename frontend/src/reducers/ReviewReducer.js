const initialState = {
  reviews: [],
  selectedReview: null
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_REVIEWS':
      return { ...state, reviews: action.reviews };
    case 'REVIEW_ADD':
      return { ...state, reviews: [...state.reviews, action.review] };
    case 'REVIEW_UPDATE':
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review._id === action.review._id ? action.review : review
        )};
    default:
      return state;
  }
}
