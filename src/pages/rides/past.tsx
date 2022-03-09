import type { NextPage } from 'next'
import { useTypedSelector } from '../../store/selectors'
import MainLayout from '../../layouts/MainLayout'
import RideList from '../../components/Rides/RideList'

import styles from '../../styles/pages/rides/Past.module.scss'

const Past: NextPage = () => {
  const { rides } = useTypedSelector((state) => state.ride)

  return (
    <MainLayout title={'Edvora/rides/past'}>
      <main className={styles.Past}>
        {/* show filter or all rides */}
        {rides.filtered ? (
          <RideList rides={rides.filtered} />
        ) : (
          rides.past && <RideList rides={rides.past} />
        )}
      </main>
    </MainLayout>
  )
}

export default Past
