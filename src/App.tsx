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
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as api from '@/api';

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
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={api.client}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  );
}

export default App;
