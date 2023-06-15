import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/navbar';
import Home from './components/home';
import Categories from './components/categories';
import { store } from './redux/store';

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
