import { FormFields } from './MainFormTypes';

export default function validateForm(values: FormFields) {
  let errors = {
    login: '',
    password: '',
  };

  if (!values.login) {
    errors.login = 'Login is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
}
