import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export class Dashboard extends Component {
    render(props) {
        console.log(props)
        return (
            <div>
                <h1>My Dashboard </h1>
                <Link to="./cases">Cases</Link> 
                <Link to="./victims">Victims</Link>
                <h2>Captain Notes</h2>
                <p>Any news from commanding officer will go here</p>
            </div>
        )
    }
}

export default Dashboard
