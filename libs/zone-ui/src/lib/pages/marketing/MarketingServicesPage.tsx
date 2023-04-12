import { Helmet } from 'react-helmet-async';
// sections
import { MarketingServicesView } from '../../sections/_marketing/view';

// ----------------------------------------------------------------------

export default function MarketingServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | ZONE UI</title>
      </Helmet>

      <MarketingServicesView />
    </>
  );
}
