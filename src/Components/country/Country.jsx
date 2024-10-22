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
