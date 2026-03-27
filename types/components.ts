import type readingTime from 'reading-time';

export type StatsType = 'blog' | 'snippet';

export type Stats = {
  type: StatsType;
  slug: string;
  views: number;
  loves: number;
  applauses: number;
  ideas: number;
  bullseye: number;
};
import type projectsData from '@/data/projectsData';
import type GiscusConfigs from './giscus-configs.type';

export type ProjectDataType = (typeof projectsData)[0];

export interface ProjectCardProps {
  project: ProjectDataType;
}

export type ReadingTime = ReturnType<typeof readingTime>;

export interface BlogMetaProps {
  date: string;
  slug: string;
  readingTime: ReadingTime;
}

export interface ViewCounterProps {
  slug: string;
  type: StatsType;
  className?: string;
}

export interface CommentsProps {
  className?: string;
  configs?: Partial<GiscusConfigs>;
}

export interface ScrollButtonProps {
  onClick: () => void;
  ariaLabel: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
