import request from 'reqwest';

class WishlistFetcher {
  fetch(email) {
    return request({
      url: `http://api.beta.vtex.com/basedevmkp/masterdata/wishlist/_search?email=${email}`,
      crossOrigin: true
    });
  }
}

export default new WishlistFetcher();
