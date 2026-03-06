'use client';

import { type ReactNode, createContext, memo, useContext } from 'react';

import { type DiscoverSkillDetail } from '@/types/discover';

export type DetailContextConfig = Partial<DiscoverSkillDetail>;

export const DetailContext = createContext<DetailContextConfig>({});

export const DetailProvider = memo<{ children: ReactNode; config?: DetailContextConfig }>(
  ({ children, config = {} }) => {
    return <DetailContext.Provider value={config}>{children}</DetailContext.Provider>;
  },
);

export const useDetailContext = () => {
  return useContext(DetailContext);
};
