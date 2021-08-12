import React, { useState, useEffect } from 'react';

function App() {

    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    
    return (
        <div>
            {loaded == false && <div>that</div>}
            {loaded == true && <div>this</div>}
        </div>
    )
}

export default App
