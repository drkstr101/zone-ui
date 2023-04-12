import { Helmet } from 'react-helmet-async';
// sections
import { PaymentView } from '../sections/payment/view';

// ----------------------------------------------------------------------

export default function PaymentPage() {
  return (
    <>
      <Helmet>
        <title>Payment | ZONE UI</title>
      </Helmet>

      <PaymentView />
    </>
  );
}
