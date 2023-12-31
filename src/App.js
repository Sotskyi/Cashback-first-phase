import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from './components/lib/ScrollToTop';

// import HeaderLayout from './components/layouts/HeaderLayout';
// import NotFoundPage from './pages/NotFound';
import Loader from './components/lib/Loader';
import AuthLayout from './components/layouts/AuthLayout';
import ProtectedRoutesLayout from './components/layouts/ProtectedRoutesLayout';

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
const MissingTransaction = React.lazy(() =>
  import('./pages/MissingTransaction/MissingTransaction'),
);
const PersonalInformation = React.lazy(() =>
  import('./pages/PersonalInformation'),
);
const Terms = React.lazy(() => import('./pages/Terms'));
const Policy = React.lazy(() => import('./pages/Policy'));

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
        <ScrollToTop />
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
              <Route path='/terms_and_conditions' element={<Terms />} />
              <Route path='/privacy_policy' element={<Policy />} />
              <Route index element={<Home />} />
              <Route path='/store/:id' element={<Store />} />
              <Route path='/cashback' element={<Cashback />} />
              <Route element={<ProtectedRoutesLayout />}>
                <Route
                  path='/missing_transaction'
                  element={<MissingTransaction />}
                />
                <Route
                  path='/personal_info'
                  element={<PersonalInformation />}
                />
              </Route>
            </Route>
            {/* catch all */}
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
