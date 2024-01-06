import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { Home } from './pages/home/Home';
import { Organization } from './pages/organization/Organization';
import { Settings } from './pages/settings/Settings';
import { SignIn } from './pages/signin/SignIn';
import { Suite } from './pages/suite/Suite';
import { Suites } from './pages/suites/Suites';
import { Test } from './pages/test/Test';
import { Tests } from './pages/tests/Tests';
import { Onboarding } from './pages/onboarding/Onboarding';

const ErrorPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <p>Ups something went wrong :o</p>
    </div>
  );
};

// TODO: protect routes later checking auth user
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/tests/:testId" element={<Test />} />
      <Route path="/suites" element={<Suites />} />
      <Route path="/suites/:suiteId" element={<Suite />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/plan" element={<Organization />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/plan" element={<SignIn />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
