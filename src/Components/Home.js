import React, { Component } from 'react'
import splash from "../Pictures/splash.png"

import "../App.css"


export class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="splash" src={splash} alt="everyone in a meeting"/>
                </div>
                <div>
                    <h1>DANE SANCTUARY COALITION</h1>
                    <a href="/volunteer">Volunteer Form</a>
                </div>
                <br></br>
                <div className="text">
                    <p>On July 7, 2017, we announced the formation of the Dane Sanctuary Coalition. Formed in partnership with Voces de la Frontera and Centro Hispano of Madison, Dane Sanctuary organizes congregations and organizations to provide physical sanctuary to our immigrant friends and neighbors who are at risk for deportation. We do this as part of the national New Sanctuary Movement. 
                    </p> 
                    <br></br>
                    <p>
                        The Dane Sanctuary Coalition has been created in response to immoral immigration policies that threaten families, instill fear in our communities, and violate the most basic ethical standards all our faith traditions teach – that we are all created in the image of God, endowed with inherent worth and dignity, and deserving of a life free of violence and deprivation. 
                    </p>
                    <h2>The mission of the Dane Sanctuary Coalition states:</h2>
                    <p>Based on our shared faith commitments to social justice, we will assist vulnerable immigrant and refugee communities. We will do this, under the leadership of Voces de la Frontera and Centro Hispano, by providing and supporting physical sanctuary as needed, and by acting as a conduit for information, education, and trainings on other immigrant justice actions.</p>
                    <h3>Congregations currently offering sanctuary include</h3>
                    <ul>
                        <li>First Unitarian Society </li>
                        <li>Congregation Shaarei Shamayim; </li>
                        <li>Madison Christian Community</li>
                        <li>Advent Lutheran Church </li>
                        <li>Community of Hope United Church of Christ</li>
                        <li>Orchard Ridge United Church of Christ</li>
                        <li>Madison Mennonite Congregation</li> 
                        <h3>Supporting congregations include:</h3>
                            <li> First Congregational </li>
                        <li>United Church of Christ; </li>
                        <li>Plymouth Congregational United Church of Christ,</li>
                        <li>First Baptist Church</li>
                        <li>James Reeb Unitarian </li>
                        <li>Universalist Congregation</li>
                        <li>Lake Edge Lutheran Church</li>
                        <li>Prairie Unitarian Universalist Society</li>
                        <li>Temple Beth El</li>
                        <li>Presbyterian House - UW Madison</li>
                        <li>Beth Israel Center</li>
                        <li>Christ Presbyterian Church</li>
                        <li>Lake Edge United Church of Christ</li>
                        <li>St. Francis House</li>
                        <li>The Crossing, Inc.</li>
                        <li>Midvale Lutheran Church </li>
                        <li>Santa Maria ELCA </li>
                    </ul>
                    <p>Many more congregations are in the process of deciding what their place in the Coalition will be. </p>
                    <h4>Additionally, the following organizations have joined our Coalition in support of our immigrant and refugee communities:</h4>
                    <ul>
                        <li>Worker Justice Wisconsin</li>
                            <li>Wisconsin Network for Peace and Justice</li> <li>Family Farm Defenders</li>
                            <li>  Teaching Assistants' Association</li>
                            <li>Women's International League for Peace and Freedom - Madison</li>
                            <li> and the Community Immigration Law Center.</li>
                    </ul>
                    <p>Thirty-six times, the Bible commands us to love the stranger in our midst. But these are not strangers among us. They are our friends, our neighbors, our co-workers. They sit beside us in class. They own businesses in our neighborhoods. They are part of the fabric of our community and we are richer for their presence among us.</p>
                    <p>As people of faith, we strive to bring to reality our vision of a world where every person is treated with dignity and respect, where their contributions to our society are valued, and where all can live together in freedom and safety.  This vision impels us to stand together in unity with our immigrant and refugee friends and neighbors, to offer our support and help, and to provide Sanctuary to those in need. We invite you to join us in this work!</p>
                    <p>For more information, and to arrange for speakers to come to your congregation, email us at danesanctuary@gmail.com</p>
                    <p>Like us on Facebook </p>
                    <p>Read our Guidelines (English)   Directrices (Spanish)</p>
                    <p>Download our brochure</p>
                    <p>Click here* for more resources on Sanctuary</p>
                    <p>*any linkages from this web site to the web site of another party does not constitute or imply the endorsement or recommendation of any particular items on that website.
                    </p>
                    <p>See below for statements from faith leaders and Voces de la Frontera and Centro Hispano at the launch of Dane Sanctuary. Watch the video of the event here.</p>
                    <h4>Keeping Families Together</h4>
                    <p>On June 30, 2018, the Dane Sanctuary Coalition sponsored a press conference protesting the 'zero-tolerance' policy of the Trump Administration.  Wisconsin Faith Voices for Justice, Worker Justice Wisconsin, and End Domestic Abuse Wisconsin co-sponsored the press conference. Mario Garcia Sierra of Voces de la Frontera acted as MC. Speakers included Rev. Tina Lang of First United Methodist Church, Rev. Karen Armina of James Reeb Unitarian Congregation, Rev. Susan Schneider of Trinity Lutheran Church, Dr. Sadat Abiri,Becky Schigiel of Worker Justice Wisconsin, Dr. Erica Serlin - psychologist; Fabiola Hamdan,and Sister Maureen McDonnell.  You can see photos on our Facebook page.  You can download copies of some of the speeches at the bottom of this page.</p>
                </div>

             </div>
        );
                
    }
}

export default Home
