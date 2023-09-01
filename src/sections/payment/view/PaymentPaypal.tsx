'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useRef, useState, useEffect } from 'react';

import { LoadingButton } from '@mui/lab';
import { Label } from '@mui/icons-material';
import { Box, Stack, Switch, Divider, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';
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
  
<Box
sx={{
  p: 5,
  borderRadius: 2,
  bgcolor: 'background.neutral',

}}
>
<Typography variant="h5" sx={{ mb: 5 }}>
  Resumen
</Typography>



<Stack spacing={2.5}>

<Stack direction="row" alignItems="center" justifyContent="space-between">

<Typography color="primary" variant="inherit">{prod.description}</Typography>
</Stack>
<Divider sx={{ borderStyle: 'dashed' }} />

  <Stack spacing={1} direction="row" justifyContent="flex-end">
    <Typography variant="h5">$</Typography>

    <Typography variant="h3">{prod.amount.value}</Typography>

    <Typography component="span" sx={{ mb: 1, alignSelf: 'center', color: 'text.secondary' }}>
      /usd
    </Typography>
  </Stack>

</Stack>

<Typography
  component="div"
  variant="caption"
  sx={{ color: 'text.secondary', mt: 1, mb:5, textAlign: 'right' }}
>
  * Más impuestos aplicables
</Typography>
  <div ref={paypal} />

<Stack alignItems="center" spacing={1}>
  <Stack direction="row" alignItems="center" spacing={1}>
    <Iconify icon="carbon:security" sx={{ mt:3, color: 'success.main' }} />
    <Typography variant="subtitle2">Pago seguro con PayPal</Typography>
  </Stack>

  <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
  Este es un pago seguro, encriptado SSL de 128 bits
  </Typography>
</Stack>
</Box>
  );
}

export default PayPalCheckout;
