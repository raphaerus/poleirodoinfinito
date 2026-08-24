'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ZoomIn, Calendar, Tag } from 'lucide-react';
import { Album } from '@/types/album';
import ImageLightboxModal from './ImageLightboxModal';

interface AlbumViewProps {
  album: Album;
}

export default function AlbumView({ album }: AlbumViewProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categoryPath = `/${album.category}`;
  const categoryLabel = album.category === 'desenhos' ? 'Desenhos' : 'Fotos';

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Cabeçalho do Álbum */}
        <div className="space-y-4 pb-8 pt-6">
          <Link
            href={categoryPath}
            className="hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors dark:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para todos os álbuns de {categoryLabel}</span>
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
              {album.title}
            </h1>
            {album.description && (
              <p className="max-w-3xl text-lg leading-7 text-gray-500 dark:text-gray-400">{album.description}</p>
            )}
            <div className="flex items-center gap-4 pt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {album.date}
              </span>
              <span>•</span>
              <span>
                {album.items.length} {album.items.length === 1 ? 'imagem' : 'imagens'}
              </span>
            </div>
          </div>
        </div>

        {/* Grade de Imagens do Álbum */}
        <div className="py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {album.items.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className="group relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white text-left font-normal shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Contêiner da Imagem */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-lg backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100">
                      <ZoomIn className="h-4 w-4 text-primary-500" />
                      <span>Ver Imagem</span>
                    </div>
                  </div>
                </div>

                {/* Informações do Item */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-500 dark:text-gray-100">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  )}
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedIndex !== null && (
        <ImageLightboxModal
          items={album.items}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={(newIndex) => setSelectedIndex(newIndex)}
        />
      )}
    </>
  );
}
