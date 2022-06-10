import React, { useRef, useEffect } from 'react'

function FocusInpHook() {
    const inputRef = useRef(null);

    useEffect(() => {
        //focus input
        inputRef.current.focus();
    }, [])

  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default FocusInpHook