import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthenticationForm.module.css';
import {
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  FileInput,
  Radio,
  Notification,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Lottie from "lottie-react";
import animationData from "../assets/sinup.json";

export function AuthenticationFormP(props) {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      role: '',
      profile_picture: null,
      cover_photo: null,
    },
    validate: {
      username: (val) => (val ? null : 'Username is required'),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      phone: (val) => (val.length > 0 && val.length <= 15 ? null : 'Phone number is required (max 15 chars)'),
      password: (val) => (val.length >= 6 ? null : 'Password must have at least 6 characters'),
      role: (val) => (val ? null : 'Please select a role'),
    },
  });

  const handleRegister = async () => {
    setErrorMessage('');

    const formData = new FormData();
    Object.keys(form.values).forEach((key) => {
      if (form.values[key] !== '' && form.values[key] !== null) {
        formData.append(key, form.values[key]);
      }
    });

    try {
      const response = await fetch('https://uniconnectbackend.onrender.com/api/users/register/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Registration Successful!');
        navigate('/dashboard');
      } else {
        setErrorMessage(data.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <Lottie animationData={animationData} loop autoplay style={{ width: '50vw', height: '20%' }} />
      <Paper radius="md" p="xl" withBorder {...props} style={{ width: '55vw', border: 'none', backgroundColor: 'var(--bg-color)' }}>
        <Text size="lg" fw={500}>Register on UniConnect</Text>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        {errorMessage && <Notification color="red">{errorMessage}</Notification>}

        <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
          <Stack>
            <TextInput  styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
                color:'var(--text-color)',
                fontSize:'0.95rem'
              }}} label="Username" placeholder="Enter your username" {...form.getInputProps('username')} required />
            <TextInput  styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
                color:'var(--text-color)',
                fontSize:'0.95rem'
              }}} label="Email" placeholder="hello@UniConnect.dev" {...form.getInputProps('email')} required />
            <TextInput  styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
                color:'var(--text-color)',
                fontSize:'0.95rem'
              }}} label="Phone" placeholder="Enter your phone number" {...form.getInputProps('phone')} required />
            <PasswordInput  styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
                color:'var(--text-color)',
                fontSize:'0.95rem'
              }}} label="Password" placeholder="Enter your password" {...form.getInputProps('password')} required />

            {/* ✅ Role Selection (Student, Professor, Investor) */}
            <div className={styles.roleSelection}>
              <label className={styles.radioLabel}>Select Role:</label>
              <Radio.Group style={{marginTop:'-4px'}} value={form.values.role} onChange={(val) => form.setFieldValue('role', val)} required>
                <Radio style={{margin:'5px'}} value="student" label="Student" />
                <Radio  style={{margin:'5px'}} value="professor" label="Professor" />
                <Radio  style={{margin:'5px'}} value="investor" label="Investor" />
              </Radio.Group>
            </div>

            <FileInput  styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Profile Picture (Optional)" accept="image/*" onChange={(file) => form.setFieldValue('profile_picture', file)} />
            <FileInput  styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Cover Photo (Optional)" accept="image/*" onChange={(file) => form.setFieldValue('cover_photo', file)} />

<button 
  type="button" 
  className={styles.registerButton} 
  onClick={() => window.location.href = "https://preview--frontend-django-dispatch.lovable.app/"}>
  Register
</button>

          </Stack>
        </form>
      </Paper>
    </div>
  );
}
