import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ForgotPasswordForm from '../layout/ ForgotPasswordForm';
import { Box } from '@mui/system';

const validationSchema = Yup.object({
  username: Yup.string().required('Введите имя пользователя'),
  password: Yup.string().required('Введите пароль'),
  email: Yup.string()
    .email('Введите корректный адрес электронной почты')
    .required('Введите адрес электронной почты'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate('/trello');
    },
  });

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleForgotPasswordCancel = () => {
    setShowForgotPassword(false);
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledHeader>Welcome to Diary.io</StyledHeader>
      {showForgotPassword ? (
        <ForgotPasswordForm onCancel={handleForgotPasswordCancel} />
      ) : (
        <>
          <TextField
            label="Имя пользователя"
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            label="Пароль"
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            label="Адрес электронной почты"
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Box textAlign="center" padding="1rem">
            <Button type="submit" variant="contained" color="primary">
              Войти
            </Button>
          </Box>
          <StyledLink onClick={handleForgotPasswordClick}>
            Забыли пароль?
          </StyledLink>
        </>
      )}
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form`
  width: 500px;
  margin: 200px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.h1`
  color: #1877f2;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledLink = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #1877f2;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
