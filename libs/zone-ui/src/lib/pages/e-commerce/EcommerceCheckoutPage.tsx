import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceCheckoutView } from '../../sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Checkout | ZONE UI</title>
      </Helmet>

      <EcommerceCheckoutView />
    </>
  );
}
