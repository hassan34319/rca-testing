'use client';

import React from 'react';

import ElearningContactForm from '../contact/elearning-contact-form';
import ElearningMentoriasTrading from '../mentorias/elearning-mentorias-trading';

// ----------------------------------------------------------------------

export default function ElearningMentoriasTradingView() {
  return (
    <>
      <ElearningMentoriasTrading />

      <ElearningContactForm />
    </>
  );
}
