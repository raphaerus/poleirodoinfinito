import { Album } from '@/types/album';

export const fotosAlbunsData: Album[] = [
  {
    slug: 'olhares-do-cotidiano',
    title: 'Olhares do Cotidiano',
    coverSrc: '/static/images/fotos/janela-e-caderno.jpg',
    date: '2026-08-24',
    description:
      'Registros fotográficos focados nos detalhes sutis do dia a dia, luzes de janela e momentos silenciosos.',
    category: 'fotos',
    tags: ['preto-e-branco', 'cotidiano', 'luz'],
    items: [
      {
        id: 'janela-e-caderno',
        title: 'Luz da Tarde e Caderno',
        date: '2026-08-24',
        description:
          'Fotografia em preto e branco capturando a luz natural entrando pela janela sobre a mesa de trabalho.',
        src: '/static/images/fotos/janela-e-caderno.jpg',
        tags: ['preto-e-branco', 'janela', 'leitura'],
      },
    ],
  },
  {
    slug: 'sombras-e-arquitetura',
    title: 'Sombras & Arquitetura',
    coverSrc: '/static/images/fotos/rua-e-sombras.jpg',
    date: '2026-08-23',
    description: 'Explorações urbanas capturando texturas de paralelepípedos, becos históricos e contrastes de luz.',
    category: 'fotos',
    tags: ['urbano', 'arquitetura', 'sombras'],
    items: [
      {
        id: 'rua-e-sombras',
        title: 'Caminho no Beco Histórico',
        date: '2026-08-23',
        description:
          'Fotografia de rua em preto e branco mostrando um transeunte em uma travessa com poste de iluminação.',
        src: '/static/images/fotos/rua-e-sombras.jpg',
        tags: ['preto-e-branco', 'rua', 'noite'],
      },
    ],
  },
];

export default fotosAlbunsData;
