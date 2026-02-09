// utils/time.ts
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
}

export function parseDuration(duration: string): number {
  // "2h 26m" -> 146 minutos
  const hours = duration.match(/(\d+)h/)?.[1] || "0";
  const minutes = duration.match(/(\d+)m/)?.[1] || "0";
  return parseInt(hours) * 60 + parseInt(minutes);
}
