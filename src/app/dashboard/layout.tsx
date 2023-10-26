import { Drawer } from './views/Drawer'
import { AppBar } from './views/AppBar'
import { Content } from './views/Content'

import styles from './layout.module.scss'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      <Drawer />
      <div className={styles.contentMain}>
        <AppBar />
        <Content>
        {children}
        </Content>
        </div>
    </main>
  )
}
