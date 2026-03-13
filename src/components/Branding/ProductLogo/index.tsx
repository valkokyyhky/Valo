'use client';

import { type LobeHubProps } from '@lobehub/ui/brand';
import { LobeHub } from '@lobehub/ui/brand';
import { memo } from 'react';

import { isCustomBranding } from '@/const/version';

import CustomLogo from './Custom';

interface ProductLogoProps extends LobeHubProps {
  height?: number;
  width?: number;
}

export const ProductLogo = memo<ProductLogoProps>((props) => {
  if (isCustomBranding) {
    return <CustomLogo {...props} />;
  }

  return (
    <span
      style={{
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: 0.6,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }}
    >
      🌙 Valo
    </span>
  );
});
