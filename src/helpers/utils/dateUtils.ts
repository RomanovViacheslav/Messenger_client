interface ParsedResponse {
  time: string;
  formattedDate: string;
  dayOfWeek: string;
}

function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

function formatDate(date: Date): string {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday = date.toDateString() === today.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();

  if (isToday) {
    return 'сегодня';
  }
  if (isYesterday) {
    return 'вчера';
  }
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
  };
  const formattedDate = date.toLocaleDateString('ru-RU', options);
  return formattedDate;
}

function getDayOfWeek(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const dayOfWeek = date.toLocaleDateString('ru-RU', options);
  return dayOfWeek;
}

export function parseServerResponse(response: Date): ParsedResponse {
  const date = new Date(response);
  const time = formatTime(date);
  const formattedDate = formatDate(date);
  const dayOfWeek = getDayOfWeek(date);

  return {
    time,
    formattedDate,
    dayOfWeek,
  };
}
