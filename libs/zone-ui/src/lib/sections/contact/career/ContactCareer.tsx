// _mock
import { _offices } from '../../../_mock';
//
import ContactMap from '../map';
import ContactCareerForm from './ContactCareerForm';
import ContactCareerInfo from './ContactCareerInfo';

// ----------------------------------------------------------------------

export default function ContactCareer() {
  return (
    <>
      <ContactCareerInfo />

      <ContactMap offices={_offices} />

      <ContactCareerForm />
    </>
  );
}
