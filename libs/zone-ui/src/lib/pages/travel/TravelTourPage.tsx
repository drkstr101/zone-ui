import { Helmet } from 'react-helmet-async';
// sections
import { TravelTourView } from '../../sections/_travel/view';

// ----------------------------------------------------------------------

export default function TravelTourPage() {
  return (
    <>
      <Helmet>
        <title>Italian Delights - 12 Days | ZONE UI</title>
      </Helmet>

      <TravelTourView />
    </>
  );
}
