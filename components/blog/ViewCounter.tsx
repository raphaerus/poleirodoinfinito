'use client';

import { useEffect } from 'react';

// import { useBlogStats, useUpdateBlogStats } from 'hooks';

import type { ViewCounterProps } from '@/types/components';

const ViewCounter = ({ type, slug, className }: ViewCounterProps) => {
  // const [stats, isLoading] = useBlogStats(type, slug);
  // const updateView = useUpdateBlogStats();

  useEffect(() => {
    // if (!isLoading && stats) {
    //   updateView({ type, slug, views: stats['views'] + 1 });
    // }
  }, []); // vazio para evitar erro

  // Como não temos os dados, mostramos '---'
  return <span className={className}>--- views</span>;
};

export default ViewCounter;
