import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceWishlistView } from '../../sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceWishlistPage() {
  return (
    <>
      <Helmet>
        <title>Wishlist | ZONE UI</title>
      </Helmet>

      <EcommerceWishlistView />
    </>
  );
}
