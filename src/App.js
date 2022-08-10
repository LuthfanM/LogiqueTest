import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Suspense } from 'react';
import { Provider } from 'react-redux'
import Router from './router';
import { store } from './redux/store';
import '../src/@core/scss/base.scss'

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Provider store={store}>
            <div className="App">
              <Router />
            </div>
          </Provider>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
