'use client'
import React, { FC } from 'react'

import styles from './styles.module.scss'
import { PAGES } from '@/@core/pages'
import Link from 'next/link'
import { config } from '@/@core/config'
import { usePathname } from 'next/navigation'
import { useDrawer } from '@/@core/hooks/useDrawer'

type Props = {}

export const Drawer: FC<Props> = () => {

  const pathName = usePathname()
  const {open} = useDrawer()

  return <aside className={`${styles.aside} ${open && styles.active}`}>
    <h4 className={styles.title}>{config.business_name}</h4>
    <ul className={styles.options}>
      {PAGES.map(({ icon: Icon, ...page }) => (
        <Link href={page.path} key={page.path}>
          <li className={`${styles.listItem} ${page.regex.test(pathName) && styles.active}`}>
            <Icon size={24} />
            <span>{page.label}</span>
          </li>
        </Link>
      ))}
    </ul>
  </aside>
}