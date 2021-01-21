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
    </div>
  )
}