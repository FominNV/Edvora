import { FC } from 'react'
import styles from '../../styles/components/Rides/InfoItem.module.scss'

interface IInfoItemProps {
  label: string
  value: string | number
}

const InfoItem: FC<IInfoItemProps> = ({ label, value }) => {
  return (
    <div className={styles.InfoItem}>
      <div className={styles.InfoItem__label}>{label}&nbsp;:&nbsp; </div>
      <div className={styles.InfoItem__value}>{value}</div>
    </div>
  )
}

export default InfoItem
