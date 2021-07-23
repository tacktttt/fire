import { convertToTimeZone } from 'date-fns-timezone'

export const JstDate = (date: Date): Date => {
  return convertToTimeZone(date, { timeZone: 'Asia/Tokyo' })
}
