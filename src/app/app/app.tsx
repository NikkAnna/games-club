import '../../index.css';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getAllGamesThunk, getGamesSelector } from '../slices/gamesSlice';
import { useDispatch, useSelector } from '../services/store';

import { HeaderMenu } from '../../widgets/header-menu/ui/header-menu';
import { Home } from '../../pages/home/home';
import { Preloader } from '../../entity/preloader/ui/preloader';
import { getGamesApi } from '../../shared/api/games-api';
import styles from './app.module.css';
import { useEffect, useState } from 'react';
import { PlayersModal } from '../../widgets/players-modal/players-modal';

// import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
// import {
//   ConstructorPage,
//   Feed,
//   ForgotPassword,
//   Login,
//   NotFound404,
//   Profile,
//   ProfileOrders,
//   Register,
//   ResetPassword
// } from '@pages';

// import { useDispatch, useSelector } from '../../services/store';

// import { ProtectedRoute } from '../../routes/protected-route';
// import { getFeedThunk } from '../../slices/feedSlice';
// import { getIngredientsThunk } from '../../slices/ingredientsSlice';
// import { getOrderByNumber } from '../../slices/orderSlice';
// import { getUser } from '../../slices/userSlice';

const App = () => {

  
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const order = useSelector(getOrderByNumber);
  // const location = useLocation();

  // const handleModalClose = (url: string) => navigate(url);
  // const backgroundLocation = location.state?.background;

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, []);

  return (
    <>
      <div >
        <HeaderMenu />
        <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        </div>
        
        {/* <AppHeader />
        <Routes location={backgroundLocation || location}>
          <Route path='*' element={<NotFound404 />} />
          <Route path='/' element={<ConstructorPage />} />
          <Route path='/feed'>
            <Route index element={<Feed />} />
            <Route path=':number' element={<OrderInfo />} />
          </Route>
          <Route path='/ingredients/:id' element={<IngredientDetails />} />
          <Route
            path='/login'
            element={
              <ProtectedRoute onlyUnAuth>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path='/register'
            element={
              <ProtectedRoute onlyUnAuth>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path='/forgot-password'
            element={
              <ProtectedRoute onlyUnAuth>
                <ForgotPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path='/reset-password'
            element={
              <ProtectedRoute onlyUnAuth>
                <ResetPassword />
              </ProtectedRoute>
            }
          />

          <Route path='/profile'>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path='orders'
              element={
                <ProtectedRoute>
                  <ProfileOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path='orders/:number'
              element={
                <ProtectedRoute>
                  <OrderInfo />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>

        {backgroundLocation && (
          <Routes>
            <Route
              path='/feed/:number'
              element={
                <Modal
                  title={`#${order?.number}` || ''}
                  onClose={() => handleModalClose('feed')}
                >
                  <OrderInfo />
                </Modal>
              }
            />
          </Routes>
        )}

        {backgroundLocation && (
          <Routes>
            <Route
              path='/profile/orders/:number'
              element={
                <ProtectedRoute>
                  <Modal
                    title={`#${order?.number}` || ''}
                    onClose={() => handleModalClose('profile/orders')}
                  >
                    <OrderInfo />
                  </Modal>
                </ProtectedRoute>
              }
            />
          </Routes>
        )}

        {backgroundLocation && (
          <Routes>
            <Route
              path='/ingredients/:id'
              element={
                <Modal
                  title={'Детали ингредиента'}
                  onClose={() => handleModalClose('/')}
                >
                  <IngredientDetails />
                </Modal>
              }
            />
          </Routes>
        )} */}
      </div>
    </>
  );
};
export default App;
