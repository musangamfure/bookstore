import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import Categories from './components/categories.js';
import { store } from './redux/store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
