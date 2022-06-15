/**
 * @Author: Your name
 * @Date:   2022-06-15 09:23:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-15 10:20:06
 */

import './App.css';
import Welcome from './components/Welcome';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Welcome name = "Timothy" heroname = "Timmoh"> 
      <p>This is amazing and motivating. I see potential and greatness</p></ Welcome>
      <Welcome name = "Munene" heroname = "Nesh">
      <p>I am a full stack web developer</p></Welcome>
      <Welcome name = "Kariuki" heroname = "Karis" />
      <Button />
    </div>
  );
}

export default App;
