import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../store/selectors'
import {
  getRides,
  getUser,
  setNearestRides,
  setPastRides,
  setUpcomingRides,
} from '../store/ride/actions'
import MainLayout from '../layouts/MainLayout'
import RideList from '../components/Rides/RideList'
import { IRide } from '../store/ride/types'
import styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {
  const { rides, user } = useTypedSelector((state) => state.ride) // states from store
  const dispatch = useDispatch()

  // set nearest rides
  const getNearestRides = (rides: IRide[], code: number) => {
    const result = rides.map((ride: IRide) => {
      const closest = ride.station_path.sort(
        (a: number, b: number) => Math.abs(code - a) - Math.abs(code - b)
      )[0]
      ride['distance'] = Math.abs(code - closest)
      return ride
    })

    result.sort((a: IRide, b: IRide) => a.distance! - b.distance!)
    dispatch(setNearestRides(result))
  }

  // set upcoming rides
  const getUpcomingRides = (rides: IRide[]) => {
    const result = rides.filter(
      (ride: IRide) => new Date(ride.date) > new Date()
    )

    dispatch(setUpcomingRides(result))
  }

  // set past rides
  const getPastRides = (rides: IRide[]) => {
    const result = rides.filter(
      (ride: IRide) => new Date(ride.date) < new Date()
    )

    dispatch(setPastRides(result))
  }

  // load rides and user
  useEffect(() => {
    dispatch(getRides())
    dispatch(getUser())
  }, [])

  // set nearest rides
  useEffect(() => {
    if (rides.all && user) {
      getNearestRides(rides.all, user.station_code)
    }
  }, [rides.all, user])

  // set upcoming and past rides
  useEffect(() => {
    if (rides.all) {
      getUpcomingRides(rides.all)
      getPastRides(rides.all)
    }
  }, [rides.all])

  return (
    <MainLayout title={'Edvora'}>
      <main className={styles.Home}>
        {/* show filter or all rides */}
        {rides.filtered ? (
          <RideList rides={rides.filtered} />
        ) : (
          rides.nearest && <RideList rides={rides.nearest} />
        )}
      </main>
    </MainLayout>
  )
}

export default Home
