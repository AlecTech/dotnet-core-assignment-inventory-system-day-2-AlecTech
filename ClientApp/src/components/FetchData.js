import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData(props) {
    const displayName = FetchData.name;

    // Configure our state, and our setState standin methods.
    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Build the table based on forecast data.
    function renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Precipitation</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.precipitation}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    // Grab our data from our API.
    async function populateWeatherData() {
        // npm install --save axios
        const response = await axios.get('weatherforecast');
        setForecasts(response.data);
        setLoading(false);
    }

    useEffect(() => {
        populateWeatherData();
    }, [loading]);

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderForecastsTable(forecasts);

    return (
        <div>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}

            <button className="btn btn-primary" onClick={() => { setLoading(true) }}>Refresh</button>
        </div>
    );
}

export { FetchData };
