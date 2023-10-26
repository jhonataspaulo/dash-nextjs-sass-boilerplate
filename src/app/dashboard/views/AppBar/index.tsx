'use client'
import React, { FC } from 'react'

import styles from './styles.module.scss'
import { PAGES } from '@/@core/pages'
import { usePathname } from 'next/navigation'

type Props = {}

export const AppBar: FC<Props> = () => {

  const pathName = usePathname()
  const cPage = PAGES.find(p => p.path === pathName)
  return <header className={styles.header}>
    <div className={styles.infoPage}>
      <strong>{cPage?.label || 'Seja bem vindo!'}</strong>
    </div>
  </header>
}