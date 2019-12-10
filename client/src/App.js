import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppNavbar></AppNavbar>
                    <Container>
                        <ItemModal />
                        <ShoppingList />
                    </Container>
                </div>
            </Provider>

        )
    }
}

export default App

