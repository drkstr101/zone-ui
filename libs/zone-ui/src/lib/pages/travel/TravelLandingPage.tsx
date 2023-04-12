import { Helmet } from 'react-helmet-async';
// sections
import { TravelLandingView } from '../../sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelLandingPage() {
  return (
    <>
      <Helmet>
        <title>Landing | ZONE UI</title>
      </Helmet>

      <TravelLandingView />
    </>
  );
}
