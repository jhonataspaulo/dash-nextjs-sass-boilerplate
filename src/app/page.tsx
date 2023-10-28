'use client'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <form>
        <div className={styles.formTitle}>Login</div>
        <div className={styles.inputs}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="text" placeholder='Seu email aqui'/>
          </div>
          <div className={styles.inputGroup}>
            <label>Senha</label>
            <input type="password" placeholder='Sua senha aqui'/>
          </div>
        </div>
        <button>Entrar</button>
      </form>
    </main>
  )
}

