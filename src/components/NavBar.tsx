import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTypedSelector } from '../store/selectors'
import Container from './Container'
import Filter from './Filter/Filter'
import styles from '../styles/components/NavBar.module.scss'

const NavBar: FC = () => {
  const { rides } = useTypedSelector((state) => state.ride) // states from store
  const router = useRouter()

  return (
    <nav className={styles.NavBar}>
      <Container>
        <div className={styles.NavBar__content}>
          <div className={styles.NavBar__links}>
            {/* home link */}
            <Link href={'/'}>
              <a
                className={`${styles.NavBar__links_link} ${
                  router.asPath === '/' && styles.active
                }`}
              >
                Nearest rides
              </a>
            </Link>

            {/* upcoming link */}
            <Link href={'/rides/upcoming'}>
              <a
                className={`${styles.NavBar__links_link} ${
                  router.asPath === '/rides/upcoming' && styles.active
                }`}
              >
                {`Upcoming rides (${
                  rides.upcoming ? rides.upcoming.length : 0
                })`}
              </a>
            </Link>

            {/* past link */}
            <Link href={'/rides/past'}>
              <a
                className={`${styles.NavBar__links_link} ${
                  router.asPath === '/rides/past' && styles.active
                }`}
              >
                {`Past rides (${rides.past ? rides.past.length : 0})`}
              </a>
            </Link>
          </div>

          {/* filter block */}
          <div className={styles.NavBar__filter}>
            <Filter />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar
