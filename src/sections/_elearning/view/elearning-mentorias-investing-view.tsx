'use client';

import React from 'react';

import ElearningContactForm from '../contact/elearning-contact-form';
import ElearningMentoriasInvesting from '../mentorias/elearning-mentorias-investing';

// ----------------------------------------------------------------------

export default function ElearningMentoriasInvestingView() {
  return (
    <>
      <ElearningMentoriasInvesting />

      <ElearningContactForm />
    </>
  );
}
