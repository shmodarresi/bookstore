import React from 'react';
import { BrowserRouter as Router , Switch } from 'react-router-dom';

import { AppRoute } from "./helper/AppRoute";
import { routes } from './helper/routes';


const App = () => {
        return (
            <div>
                <Router>
                    <Switch>
                        {routes().map((value , i) => {
                           return <AppRoute private={value.private} 
                                            path={value.path} 
                                            component={value.component} 
                                            exact={value.exact} 
                                            key={i} 
                                            layout={value.layout}/>;
                        })}
                    </Switch>
                </Router>
            </div>
        );
}
export default App;
