import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AuthLayout from './components/layouts/AuthLayout';
// import NotFoundPage from './pages/NotFound';
import Loader from './components/lib/Loader';

// import Missing from "./components/Missing";
// import Register from "./components/Register";
// import RequireAuth from "./components/RequireAuth";
// import Unauthorized from "./components/Unauthorized";
// const Landing = React.lazy(() => import('./pages/Landing'));
// const Stores = React.lazy(() => import('./pages/Stores'));
const SignUp = React.lazy(() => import('./pages/SignUp/SignUp'));
const LogIn = React.lazy(() => import('./pages/LogIn/LogIn'));
const ResetPasswordByPhone = React.lazy(() =>
  import('./pages/ResetPasswordByPhone/ResetPasswordByPhone'),
);
const ResetPasswordByEmail = React.lazy(() =>
  import('./pages/ResetPasswordByEmail/ResetPasswordByEmail'),
);
const Home = React.lazy(() => import('./pages/Home'));
const Store = React.lazy(() => import('./pages/Store'));
const Cashback = React.lazy(() => import('./pages/Cashback/Cashback'));
// const VerifyPhone = React.lazy(() => import('./pages/VerifyPhone'));
// const PersonalDetails = React.lazy(() => import('./pages/PersonalDetails'));
// const ROLES = {
//   User: 2001,
//   Admin: 5150,
// };

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            {/* public routes */}
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route
              path='/reset_password_by_phone'
              element={<ResetPasswordByPhone />}
            />
            <Route
              path='/reset_password_by_email'
              element={<ResetPasswordByEmail />}
            />
            {/* public or protected routes */}
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Home />} />
              {/* <Route path='/home' element={<Home />} /> */}
              <Route path='/store:id' element={<Store />} />
              <Route path='/cashback' element={<Cashback />} />
            </Route>
            {/* catch all */}
            <Route path='*' element={<Navigate to='/' replace />} />
            {/* <Route path='*' element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
