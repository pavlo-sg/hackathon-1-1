import './App.css';
import { RequestRideForm } from './components';
import { IphoneFrame } from './components';

function App() {
  return (
    <div className="App">
      
        <IphoneFrame>
        <div style={{ textAlign: 'center' }}>
          <h1>Hello, iPhone!</h1>
          <RequestRideForm />
        </div>
      </IphoneFrame>
    </div>
  );
}

export default App;
