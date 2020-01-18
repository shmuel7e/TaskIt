import HttpService from './HttpService';

export default {
  add,
  query,
  remove
};

function query() {
  return HttpService.get('review');
}

function remove(reviewId) {
  return HttpService.delete(`review/${reviewId}`);
}
async function add(review) {
  const addedReview  = await HttpService.post(`review`, review);
  return  addedReview
}
