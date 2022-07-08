import { FC, ReactNode } from 'react'

const MissionBox:FC<{children:ReactNode}> = ({children}) => {
  return (
    <div>{children}</div>
  );
}

export default MissionBox;