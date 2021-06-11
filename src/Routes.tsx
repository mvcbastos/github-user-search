import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './core/components/Navbar';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;