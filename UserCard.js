import React, {useState} from 'react';

export default function UserCard() {
    const [count, updateCount] = useState(0)

    let c = 4;
    const handleClick = () =>{
        updateCount(count+1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>click</button>
        </div>
    );
}
