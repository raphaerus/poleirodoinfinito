import siteMetadata from '@/data/siteMetadata';

import Twemoji from '@/components/ui/Twemoji';

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      Eu sou <span>{siteMetadata.fullName}</span> - Um dedicado Programador e Artista.
      <span className="hidden">Macapá-AP, Brasil</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="brazilian-flag" />
      </span>
    </h1>
  );
};

export default Heading;
