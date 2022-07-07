import React, { useState } from 'react'

type year = 1 | 2

const Waiting = () => {
    const [year] = useState<year>(1)
  return (
    <div>Waiting</div>
  )
}

export default Waiting