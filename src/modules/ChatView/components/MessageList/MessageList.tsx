import React, { memo, useRef } from 'react';
import { MessageListProps } from './MessageList.type';
import { MessageSender } from '../MessageSender';
import { MessageRecipient } from '../MessageRecipient';
import { parseServerResponse } from '../../../../helpers';
import { DateSeparator } from '../DateSeparator';

export const MessageList = memo(({ messages, filteredUser }: MessageListProps) => {
  const currentDateRef = useRef('');
  console.log(messages);

  return (
    <>
      {messages.map((message) => {
        const { time, formattedDate } = parseServerResponse(message.createdAt);

        let renderDateSeparator = false;
        if (formattedDate !== currentDateRef.current) {
          renderDateSeparator = true;
          currentDateRef.current = formattedDate;
        }

        if (message.senderId !== filteredUser?.id) {
          return (
            <React.Fragment key={message.id}>
              {renderDateSeparator && <DateSeparator date={formattedDate} />}
              <MessageSender content={message.content} time={time} />
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={message.id}>
            {renderDateSeparator && <DateSeparator date={formattedDate} />}
            <MessageRecipient content={message.content} time={time} />
          </React.Fragment>
        );
      })}
    </>
  );
});
