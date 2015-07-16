import storefront from 'storefront';
import Hello from './components/Hello';
import Menu from './components/header/Menu';

storefront.export('WishlistPage@vtex.wishlist', Menu);
storefront.export('WishlistPage@vtex.wishlist', Hello);