import React, { FC, useState } from 'react'
import { VscSignOut } from 'react-icons/vsc'
import { GoPerson } from 'react-icons/go'

import styles from './styles.module.scss'
import Image from 'next/image'

type Props = {}

export const Profile: FC<Props> = () => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.container}>
      <Image src="https://github.com/karleoncristophe.png" alt="profile" width={35} height={35} onClick={() => setActive(stt => !stt)} />
      {active && <div className={styles.dialog} onMouseLeave={() => setTimeout(() => setActive(false), 1000)}>
        <p>jp.jhonataspaulo@gmail.com</p>
        <ul>
          <li onClick={() => console.log('Meu perfil')}>
            <GoPerson size={24} />
            <span>Meu Perfil </span>
          </li>
          <li onClick={() => console.log('Logout')}>
            <VscSignOut size={24} />
            <span>Sair</span>
          </li>
        </ul>
      </div>}
    </div>
  )
}