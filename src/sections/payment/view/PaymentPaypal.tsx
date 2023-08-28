'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useRef, useState, useEffect } from 'react';

import { client } from 'src/app/utils/client';

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

function PayPalCheckout({ prod }: Props) {
  const router = useRouter()
  const session = useSession()
  const email = session.data?.user?.email
  console.log(email, "I was email")
  async function updateOrCreateOrder() {
    const query = `*[_type == "miscursos" && email == $email][0]`;
    const existingOrder = await client.fetch(query, { email });
  
    if (existingOrder) {
      const updatedSlugs = [...existingOrder.course_slugs, prod.description];
      const updatedOrder = {
        ...existingOrder,
        course_slugs: updatedSlugs,
      };
      await client.createOrReplace(updatedOrder);
      console.log('Updated order with new course slug');
    } else {
      // Create a new order document if it doesn't exist
      const newOrder = {
        _type: 'miscursos',
        email,
        course_slugs: [prod.description],
      };
      await client.create(newOrder);
      console.log('Created new order document');
    }
    router.push('/mis-cursos')
  }
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
    const resp = updateOrCreateOrder()
  }

  // if (transactionStatus === "failure") {
  //   return <PaymentFailure />;
  // }

  return (
    <div className="my-auto">
      <h2 className='text-lg'>Total : {prod.amount.value}</h2>
      {/* Added the centering styles */}
      <div ref={paypal} />
    </div>
  );
}

export default PayPalCheckout;
