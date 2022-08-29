import { Route, Routes } from 'react-router-dom';
import { Example1 } from './pages/Example1';
import { Example2 } from './pages/Example2';

export function Router() {
  return (
    <Routes>
      <Route path="/example1" element={<Example1 />} />
      <Route path="/example2" element={<Example2 />} />
    </Routes>
  );
}
