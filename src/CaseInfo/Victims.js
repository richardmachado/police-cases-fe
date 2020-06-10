import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from 'styled-components';

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

import { Link } from 'react-router-dom'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Box = styled.div`
border: solid black 1px;
padding-bottom: 4rem;
margin-bottom: 4rem;
`

function Victims(props) {
  const [neo, setNeo] = useState([]);

  useEffect(() => {
    axios

      .get("http://localhost:4000/api/victims")   
      .then(response => {
        console.log(response)  
          setNeo(response.data);
        
   
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!neo) {
    return <div className="sweet-loading">
    <ClipLoader
      css={override}
      size={150}
      color={"#123abc"}
     
        />
         </div>;
  }
  return (
    <div className="body">
      <div className="container">
              <h1 className="display-4 my3"classname="text-dark"> My Victims </h1>    
              <Link to="./cases">Cases</Link> 
                <Link to="./victims">Victims</Link>      
        
        {neo.map(rock => {
          return (
           <Box key={rock.case_id}>
                    <h4>Name: {rock.name} </h4>
                    <h4>Sex: {rock.sex} </h4>
                    <h4> Address: {rock.address} </h4>
                  <h4>Deceased: {rock.deceased} </h4>
                  <h4>Interviewed: {rock.interviewed} </h4>
                  <h4>Notes: {rock.notes} </h4>
            </Box>
                    
  )
  })}
      </div>
    </div>


    
    
  );
}

export default Victims;