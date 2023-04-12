import { Helmet } from 'react-helmet-async';
// sections
import { EcommerceAccountOrdersView } from '../../../sections/_e-commerce/view';

// ----------------------------------------------------------------------

export default function EcommerceAccountOrdersPage() {
  return (
    <>
      <Helmet>
        <title>Account: Orders | ZONE UI</title>
      </Helmet>

      <EcommerceAccountOrdersView />
    </>
  );
}
