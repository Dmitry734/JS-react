import React, { useState } from 'react';
//import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
  const [value, setValue] = useState("Текс в Инпуте");



  return (
    <div className="App">
      <ClassCounter />
    </div>
  );
}

export default App;
