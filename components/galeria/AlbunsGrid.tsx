'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Layers, Calendar, ArrowRight } from 'lucide-react';
import { Album } from '@/types/album';

interface AlbunsGridProps {
  albuns: Album[];
  category: 'desenhos' | 'fotos';
}

export default function AlbunsGrid({ albuns, category }: AlbunsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {albuns.map((album) => (
        <Link
          key={album.slug}
          href={`/${category}/${album.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >
          {/* Capa do Álbum */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={album.coverSrc}
              alt={album.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Gradiente com Contagem de Itens */}
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
              <div className="flex justify-end">
                <span className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <Layers className="h-3.5 w-3.5 text-primary-400" />
                  <span>
                    {album.items.length} {album.items.length === 1 ? 'item' : 'itens'}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Informações do Álbum */}
          <div className="flex flex-1 flex-col justify-between p-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                <Calendar className="h-3.5 w-3.5" />
                <span>{album.date}</span>
              </div>

              <h2 className="mt-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-500 dark:text-gray-100">
                {album.title}
              </h2>

              {album.description && (
                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{album.description}</p>
              )}
            </div>

            <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary-600 transition-all group-hover:translate-x-1 dark:text-primary-400">
              <span>Acessar álbum</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
