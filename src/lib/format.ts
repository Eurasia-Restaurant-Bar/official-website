export function formatEuros(value: string | number): string {
  const n = typeof value === "string" ? Number(value) : value;
  return `€${n.toFixed(2).replace(".", ",")}`;
}
