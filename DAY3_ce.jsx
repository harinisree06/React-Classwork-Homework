import React, {useState} from 'react';
const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleToggle = () => {
        setIsVisible(!isVisible);
    };
    return(
        <div>
            <button onClick={handleToggle}>
                {isVisible ? 'Hide Component' : 'Show Component'}
            </button>
            {isVisible && <p>Hi! How are You!!!</p>}
        </div>
    );
};
export default ToggleMessage;
