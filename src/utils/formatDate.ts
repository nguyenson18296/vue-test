export const formatDate = (
  date: string,
  options: any = { year: 'numeric', month: 'long', day: 'numeric' }
): string => {
  return new Date(date).toLocaleString('en-US', options)
}
