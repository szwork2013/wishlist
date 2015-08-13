import request from 'reqwest';

class WishlistFetcher {
  fetch(email) {
    return request({
      url: `http://api.beta.vtex.com/basedevmkp/masterdata/wishlist/_search?email=${email}`,
      contentType: 'application/json',
      crossOrigin: true,//core problems
      headers: {
      'X-My-Custom-Header': 'SomethingImportant'//waiting for resources not yet developed
    }
    });
  }
}

export default new WishlistFetcher();
