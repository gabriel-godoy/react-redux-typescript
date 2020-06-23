import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import useForm from './useForm';
import { FormFields } from './MainFormTypes';
import validateForm from './validateForm';
import { login } from '../../redux/actions/userActions';
import { TInitialState } from './../../redux/store/initialState/initialState';
import { TUserState } from './../../redux/store/initialState/userState';
import styles from './MainForm.module.scss';

type OwnProps = {};

type Props = TReduxStateProps & TReduxDispatchProps & OwnProps;

const MainForm: React.FC<Props> = ({ login, user }) => {
  // useCallback() to prevent this function from re-rendering
  const submitCallback = useCallback(
    (values: FormFields) => {
      login(values);
    },
    [login]
  );

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitCallback,
    validateForm
  );

  return (
    <form
      className={styles.form}
      autoComplete='off'
      noValidate
      onSubmit={handleSubmit}
    >
      <div className={styles.inputContainer}>
        <input
          type='text'
          name='login'
          placeholder='Email'
          maxLength={100}
          value={values.login}
          onChange={handleChange}
          className={classNames(styles.inputText, {
            [styles.inputError]: errors.login,
          })}
        />
        <p className={styles.formErrorMessage}>{errors.login}</p>
      </div>

      <div className={styles.inputContainer}>
        <input
          type='password'
          name='password'
          placeholder='Password'
          maxLength={100}
          value={values.password}
          onChange={handleChange}
          className={classNames(styles.inputText, {
            [styles.inputError]: errors.password,
          })}
        />
        <p className={styles.formErrorMessage}>{errors.password}</p>
      </div>

      <div className={styles.submitContainer}>
        <div className={styles.submitInnerContainer}>
          <input
            type='submit'
            className={styles.submitButton}
            value={user.flags.isFetching ? 'Loading...' : 'Login'}
          />
        </div>
      </div>
    </form>
  );
};

type TReduxStateProps = {
  user: TUserState;
};

type TLogindetails = {
  login: string;
  password: string;
};

type TReduxDispatchProps = {
  login: (loginDetails: TLogindetails) => void;
};

const mapStateToProps = (state: TInitialState) => ({
  user: state.user,
});

export default connect(mapStateToProps, { login })(MainForm);
