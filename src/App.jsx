import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Courses1 } from './Courses1';
import { Gaming } from './components/Gaming';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/courses1" element={<Courses1 />} />
      <Route path="/game" element={<Gaming />} />

      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>


   
  );
}

export default App;
