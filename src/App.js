import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layouts';
import NotFoundPage from './pages/NotFound';

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
// const VerifyPhone = React.lazy(() => import('./pages/VerifyPhone'));
// const PersonalDetails = React.lazy(() => import('./pages/PersonalDetails'));
// const ROLES = {
//   User: 2001,
//   Admin: 5150,
// };

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* public routes */}
            <Route index element={<Home />} />
            {/* <Route path='/stores' element={<Stores />} /> */}
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
            <Route path='/home' element={<Home />} />
            {/* <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} /> */}

            {/* we want to protect these routes */}
            {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path='/' element={<Home />} />
        </Route> */}

            {/* catch all */}
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
