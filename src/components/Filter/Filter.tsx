import { FC, useEffect, useState } from 'react'
import { useTypedSelector } from '../../store/selectors'
import { useDispatch } from 'react-redux'
import { setFilterRides } from '../../store/ride/actions'
import { IRide } from '../../store/ride/types'
import SelectFilter from './SelectFilter'
import { MdSort } from 'react-icons/md'
import styles from '../../styles/components/Filter/Filter.module.scss'

const Filter: FC = () => {
  const { rides } = useTypedSelector((state) => state.ride) // states from store
  const [show, setShow] = useState<boolean>(false) // show/hide filter menu
  const [cityFilter, setCityFilter] = useState<string>('') // set cities filter
  const [stateFilter, setStateFilter] = useState<string>('') // set states filter

  const dispatch = useDispatch()

  // show/hide filter menu
  const onclickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow(!show)
  }

  // create unique names of cities
  const createCityOptions = (rides: IRide[]): string[] => {
    const city = new Set<string>()
    rides.map((ride: IRide) => city.add(ride.city))

    return Array.from(city.values())
  }

  // create unique names of states
  const createStateOptions = (rides: IRide[]): string[] => {
    const state = new Set<string>()
    rides.map((ride: IRide) => state.add(ride.state))

    return Array.from(state.values())
  }

  // set filter rodes
  const setFilter = (rides: IRide[]) => {
    if (cityFilter && stateFilter) {
      const result = rides.filter(
        (ride: IRide) => ride.city === cityFilter && ride.state === stateFilter
      )
      dispatch(setFilterRides(result))
    } else if (cityFilter) {
      const result = rides.filter((ride: IRide) => ride.city === cityFilter)
      dispatch(setFilterRides(result))
    } else if (stateFilter) {
      const result = rides.filter((ride: IRide) => ride.state === stateFilter)
      dispatch(setFilterRides(result))
    }
  }

  // set filter rodes
  useEffect(() => {
    if (rides.nearest && (cityFilter || stateFilter)) {
      setFilter(rides.nearest)
    } else {
      dispatch(setFilterRides(null))
    }
  }, [cityFilter, stateFilter])

  return (
    <div className={styles.Filter}>
      {/* logo */}
      <div className={styles.Filter__logo} onClick={onclickHandler}>
        <MdSort size={'1.5rem'} />{' '}
        <div className={styles.Filter__logo_text}>Filters</div>
      </div>

      {/* content */}
      <div className={`${styles.Filter__popup} ${show && styles.active}`}>
        <div className={styles.Filter__popup_label}>Filters</div>
        <div className={styles.Filter__popup_selects}>
          {/* state select */}
          <SelectFilter
            defaultValue="State"
            options={rides.all && createStateOptions(rides.all)}
            setFilter={setStateFilter}
            setSecondFilter={setCityFilter}
          />

          {/* city select */}
          <SelectFilter
            defaultValue="City"
            options={
              rides.filtered && stateFilter
                ? createCityOptions(rides.filtered)
                : rides.all && createCityOptions(rides.all)
            }
            setFilter={setCityFilter}
          />
        </div>
      </div>
      <div
        className={`${styles.Filter__background} ${show && styles.active}`}
        onClick={onclickHandler}
      ></div>
    </div>
  )
}

export default Filter
