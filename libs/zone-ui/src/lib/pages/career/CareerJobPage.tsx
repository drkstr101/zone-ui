import { Helmet } from 'react-helmet-async';
// sections
import { CareerJobView } from '../../sections/_career/view';

// ----------------------------------------------------------------------

export default function CareerJobPage() {
  return (
    <>
      <Helmet>
        <title>Marketing Coordinator | ZONE UI</title>
      </Helmet>

      <CareerJobView />
    </>
  );
}
