import ReactGa from 'react-ga4';

export function TrackClick(booked) {
  ReactGa.event({
    category: "CTA Button",
    action: "clicked",
    label: "from " + booked,
  })
}