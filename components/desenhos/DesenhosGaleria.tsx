'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Calendar, Tag } from 'lucide-react';
import desenhosData, { Desenho } from '@/data/desenhosData';

export default function DesenhosGaleria() {
  const [selectedDesenho, setSelectedDesenho] = useState<Desenho | null>(null);

  const closeModal = useCallback(() => {
    setSelectedDesenho(null);
  }, []);

  // Fechar com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (selectedDesenho) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedDesenho, closeModal]);

  return (
    <>
      {/* Grade de Desenhos */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {desenhosData.map((desenho) => (
          <button
            type="button"
            key={desenho.id}
            onClick={() => setSelectedDesenho(desenho)}
            className="group relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white text-left font-normal shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Contêiner da Imagem */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={desenho.src}
                alt={desenho.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-lg backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100">
                  <ZoomIn className="h-4 w-4" />
                  <span>Ampliar</span>
                </div>
              </div>
            </div>

            {/* Informações no Card */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-500 dark:text-gray-100">
                {desenho.title}
              </h3>
              {desenho.description && (
                <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{desenho.description}</p>
              )}
              {desenho.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {desenho.tags.map((tag) => (
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

      {/* Modal Lightbox */}
      {selectedDesenho && (
        <div
          role="button"
          tabIndex={0}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') closeModal();
          }}
        >
          {/* Card do Modal */}
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <div
            role="dialog"
            aria-modal="true"
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900 sm:flex-row"
            onClick={(e) => e.stopPropagation()} // Previne fechar ao clicar dentro do card
            onKeyDown={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar (X) */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/80 sm:right-4 sm:top-4"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Lado Esquerdo: Imagem Grande */}
            <div className="relative flex min-h-[300px] w-full items-center justify-center bg-black/95 p-4 sm:min-h-[450px] sm:w-2/3">
              <div className="relative h-full max-h-[70vh] min-h-[300px] w-full">
                <Image
                  src={selectedDesenho.src}
                  alt={selectedDesenho.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
            </div>

            {/* Lado Direito: Detalhes do Desenho */}
            <div className="flex w-full flex-col justify-between p-6 sm:w-1/3">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">{selectedDesenho.title}</h2>

                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{selectedDesenho.date}</span>
                </div>

                {selectedDesenho.description && (
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {selectedDesenho.description}
                  </p>
                )}
              </div>

              {selectedDesenho.tags && (
                <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <Tag className="h-3.5 w-3.5" />
                    <span>Tags</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedDesenho.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-50 text-primary-700 dark:bg-primary-950/50 dark:text-primary-300 rounded-full px-3 py-1 text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
