export const generateExpiredDate = () => {
  const currentYear = new Date().getFullYear()
  const randomYear = currentYear + Math.floor(Math.random() * 5)
  const randomMonth = Math.floor(Math.random() * 12)

  const formattedYear = randomYear.toString().slice(-2)
  const formattedMonth = randomMonth.toString().padStart(2, '0')

  return `${formattedMonth}/${formattedYear}`
}

const padWithLeadingZeros = (num: number, totalLength: number) => {
  return +String(num).padStart(totalLength, '0')
}

export const generateCVV = () => {
  const min = Math.ceil(1)
  const max = Math.floor(999)
  return padWithLeadingZeros(Math.floor(Math.random() * (max - min + 1)) + min, 3)
}
