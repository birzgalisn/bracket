import { useState } from 'react';

export const initialSize = 8;
export const availableSizes = [2, 4, 8, 16, 32];

export default function useSizeSlider({
  initial = initialSize,
  options = availableSizes,
}: {
  initial?: number;
  options?: number[];
} = {}) {
  const [size, setSize] = useState(initial);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    const closestSize = options.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev,
    );

    setSize(closestSize);
  };

  return { size, handleSizeChange } as const;
}
