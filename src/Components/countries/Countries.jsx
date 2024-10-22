import { useEffect, useState } from "react";
import Country from "../Country/Country";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visited, setVisited] = useState([]);
    const [flags, setFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const addVisitedCountry = (component) => {
        const newArray = [...visited, component]
        setVisited(newArray);
    };

    const visitedFlag = (flagUrl) => {
        const newFlags = [...flags, flagUrl];
        setFlags(newFlags);
    }

    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>

            <div>
                {/* <h2>Visited: {visited.length}</h2> */}

                {
                    // visited.map((eachCountry, index) => {
                    //        return <div key={index}>
                    //             {eachCountry} {/* This will render the actual component */}
                    //         </div>
                    // })
                }
            </div>

            <div>
                <h2>visited Flags</h2>
                <div className="visited-flags">
                    {
                        flags.map((flag,index) => {
                            return <img key={index} src={flag} alt="" />
                        })
                    }
                </div>
            </div>

            <div className="card-container">
                {
                    countries.map((country) => (
                        <Country
                            key={country.ccn3}
                            visitedFlag={visitedFlag}
                            addVisitedCountry={addVisitedCountry}
                            code={country.ccn3}
                            country={country}
                        />
                    ))
                }
            </div>
        </div>
    );
}
