import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export class Dashboard extends Component {
    render(props) {
        console.log(props)
        return (
            <div>
                <h1>Welcome to Your Dashboard, Mahoney </h1>

                <p>here you will be able to do take notes or whatever else you need to do</p>
              
            </div>
        )
    }
}

export default Dashboard
