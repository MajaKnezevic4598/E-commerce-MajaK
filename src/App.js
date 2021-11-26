import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header/>
        <Switch>
          {/* <div className="App">hello</div> */}
          <Route path="/" exact component={ProductsList} />
          <Route path="/products/:productId" exact component={ProductDetails} />
          <Route path="/cart" exact component={Cart}/>
          <Route>404 not found!</Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;


 