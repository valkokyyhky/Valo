'use client';

import { type LobeHubProps } from '@lobehub/ui/brand';
import { memo } from 'react';
import Image from '@/libs/next/Image';

// 完全保持原来的接口和导出结构
interface ProductLogoProps extends LobeHubProps {
  height?: number;
  width?: number;
}

export const ProductLogo = memo<ProductLogoProps>(({ 
  size = 32,
  height,
  width,
  ...props 
}) => {
  // 保持返回的节点结构，但内容换成你的图片
  // 注意：不要改变返回的 JSX 结构层次
  return (
    <Image
      src="/icons/icon-192x192.png"
      alt="Valo"
      height={height || size}
      width={width || size}
      style={{ objectFit: 'contain' }}
      unoptimized={true}
      {...props}
    />
  );
});
