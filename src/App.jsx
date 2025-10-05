import Header from "./components/Header";
import Principal from "./components/Principal";
import Footer from "./components/Footer";
import Opinions from "./components/Opinions";
import './App.css';
import whatsIco from './assets/whatsIco.svg';
import logoFav from './assets/logo.jpg';


function App() {

  const favicon = (url) => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = url;
    document.head.appendChild(link);
  };

  favicon(logoFav);

  const phoneNumber = import.meta.env.VITE_PHONE;
  return (

    <div>
      <Header />
      <Principal />
      <Footer />
      <Opinions />
      <span id="btn-whats"><a href={`https://wa.me/+55${phoneNumber}`} target="_blank" rel="noopener noreferrer"><img src={whatsIco} alt="ico" id="whatsApp-ico" /></a></span>
    </div>
  )
}

export default App
