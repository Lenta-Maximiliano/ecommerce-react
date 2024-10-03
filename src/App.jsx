import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/View/ItemListView/ItemListContainer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
      <main className='app-main'>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  
  )
}

export default App
