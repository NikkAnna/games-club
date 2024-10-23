import { useState } from 'react';

import styles from './login.module.css';

export const LoginPage = () => {
  const [tel, setTel] = useState('');

  //проверка, указать в каком формате должен быть телефон
  //   const handleSubmit = (e: SyntheticEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setErrorText('Введите свои данные');
//       return;
//     }

//     dispatch(loginUserThunk({ email, password }));
//   };

  return (
    <section className={styles.page}>
      <div className={styles.center}>
        <h1 className={styles.title}>Войти</h1>
        <form className={styles.form}>
          <div className={styles.txt_field}>
            <input type='tel' required />
            <label className={styles.label}>Номер телефона</label>
            <span />
          </div>

          <div className={styles.pass}>Мы отправим вам код в телеграм</div>
          <input type='submit' value='Войти' />
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
