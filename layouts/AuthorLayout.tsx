import { ReactNode } from 'react';
import type { Authors } from 'contentlayer/generated';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

import { CareerTimeline } from '@/components/about';
import { Link, Image, Button, Twemoji } from '@/components/ui';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content;

  return (
    <>
      <div className="about divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sobre
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            Mais informações sobre quem sou eu e o propósito deste blog.
          </p>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 sm:pt-28">
            <Image src={avatar || ''} alt="avatar" width={192} height={192} className="h-48 w-48 rounded-full" />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>

            <div className="mt-2 flex gap-3">
              <Link href={`mailto:${email}`}>
                <Mail size={24} strokeWidth={1} />
              </Link>
              <Link href={github || ''} target="_blank">
                <Github size={24} strokeWidth={1} />
              </Link>
              <Link href={linkedin || ''} target="_blank">
                <Linkedin size={24} strokeWidth={1} />
              </Link>
              <Link href={twitter || ''} target="_blank">
                <Twitter size={24} strokeWidth={1} />
              </Link>
            </div>
          </div>

          {/* <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">{children}</div> */}

          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">
            <h2>
              Olá, pessoal! <Twemoji className="mx-2" emoji="waving-hand" /> EU sou Raphael Chaves
            </h2>
            <p>
              Eu tenho uma paixão por <strong>JavaScript/Typescript</strong> e desenvolvimento de sites. Estudo Html e
              css desde 1999 e faço sites desde essa época.
            </p>
            <p>
              Já trabalhei em muitas empresas grandes e multinacionais com minhas habilidades de programação. Sou
              formado em Desenvolvimento de Sistemas Web na faculdade Meta de Macapá. A primeira a ter esse curso em
              minha cidade. Desde 2009 sou oficialmente graduado, mas sempre amei programação!
            </p>
            <p>
              Estou atualmente criando meu ecosistema de negócios. Então temos uma coisa peculiar aqui: eu faço muitas
              coisas! Além de apaixonado por Webdesign sou ilustrador, pretendo criar ilustrações para livros
              infanto/juvenis, estou aberto a receber propostas para esses públicos.
            </p>
            <p>
              Além de ilustrar, ajudo pessoas a presentearem por meio da minha loja no instagram chamada "raphakraft".
              Lá faço cadernos artesanais personalizados.
            </p>
            <p>
              Também monto e concerto computadores, na verdade faço isso desde adolescente, mas como sempre me
              procuraram pra resolver esse tipo de problema, eu resolvi transformar em uma fonte de renda também mas
              minha paixão nessa área é fazer com que as pessoas deixem de gastar tempo com computadores lentos, já que
              mesmo os mais antigos estão aptos a serem turbinados.
            </p>
            Eu trabalho principalmente com <strong>Javascript</strong>, <strong>Typescript</strong>,{' '}
            <strong>React</strong>, <strong>NodeJS</strong>, <strong>NestJS</strong>, <strong>Tailwind</strong> css e{' '}
            <strong>NextJS</strong>.<h2> Por que tenho esse blog?</h2>
            <blockquote>
              Meu desejo é práticar e compartilhar meus conhecimentos em todas essas áreas da minha vida e talvez até
              sobre espiritualidade e desenvolvimento pessoal, veremos, Mas nele prático o desenvolvimento web e também
              público meus textos e ilustrações e na verdade está em aberto, pra tudo o que eu puder pôr a mão, o limite
              é até onde a criatividade me levar.
            </blockquote>
            <p>
              Aqui estará documentada minha jornada, é como um embrião plantado, daqui muitas possibilidade se abrirão e
              apenas assino aqui permitindo que tudo que tiver que acontecer para meu desenvolvimento, acontecerá, é um
              tratado de seguir minha centelha.
            </p>
            <p>
              Escrever e tomar nota ajuda a solidificar conhecimento. Espero que tudo o que eu públicar aqui, ajude não
              apenas a mim, mas a todos que vierem para no meu poleiro, que não é meu, é seu e do universo inteiro.
            </p>
            <p>
              Eu espero que todos apreciem. EM breve, talvez eu ative alguma forma de comentário, para que não apenas
              eu, mas todos que vierem parar por aqui possam apreciar. <Twemoji emoji="clinking-beer-mugs" />.
            </p>
            <div className="flex items-center justify-between">
              <h2>Minha carreira</h2>

              <Button as="a" href="/static/resume.pdf" target="_blank">
                <span>Resume</span>
                <Twemoji emoji="page-facing-up" />
              </Button>
            </div>
            <CareerTimeline />
            <h2>Tech stack</h2>
            <p>
              Este blog é feito com{' '}
              <a target="_blank" href="https://nextjs.org/">
                Next.js
              </a>{' '}
              e{' '}
              <a target="_blank" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>{' '}
              usando <strong>Tailwind Nextjs Starter Blog</strong>.
            </p>
            <p>
              Este blog foi inspirado em leohuynh.dev.{' '}
              <a target="_blank" href="https://twitter.com/hta218_">
                Leo Huynh
              </a>{' '}
              e{' '}
              <a target="_blank" href="https://twitter.com/timlrxx">
                Timothy Lin
              </a>{' '}
              Agradeço por sua contribuição para este blog starter minimalista, leve e altamente personalizável.
            </p>
            <p>Inspirado também na versão de [Karhdo/karhdo.dev](https://github.com/Karhdo/karhdo.dev).</p>
            <p>
              Se quiser pode usar minha versão para seu blog, fique a vontade, segue meu repositório:{' '}
              <a target="_blank" href="https://github.com/raphaerus/poleirodoinfinito">
                repository
              </a>{' '}
              for this blog.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
