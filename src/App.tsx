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
      <Route index path="/tests" element={<Tests />} />
      <Route index path="/test/:testId" element={<Test />} />
      {/* <Route index path="/suites" element={<Test />} />
      <Route index path="/suites/:suiteId" element={<Test />} /> */}
      <Route index path="/settings" element={<Settings />} />
      <Route index path="/organization" element={<Settings />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
