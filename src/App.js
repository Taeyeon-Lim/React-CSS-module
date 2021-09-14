import { useState } from 'react';
import './App.css';
import CheckBox from './components/CheckBox';

function App() {
  const [checked, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <CheckBox onChange={onChange} checked={checked}>
        다음 약관에 동의
      </CheckBox>
    </div>
  );
}

export default App;
