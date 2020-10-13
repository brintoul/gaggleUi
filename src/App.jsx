import React from 'react';
import GaggleMap from 'component/GaggleMap.jsx'

const App = () => {

    function getGaggles(evt) {
        console.log("We are going to fetch");
        console.log(JSON.stringify(evt));
        console.log(evt.center);
    }

    let gaggles = [{latitude:32.7157, longitude:-117.161, name: "stuff"},
                    {latitude:32.75, longitude:-117.161, name: "thing"}];
    return(
        <div className="container">
            <h1>Hello World, React!</h1>
            <GaggleMap gaggles={gaggles} onChange={getGaggles}/>
        </div>
    );
}

export default App;
