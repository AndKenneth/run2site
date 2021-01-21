import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>

      </Head>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Run²</h1>
          <p className={styles.description}>
            <code>power up your events</code>
          </p>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}