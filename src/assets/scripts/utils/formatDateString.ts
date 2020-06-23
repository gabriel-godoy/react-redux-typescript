export default function formatDateString(stringDate: string): string {
  const day = stringDate.slice(0, 2);
  const month = stringDate.slice(2, 4);
  const year = stringDate.slice(4, 8);

  return `${day}/${month}/${year}`;
}
