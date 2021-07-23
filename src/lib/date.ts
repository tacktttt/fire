import { convertToTimeZone } from 'date-fns-timezone'

export const jstDate = (date: Date): Date => {
  return convertToTimeZone(date, { timeZone: 'Asia/Tokyo' })
}
