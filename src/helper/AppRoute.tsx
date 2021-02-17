import React from 'react';
import { Redirect , Route } from 'react-router-dom';

export const AppRoute = ({component: Component, layout: Layout, private: isPrivate , ...rest}) => {
    return (
        <Route {...rest} render = { props =>{
                if(isPrivate && !localStorage.getItem('user')){
                    return <Redirect to = {{ pathname:'login', state: {from: props.location} }} />
                }

                if(Layout){
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )
                }

                return <Component {...props} />
            }
          }
        />
    );
}