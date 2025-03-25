import { useState } from 'react';
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
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import Lottie from "lottie-react";
import animationData from "../assets/login.json"; // नया login animation
import { useNavigate } from 'react-router-dom';
export function LoginForm(props) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (val) => (val ? null : 'Username is required'),
      password: (val) => (val.length >= 6 ? null : 'Password should have at least 6 characters'),
    },
  });

  return (
    <div className={styles.container}>
      <Lottie animationData={animationData} loop autoplay style={{ width: '50vw', height: '20%' }} />
      <Paper radius="md" p="xl" withBorder {...props} style={{ width: '55vw', border: 'none', backgroundColor: 'var(--bg-color)' }}>
        <Text size="lg" fw={500}>
          Welcome Back to UniConnect
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl" disabled style={{backgroundColor:'var(--blur-bg-color)',borderColor:'var(--border-color)'}}>Login with Google</GoogleButton>
          <TwitterButton radius="xl" disabled style={{backgroundColor:'var(--blur-bg-color)',borderColor:'var(--border-color)'}}>Login with Twitter</TwitterButton>
        </Group>

        <Divider label="Or login with username" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput 
              label="Username" 
              placeholder="Enter your username" 
              {...form.getInputProps('username')} 
              required 
              styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}}
            />
            <PasswordInput 
              label="Password" 
              placeholder="Enter your password" 
              {...form.getInputProps('password')} 
              required 
              styles={{input: {
                              background: 'var(--form-input-background)',
                              backdropFilter: 'var(--blur-bgcolor)',
                              WebkitBackdropFilter: 'blur(15px)',
                              borderColor: 'var(--formborder-color)',
                              boxShadow:'var(--form-input-box-shadow)',
                              border:'1 px solid var(--formborder-color)',
                            }}}
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" size="xs">
              Forgot Password?
            </Anchor>
            <Button type="submit" className={styles.registerButton}>
              Login
            </Button>
          </Group>
        </form>
        <Group justify="space-between" mt="xl">
          <Button variant="subtle" onClick={() => navigate('/plogin')}>
            Don't have an account? Register
          </Button>
        </Group>
      </Paper>
    </div>
  );
}
