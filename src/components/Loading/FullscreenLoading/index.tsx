import { Center, Flexbox } from '@lobehub/ui';
import { type ReactNode } from 'react';
import React, { memo } from 'react';

import { type StageItem } from '@/components/InitProgress';
import InitProgress from '@/components/InitProgress';

interface FullscreenLoadingProps {
  activeStage: number;
  contentRender?: ReactNode;
  stages: StageItem[];
}

const FullscreenLoading = memo<FullscreenLoadingProps>(({ activeStage, stages, contentRender }) => {
  return (
    <Flexbox height={'100%'} style={{ position: 'relative', userSelect: 'none' }} width={'100%'}>
      <Center flex={1} gap={16} width={'100%'}>
        {/* 直接硬编码 Valo 品牌 */}
        <Flexbox horizontal align="center" gap={8}>
          <span style={{ fontSize: 48 }}>🌙</span>
          <span style={{ 
            fontWeight: 600, 
            fontSize: 38,
            lineHeight: 1
          }}>
            Valo
          </span>
        </Flexbox>
        {contentRender ? contentRender : <InitProgress activeStage={activeStage} stages={stages} />}
      </Center>
    </Flexbox>
  );
});

export default FullscreenLoading;
