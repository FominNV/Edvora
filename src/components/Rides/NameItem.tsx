import { FC } from 'react'
import styles from '../../styles/components/Rides/NameItem.module.scss'

interface INameItemProps {
  name: string
}

const NameItem: FC<INameItemProps> = ({ name }) => {
  return <div className={styles.NameItem}>{name}</div>
}

export default NameItem
