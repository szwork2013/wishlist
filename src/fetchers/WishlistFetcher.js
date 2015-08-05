import request from 'reqwest';

class WishlistFetcher {
  fetch(query) {
    return request({
      url: `/load/${query}`,
      type: 'json'
    });
  }
}

export default new WishlistFetcher();
