import { FC, ReactNode } from 'react'
import styles from '../styles/components/Container.module.scss'

interface IContainerProps {
  children: ReactNode
}

const Container: FC<IContainerProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>
}

export default Container
