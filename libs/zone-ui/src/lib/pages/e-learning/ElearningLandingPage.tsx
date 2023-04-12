import { Helmet } from 'react-helmet-async';
// sections
import { ElearningLandingView } from '../../sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningLandingPage() {
  return (
    <>
      <Helmet>
        <title>Landing | ZONE UI</title>
      </Helmet>

      <ElearningLandingView />
    </>
  );
}
