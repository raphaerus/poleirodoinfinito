import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/ui/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          Eu sou conhecido como <b className="font-medium">Rapha</b> na internet.
        </li>
        <li>
          Eu vivo no <b className="font-medium">Amapá no Brasil</b>.
        </li>
        <li>
          Eu nasci na bela cidade de <b className="font-medium">Macapá</b>.
        </li>
        <li>
          Minha primeira linguagem de programação que aprendi foi <b className="font-medium">PHP</b>.
        </li>
        <li>Eu amo desenvolvimento web.</li>
        <li>
          Estou focado em construir <b className="font-medium">Sites</b> que gerem conexões genuínas.
        </li>
        <li>
          Eu trabalho principalmente com tecnologias <b className="font-medium">Javascript/Typescript</b>.
        </li>
        <li>
          Eu sou um amante de cães <Twemoji emoji="dog" />.
        </li>
        <li>Sou apaixonado por artesanato</li>
        <li>Crio cadernos costurados à mão</li>
        <li>Gosto de presentear quem eu amo</li>
        <li>Eu sou uma pessoa criativa</li>
        <li>Amo desenhar no papel e no digital</li>
        <li>
          Eu sou uma pessoa esportiva. Eu amo caminhadas
          <span className="ml-1">
            <Twemoji emoji="running-shoe" />.
          </span>
          .
        </li>
        <li>
          Eu amo ouvir Rock clássico
          <Twemoji emoji="musical-keyboard" /> e música Indie
          <Twemoji emoji="musical-note" />.
        </li>
        <li>
          e também Rock nacional e MPB
          <Twemoji emoji="musical-guitar" />.
        </li>
        <li>
          Eu amo jogar video games <Twemoji emoji="video-game" />, Zelda é meu favorito de todos.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
