export default function checkIfIsNumber(value: string): boolean {
  return /^\d+$/.test(value);
}
