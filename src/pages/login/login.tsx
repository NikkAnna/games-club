import { useState } from 'react';
import { useForm } from 'react-hook-form';
import MaskedInput from 'react-input-mask';
import classNames from 'classnames';

import styles from './login.module.css';

type FormData = {
  phone: string;
};

export const LoginPage = () => {
  const [tel, setTel] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (formValue: FormData) => {
    // dispatch(
    //   postOrderThunk({
    //     ...orderInfo,
    //     CLIENTNAME: formValue.ClientName,
    //     PHONE: formValue.Phone,
    //     EMAIL: formValue.Email
    //   })
    // );
    // if (!loader && postError === undefined) {
    //   navigate('/success', { replace: true, state: { from: 'form' } });
    // }
  };

  return (
    <section className={styles.page}>
      <div className={styles.center}>
        <h1 className={styles.title}>Войти</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.txt_field}>
            <label className={styles.label}>Номер телефона</label>
            <MaskedInput
              mask='(999)999-99-99'
              alwaysShowMask={false}
              type='tel'
              placeholder='(___)___-__-__'
              value={tel}
              {...register('phone', {
                required: true,
                pattern:
                  /\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/,
                onChange: (e) => {
                  setTel(e.target.value);
                  console.log(e.target.value);
                },
                value: tel
              })}
              aria-invalid={errors.phone ? 'true' : 'false'}
              className={styles.input}
            />
            {errors.phone?.type === 'required' && (
              <p role='alert' className={styles.error}>
                Введите свой номер телефона
              </p>
            )}
            {errors.phone?.type === 'pattern' && (
              <p role='alert' className={styles.error}>
                Введите номер телефона в формате (9XX)XXX-XX-XX
              </p>
            )}
          </div>

          <div className={styles.pass}>Мы отправим вам код в телеграм</div>
          <input
            type='submit'
            value='Войти'
            className={classNames(styles.submit, !tel ? styles.disabled : '')}
          />
        </form>
        <div className={styles.signup_link}>
          Еще не NaBali? <a href=''>Зарегистрироваться</a>
        </div>
      </div>
    </section>
  );
};

// import { FC, SyntheticEvent, useEffect, useState } from 'react';
// import {
//   getUserLoginErrorSelector,
//   isUserLoadingSelector,
//   loginUserThunk
// } from '../../slices/userSlice';
// import { useDispatch, useSelector } from '../../services/store';

// import { LoginUI } from '@ui-pages';
// import { Preloader } from '@ui';

// export const Login: FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorText, setErrorText] = useState('');

//   const dispatch = useDispatch();
//   const loading = useSelector(isUserLoadingSelector);
//   const error = useSelector(getUserLoginErrorSelector);

//   useEffect(() => {
//     if (error) {
//       setErrorText('Некорректный e-mail или пароль');
//     }
//   }, [error]);

//   useEffect(() => {
//     setErrorText('');
//   }, []);

//   const handleSubmit = (e: SyntheticEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setErrorText('Введите свои данные');
//       return;
//     }

//     dispatch(loginUserThunk({ email, password }));
//   };

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <LoginUI
//       errorText={errorText}
//       email={email}
//       setEmail={setEmail}
//       password={password}
//       setPassword={setPassword}
//       handleSubmit={handleSubmit}
//     />
//   );
// };
