export interface Desenho {
  id: string;
  title: string;
  date: string;
  description?: string;
  src: string;
  tags?: string[];
}

const desenhosData: Desenho[] = [
  {
    id: 'passaro-no-infinito',
    title: 'Pássaro no Infinito',
    date: '2026-08-20',
    description: 'Esboço a lápis grafite e carvão de um pássaro solitário sobrevoando as montanhas ao luar.',
    src: '/static/images/desenhos/passaro-no-infinito.jpg',
    tags: ['carvão', 'passaro', 'natureza'],
  },
  {
    id: 'arvore-solitaria',
    title: 'Árvore Solitária sob o Céu Estrelado',
    date: '2026-08-19',
    description: 'Desenho intimista de uma árvore retorcida no topo da colina sob o brilho da lua e estrelas.',
    src: '/static/images/desenhos/arvore-solitaria.jpg',
    tags: ['grafite', 'arvore', 'noite'],
  },
  {
    id: 'consumo-de-midia-esboco',
    title: 'O Silêncio da Leitura',
    date: '2026-08-18',
    description: 'Rascunho a lápis carvão retratando o desacelerar e a apreciação da arte física.',
    src: '/static/images/desenhos/consumo-de-midia.jpg',
    tags: ['carvão', 'leitura', 'reflexao'],
  },
];

export default desenhosData;
