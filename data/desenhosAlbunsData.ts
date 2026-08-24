import { Album } from '@/types/album';

export const desenhosAlbunsData: Album[] = [
  {
    slug: 'cadernos-de-carvao-e-grafite',
    title: 'Cadernos de Carvão & Grafite',
    coverSrc: '/static/images/desenhos/passaro-no-infinito.jpg',
    date: '2026-08-20',
    description: 'Estudos focados na textura do carvão, sombras profundas e momentos de introspecção.',
    category: 'desenhos',
    tags: ['carvão', 'grafite', 'esboços'],
    items: [
      {
        id: 'passaro-no-infinito',
        title: 'Pássaro no Infinito',
        date: '2026-08-20',
        description: 'Esboço a lápis grafite e carvão de um pássaro solitário sobrevoando as montanhas ao luar.',
        src: '/static/images/desenhos/passaro-no-infinito.jpg',
        tags: ['carvão', 'passaro', 'natureza'],
      },
      {
        id: 'consumo-de-midia-esboco',
        title: 'O Silêncio da Leitura',
        date: '2026-08-18',
        description: 'Rascunho a lápis carvão retratando o desacelerar e a apreciação da arte física.',
        src: '/static/images/desenhos/consumo-de-midia.jpg',
        tags: ['carvão', 'leitura', 'reflexao'],
      },
    ],
  },
  {
    slug: 'estudos-de-natureza-e-paisagens',
    title: 'Estudos de Natureza & Paisagens',
    coverSrc: '/static/images/desenhos/arvore-solitaria.jpg',
    date: '2026-08-19',
    description: 'Desenhos capturando a presença marcante de árvores, horizontes e elementos naturais.',
    category: 'desenhos',
    tags: ['natureza', 'árvore', 'paisagem'],
    items: [
      {
        id: 'arvore-solitaria',
        title: 'Árvore Solitária sob o Céu Estrelado',
        date: '2026-08-19',
        description: 'Desenho intimista de uma árvore retorcida no topo da colina sob o brilho da lua e estrelas.',
        src: '/static/images/desenhos/arvore-solitaria.jpg',
        tags: ['grafite', 'arvore', 'noite'],
      },
    ],
  },
];

export default desenhosAlbunsData;
