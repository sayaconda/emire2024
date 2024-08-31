import Image from 'next/image';

import { headerArray, headers, SectionType } from '@/app/utils/consts';

type Props = {
  scrollToSection: (section: SectionType) => void;
};

const Header = ({ scrollToSection }: Props): JSX.Element => {
  console.log('headerArray', headerArray);
  return (
    <div className="fixed top-0 w-full bg-white-gradient z-10">
      <div className="py-6 px-8 flex justify-between alignItems mx-auto max-w-screen-xl">
        <div
          className="relative block w-[200px] h-auto md:w-[100px] cursor-pointer hover:opacity-60"
          onClick={() => scrollToSection('Top')}
        >
          <Image
            src="/logo_large.png"
            alt="emire"
            className="object-contain !relative !max-w-full"
            fill
            priority
          />
        </div>
        <div className="flex gap-x-4">
          {headerArray.map((header, i) => (
            <div
              key={i}
              className="cursor-pointer hover:opacity-60"
              onClick={() =>
                scrollToSection(header.enTitle as keyof typeof headers)
              }
            >
              <p>{header.enTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;