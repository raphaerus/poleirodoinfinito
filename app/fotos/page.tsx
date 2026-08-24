import { genPageMetadata } from 'app/seo';
import fotosAlbunsData from '@/data/fotosAlbunsData';
import AlbunsGrid from '@/components/galeria/AlbunsGrid';

export const metadata = genPageMetadata({ title: 'Álbuns de Fotos' });

export default function FotosPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Fotos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Álbuns de fotografia, olhares do cotidiano, luzes e sombras da cidade.
          </p>
        </div>

        <div className="container py-12">
          <AlbunsGrid albuns={fotosAlbunsData} category="fotos" />
        </div>
      </div>
    </>
  );
}
