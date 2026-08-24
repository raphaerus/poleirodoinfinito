import { genPageMetadata } from 'app/seo';
import Link from 'next/link';

export const metadata = genPageMetadata({ title: 'Manual de Publicação' });

export default function ManualPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Manual de Publicação
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Guia completo passo a passo para criar, formatar e publicar novos artigos no Poleiro do Infinito.
        </p>
      </div>

      {/* Conteúdo do Manual */}
      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">
        {/* Passo 1 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-500">
            <span>📁</span> 1. Onde ficam os arquivos?
          </h2>
          <p>
            Cada artigo no blog fica organizado dentro de uma pasta própria com o nome amigável do post (chamado de{' '}
            <code>slug</code>).
          </p>
          <div className="space-y-2 rounded-lg bg-gray-100 p-4 font-mono text-sm dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">
              📌 <strong>Texto do Post:</strong> <br />
              <code className="text-primary-600 dark:text-primary-400">data/blog/nome-do-seu-post/index.mdx</code>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              🖼️ <strong>Imagens do Post:</strong> <br />
              <code className="text-primary-600 dark:text-primary-400">
                public/static/images/blogs/nome-do-seu-post/capa.jpg
              </code>
            </p>
          </div>
        </section>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Passo 2 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-500">
            <span>📝</span> 2. Cabeçalho do Post (Frontmatter)
          </h2>
          <p>
            No início de todo arquivo <code>index.mdx</code>, é obrigatório colocar o bloco de metadados entre três
            traços (<code>---</code>):
          </p>

          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm text-gray-100">
            {`---
title: 'Título do Seu Post Aqui'
date: '2026-08-20'
summary: 'Uma frase curta resumindo o post que vai aparecer no card inicial.'
tags: ['reflexao', 'arte', 'tecnologia']
---`}
          </pre>

          <ul className="list-disc space-y-1 pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <strong>title:</strong> O título principal que aparece no topo e nas listagens.
            </li>
            <li>
              <strong>date:</strong> Data no formato <code>AAAA-MM-DD</code>.
            </li>
            <li>
              <strong>summary:</strong> Descrição resumida para ser exibida nos cards de pré-visualização.
            </li>
            <li>
              <strong>tags:</strong> Lista de categorias/assuntos entre aspas e colchetes.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Passo 3 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-500">
            <span>🖼️</span> 3. Como colocar Imagens
          </h2>
          <p>
            Para colocar a imagem de capa ou imagens ao longo do texto, use a sintaxe de imagem do Markdown apontando
            para o caminho público:
          </p>

          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm text-gray-100">
            {`![Descrição da Imagem](/static/images/blogs/nome-do-seu-post/capa.jpg)`}
          </pre>

          <p className="text-sm italic text-gray-500 dark:text-gray-400">
            💡 <strong>Dica de imagem de IA:</strong> Peça à IA para gerar imagens no formato 16:9 em estilo rascunho a
            lápis carvão/grafite para manter a identidade artística do site.
          </p>
        </section>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Passo 4 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-500">
            <span>🔗</span> 4. Links Internos e Externos
          </h2>

          <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                📌 Link Interno (outro post)
              </h3>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                Aponta para qualquer página dentro do próprio blog:
              </p>
              <code className="block rounded bg-gray-900 p-2 font-mono text-xs text-green-400">
                [Leia mais sobre Boas Vindas](/blog/as-boas-vindas)
              </code>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                🌐 Link Externo (outro site)
              </h3>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">Aponta para um site externo na web:</p>
              <code className="block rounded bg-gray-900 p-2 font-mono text-xs text-blue-400">
                [Visite o Wikipedia](https://wikipedia.org)
              </code>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Passo 5 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-500">
            <span>✍️</span> 5. Formatação do Texto (Markdown)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="px-4 py-2 font-semibold text-gray-900 dark:text-gray-100">Elemento</th>
                  <th className="px-4 py-2 font-semibold text-gray-900 dark:text-gray-100">Sintaxe no Arquivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-mono text-sm dark:divide-gray-800">
                <tr>
                  <td className="px-4 py-2 font-sans font-medium">Subtítulo Nível 2</td>
                  <td className="px-4 py-2 text-primary-600 dark:text-primary-400">## Meu Subtítulo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans font-medium">Subtítulo Nível 3</td>
                  <td className="px-4 py-2 text-primary-600 dark:text-primary-400">### Título Menor</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans font-medium">Negrito</td>
                  <td className="px-4 py-2">**texto em negrito**</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans font-medium">Itálico</td>
                  <td className="px-4 py-2">*texto em itálico*</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans font-medium">Citação em Bloco</td>
                  <td className="px-4 py-2">&gt; Uma citação importante aqui</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-sans font-medium">Lista com Marcadores</td>
                  <td className="px-4 py-2">
                    - Item um
                    <br />- Item dois
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Passo 6 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-500">
            <span>🎨</span> 6. Como postar novos Desenhos na Galeria
          </h2>
          <p>
            Para publicar um novo desenho na página <code>/desenhos</code>:
          </p>
          <ol className="list-decimal space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>
              Salve a imagem do seu desenho na pasta: <br />
              <code className="font-mono text-primary-600 dark:text-primary-400">
                public/static/images/desenhos/meu-desenho.jpg
              </code>
            </li>
            <li>
              Abra o arquivo de dados: <br />
              <code className="font-mono text-primary-600 dark:text-primary-400">data/desenhosData.ts</code>
            </li>
            <li>Adicione um novo objeto na lista com o título, data, descrição e caminho da imagem:</li>
          </ol>

          <pre className="mt-3 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm text-gray-100">
            {`{
  id: 'meu-desenho',
  title: 'Título do Meu Desenho',
  date: '2026-08-20',
  description: 'Descrição ou contexto sobre o esboço.',
  src: '/static/images/desenhos/meu-desenho.jpg',
  tags: ['grafite', 'esboco'],
},`}
          </pre>
        </section>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Passo 7 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-500">
            <span>🚀</span> 7. Publicando na Vercel (Online)
          </h2>
          <p>
            Depois de criar o post ou desenho e testar localmente com <code>npm run dev</code>, envie as alterações para
            o GitHub rodando no terminal:
          </p>

          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400">
            {`git add .
git commit -m "feat: novo post ou desenho"
git push origin main`}
          </pre>

          <p className="text-gray-700 dark:text-gray-300">
            Assim que você der o <code>git push</code>, a Vercel compila e publica o seu novo conteúdo automaticamente
            na internet em menos de 1 minuto! 🎉
          </p>
        </section>
      </div>
    </div>
  );
}
