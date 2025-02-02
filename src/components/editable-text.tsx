import { useRef } from 'react';

import callAll from '@/lib/call-all';
import useBoolean from '@/hooks/use-boolean';

export type EditableTextProps = Omit<React.HTMLProps<HTMLInputElement>, 'ref'>;

export default function EditableText({
  readOnly = false,
  defaultValue = '',
  onClick,
  onKeyDown,
  onBlur,
  className = '',
  ...props
}: EditableTextProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    value: isEditing,
    setTrue: handleStartEditing,
    setFalse: handleStopEditing,
  } = useBoolean();

  const handleClick = () => !readOnly && handleStartEditing();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyHandlerMap: {
      [key: string]: ((e: typeof event) => void) | undefined;
    } = {
      Escape: () => handleStopEditing(),
      Enter: () => inputRef.current?.blur(),
    };

    keyHandlerMap[event.key]?.(event);
  };

  if (isEditing) {
    return (
      <input
        autoFocus
        ref={inputRef}
        readOnly={readOnly}
        defaultValue={defaultValue}
        onKeyDown={callAll(onKeyDown, handleKeyDown)}
        onBlur={callAll(onBlur, handleStopEditing)}
        className={`h-4 bg-inherit leading-none font-semibold text-[#425466] focus:outline-none ${className}`}
        {...props}
      />
    );
  }

  return (
    <span
      onClick={callAll(onClick, handleClick)}
      className={`h-4 bg-inherit leading-none font-semibold text-[#425466] ${className}`}
    >
      {defaultValue}
    </span>
  );
}
