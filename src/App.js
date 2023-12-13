
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
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
import Writers from './components/pages/Writers';
import LawHuminity from './components/pages/LawHuminity';
import TechWorld from './components/pages/TechWorld';
import Lifestyles from './components/pages/Lifestyles';
import Health from './components/pages/Health';
import Industry from './components/pages/Industry';
import Culture from './components/pages/Culture';
import Educations from './components/pages/Educations';
import Islam from './components/pages/Islam';
import TodayEvents from './components/pages/TodayEvents';
import Agriculture from './components/pages/Agriculture';
import Job from './components/pages/Job';
import Editorial from './components/pages/Editorial';
import Feature from './components/pages/Feature';

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Homepage />} />
      <Route path='/bangladesh' element={<Bangladesh />} />
      <Route path='/politics' element={<Politics />} />
      <Route path='/economics' element={<Economics />} />
      <Route path='/international' element={<International />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/writers' element={<Writers />} />
      <Route path='/details' element={<Details />} />
      <Route path='/previews' element={<Previews />} />
      <Route path="/previews/:id" element={<Previews />} />
      <Route path='/entertainment' element={<Entertainment />} />
      <Route path='/lawHuminity' element={<LawHuminity />} />
      <Route path='/techworld' element={<TechWorld />} />
      <Route path='/lifestyle' element={<Lifestyles />} />
      <Route path='/health' element={<Health />} />
      <Route path='/industry' element={<Industry />} />
      <Route path='/culture' element={<Culture />} />
      <Route path='/educations' element={<Educations />} />
      <Route path='/islam' element={<Islam />} />
      <Route path='/todayEvents' element={<TodayEvents />} />
      <Route path='/agriculture' element={<Agriculture />} />
      <Route path='/job' element={<Job />} />
      <Route path='/editorial' element={<Editorial />} />
      <Route path='/feature' element={<Feature />} />

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
