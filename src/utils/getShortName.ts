export function getShortName(str: string): string {
  return str
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
}
