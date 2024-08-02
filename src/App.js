import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Jobs from './components/services/Jobs';
import Footer from './components/footer/Footer';
import Contact from './components/contact/ContactForm';
import ConsultationBanner from './components/consultationBanner/consultationBanner';

import './App.css';

function App() {
  return (
    <div className=' flex-col'>
      <Nav/>
      <Header/>
      <Jobs/>
      <ConsultationBanner />
      <Contact />
      <Footer/>
    </div>

  );
}

export default App;
