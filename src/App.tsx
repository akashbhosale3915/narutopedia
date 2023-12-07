import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Characters from "./components/Characters";
import TailedBeasts from "./components/TailedBeasts";
import Clans from "./components/Clans";
import Akatsuki from "./components/Akatsuki";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className='App'>
      <Header />
      {pathname !== "/" && (
        <button onClick={() => navigate(-1)} className='back'>
          Go back
        </button>
      )}
      <div className='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/clans' element={<Clans />} />
          <Route path='/tailed-beasts' element={<TailedBeasts />} />
          <Route path='/akatsuki' element={<Akatsuki />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
