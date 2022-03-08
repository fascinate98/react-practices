import React from 'react';

const App = function() {
    //const App = React.createElement('h1', null, 'Hello World');
    //return App;
    const message = 'Hello World111';
    return (        
        <div>
            <h1>{message}</h1>
        </div>
    );

    React.createElement('div', React.createElement('h1', null, 'helloworld'), null);
}

export { App }