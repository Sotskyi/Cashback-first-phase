import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layouts';
import NotFoundPage from './pages/NotFoundPage';

// import Missing from "./components/Missing";
// import Register from "./components/Register";
// import RequireAuth from "./components/RequireAuth";
// import Unauthorized from "./components/Unauthorized";
const LandingPage = React.lazy(() => import('./pages/LandingPage'));

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
            <Route index element={<LandingPage />} />
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
