import { useState, useEffect } from 'react';
import { FormFields } from './MainFormTypes';

const useForm = (
  callback: (values: FormFields) => void,
  validateForm: (values: FormFields) => FormFields
) => {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    login: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const isNumber = /^[0-9\b]+$/;

    if (
      value === '' ||
      isNumber.test(value) ||
      name === 'login' ||
      name === 'password'
    ) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    setErrors(validateForm(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    const noErrors = (Object.keys(errors) as Array<keyof FormFields>).every(
      (val): boolean => errors[val] === ''
    );

    if (noErrors && isSubmitting) {
      callback(values);
      setIsSubmitting(false);
    }
  }, [isSubmitting, callback, values, errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
