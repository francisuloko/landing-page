import ReactGa from 'react-ga4';

export function TrackClick(booked) {
  ReactGa.event({
    category: "CTA Button",
    action: "Clicked Book Appointment",
    label: "from " + booked,
  })
}