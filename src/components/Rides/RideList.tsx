import { FC, useEffect } from 'react'
import { IRide } from '../../store/ride/types'
import Container from '../Container'
import RideCard from './RideCard'
import styles from '../../styles/components/Rides/RideList.module.scss'

interface IRideListProps {
  rides: IRide[]
}

const RideList: FC<IRideListProps> = ({ rides }) => {
  // create list of rides
  const showRides = () => {
    if (rides) {
      const result = rides.map((elem: IRide, i: number) => (
        <RideCard ride={elem} key={i} />
      ))

      return result
    }
  }

  // rerender list of rides
  useEffect(() => {
    if (rides) {
      showRides()
    }
  }, [rides])

  return (
    <Container>
      <div className={styles.RideList}>{rides && showRides()}</div>
    </Container>
  )
}

export default RideList
