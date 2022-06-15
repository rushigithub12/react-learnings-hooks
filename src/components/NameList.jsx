import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Dianaa'];
  return (
    <div>
        {names.map((name) => {
            return <h2 key={name}>{name}</h2>
        })}
    </div>
  )
}

export default NameList