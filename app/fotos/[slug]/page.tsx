import { notFound } from 'next/navigation';
import { genPageMetadata } from 'app/seo';
import fotosAlbunsData from '@/data/fotosAlbunsData';
import AlbumView from '@/components/galeria/AlbumView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fotosAlbunsData.map((album) => ({
    slug: album.slug,
  }));
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const album = fotosAlbunsData.find((a) => a.slug === params.slug);
  if (!album) return;
  return genPageMetadata({ title: `${album.title} - Fotos` });
}

export default async function FotosAlbumPage(props: PageProps) {
  const params = await props.params;
  const album = fotosAlbunsData.find((a) => a.slug === params.slug);

  if (!album) {
    return notFound();
  }

  return <AlbumView album={album} />;
}
