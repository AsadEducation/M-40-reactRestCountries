import { useState } from 'react';
import './country.css';

export default function Country({ country, code, addVisitedCountry,visitedFlag }) {
    const [isVisited, setVisited] = useState(false);

    const name = country?.name?.common || "Unknown";
    const flagUrl = country?.flags?.png || "https://flagcdn.com/w320/gs.png";
    const population = country?.population || "Unknown";

    if (name === "isreal" || name === "Unknown") {
        return null;
    }

    const handleVisited = () => {
        if (!isVisited) { // Only add if it's not already visited
            addVisitedCountry(
                <Country 
                    key={country.ccn3} // Use a unique key
                    country={country} 
                    code={code} 
                />
            );
        }
        setVisited(!isVisited); // Toggle visited state
    };

    const handleFlagClicked = (flagUrl) =>{
        visitedFlag(flagUrl);
    }

    return (
        <div className={`box ${isVisited ? 'visited' : ''}`}>
            <p style={{ color: isVisited ? 'purple' : 'white' }}>{name}</p>
            <img src={flagUrl} alt={name} />
            <p>Population: {population}</p>
            <p>Code: {code}</p>

            <button onClick={handleVisited}>
                {!isVisited ? "Going" : "Visited"}
            </button>

            {isVisited ? "Visited the country" : "I will visit it soon"}
            <br />
            <button onClick={()=>handleFlagClicked(flagUrl)}>Add Flag</button>
        </div>
    );
}

{/* <ol>
    <li>Create a Button and Put onClick()</li>
    <li>Wrap it with another function because we have to pass img url</li>
    <li>write the handleFlagClicked function in the component</li>
    <li>where you will pass the flag url , you have to create a function in parent component</li>
    <li>Created a visitedFlag Function in parent component</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ol> */}



<ol>
    <li> <button onClick={()=>handleFlagClicked(flagUrl)}>Add Flag</button></li>
    <li> const handleFlagClicked = (flagUrl) =>{
        visitedFlag(flagUrl);
    }</li>
    <li> const visitedFlag = (flagUrl) => {
        const newFlags = [...flags, flagUrl];
        setFlags(newFlags);
    }</li>
    <li>  <div className="card-container">
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
            </div></li>
    <li>const [flags, setFlags] = useState([]);</li>
    <li> <div>
                <h2>visited Flags</h2>
                <div className="visited-flags">
                    {
                        flags.map((flag,index) => {
                            return <img key={index} src={flag} alt="" />
                        })
                    }
                </div>
            </div></li>
</ol>
