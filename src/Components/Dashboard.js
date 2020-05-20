import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Cases from '../CaseInfo/Cases';

export class Dashboard extends Component {
    render(props) {
        console.log(props)
        return (
            <div>
                <h1>My Dashboard </h1>
                <Link to="./cases">Cases</Link> 
                <Link to="./victims">Victims</Link>

            </div>
        )
    }
}

export default Dashboard
