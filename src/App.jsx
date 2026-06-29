import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
