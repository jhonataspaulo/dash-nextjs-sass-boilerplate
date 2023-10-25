import React, { FC } from 'react'

import styles from './styles.module.scss'

type Props = {}

export const AppBar: FC<Props> = () => {
  return <header className={styles.header}>
    <h2>Appbar</h2>
  </header>
}