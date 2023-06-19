import { parseServerResponse } from '../../../helpers';
import { LastMessage } from '../Sidebar.type';

export function getDisplayDate(date: Date | undefined): string {
  if (!date) {
    return '';
  }

  const parsedResponse = parseServerResponse(date);

  return parsedResponse.formattedDate === 'сегодня'
    ? parsedResponse.time
    : parsedResponse.formattedDate;
}
