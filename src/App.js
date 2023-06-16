import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/Nav';
import Home from './components/homePage';
import Categories from './components/Categories';
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
