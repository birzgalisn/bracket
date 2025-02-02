import React, { useId } from 'react';

import { initialSize, availableSizes } from '@/hooks/use-size-slider';

export default function SizeSlider({
  size = initialSize,
  onSizeChange,
  sizeOptions = availableSizes,
  children,
  className = 'flex w-64 flex-col font-medium',
  ...props
}: {
  size?: number;
  onSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sizeOptions?: number[];
} & React.HTMLProps<HTMLDivElement>) {
  const sliderId = useId();

  return (
    <div className={className} {...props}>
      <label htmlFor={`size-slider-${sliderId}`}>{children}</label>

      <input
        type="range"
        id={`size-slider-${sliderId}`}
        min={Math.min(...sizeOptions)}
        max={Math.max(...sizeOptions)}
        list={`size-slider-${sliderId}-sizes`}
        value={size}
        onChange={onSizeChange}
        className="w-full"
      />

      <datalist id={`size-slider-${sliderId}-sizes`}>
        {sizeOptions.map((size) => (
          <option key={`size-${size}`} value={size} />
        ))}
      </datalist>
    </div>
  );
}
