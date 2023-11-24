import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Tests } from './pages/tests/Tests';
import { Test } from './pages/test/Test';
import { Layout } from './components/layout/Layout';
import { Settings } from './pages/settings/Settings';
import { Suites } from './pages/suites/Suites';
import { Suite } from './pages/suite/Suite';
import { Organization } from './pages/organization/Organization';
import { SignIn } from './pages/signin/SignIn';

const ErrorPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <p>Ups 404 page here :)</p>;
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/test/:testId" element={<Test />} />
      <Route path="/suites" element={<Suites />} />
      <Route path="/suite/:suiteId" element={<Suite />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/plan" element={<Organization />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
