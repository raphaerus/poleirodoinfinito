import { notFound } from 'next/navigation';
import { genPageMetadata } from 'app/seo';
import desenhosAlbunsData from '@/data/desenhosAlbunsData';
import AlbumView from '@/components/galeria/AlbumView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return desenhosAlbunsData.map((album) => ({
    slug: album.slug,
  }));
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const album = desenhosAlbunsData.find((a) => a.slug === params.slug);
  if (!album) return;
  return genPageMetadata({ title: `${album.title} - Desenhos` });
}

export default async function DesenhosAlbumPage(props: PageProps) {
  const params = await props.params;
  const album = desenhosAlbunsData.find((a) => a.slug === params.slug);

  if (!album) {
    return notFound();
  }

  return <AlbumView album={album} />;
}
