import React, { useState, useMemo } from 'react'

function MemoHook() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        let i = 0
        while(i < 200000000) i++;
        return counterOne % 2 === 0
    }, [counterOne]);

  return (
    <div>
        <div>
            CounterOne - {counterOne}
            <button onClick={incrementOne}>Increment One</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            CounterTwo - {counterTwo}
            <button onClick={incrementTwo}>Increment Two</button>
        </div>
    </div>
  )
}

export default MemoHook