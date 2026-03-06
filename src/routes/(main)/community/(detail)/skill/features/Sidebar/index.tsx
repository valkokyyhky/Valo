'use client';

import { Button, Flexbox, Icon, ScrollShadow } from '@lobehub/ui';
import { ShareIcon } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import urlJoin from 'url-join';

import { useDetailContext } from '../DetailProvider';
import { SkillNavKey } from '../types';
import FileTree from './FileTree';
import InstallationConfig from './InstallationConfig';

const Sidebar = memo<{ activeTab?: SkillNavKey; mobile?: boolean }>(
  ({ mobile, activeTab = SkillNavKey.Overview }) => {
    const { description, name, identifier } = useDetailContext();
    const { t } = useTranslation('common');
    const showInstallationConfig = activeTab !== SkillNavKey.Installation;
    const showFileTree = activeTab !== SkillNavKey.Resources;

    const shareUrl = urlJoin('https://lobehub.com/skills', identifier || '');

    const handleShare = () => {
      if (navigator.share) {
        navigator.share({
          title: name,
          text: description,
          url: shareUrl,
        });
      } else {
        navigator.clipboard.writeText(shareUrl);
      }
    };

    const shareButton = (
      <Button
        block
        icon={<Icon icon={ShareIcon} />}
        onClick={handleShare}
        size={'large'}
        variant={'outlined'}
      >
        {t('share')}
      </Button>
    );

    if (mobile) {
      if (activeTab !== SkillNavKey.Overview && activeTab !== SkillNavKey.Resources) return null;

      return (
        <Flexbox gap={24} width={'100%'}>
          {showInstallationConfig && <InstallationConfig />}
          {shareButton}
          {showFileTree && <FileTree />}
        </Flexbox>
      );
    }

    return (
      <ScrollShadow
        flex={'none'}
        gap={24}
        hideScrollBar
        size={4}
        style={{
          maxHeight: 'calc(100vh - 114px)',
          paddingBottom: 24,
          position: 'sticky',
          top: 114,
        }}
        width={360}
      >
        {showInstallationConfig && <InstallationConfig />}
        {shareButton}
        {showFileTree && <FileTree />}
      </ScrollShadow>
    );
  },
);

export default Sidebar;
