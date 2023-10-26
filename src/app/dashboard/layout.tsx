import { Drawer } from './views/Drawer'
import { AppBar } from './views/AppBar'
import { Content } from './views/Content'

import styles from './layout.module.scss'
import { DrawerProvider } from '@/@core/contexts/DrawerContext'
import { DrawerMobile } from './views/DrawerMobile'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      <DrawerProvider>
        <Drawer />
        <DrawerMobile />
        <div className={styles.contentMain}>
          <AppBar />
          <Content>
            {children}
          </Content>
        </div>
      </DrawerProvider>
    </main>
  )
}
