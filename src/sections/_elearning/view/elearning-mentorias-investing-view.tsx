'use client';

import React, { useState } from 'react';

import PayPalMentor from 'src/sections/payment/view/PaymentMentor';

import ElearningContactForm from '../contact/elearning-contact-form';
import ElearningMentoriasInvesting from '../mentorias/elearning-mentorias-investing';

// ----------------------------------------------------------------------
type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};

export default function ElearningMentoriasInvestingView() {
  const [checkout, setCheckout] = useState(false);
  const [prod, setProd] = useState<Prod>({
    description: '',
    amount: {
      currency_code: '',
      value: 0,
    },
  });

  const paypalContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // This will make sure the container takes full vertical height
    width: '100vw',
    margin: '0 auto',
  };
  return (
    <>
      {checkout && (
        <div style={paypalContainerStyles}>
          <PayPalMentor prod={prod} />
        </div>
      )}
      {!checkout && (
        <>
          <ElearningMentoriasInvesting setProd={setProd} setCheckout={setCheckout} />

          <ElearningContactForm />
        </>
      )}
    </>
  );
}
