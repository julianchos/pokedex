import logo from './logo.svg';

import { BrowserRouter } from 'react-router-dom'
import Router from "main/routes/router"

function App() {
  return (
      <BrowserRouter >
          <Router />
      </BrowserRouter>
  )
}

export default App;
