import Link from 'next/link'
import styles from './linkgrid.module.css'

export default function LinkGrid () {
  return (
    <div className={styles.grid}>
      <Link href="/production">
        <div className={styles.card}>
          <h3>Live Production</h3>
          <p>Awesome broadcasts for a worldwide audience</p>
        </div>
      </Link>
      <Link href="/tournament">
        <div className={styles.card}>
          <h3>Tournament Ops</h3>
          <p>Meaningful and well run events that players love</p>
        </div>
      </Link>
      <Link href="/technology">
        <div className={styles.card}>
          <h3>Technology</h3>
          <p>Innovative tech to powers everything we do</p>
        </div>
      </Link>
      <Link href="/full-service">
        <div className={styles.card}>
          <h3>Full Service Projects</h3>
          <p>We're ready to exectue your next idea from start to finish</p>
        </div>
      </Link>
    </div>
  )
}