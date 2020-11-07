import  {React, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Products from './pages/Products'



function App() {
  const [fileUploadState, setFileUploadState] = useState({selectedFile: null})
const fileSelectHandler= event => {
  setFileUploadState ({
    selectedFile : event.target.files[0]
  })
}

fileUploadHandler =( ) => {
  const fd = new FormData();
  fd.append('image',state.selectedFile, )
  axios.post('gs://project3final-62945.appspot.com/');
}



  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/products' component={Products} />
        <Route exact path='/' component={ProductList} />

      </Switch>

      <input type="file" onChange={fileSelectHandler}/>
      <button onClick={fileUploadhandler}>Upload</button>

    </React.Fragment>
  );
}

export default App;
