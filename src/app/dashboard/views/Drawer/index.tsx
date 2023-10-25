import React, { FC } from 'react'

import styles from './styles.module.scss'
import { PAGES } from '@/@core/pages'

type Props = {}

export const Drawer: FC<Props> = () => {
  return <aside className={styles.aside}>
    {PAGES.map(page => (<h2 key={page.path}>{page.label}</h2>))}
  </aside>
}