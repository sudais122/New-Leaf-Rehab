import { useState } from "react";
import "../styles/AppointmentBooking.css";

// Edit these options whenever you want to add more services.
const serviceOptions = [
  {
    category: "Admission",
    options: [
      "Admission for Suicide and Self-harm Prevention",
      "Addiction Rehabilitation",
      "Psychiatric Admission",
      "Emergency Assessment",
    ],
  },
  {
    category: "Park Society",
    options: [
      "General Consultation",
      "Psychological Assessment",
      "Rehabilitation Consultation",
    ],
  },
  {
    category: "Self-Care",
    options: [
      "Individual Counseling",
      "Psychological Services",
      "Family Support",
      "Stress Management",
    ],
  },
  {
    category: "Child Psychology",
    options: [
      "Child Psychological Assessment",
      "Child Counseling",
      "Behavioral Therapy",
    ],
  },
  {
    category: "Special Needs",
    options: [
      "Developmental Assessment",
      "Special Needs Consultation",
      "Family Guidance",
    ],
  },
  {
    category: "Training & Internships",
    options: [
      "Clinical Psychology Internship",
      "Psychology Internship",
      "Clinical Training Program",
      "Psychological Assessment Training",
      "Counseling Skills Training",
      "Addiction Rehabilitation Training",
      "Workshops & Seminars",
    ],
  },
];
// Generate 15-minute appointment intervals.
const generateTimeSlots = () => {
  const slots = [];

  // Example booking hours: 9 AM to 5 PM.
  for (let minutes = 9 * 60; minutes < 17 * 60; minutes += 15) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    const displayMinute = String(minute).padStart(2, "0");

    slots.push({
      value: `${String(hour).padStart(2, "0")}:${displayMinute}`,
      label: `${displayHour}:${displayMinute} ${period}`,
    });
  }

  return slots;
};

const timeSlots = generateTimeSlots();

const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export default function AppointmentBooking({ onSubmit }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [booking, setBooking] = useState({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
  });

  const updateBooking = (field, value) => {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step === 1 && !booking.service) {
      alert("Please select a service.");
      return;
    }

    if (step === 2 && (!booking.date || !booking.time)) {
      alert("Please select an appointment date and time.");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !booking.firstName.trim() ||
      !booking.lastName.trim() ||
      !booking.email.trim() ||
      !booking.whatsapp.trim()
    ) {
      return;
    }

    if (!e.currentTarget.reportValidity()) return;

    if (onSubmit) {
      onSubmit(booking);
    }

    setSubmitted(true);
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (submitted) {
    return (
      <section className="booking-section">
        <div className="booking-container booking-success">
          <div className="success-icon">✓</div>
          <h2>Appointment Request Submitted!</h2>
          <p>
            Thank you for choosing New Leaf Rehab Center. Your appointment
            request has been received.
          </p>

          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <p>
              <strong>Service:</strong> {booking.service}
            </p>
            <p>
              <strong>Date:</strong> {formatDate(booking.date)}
            </p>
            <p>
              <strong>Time:</strong>{" "}
              {timeSlots.find((slot) => slot.value === booking.time)?.label}
            </p>
            <p>
              <strong>Name:</strong> {booking.firstName} {booking.lastName}
            </p>
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>WhatsApp:</strong> {booking.whatsapp}
            </p>
          </div>

          <button
            className="booking-btn primary-btn"
            onClick={() => {
              setBooking({
                service: "",
                date: "",
                time: "",
                firstName: "",
                lastName: "",
                email: "",
                whatsapp: "",
              });
              setStep(1);
              setSubmitted(false);
            }}
          >
            Book Another Appointment
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="booking-section">
      <div className="booking-container">
        {/* Header */}
        <div className="booking-header">
          <span className="booking-eyebrow">NEW LEAF REHAB CENTER</span>

          <h1>Book Your Appointment</h1>

          <p>
            Take the first step towards a healthier and happier life. Select
            your service and preferred appointment time.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="booking-progress">
          {["Service Selection", "Date & Time", "Your Information"].map(
            (label, index) => {
              const number = index + 1;

              return (
                <div
                  key={label}
                  className={`progress-step ${step >= number ? "active" : ""}`}
                >
                  <div className="progress-number">
                    {step > number ? "✓" : number}
                  </div>

                  <span>{label}</span>
                </div>
              );
            },
          )}
        </div>

        <form className="booking-card" onSubmit={handleSubmit}>
          {/* STEP 1 */}
          {step === 1 && (
            <div className="booking-step">
              <div className="step-heading">
                <span className="step-label">STEP 01</span>
                <h2>Select Your Service</h2>
                <p>
                  Please choose the department or service you would like to
                  book.
                </p>
              </div>

              <div className="service-grid">
                {console.log(
                  "Booking service categories:",
                  serviceOptions.map((group) => group.category),
                )}
                {serviceOptions.map((group) => (
                  <div key={group.category} className="service-group">
                    <label className="field-label">{group.category}</label>

                    {group.options.map((option) => (
                      <button
                        type="button"
                        key={option}
                        className={`service-option ${
                          booking.service === option ? "selected" : ""
                        }`}
                        onClick={() => updateBooking("service", option)}
                      >
                        <span className="service-radio">
                          {booking.service === option && <span />}
                        </span>

                        <span>{option}</span>

                        {booking.service === option && (
                          <span className="service-check">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              <div className="booking-actions">
                <button
                  type="button"
                  className="booking-btn primary-btn"
                  onClick={nextStep}
                  disabled={!booking.service}
                >
                  Continue
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="booking-step">
              <div className="step-heading">
                <span className="step-label">STEP 02</span>
                <h2>Choose Date & Time</h2>
                <p>
                  Select your preferred appointment date and available time
                  slot.
                </p>
              </div>

              <div className="form-field">
                <label htmlFor="appointment-date">Appointment Date</label>

                <input
                  type="date"
                  id="appointment-date"
                  min={getToday()}
                  value={booking.date}
                  onChange={(e) => {
                    updateBooking("date", e.target.value);
                    updateBooking("time", "");
                  }}
                  required
                />

                <small>Previous dates are not available for booking.</small>
              </div>

              {booking.date && (
                <div className="time-selection">
                  <div className="time-heading">
                    <h3>Available Time Slots</h3>
                    <span>15-minute intervals</span>
                  </div>

                  <div className="time-grid">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot.value}
                        className={`time-slot ${
                          booking.time === slot.value ? "selected" : ""
                        }`}
                        onClick={() => updateBooking("time", slot.value)}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>

                  <p className="time-note">
                    <span>●</span>
                    Sample time slots. Actual availability requires appointment
                    scheduling integration.
                  </p>
                </div>
              )}

              <div className="booking-actions">
                <button
                  type="button"
                  className="booking-btn secondary-btn"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>

                <button
                  type="button"
                  className="booking-btn primary-btn"
                  onClick={nextStep}
                  disabled={!booking.date || !booking.time}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="booking-step">
              <div className="step-heading">
                <span className="step-label">STEP 03</span>
                <h2>Your Information</h2>
                <p>
                  Please provide your contact information to complete your
                  appointment request.
                </p>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={booking.firstName}
                    onChange={(e) => updateBooking("firstName", e.target.value)}
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter last name"
                    value={booking.lastName}
                    onChange={(e) => updateBooking("lastName", e.target.value)}
                    autoComplete="family-name"
                    required
                  />
                </div>

                <div className="form-field full-width">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={booking.email}
                    onChange={(e) => updateBooking("email", e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-field full-width">
                  <label htmlFor="whatsapp">WhatsApp Number *</label>
                  <input
                    id="whatsapp"
                    type="tel"
                    placeholder="+92 300 0000000"
                    value={booking.whatsapp}
                    onChange={(e) => updateBooking("whatsapp", e.target.value)}
                    autoComplete="tel"
                    required
                  />
                  <small>
                    Please enter a WhatsApp number where we can contact you.
                  </small>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="booking-summary">
                <h3>Appointment Summary</h3>

                <div className="summary-row">
                  <span>Selected Service</span>
                  <strong>{booking.service}</strong>
                </div>

                <div className="summary-row">
                  <span>Appointment Date</span>
                  <strong>{formatDate(booking.date)}</strong>
                </div>

                <div className="summary-row">
                  <span>Appointment Time</span>
                  <strong>
                    {
                      timeSlots.find((slot) => slot.value === booking.time)
                        ?.label
                    }
                  </strong>
                </div>
              </div>

              <div className="booking-actions">
                <button
                  type="button"
                  className="booking-btn secondary-btn"
                  onClick={() => setStep(2)}
                >
                  ← Back
                </button>

                <button type="submit" className="booking-btn primary-btn">
                  Confirm Appointment →
                </button>
              </div>

              <p className="privacy-note">
                Your personal information will be handled confidentially.
              </p>
            </div>
          )}
        </form>

        <div className="booking-footer-note">
          <span>New Leaf Rehab Center · Islamabad</span>
          <span>Professional Care · Compassion · Recovery</span>
        </div>
      </div>
    </section>
  );
}
