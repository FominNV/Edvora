import { FC } from 'react'
import Image from 'next/image'
import { IRide } from '../../store/ride/types'
import InfoItem from './InfoItem'
import NameItem from './NameItem'
import { format } from 'date-fns'
import map from '../../content/images/map.png'
import styles from '../../styles/components/Rides/RideCard.module.scss'

interface IPlaceCardProps {
  ride: IRide
}

const RideCard: FC<IPlaceCardProps> = ({ ride }) => {
  return (
    <div className={styles.RideCard}>
      {/* image */}
      <div className={styles.RideCard__map}>
        <Image
          src={ride.map_url ? ride.map_url : map}
          width={296}
          height={148}
          alt="map"
        />
      </div>
      <div className={styles.RideCard__info}>
        {/* id */}
        <InfoItem label={'Ride Id'} value={ride.id} />

        {/* station code */}
        <InfoItem label={'Origin Station'} value={ride.origin_station_code} />

        {/* station path */}
        <InfoItem
          label={'station_path'}
          value={`[${ride.station_path.join(', ')}]`}
        />

        {/* date */}
        <InfoItem
          label={'Date'}
          value={format(new Date(ride.date), 'do LLL yyyy k:mm')}
        />

        {/* distance */}
        {ride.distance !== undefined && (
          <InfoItem label={'Distance'} value={ride.distance} />
        )}
      </div>
      <div className={styles.RideCard__names}>
        {/* name of city */}
        <NameItem name={ride.city} />

        {/* name of state */}
        <NameItem name={ride.state} />
      </div>
    </div>
  )
}

export default RideCard
