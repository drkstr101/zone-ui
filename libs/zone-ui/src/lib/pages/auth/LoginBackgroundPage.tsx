import { Helmet } from 'react-helmet-async';
// sections
import { LoginBackgroundView } from '../../sections/auth/view';

// ----------------------------------------------------------------------

export default function LoginBackgroundPage() {
  return (
    <>
      <Helmet>
        <title>Login Background | ZONE UI</title>
      </Helmet>

      <LoginBackgroundView />
    </>
  );
}
