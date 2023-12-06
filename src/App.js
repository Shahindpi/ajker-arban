
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Homepage from './components/pages/Homepage'
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import Details from './components/pages/Details';
import Bangladesh from './components/pages/Bangladesh';
import Login from './components/pages/Login';
import Politics from './components/pages/Politics';
import Economics from './components/pages/Economics';
import International from './components/pages/International';
import Sports from './components/pages/Sports';
import Entertainment from './components/pages/Entertainment';
import Previews from './components/pages/Previews';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Homepage />} />
      <Route path='details' element={<Details />} />
      <Route path='previews' element={<Previews />} />
      <Route path="/previews/:id" element={<Previews />} />
      <Route path='bangladesh' element={<Bangladesh />} />
      <Route path='politics' element={<Politics />} />
      <Route path='economics' element={<Economics />} />
      <Route path='international' element={<International />} />
      <Route path='sports' element={<Sports />} />
      <Route path='entertainment' element={<Entertainment />} />
      
      <Route path='login' element={<Login />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Homepage />} />
    </Route>
    
  )
)

function App() {
  return (
   
  <RouterProvider router={router} />

  );
}

export default App;
