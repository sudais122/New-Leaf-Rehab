import AppointmentBooking from '../components/AppointmentBooking';
import usePageMeta from '../hooks/usePageMeta';

export default function Appointment() {
  usePageMeta(
    'Book an Appointment | New Leaf Rehab Center',
    'Book an appointment for rehabilitation and mental healthcare services in Islamabad.'
  );

  return (
    <main>
      <AppointmentBooking
        onSubmit={(booking) => {
          console.log('Appointment Request:', booking);
        }}
      />
    </main>
  );
}