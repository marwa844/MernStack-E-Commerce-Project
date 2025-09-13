import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { Alert, Button, Container, Typography } from '@mui/material';
import { loginFetch } from '../Api/user';
import { useAuth } from '../context/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginApp() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const [error, SetError] = React.useState("")
  const [success, SetSuccess] = React.useState("")




  const emailRef = React.useRef<HTMLInputElement>(null);


  const passwordRef = React.useRef<HTMLInputElement>(null);


  const submit = async () => {

    try {
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;


      if (!email || !password) {
        SetError("Please fill all fields");
        SetSuccess("")
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        SetError("Please enter a valid email address");
        return;
      }

      // fetch api register
      const data = await loginFetch({ email, password });
      if (!data) {
        SetError("No Token exit");
        SetSuccess("")

        return;
      }
      auth?.login( email, data);
      SetSuccess("Successfully Login");
      SetError("");
      if ( emailRef.current  && passwordRef.current) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }
      navigate("/");
    }

    catch (err: unknown) {
      if (err instanceof Error) {
        SetError(err.message);
      } else {
        SetError("An unknown error occurred");
      }
      SetSuccess("");
    }

  }

  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "90vh" }} >
      <Box sx={{ display: 'flex', flexDirection: "column", flexWrap: 'wrap', alignItems: "center", justifyContent: "center", mt: 2, gap: 3, border: 1, color: "#bebebe", borderRadius: 2, width: "300px", margin: "20px auto", padding: 2 }}>
        <Typography variant='h3'>Login</Typography>
        <div>
          {error && <Alert severity="error">{error} </Alert>}
          {success && <Alert severity="success">{success} </Alert>
          }
        </div>
      
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

          <TextField required id="email" label="Email" type='email' variant="standard" name='email' inputRef={emailRef} />
        </Box>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            required
            id="password"
            name='password'
            inputRef={passwordRef}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button variant="contained" onClick={submit} > Register</Button>

      </Box>
    </Container>

  )
}
