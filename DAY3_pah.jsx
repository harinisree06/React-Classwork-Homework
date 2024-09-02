import React, {useState} from 'react';
function App(){
    const [transformation, setTransformation] = useState('Kaioken');
    const toggleTransformation = () => {
        setTransformation(transformation === 'Kaioken' ? 'SuperSaiyen' : 'Kaioken');
    };
    return(
        <div>
            <h1>
                Current Transformation: {transformation}
            </h1>
            <button onClick={toggleTransformation}>Toggle Transformation</button>
        </div>
    );
};
export default App;
