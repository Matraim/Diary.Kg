import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Введите корректный адрес электронной почты')
    .required('Введите адрес электронной почты'),
});

const ForgotPasswordForm = ({ onCancel }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onCancel();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      <TextField
        label="Введите адрес электронной почты"
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

      <Box justifyContent="space-between" display="flex" py={2}>
        <Button onClick={onCancel} variant="outlined" color="primary">
          Отмена
        </Button>

        <Button type="submit" variant="contained" color="primary">
          Сбросить пароль
        </Button>
        
      </Box>
    </form>
  );
};

export default ForgotPasswordForm;
