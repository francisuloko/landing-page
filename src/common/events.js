import ReactGa from 'react-ga4';

export function TrackClick(booked) {
  ReactGa.event({
    category: "CTA Button",
    action: "Book Appointment",
    label: "from " + booked,
  })
}