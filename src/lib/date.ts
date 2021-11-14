import { formatToTimeZone, convertToTimeZone } from 'date-fns-timezone'

export const JstDate = (date: Date): Date => {
  return convertToTimeZone(date, { timeZone: 'Asia/Tokyo' })
}

export const formatToDate = (date: Date, separator: string = '/'): string => {
  return formatToTimeZone(date, `YYYY${separator}MM${separator}DD`, {
    timeZone: 'Asia/Tokyo',
  })
}

export const formatToMonth = (date: Date, separator: string = '/'): string => {
  return formatToTimeZone(date, `YYYY${separator}MM`, {
    timeZone: 'Asia/Tokyo',
  })
}
