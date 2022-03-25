import { func } from 'prop-types';
import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {   //최초에 불릴떄는 틱스가 없다. 스테이트 없어. 하나 리턴해줘야 스테이트가 생겨..
        super(...arguments);

        this.state = this.getCurrentClockTime();  //state를 초기화해주는데 
    }

    getCurrentClockTime() {
        const date = new Date();
        const hours = date.getHours();

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours-12 : hours))).slice(-2),
            minutes: ('0' + date.getMinutes()).slice(-2),
            seconds: ('0' + date.getSeconds()).slice(-2),
            session: hours > 12 ? "pm" : "am",
            ticks: this.state ? this.state.ticks + 1 : 0
        };
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                {
                    this.state.ticks % 10 == 0 ? 
                    null : 
                    <Clock 
                        hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                        session={this.state.session}/>
                        
                }
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(function(){
            this.setState(this.getCurrentClockTime());
        }.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("unmount!!!!!!!!!!!!!");
    }
}