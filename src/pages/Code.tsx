import React, { useState } from 'react'

type code = {
    code: string ,
    end: Date
}

const Code = () => {
    const [code] = useState<code>({code:"X23AD",end: new Date(new Date().getTime() + 1*60000)})
  return (
    <div>Code</div>
  )
}

export default Code