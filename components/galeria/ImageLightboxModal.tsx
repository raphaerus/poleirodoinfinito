'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Calendar, Tag } from 'lucide-react';
import { ItemGaleria } from '@/types/album';

interface LightboxProps {
  items: ItemGaleria[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightboxModal({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    onNavigate(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    onNavigate(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items.length, onNavigate]);

  // Teclas de atalho (ESC, Seta Esquerda, Seta Direita)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, handlePrev, handleNext]);

  if (!currentItem) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 backdrop-blur-md transition-opacity duration-300 sm:p-4"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClose();
      }}
    >
      {/* Botão Fechar (X) */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar modal"
        className="absolute right-4 top-4 z-50 rounded-full bg-black/60 p-2.5 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Botões de Navegação Anterior/Próxima (se houver mais de 1 imagem) */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </>
      )}

      {/* Conteúdo do Modal */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={currentItem.title}
        className={`relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 dark:bg-gray-900 ${
          isZoomed ? 'h-[95vh] w-[98vw] max-w-7xl' : 'max-h-[90vh] w-full max-w-4xl sm:flex-row'
        }`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Contêiner da Imagem */}
        <div
          className={`relative flex items-center justify-center bg-black/95 transition-all ${
            isZoomed
              ? 'h-full w-full cursor-grab overflow-auto p-4 active:cursor-grabbing'
              : 'min-h-[350px] w-full p-4 sm:min-h-[500px] sm:w-2/3'
          }`}
        >
          {/* Botão de Toggle: Zoom 100% / Ajustar à Tela */}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label={isZoomed ? 'Ajustar à tela' : 'Ver em tamanho real 100%'}
            className="absolute left-4 top-4 z-30 flex items-center gap-2 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-black/90"
          >
            {isZoomed ? (
              <>
                <Minimize2 className="h-4 w-4 text-primary-400" />
                <span>Ajustar à Tela</span>
              </>
            ) : (
              <>
                <Maximize2 className="h-4 w-4 text-primary-400" />
                <span>Tamanho Real (100%)</span>
              </>
            )}
          </button>

          {/* Renderização da Imagem */}
          {isZoomed ? (
            <div className="relative flex min-h-[800px] min-w-[800px] items-center justify-center">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                width={1600}
                height={1200}
                className="max-w-none object-contain"
                priority
              />
            </div>
          ) : (
            <div className="relative h-full max-h-[75vh] min-h-[300px] w-full">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>
          )}
        </div>

        {/* Lado/Painel de Informações (Ocultado quando em Zoom 100% se preferir, ou exibido na barra inferior) */}
        {!isZoomed && (
          <div className="flex w-full flex-col justify-between p-6 sm:w-1/3">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-500">
                  {currentIndex + 1} de {items.length}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{currentItem.date}</span>
                </div>
              </div>

              <h2 className="mt-3 text-2xl font-extrabold text-gray-900 dark:text-gray-100">{currentItem.title}</h2>

              {currentItem.description && (
                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {currentItem.description}
                </p>
              )}
            </div>

            {currentItem.tags && currentItem.tags.length > 0 && (
              <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-800">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <Tag className="h-3.5 w-3.5" />
                  <span>Tags</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {currentItem.tags.map((tag) => (
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
        )}
      </div>
    </div>
  );
}
