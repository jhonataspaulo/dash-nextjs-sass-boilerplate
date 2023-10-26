'use client'
import React, { FC } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

import styles from './styles.module.scss'
import { PAGES } from '@/@core/pages'
import Link from 'next/link'
import { config } from '@/@core/config'
import { usePathname } from 'next/navigation'
import { useDrawer } from '@/@core/hooks/useDrawer'

type Props = {}

export const DrawerMobile: FC<Props> = () => {

  const pathName = usePathname()
  const {openMobile, setOpenMobile} = useDrawer()

  return <aside className={`${styles.aside} ${openMobile && styles.active}`}>
    <AiFillCloseCircle size={28} className={`${styles.iconClose} ${!openMobile && styles.closed}`} onClick={() => setOpenMobile(false)}/>
    <h4 className={styles.title}>{config.business_name}</h4>
    <ul className={styles.options}>
      {PAGES.map(({ icon: Icon, ...page }) => (
        <Link href={page.path} key={page.path} onClick={() => setOpenMobile(false)}>
          <li className={`${styles.listItem} ${page.regex.test(pathName) && styles.active}`}>
            <Icon size={24} />
            <span>{page.label}</span>
          </li>
        </Link>
      ))}
    </ul>
  </aside>
}