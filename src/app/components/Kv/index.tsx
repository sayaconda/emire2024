import { useEffect, useState } from 'react';
import { forwardRef } from 'react';

import Image from 'next/image';


type Props = {
  isPc: boolean;
};

const Kv = forwardRef<HTMLDivElement, Props>(({ isPc }, ref) => {
  const [visibleIndex, setVisibleIndex] = useState(0); // 表示する文字のインデックスを管理
  const [textVisible, setTextVisible] = useState(true); // テキストの表示状態を管理

  const names = ['e', 'm', 'i', 'r', 'e'];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setVisibleIndex((prevIndex) => {
        if (prevIndex < names.length) {
          return prevIndex + 1;
        } else {
          clearInterval(textInterval); // すべての文字が表示されたらインターバルをクリア
          return prevIndex;
        }
      });
    }, 100); // 文字は0.1秒ごとに追加される

    // テキストが全て表示された後、1秒後に非表示にする
    const hideTextTimeout = setTimeout(() => {
      if (visibleIndex === names.length) {
        setTextVisible(false); // テキストを非表示にする
      }
    }, 100 * names.length + 500); // 文字表示が終わってから1秒後に実行

    // コンポーネントがアンマウントされたときにインターバルとタイムアウトをクリア
    return () => {
      clearInterval(textInterval);
      clearTimeout(hideTextTimeout);
    };
  }, [names.length, visibleIndex]);

  return (
    <div
      ref={ref}
      className="relative w-screen h-screen flex bg-default overflow-hidden"
    >
      <Image
        src="/logo_large.png"
        alt="emire"
        className="object-contain !relative m-auto !max-w-full !w-2/4 !h-auto"
        fill
        priority
      />
      <div>
        {/* <p
          className={clsx(
            'absolute inset-0 flex justify-center items-center text-8xl',
            'text-gradient transition-opacity duration-1000 ease-in-out',
            {
              'opacity-100': textVisible,
              'opacity-0': !textVisible,
              'transition-opacity': true,
            }
          )}
        >
          {names.slice(0, visibleIndex).map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
        </p>
        <p
          className={clsx(
            'absolute inset-0 flex justify-center items-center text-default text-8xl',
            'mt-8 transition-opacity duration-1000 ease-in-out',
            {
              'opacity-100': !textVisible,
              'opacity-0': textVisible,
            }
          )}
          style={{
            transitionDelay: textVisible ? '0s' : '1s', // テキストが非表示になった1秒後に表示する
          }}
        >
          「冴える脳」を
          <br />
          働くあなたをサポート
        </p> */}
      </div>
    </div>
  );
});

Kv.displayName = 'Kv';
export default Kv;
