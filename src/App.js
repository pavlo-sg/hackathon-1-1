import './App.css';
import { useState } from 'react'
import { RequestRideForm } from './components';
import { IphoneFrame } from './components';
import { FakeAppIcon } from './components';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
   const [openApp, setOpenApp] = useState(false);

  const handleAppClick = (app) => {
    setOpenApp(app);
  };

  const handleBackClick = () => {
    setOpenApp(null);
  };
  return (
    <div className="App">
        <IphoneFrame></IphoneFrame>
    </div>
  );
}

export default App;
