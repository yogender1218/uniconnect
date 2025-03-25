import { useState, useEffect } from 'react';
import styles from './AuthenticationForm.module.css';
import {
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Radio,
  Notification,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import Lottie from "lottie-react";
import animationData from "../assets/sinup.json";
import { useNavigate } from 'react-router-dom';

export function AuthenticationFormS(props) {
  const [authType, setAuthType] = useState('register'); // 'register' or 'login'
  const [role, setRole] = useState('');
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length >= 6 ? null : 'Password must have at least 6 characters'),
      username: (val) => (val ? null : 'Username is required'),
    },
  });

  const handleNext = () => {
    if (role) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    const url = authType === 'register' ? '/api/register' : '/api/login';
    const body = authType === 'register'
      ? { username: form.values.username, email: form.values.email, password: form.values.password, role }
      : { username: form.values.username, password: form.values.password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        alert(authType === 'register' ? 'Registration Successful!' : 'Login Successful!');
      } else {
        setErrorMessage(data.error || 'Authentication failed');
      }
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (isAuthenticated) {
    return (
      <div className={styles.container}>
        <Paper radius="md" p="xl" withBorder {...props} style={{ width: '55vw', border: 'none', backgroundColor: 'var(--bg-color)' }}>
          <Text size="lg" fw={500}>You are already logged in!</Text>
          <Button className={styles.logoutButton} onClick={() => { localStorage.removeItem('token'); setIsAuthenticated(false); }}>
            Logout
          </Button>
        </Paper>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Lottie animationData={animationData} loop autoplay style={{ width: '50vw', height: '20%' }} />
      <Paper radius="md" p="xl" withBorder {...props} style={{ width: '55vw', border: 'none', backgroundColor: 'var(--bg-color)' }}>
        <Text size="lg" fw={500}>
          {authType === 'register' ? 'Register on UniConnect' : 'Welcome Back to UniConnect'}
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl" disabled style={{backgroundColor:'var(--blur-bg-color)',borderColor:'var(--border-color)'}}>Google</GoogleButton>
          <TwitterButton radius="xl" disabled style={{backgroundColor:'var(--blur-bg-color)',borderColor:'var(--border-color)'}}>Twitter</TwitterButton>
        </Group>

        <Divider label={authType === 'register' ? "Or continue with email" : "Or login with username"} labelPosition="center" my="lg" />

        {errorMessage && <Notification color="red">{errorMessage}</Notification>}

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <Stack>
            {authType === 'register' && step === 1 && (
              <>
                <TextInput styles={{input: {
                              background: 'var(--form-input-background)',
                              backdropFilter: 'var(--blur-bgcolor)',
                              WebkitBackdropFilter: 'blur(15px)',
                              borderColor: 'var(--formborder-color)',
                              boxShadow:'var(--form-input-box-shadow)',
                              border:'1 px solid var(--formborder-color)',
                            }}}  label="Username" placeholder="Enter your username" {...form.getInputProps('username')} required />
                <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Email" placeholder="hello@UniConnect.dev" {...form.getInputProps('email')} required />
                <PasswordInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Password" placeholder="Enter your password" {...form.getInputProps('password')} required />

                <div className={styles.roleSelection}>
                  <label className={styles.radioLabel}>Select Role:</label>
                  <Radio.Group value={role} onChange={setRole} style={{marginTop:'-2px'}}>
                    <Radio value="student" label="Student" style={{margin:'5px'}}/>
                    <Radio value="mentor" label="Mentor" style={{margin:'5px'}}/>
                    <Radio value="investor" label="Investor" style={{margin:'5px'}}/>
                  </Radio.Group>
                </div>

                <Button className={styles.nextButton} onClick={handleNext} disabled={!role}>
                  Next
                </Button>
              </>
            )}

            {authType === 'register' && step === 2 && (
              <>
                {role === 'student' && (
                  <>
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="University" placeholder="Enter your university" required />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Degree" placeholder="Your degree" required />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Graduation Year" placeholder="YYYY" required />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Skills" placeholder="Your skills (max 300 chars)" maxLength={300} required />
                  </>
                )}
                {role === 'mentor' && (
                  <>
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Work Experience" placeholder="Years of experience" required />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Company" placeholder="Your company" required />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Industry" placeholder="Your industry" required />
                  </>
                )}
                {role === 'investor' && (
                  <>
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Investment Firm" placeholder="Your firm (Optional)" />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Investment Categories" placeholder="Max 200 chars" maxLength={200} required />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Min Investment" placeholder="Minimum investment amount" required />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Max Investment" placeholder="Maximum investment amount" required />
                    <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Stage of Interest" placeholder="Which startup stage interests you?" required />
                  </>
                )}
                <Button type="submit" className={styles.registerButton}>
                  Register
                </Button>
              </>
            )}

            {authType === 'login' && (
              <>
                <TextInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Username" placeholder="Enter your username" {...form.getInputProps('username')} required />
                <PasswordInput styles={{input: {
              background: 'var(--form-input-background)',
              backdropFilter: 'var(--blur-bgcolor)',
              WebkitBackdropFilter: 'blur(15px)',
              borderColor: 'var(--formborder-color)',
              boxShadow:'var(--form-input-box-shadow)',
              border:'1 px solid var(--formborder-color)',
            }}} label="Password" placeholder="Enter your password" {...form.getInputProps('password')} required />

                <Button  type="submit" className={styles.registerButton}>
                  Login
                </Button>
              </>
            )}
          </Stack>
        </form>

        <Group justify="space-between" mt="xl">
          <Button variant="subtle" onClick={() => navigate('/slogin')}>
            Already have an account? Login
          </Button>
        </Group>
      </Paper>
    </div>
  );
}
