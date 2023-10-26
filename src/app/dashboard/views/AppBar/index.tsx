'use client'
import React, { FC } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

import styles from './styles.module.scss'
import { PAGES } from '@/@core/pages'
import { usePathname } from 'next/navigation'
import { Profile } from './components/Profile'
import { useDrawer } from '@/@core/hooks/useDrawer'

type Props = {}

export const AppBar: FC<Props> = () => {

  const pathName = usePathname()
  const cPage = PAGES.find(p => p.path === pathName)
  const {setOpen, setOpenMobile} = useDrawer()
  return (
    <header className={styles.header}>
      <div className={styles.left}>
      <GiHamburgerMenu size={24} className={styles.icon1} onClick={() => setOpen(stt => !stt)}/>
      <GiHamburgerMenu size={24} className={styles.icon2} onClick={() => setOpenMobile(stt => !stt)}/>
      <strong>{cPage?.label || 'Seja bem vindo!'}</strong>
      </div>
      <Profile />
    </header>
  )
}