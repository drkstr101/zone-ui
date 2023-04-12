import { Helmet } from 'react-helmet-async';
// components
import { RegisterCoverView } from '../../sections/auth/view';

// ----------------------------------------------------------------------

export default function RegisterCoverPage() {
  return (
    <>
      <Helmet>
        <title>Register Cover | ZONE UI</title>
      </Helmet>

      <RegisterCoverView />
    </>
  );
}
