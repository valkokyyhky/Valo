import {
  BriefcaseIcon,
  CheckSquareIcon,
  CloudIcon,
  CodeIcon,
  CoffeeIcon,
  DollarSignIcon,
  GamepadIcon,
  GraduationCapIcon,
  HammerIcon,
  ImageIcon,
  LayoutPanelTopIcon,
  LeafIcon,
  MapIcon,
  NewspaperIcon,
  SearchIcon,
  UsersIcon,
} from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SkillCategory } from '@/types/discover';

export const useSkillCategory = () => {
  const { t } = useTranslation('discover');
  return useMemo(
    () => [
      {
        icon: LayoutPanelTopIcon,
        key: SkillCategory.All,
        label: t('skills.categories.all.name'),
        title: t('skills.categories.all.description'),
      },
      {
        icon: CodeIcon,
        key: SkillCategory.Developer,
        label: t('skills.categories.developer.name'),
        title: t('skills.categories.developer.description'),
      },
      {
        icon: CheckSquareIcon,
        key: SkillCategory.Productivity,
        label: t('skills.categories.productivity.name'),
        title: t('skills.categories.productivity.description'),
      },
      {
        icon: HammerIcon,
        key: SkillCategory.Tools,
        label: t('skills.categories.tools.name'),
        title: t('skills.categories.tools.description'),
      },
      {
        icon: SearchIcon,
        key: SkillCategory.WebSearch,
        label: t('skills.categories.web-search.name'),
        title: t('skills.categories.web-search.description'),
      },
      {
        icon: ImageIcon,
        key: SkillCategory.MediaGenerate,
        label: t('skills.categories.media-generate.name'),
        title: t('skills.categories.media-generate.description'),
      },
      {
        icon: BriefcaseIcon,
        key: SkillCategory.Business,
        label: t('skills.categories.business.name'),
        title: t('skills.categories.business.description'),
      },
      {
        icon: GraduationCapIcon,
        key: SkillCategory.ScienceEducation,
        label: t('skills.categories.science-education.name'),
        title: t('skills.categories.science-education.description'),
      },
      {
        icon: DollarSignIcon,
        key: SkillCategory.StocksFinance,
        label: t('skills.categories.stocks-finance.name'),
        title: t('skills.categories.stocks-finance.description'),
      },
      {
        icon: NewspaperIcon,
        key: SkillCategory.News,
        label: t('skills.categories.news.name'),
        title: t('skills.categories.news.description'),
      },
      {
        icon: UsersIcon,
        key: SkillCategory.Social,
        label: t('skills.categories.social.name'),
        title: t('skills.categories.social.description'),
      },
      {
        icon: GamepadIcon,
        key: SkillCategory.GamingEntertainment,
        label: t('skills.categories.gaming-entertainment.name'),
        title: t('skills.categories.gaming-entertainment.description'),
      },
      {
        icon: CoffeeIcon,
        key: SkillCategory.Lifestyle,
        label: t('skills.categories.lifestyle.name'),
        title: t('skills.categories.lifestyle.description'),
      },
      {
        icon: LeafIcon,
        key: SkillCategory.HealthWellness,
        label: t('skills.categories.health-wellness.name'),
        title: t('skills.categories.health-wellness.description'),
      },
      {
        icon: MapIcon,
        key: SkillCategory.TravelTransport,
        label: t('skills.categories.travel-transport.name'),
        title: t('skills.categories.travel-transport.description'),
      },
      {
        icon: CloudIcon,
        key: SkillCategory.Weather,
        label: t('skills.categories.weather.name'),
        title: t('skills.categories.weather.description'),
      },
    ],
    [t],
  );
};

export const useSkillCategoryItem = (key?: SkillCategory) => {
  const items = useSkillCategory();
  if (!key) return;
  return items.find((item) => item.key === key);
};
