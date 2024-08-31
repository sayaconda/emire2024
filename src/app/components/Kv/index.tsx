import { useEffect, useState } from 'react';
import { forwardRef } from 'react';

import Image from 'next/image';

import clsx from 'clsx';

const Kv = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [visibleIndex, setVisibleIndex] = useState(0); // 表示する文字のインデックスを管理
  const [currentIndex, setCurrentIndex] = useState(0); // 画像のインデックスを管理
  const [textVisible, setTextVisible] = useState(true); // テキストの表示状態を管理

  const names = ['e', 'm', 'i', 'r', 'e'];
  const images = [
    '/kv_1.jpeg',
    '/kv_2.jpeg',
    '/kv_3.jpeg',
    '/kv_4.jpeg',
    '/kv_5.jpeg',
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 画像は3秒ごとに切り替わる

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
      clearInterval(imageInterval);
      clearInterval(textInterval);
      clearTimeout(hideTextTimeout);
    };
  }, [images.length, names.length, visibleIndex]);

  return (
    <div ref={ref} className="relative w-screen h-screen overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`emire kv ${index + 1}`}
          className={clsx(
            'absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out',
            {
              'opacity-0': index !== currentIndex,
              'opacity-100': index === currentIndex,
            }
          )}
          layout="fill"
          priority={index === currentIndex}
        />
      ))}
      <div>
        <p
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
        </p>
      </div>
    </div>
  );
});

Kv.displayName = 'Kv';
export default Kv;
