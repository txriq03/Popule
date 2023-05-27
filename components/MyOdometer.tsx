import Odometer from 'react-odometerjs';

type OdometerProps = {
  value: number,
  duration?: number
}

const MyOdometer = ({value, duration}: OdometerProps) => {
  return (
    <Odometer value={value} duration={duration} />
  )
}

export default MyOdometer