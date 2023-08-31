'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useRef, useState, useEffect } from 'react';

import { client } from 'src/app/utils/client';
import ElearningMentoriaServicio from 'src/sections/_elearning/mentorias/elearning-mentorias-servicio';

type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};

type Props = {
  prod: Prod;
};

function PayPalMentor({ prod }: Props) {

  const paypal = useRef<HTMLDivElement | null>(null);
  const [transactionStatus, setTransactionStatus] = useState('');

  useEffect(() => {
    if (window.paypal && paypal.current) {
      window.paypal
        .Buttons({
          createOrder: (data: any, actions: any, err: any) =>
            actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [prod],
            }),
          onApprove: async (data: any, actions: any) => {
            const order = await actions.order.capture();

            console.log('success', order);
            setTransactionStatus('success');
          },
          onError: (err: any) => {
            console.log(err);
            setTransactionStatus('failure');
          },
        })
        .render(paypal.current);
    }
  }, [prod]);

  if (transactionStatus === "success") {
    return (
    <ElearningMentoriaServicio prod={prod}/>
    )
  }

  if (transactionStatus === "failure") {
    console.log("FAILED")
  }

  return (
    <div className="my-auto">
      <h2 className='text-lg'>Total : {prod.amount.value}</h2>
      {/* Added the centering styles */}
      <div ref={paypal} />
    </div>
  );
}

export default PayPalMentor;
