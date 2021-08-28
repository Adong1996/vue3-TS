import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
const DARE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function fromatUtcString(
  utcString: string,
  format: string = DARE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
