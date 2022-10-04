import React from 'react';
import './App.css'

const [modalActive, setModalActive] = useState(true)
const App = () => {
  return (
    <div className='app'>
      <main>
        <p>Тестовое задание</p>
        <button className='open-btn'>Вход</button>
      </main>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  )
}

export default App;
