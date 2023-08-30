import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'; // Import TextField

export default function ElearningMentoriaServicio() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 4 },
        overflow: 'hidden',
        bgcolor: '#f4f4f4', // Background color
      }}
    >
      <Container>
        {/* Tarjeta del Texto */}
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Grid
            item
            xs={12}
            sx={{
              color: '#333', // Text color
              textAlign: 'center',
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography variant="h2" sx={{ mt: 2 }} style={{ color: '#0455BF' }}>
              <span style={{ borderBottom: '7px dotted white' }}>Servicio de mentorias</span>
            </Typography>
            <Box
              sx={{
                mt: 4,
                mb: 3,
                mr: 5,
                ml: 5,
                backgroundColor: '#f0f0f7', // Background color
                borderRadius: '10px',
                padding: '10px', // Increased padding
                textAlign: 'center',
              }}
            >
              <Typography variant="subtitle1">Llena este formulario para ponernos en contacto contigo</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      {/* Tarjeta del Formulario */}
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Grid
            item
            xs={12}
            sx={{
              color: '#333', // Text color
              textAlign: 'center',
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                mt: 1,
                mb: 3,
                mr: 5,
                ml: 5,
                backgroundColor: '#fff', // Background color
                borderRadius: '15px',
                padding: '20px', // Increased padding
                boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.2)', // Softer shadow
                textAlign: 'center',
              }}
            >
            <form noValidate autoComplete="on">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
                sx={{ mt: 2 }}
                InputProps={{
                  style: { backgroundColor: '#fff' }, // Input background color
                }}
              />
              <TextField
                label="Número de Teléfono"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                sx={{ mt: 2 }}
                InputProps={{
                  style: { backgroundColor: '#fff' }, // Input background color
                }}
              />
              <Button
                variant="outlined" // Use contained button style
                size="large"
                color="primary"
                sx={{ mt: 3 }}
                onClick={() => {
                  // Handle form submission here
                }}
              >
                Enviar
              </Button>
            </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
