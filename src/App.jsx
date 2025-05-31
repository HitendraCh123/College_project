import { useEffect } from 'react'
import Mainpage from './Components/Mainpage'
import Section2 from './Components/Section2';
import About from './Components/PAGES/About';
import { Menu } from './Components/PAGES/Menu';
import Contact from './Components/PAGES/Contact';
import Section3 from './Components/Section3';
import Section4 from './Components/PAGES/Section4';
import Section5 from './Components/PAGES/Section5';
import Section6 from './Components/PAGES/Section6';
import Section7 from './Components/PAGES/Section7';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Section8 from './Components/PAGES/Section8';
import Section9 from './Components/PAGES/Section9';
import Book from './Components/PAGES/Book';
import AOS from 'aos';
import 'aos/dist/aos.css';
const router = createBrowserRouter(
  [

    {
      path: '/',
      element: <div>
        <Mainpage />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Mainpage />
        <About />
      </div>
    },
    {
      path: '/menu',
      element: <div>
        <Mainpage />
        <Menu />
      </div>
    },
    {
      path: '/contact',
      element: <div>
        <Mainpage />
        <Contact />
      </div>
    },
    {
      path: '/book',
      element: <div>
        <Mainpage />
        <Book />
      </div>
    },
  ]
)
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,   
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
