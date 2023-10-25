import {FC, ReactNode} from 'react'

import styles from './styles.module.scss'

type Props = {
  children:ReactNode 
}

export const Content: FC<Props> = ({children}) => {
  return <main>
    {children}
  </main>
}