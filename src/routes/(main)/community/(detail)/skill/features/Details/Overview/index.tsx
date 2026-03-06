'use client';

import { Collapse, Flexbox, Markdown, ScrollShadow, Tag, Text } from '@lobehub/ui';
import qs from 'query-string';
import { type PropsWithChildren, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Title from '../../../../../components/Title';
import List from '../../../../../(list)/skill/features/List';
import { useDetailContext } from '../../DetailProvider';

const Overview = memo<PropsWithChildren>(({ children }) => {
  const { t } = useTranslation('discover');
  const { tags = [], description, overview, category, related } = useDetailContext();

  return (
    <Flexbox gap={24}>
      <Flexbox gap={16}>
        <Title>{t('skills.details.summary.title')}</Title>
        <Markdown variant={'chat'}>{overview?.summary || description || ''}</Markdown>
      </Flexbox>
      <Collapse
        defaultActiveKey={['summary']}
        expandIconPlacement={'end'}
        items={[
          {
            children: (
              <ScrollShadow height={240} offset={16} padding={16} size={16}>
                {children}
              </ScrollShadow>
            ),
            key: 'summary',
            label: 'SKILL.md',
          },
        ]}
        padding={{
          body: 0,
        }}
        variant={'outlined'}
      />
      {tags.length > 0 && (
        <Flexbox gap={8} horizontal wrap={'wrap'}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Flexbox>
      )}
      {related && related.length > 0 && (
        <Flexbox gap={16}>
          <Title
            more={t('skills.details.related.more')}
            moreLink={qs.stringifyUrl({
              query: { category },
              url: '/community/skill',
            })}
          >
            {t('skills.details.related.listTitle')}
          </Title>
          <List data={related} />
        </Flexbox>
      )}
    </Flexbox>
  );
});

export default Overview;
