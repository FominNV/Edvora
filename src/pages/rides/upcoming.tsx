import type { NextPage } from 'next'
import { useTypedSelector } from '../../store/selectors'
import RideList from '../../components/Rides/RideList'
import MainLayout from '../../layouts/MainLayout'

import styles from '../../styles/pages/rides/Upcoming.module.scss'

const Upcoming: NextPage = () => {
  const { rides } = useTypedSelector((state) => state.ride)

  return (
    <MainLayout title={'Edvora/rides/upcoming'}>
      <main className={styles.Upcoming}>
        {/* show filter or all rides */}
        {rides.filtered ? (
          <RideList rides={rides.filtered} />
        ) : (
          rides.upcoming && <RideList rides={rides.upcoming} />
        )}
      </main>
    </MainLayout>
  )
}

export default Upcoming
