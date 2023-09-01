'use client'

import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

import Player from 'src/components/player';

type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};

type Props = {
  setProd: (prod: Prod) => void;
  setCheckout: (value: boolean) => void;
};

const cardData = [
    {
      plan: '1 mes',
      price: '250',
      features: [
        'Acceso a contenido exclusivo',
        'Soporte por correo electrónico',
        'Características excepcionales'
      ],
      buttonText: 'Explora este mes',
      buttonLink: '/plan-basico',
    },
    {
      plan: '3 meses',
      price: '675',
      features: [
        'Acceso a experiencias ',
        'Soporte prioritario por email',
      ],
      buttonText: 'Obtener 3 meses',
      buttonLink: '/plan-profesional',
    },
    {
      plan: '6 meses',
      price: '1250',
      features: [
        'Acceso exclusivo a contenido',
        'Soporte prioritario 24/7',
        'Características premium'
      ],
      buttonText: 'Obtener 6 meses',
      buttonLink: '/plan-ultimate',
    },
  ];
  

  export default function ElearningMentoriasTrading({ setProd, setCheckout }: Props) {
    const handleOpenCheckout = (card: {
      plan: string;
      price: string;
      features: string[];
      buttonText: string;
      buttonLink: string;
    }) => {
      setProd({
        description: card.plan,
        amount: {
          currency_code: 'USD',
          value: Number(card.price),
        },
      });
      setCheckout(true);
    };
    return (
      <Box
        sx={{
          py: { xs: 4, md: 4 },
          overflow: 'hidden',
          bgcolor: 'primary.light',
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="center" alignItems="center" flexDirection="column">
            <Grid
              item
              xs={12}
              sx={{
                color: 'grey.800',
                textAlign: 'center',
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography variant="h2" sx={{ mt: 0 }}>
              <span style={{ borderBottom: '5px dotted white' }}>Mentoring Trading</span>
            </Typography>
            <Box
              sx={{
                mt: 3,
                mb: 3,
                mr: 5,
                ml: 5,
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '10px',
                boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
              }}
            >
              <Typography>
                Toda nuestra tecnología y experiencia a tu servicio para diseñar, optimizar y maximizar los resultados de tu negocio como trader.
              </Typography>
              </Box>
              <Grid item xs={12} sx={{ mb: 6 }}>
              <Player
  controls
  url="https://www.dropbox.com/s/7cx04n8rr4w5rbg/video_02.mp4?dl=0"
  style={{
    display: "block",
    margin: "0 auto",
    maxWidth: "70%",
  }}
      />
              </Grid>
  
              <Grid container spacing={3}>
                {cardData.map((card, index) => (
                  <Grid key={index} item xs={12} sm={4}>
                    <Card
                      sx={{
                        backgroundColor: 'white',
                        borderColor: '#eceff1',
                        borderRadius: '15px',
                        boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.2)', 
                        transition: '400ms background ease',
                        '&:hover': {
                          backgroundColor: 'hsla(var(--hsl), 10)',
                          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                      }}
                    >
                      <CardContent>
                        <div>
                          <Typography variant="h6" component="div" sx={{ fontSize: '1.05em', fontWeight: 600 }}>
                            <span style={{ fontSize: '0.8em', fontWeight: 300 }}>$ </span>
                            {card.price} <span style={{ fontSize: '0.8em', fontWeight: 300 }}>USD</span>
                          </Typography>
                          <Typography variant="h3" component="div" sx={{ fontSize: '1.75em', fontWeight: 700 }}>
                            {card.plan}
                          </Typography>
                          <ul style={{ listStyle: 'none', paddingInlineStart: 0, marginTop: '10px' }}>
                            {card.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>
                                <span>{feature}</span>
                                {featureIndex !== card.features.length - 1 && (
                                  <hr style={{ borderTop: '1px solid #e0e0e0', marginTop: '8px' }} />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <Button onClick={() => handleOpenCheckout(card)}
                      variant="outlined" size="large" color="primary" 
                      style={{ textTransform: 'none'}} 
                      href={card.buttonLink} 
                      sx={{ mt: 1 , ml: 3, mr: 3, mb: 2, fontSize: '1.2em',}}
                    >
                        {/* The button here should take you to the payment of the card */}

                        {card.buttonText}
                      </Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
  