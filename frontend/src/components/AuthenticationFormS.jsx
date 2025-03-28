import { useState, useEffect } from 'react';
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
  Radio,
  FileInput,
  Notification,
  NumberInput,
  Checkbox,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Lottie from "lottie-react";
import animationData from "../assets/sinup.json";

export function AuthenticationFormS(props) {
  const [role, setRole] = useState('');
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      profile_picture: null,
      cover_photo: null,
      role: '',
      // Student
      university: '',
      degree: '',
      graduation_year: '',
      skills: '',
      // Mentor
      work_experience: '',
      company: '',
      industry: '',
      linkedin: '',
      portfolio: '',
      expertise_areas: '',
      open_for_mentorship: true,
      availability: '',
      // Investor
      investment_firm: '',
      investment_categories: '',
      min_investment: '',
      max_investment: '',
      stage_of_interest: '',
    },
    validate: {
      username: (val) => (val ? null : 'Username is required'),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      phone: (val) => (val.length > 0 && val.length <= 15 ? null : 'Phone number is required (max 15 chars)'),
      password: (val) => (val.length >= 6 ? null : 'Password must have at least 6 characters'),
      confirm_password: (val, values) => (val === values.password ? null : 'Passwords do not match'),
    },
  });

  const handleNext = () => {
    if (role) {
      setStep(2);
    }
  };

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
            {step === 1 && (
              <>
                <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Username" placeholder="Enter your username" {...form.getInputProps('username')} required />
                <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Email" placeholder="hello@UniConnect.dev" {...form.getInputProps('email')} required />
                <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Phone" placeholder="Enter your phone number" {...form.getInputProps('phone')} required />
                <PasswordInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Password" placeholder="Enter your password" {...form.getInputProps('password')} required />
                <PasswordInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Confirm Password" placeholder="Confirm your password" {...form.getInputProps('confirm_password')} required />

                <FileInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Profile Picture (Optional)" accept="image/*" onChange={(file) => form.setFieldValue('profile_picture', file)} />
                <FileInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Cover Photo (Optional)" accept="image/*" onChange={(file) => form.setFieldValue('cover_photo', file)} />

                <div className={styles.roleSelection}>
                  <label className={styles.radioLabel}>Select Role:</label>
                  <Radio.Group value={role} onChange={setRole}>
                    <Radio value="student" label="Student" />
                    <Radio value="mentor" label="Mentor" />
                    <Radio value="investor" label="Investor" />
                  </Radio.Group>
                </div>

                <Button className={styles.nextButton} onClick={handleNext} disabled={!role}>
                  Next
                </Button>
              </>
            )}

            {step === 2 && (
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
              }}} label="University" placeholder="Enter your university" {...form.getInputProps('university')} required />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Degree" placeholder="Your degree" {...form.getInputProps('degree')} required />
                    <NumberInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Graduation Year" placeholder="YYYY" {...form.getInputProps('graduation_year')} required />
                    <TextInput styles={{input: {
                                    background: 'var(--form-input-background)',
                                    backdropFilter: 'var(--blur-bgcolor)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                    borderColor: 'var(--formborder-color)',
                                    boxShadow:'var(--form-input-box-shadow)',
                                    border:'1 px solid var(--formborder-color)',
                                  }}} label="Skills" placeholder="Your skills (max 300 chars)" maxLength={300} {...form.getInputProps('skills')} required />
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
              }}} label="Work Experience" placeholder="Years of experience" {...form.getInputProps('work_experience')} required />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Company" placeholder="Your company" {...form.getInputProps('company')} required />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Industry" placeholder="Your industry" {...form.getInputProps('industry')} required />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="LinkedIn (Optional)" placeholder="LinkedIn Profile" {...form.getInputProps('linkedin')} />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Portfolio (Optional)" placeholder="Portfolio URL" {...form.getInputProps('portfolio')} />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Expertise Areas" placeholder="Max 200 chars" maxLength={200} {...form.getInputProps('expertise_areas')} required />
                    <Checkbox label="Open for mentorship" checked={form.values.open_for_mentorship} onChange={(event) => form.setFieldValue('open_for_mentorship', event.currentTarget.checked)} />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Availability (Optional)" placeholder="Your availability" {...form.getInputProps('availability')} />
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
                                  }}} label="Investment Firm (Optional)" placeholder="Your firm" {...form.getInputProps('investment_firm')} />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Investment Categories" placeholder="Max 200 chars" maxLength={200} {...form.getInputProps('investment_categories')} required />
                    <NumberInput styles={{input: {
                                    background: 'var(--form-input-background)',
                                    backdropFilter: 'var(--blur-bgcolor)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                    borderColor: 'var(--formborder-color)',
                                    boxShadow:'var(--form-input-box-shadow)',
                                    border:'1 px solid var(--formborder-color)',
                                  }}} label="Min Investment" placeholder="Minimum investment amount" {...form.getInputProps('min_investment')} required />
                    <NumberInput styles={{input: {
                                    background: 'var(--form-input-background)',
                                    backdropFilter: 'var(--blur-bgcolor)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                    borderColor: 'var(--formborder-color)',
                                    boxShadow:'var(--form-input-box-shadow)',
                                    border:'1 px solid var(--formborder-color)',
                                  }}} label="Max Investment" placeholder="Maximum investment amount" {...form.getInputProps('max_investment')} required />
                    <TextInput styles={{input: {
                background: 'var(--form-input-background)',
                backdropFilter: 'var(--blur-bgcolor)',
                WebkitBackdropFilter: 'blur(15px)',
                borderColor: 'var(--formborder-color)',
                boxShadow:'var(--form-input-box-shadow)',
                border:'1 px solid var(--formborder-color)',
              }}} label="Stage of Interest" placeholder="Which startup stage interests you?" {...form.getInputProps('stage_of_interest')} required />
                  </>
                )}

                <Button type="submit" className={styles.registerButton}>
                  Register
                </Button>
              </>
            )}
          </Stack>
        </form>
      </Paper>
    </div>
  );
}
