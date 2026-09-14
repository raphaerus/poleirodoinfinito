import { config, collection, fields } from '@keystatic/core';
import searchIndex from './public/search.json';

const postDateMap = new Map<string, number>();
if (Array.isArray(searchIndex)) {
  for (const item of searchIndex) {
    if (item && item.slug && item.date) {
      postDateMap.set(item.slug, new Date(item.date).getTime());
    }
  }
}

export default config({
  storage:
    process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
      ? {
          kind: 'github',
          repo: {
            owner: process.env.NEXT_PUBLIC_KEYSTATIC_REPO_OWNER || 'raphaerus',
            name: process.env.NEXT_PUBLIC_KEYSTATIC_REPO_NAME || 'poleirodoinfinito',
          },
        }
      : {
          kind: 'local',
        },
  ui: {
    brand: {
      name: 'Poleiro do Infinito',
    },
    navigation: {
      Conteúdo: ['blog', 'authors'],
    },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'data/blog/*/',
      format: { contentField: 'content' },
      columns: ['date'],
      parseSlugForSort: (slug: string) => {
        const timestamp = postDateMap.get(slug);
        if (timestamp) {
          // Valor negativo para que na ordenação padrão do Keystatic (ascendente)
          // os posts mais recentes (com maior data/timestamp) apareçam no topo, exatamente como no frontend.
          return -timestamp;
        }
        return -Number.MAX_SAFE_INTEGER;
      },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        date: fields.date({
          label: 'Data de Publicação',
          validation: { isRequired: true },
        }),
        lastmod: fields.date({
          label: 'Última Modificação',
        }),
        summary: fields.text({
          label: 'Resumo / Descrição',
          multiline: true,
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value || 'Nova tag',
        }),
        draft: fields.checkbox({
          label: 'Rascunho (Draft)',
          defaultValue: false,
        }),
        authors: fields.array(fields.text({ label: 'Autor' }), {
          label: 'Autores',
          itemLabel: (props) => props.value || 'Novo autor',
        }),
        layout: fields.text({
          label: 'Layout Customizado',
        }),
        canonicalUrl: fields.text({
          label: 'URL Canônica',
        }),
        type: fields.text({
          label: 'Tipo',
        }),
        content: fields.mdx({
          label: 'Conteúdo do Post',
          options: {
            image: {
              directory: 'public/static/images/blogs',
              publicPath: '/static/images/blogs/',
            },
          },
        }),
      },
    }),
    authors: collection({
      label: 'Autores',
      slugField: 'name',
      path: 'data/authors/*',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Nome' } }),
        avatar: fields.text({
          label: 'Avatar (ex: /static/images/avatar.jpg)',
        }),
        occupation: fields.text({ label: 'Ocupação' }),
        company: fields.text({ label: 'Empresa' }),
        email: fields.text({ label: 'Email' }),
        twitter: fields.text({ label: 'Twitter' }),
        linkedin: fields.text({ label: 'LinkedIn' }),
        github: fields.text({ label: 'GitHub' }),
        layout: fields.text({ label: 'Layout' }),
        content: fields.mdx({ label: 'Biografia / Conteúdo' }),
      },
    }),
  },
});
