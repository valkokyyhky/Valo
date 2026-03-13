'use client';

import { memo } from 'react';

interface ProductLogoProps {
  height?: number;
  width?: number;
}

export const ProductLogo = memo<ProductLogoProps>(() => {
  return (
    <span style={{ fontWeight: 600 }}>
      Valo
    </span>
  );
});
