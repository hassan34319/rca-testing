'use client';

import React, { useRef, useState, useEffect } from 'react';

import { Box, Stack, Divider, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';
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
    console.log("SUCCESS")
    return (
    <ElearningMentoriaServicio prod={prod}/>
    )
  }

  if (transactionStatus === "failure") {
    console.log("FAILED")
  }

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
    <div ref={paypal} style={{ width: 'auto', height: 'auto' }} />
    
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

export default PayPalMentor;
