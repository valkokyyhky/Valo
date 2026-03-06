import type {
  MarketSkillCategory,
  MarketSkillDetail,
  MarketSkillListItem,
  MarketSkillListResponse,
  SkillCommentListResponse,
  SkillRatingDistribution,
} from '@lobehub/market-sdk';

export enum SkillCategory {
  All = 'all',
  Business = 'business',
  Developer = 'developer',
  GamingEntertainment = 'gaming-entertainment',
  HealthWellness = 'health-wellness',
  Lifestyle = 'lifestyle',
  MediaGenerate = 'media-generate',
  News = 'news',
  Productivity = 'productivity',
  ScienceEducation = 'science-education',
  Social = 'social',
  StocksFinance = 'stocks-finance',
  Tools = 'tools',
  TravelTransport = 'travel-transport',
  Weather = 'weather',
  WebSearch = 'web-search',
}

export enum SkillSorts {
  CreatedAt = 'createdAt',
  InstallCount = 'installCount',
  Name = 'name',
  Relevance = 'relevance',
  Stars = 'stars',
  UpdatedAt = 'updatedAt',
}

export enum SkillNavKey {
  Installation = 'installation',
  Overview = 'overview',
  Related = 'related',
  Resources = 'resources',
  Skill = 'skill',
  Version = 'version',
}

export interface DiscoverSkillItem extends Omit<MarketSkillListItem, 'commentCount'> {
  commentCount?: number;
  homepage?: string;
  ratingAvg?: number;
}

export interface SkillQueryParams {
  category?: string;
  locale?: string;
  order?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
  q?: string;
  sort?: SkillSorts;
}

export interface SkillListResponse extends MarketSkillListResponse {
  categories?: SkillCategoryItem[];
}

export interface DiscoverSkillDetail extends MarketSkillDetail {
  comments?: SkillCommentListResponse;
  downloadUrl?: string;
  github?: {
    stars?: number;
    url?: string;
  };
  homepage?: string;
  ratingDistribution?: SkillRatingDistribution;
  related: DiscoverSkillItem[];
}

export type SkillCategoryItem = MarketSkillCategory;
