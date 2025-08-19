import React, { useState } from 'react';
import {
  Avatar as MUIAvatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  GlobalStyles,
} from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import useInputValidation from '../hooks/useInputValidation';
import { usernameValidator } from '../utils/validators';
import useFileHandler from '../hooks/useFileHandler';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleForm = () => setIsSignUp((prev) => !prev);

  const name = useInputValidation('');
  const bio = useInputValidation('');
  const username = useInputValidation('', usernameValidator);
  const password = useInputValidation('');
  const confirmPassword = useInputValidation('', (value) =>
    value !== password.value ? 'Passwords do not match' : ''
  );
  

  const avatar = useFileHandler('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const backgroundImage = isMobile
    ? 'url("https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80")'
    : 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1950&q=80")';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      
      if (confirmPassword.error || username.error) {
        
        return;
      }
      console.log('Signing up with', {
        name: name.value,
        bio: bio.value,
        username: username.value,
        password: password.value,
        avatar: avatar.preview,
      });
      // TODO: call signup API
    } else {
      // Login logic
      console.log('Logging in with', {
        username: username.value,
        password: password.value,
      });
      // TODO: call login API
    }
  };

  return (
    <>
      <GlobalStyles
        styles={{
          html: { margin: 0, padding: 0, height: '100%', boxSizing: 'border-box' },
          '*, *::before, *::after': { boxSizing: 'inherit' },
          body: { margin: 0, padding: 0, height: '100%', overflow: 'hidden', background: '#000' },
          '#root': { height: '100%' },
        }}
      />

      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            px: 1,
          }}
        >
          <Paper
            elevation={8}
            sx={{
              width: '100%',
              maxWidth: 400,
              borderRadius: 3,
              p: 3,
              pt: 2,
              backdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
              color="white"
              textAlign="center"
              sx={{ mb: 0.5 }}
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </Typography>

            {isSignUp && (
              <Stack
                position="relative"
                width={96}
                height={96}
                margin="0 auto"
                sx={{ mb: 1 }}
              >
                <MUIAvatar
                  sx={{ width: 96, height: 96, bgcolor: 'white', color: 'black' }}
                  src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    ':hover': { bgcolor: 'rgba(0,0,0,0.8)' },
                  }}
                  component="label"
                  size="small"
                >
                  <CameraAltIcon fontSize="small" />
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                </IconButton>
                {avatar.error && (
                  <Typography
                    color="error"
                    variant="caption"
                    sx={{ mt: 1, textAlign: 'center', display: 'block' }}
                  >
                    {avatar.error}
                  </Typography>
                )}
              </Stack>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {isSignUp && (
                <>
                  <TextField
                    required
                    label="Name"
                    size="small"
                    variant="outlined"
                    value={name.value}
                    onChange={name.changeHandler}
                    InputProps={{ sx: { color: 'white' } }}
                    InputLabelProps={{ sx: { color: '#ccc' } }}
                  />
                  <TextField
                    required
                    label="Bio"
                    size="small"
                    variant="outlined"
                    value={bio.value}
                    onChange={bio.changeHandler}
                    InputProps={{ sx: { color: 'white' } }}
                    InputLabelProps={{ sx: { color: '#ccc' } }}
                  />
                </>
              )}

              <TextField
                required
                label="Username"
                size="small"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: '#ccc' } }}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                label="Password"
                type="password"
                size="small"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: '#ccc' } }}
              />

              {isSignUp && (
                <>
                  <TextField
                    required
                    label="Confirm Password"
                    type="password"
                    size="small"
                    variant="outlined"
                    value={confirmPassword.value}
                    onChange={confirmPassword.changeHandler}
                    InputProps={{ sx: { color: 'white' } }}
                    InputLabelProps={{ sx: { color: '#ccc' } }}
                  />
                  {confirmPassword.error && (
                    <Typography color="error" variant="caption">
                      {confirmPassword.error}
                    </Typography>
                  )}
                </>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 1, bgcolor: '#2196f3', ':hover': { bgcolor: '#1976d2' } }}
              >
                {isSignUp ? 'SIGN UP' : 'LOGIN'}
              </Button>

              <Typography textAlign="center" mt={1} mb={0} color="white" variant="body2">
                OR
              </Typography>

              <Button
                fullWidth
                variant="text"
                onClick={toggleForm}
                sx={{ color: '#fff', textTransform: 'none' }}
              >
                {isSignUp ? 'Login Instead' : 'Sign Up Instead'}
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Login;
