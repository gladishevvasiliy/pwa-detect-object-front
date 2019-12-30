import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './App.css'
import { MainConnected } from './components/Main/MainConnected'

function App() {
  return (
    <Provider store={store}>
      <MainConnected />
    </Provider>
  );
}

export default App
