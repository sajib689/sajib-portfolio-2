'use client';

import { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }
    setError('');
    console.log('Logging in with:', { email, password });
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#121212', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ padding: 6, textAlign: 'center', backgroundColor: '#1e1e1e', color: '#fff', width: '100%', maxWidth: '500px' }}>
        <Typography sx={{marginBottom: "25px"}} variant="h5" gutterBottom>
         Admin Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error && !email ? 'Email is required' : ''}
            InputProps={{ style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' }, label: { color: '#ccc' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#555' }, '&:hover fieldset': { borderColor: '#777' } } }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error && !password ? 'Password is required' : ''}
            InputProps={{ style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' }, label: { color: '#ccc' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#555' }, '&:hover fieldset': { borderColor: '#777' } } }}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ padding: '10px', fontSize: '16px' }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
