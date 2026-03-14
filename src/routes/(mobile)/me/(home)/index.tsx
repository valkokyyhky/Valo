'use client';

import { Center, Flexbox } from '@lobehub/ui';  // 可能需要导入 Flexbox
import { memo, useState } from 'react';

import ChangelogModal from '@/components/ChangelogModal';

import Category from './features/Category';
import UserBanner from './features/UserBanner';

const MeHomePage = memo(() => {
  const [isChangelogModalOpen, setIsChangelogModalOpen] = useState(false);
  const [shouldLoadChangelog, setShouldLoadChangelog] = useState(false);

  const handleOpenChangelogModal = () => {
    setShouldLoadChangelog(true);
    setIsChangelogModalOpen(true);
  };

  const handleCloseChangelogModal = () => {
    setIsChangelogModalOpen(false);
  };

  return (
    <>
      <UserBanner />
      <Category onOpenChangelogModal={handleOpenChangelogModal} />
      <Center padding={16}>
        {/* 直接在这里写水印，不用导入的组件 */}
        <Flexbox horizontal align="center" gap={4} style={{ color: 'rgba(0,0,0,0.45)', fontSize: 12 }}>
          <span>Powered by</span>
          <span style={{ fontWeight: 600 }}>🌙 Valo</span>
        </Flexbox>
      </Center>
      <ChangelogModal
        open={isChangelogModalOpen}
        shouldLoad={shouldLoadChangelog}
        onClose={handleCloseChangelogModal}
      />
    </>
  );
});

MeHomePage.displayName = 'MeHomePage';

export default MeHomePage;
