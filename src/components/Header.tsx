import { FC } from 'react'
import Image from 'next/image'
import { useTypedSelector } from '../store/selectors'
import Container from './Container'
import avatar from '../content/images/user-avatar.png'
import styles from '../styles/components/Header.module.scss'

const Header: FC = () => {
  const { user } = useTypedSelector((state) => state.ride) // states from store

  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.Header__content}>
          {/* logo */}
          <div className={styles.Header__logo}>Edvora</div>

          <div className={styles.Header__userblock}>
            {/* username */}
            <div className={styles.Header__userblock_names}>
              {user && user.name}
            </div>
            {/* avatar */}
            <Image
              src={user ? user.url : avatar}
              alt="user_avatar"
              className={styles.Header__userblock_avatar}
              width={44}
              height={44}
            />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
