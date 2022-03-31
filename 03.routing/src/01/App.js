import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import { func } from 'prop-types';

export default function App() {
    const [route, setRoute] = useState('');

    const handleHashChange = () => {
        console.log(window.location.hash.substring(1));
        setRoute(window.location.hash.substring(1));
    }
    useEffect(() => {
        //마운트댈ㄷ떄
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange",handleHashChange )
        }
    },[]);
    return (function(){
        switch(route){
            case '/' :
                return <Main/>;
                break;
            case '/guestbook' :
                return <Guestbook/>;
                break;
            case '/gallery' :
                return <Gallery/>;
            default:
                return null;
        }
   
    })();
}