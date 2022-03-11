import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content';
const App = function(){

    // return (
    //     <>
    //         <Header/>
    //         <Content/>
    //     </>
    // );
    return React.createElement(
        Fragment,
        null,
        React.createElement(Header, null),
        React.createElement(Content, null)
    );
}

export default App;