import { useId } from 'react';

import { initialSize, availableSizes } from '@/app/hooks/use-size-slider';

export default function SizeSlider({
  size = initialSize,
  children,
  onSizeChange,
  sizeOptions = availableSizes,
  className = 'flex w-64 flex-col font-medium',
}: {
  size: number;
  children: React.ReactNode;
  onSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sizeOptions?: number[];
  className?: React.HTMLProps<HTMLDivElement>['className'];
}) {
  const sliderId = useId();

  return (
    <div className={className}>
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
