
import { useState } from 'react'
import './App.css'
import { data } from './data';

function App() {

  const [power, setPower] = useState(false);
  const [name, setname] = useState('Ali');
  const [num, setNum] = useState(10);
  const [user, setuser] = useState({ name: 'ali' });
  const [products, setProducts] = useState(data);
 

  return (
    <>
      <h2>{power ? 'hello' : 'bye'} </h2>
      <h2>{name}</h2>
      <h2>{num}</h2>
      <button onClick={() => setNum((count) => count +  1)}>inc</button>
      <button onClick={() => setNum((count) => count - 1)}>dec</button>

      <h2>welcome { user.name}</h2>
      
      <input type="text" name="" id="" value={name} onChange={(e) => setname(e.target.value)} />
      <button onClick={() => setPower(true)}>change</button>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h2>{ item.name}</h2>
          </div>
        )
      })}
      
    </>
  )
}

export default App
