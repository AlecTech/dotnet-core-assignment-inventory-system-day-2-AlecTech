import React, { useState } from 'react';
import axios from 'axios';


function DiscontinuedProduct(props) {
    //const [currentCount, setCurrentCount] = useState(0);
    const displayName = props.name;
    // Used to receive the response.
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
    // Used to store the field values.
    const [id, setCategoryID] = useState("");
    //const [name, setName] = useState("");
    // Used to determine whether we are awaiting a response.
    const [waiting, setWaiting] = useState(false);


    function handleFieldChange(event) {
        switch (event.target.id) {
            case "id":
                setCategoryID(event.target.value);
                break;
            //case "name":
            //    setName(event.target.value);
            //    break;
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        setWaiting(true);

        axios(
            {
                // Specify the method to use (post/get/put/patch/delete).
                method: 'patch',
                // Specify the URL to send to.
                url: 'Inventory/Discontinue',
                // Specify the query parameters (the stuff we used in postman).
                params: {
                    id: id,
                    //name: name
                }
            }
            // .then() means that once the response is received, do something with it.
        ).then((res) => {
            // In this case, set our state to reflect what we got.
            setWaiting(false);
            setResponse(res.data);
            setStatusCode(res.status);
        }
            // .catch() runs rather than .then() if the initial method throws an exception, in which case we can pull the error code and message from the API error response.
        ).catch((err) => {
            setWaiting(false);
            setResponse(err.response.data);
            setStatusCode(err.response.status);
        });
    }


    return (
        <div>
            <h1>Counter</h1>



            <p>{waiting ? "Awaiting response..." : `Response recieved ${statusCode}: ${JSON.stringify(response)}`}</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Product ID</label>
                <input id="id" type="text" onChange={handleFieldChange} />
                <br />
                
                <input type="submit" value="Submit!" />
            </form>
        </div>
    );
}

export { DiscontinuedProduct };
//<label htmlFor="name">Product Name</label>
//    <input id="name" type="text" onChange={handleFieldChange} />
//    <br />