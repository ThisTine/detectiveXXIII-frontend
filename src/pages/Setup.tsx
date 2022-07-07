import React, { useState } from 'react'

type hints = string[]

const Setup = () => {
    const [hints,sethints] = useState<hints>(["อันนี้ hint","อันนี้ก็ hints"])
    return (
    <div>Setup</div>
  )
}

export default Setup