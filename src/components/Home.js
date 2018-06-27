import React, { Component } from 'react';
import SideBar from './SideBar';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <SideBar />
            </div>
        );
    }
}
export default Home;