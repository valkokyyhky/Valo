'use client';

import { Block, Flexbox, Table, Tag } from '@lobehub/ui';
import qs from 'query-string';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import PublishedTime from '@/components/PublishedTime';
import Title from '../../../../../components/Title';
import { useDetailContext } from '../../DetailProvider';

const Versions = memo(() => {
  const { t } = useTranslation('discover');
  const { versions = [] } = useDetailContext();
  const { pathname } = useLocation();

  return (
    <Flexbox gap={16}>
      <Title>{t('skills.details.versions.title')}</Title>
      <Block variant={'outlined'}>
        <Table
          columns={[
            {
              dataIndex: 'version',
              render: (_, record) => (
                <Link
                  to={qs.stringifyUrl({
                    query: {
                      version: record.version,
                    },
                    url: pathname,
                  })}
                  style={{ color: 'inherit' }}
                >
                  <Flexbox align={'center'} gap={8} horizontal>
                    <code style={{ fontSize: 14 }}>{record.version}</code>
                    {record.isLatest && (
                      <Tag color={'info'}>{t('skills.details.versions.table.isLatest')}</Tag>
                    )}
                  </Flexbox>
                </Link>
              ),
              title: t('skills.details.versions.table.version'),
            },
            {
              align: 'end' as const,
              dataIndex: 'createdAt',
              render: (_, record) => <PublishedTime date={record.createdAt} />,
              title: t('skills.details.versions.table.publishAt'),
            },
          ]}
          dataSource={versions}
          rowKey={'version'}
          size={'middle'}
        />
      </Block>
    </Flexbox>
  );
});

export default Versions;
