import { forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import {
  headers,
  titleVariants,
  transition,
  variants,
} from '@/app/utils/consts';

const Price = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const elements = [
    {
      name: 'お試しコース',
      desc: 'ドライヘッドスパが初めての方まずはお試しください。',
      img: '/option_1.jpeg',
      menu: '炭酸ヘッドマッサージ',
      contents: ['カウンセリング', 'リンパマッサージ', 'ヘッドマッサージ'],
      detail:
        '（デコルテ／肩甲骨／肩／首／耳／目）\n※アロマオイルか指圧か選択可能',
      time: '60分',
      price: '￥5,900',
    },
    {
      name: '人気No1',
      desc: '「冴える脳」とリラクゼーションの融合オーダーメイドで組み合わせます。',
      img: '/option_2.jpeg',
      menu: '炭酸ヘッドマッサージ',
      contents: ['カウンセリング', 'リンパマッサージ', 'ヘッドマッサージ'],
      detail:
        '（デコルテ／肩甲骨／肩／首／耳／目／手）\n※アロマオイルか指圧か選択可能',
      time: '90分',
      price: '￥8,900',
    },
    {
      name: 'オプション',
      desc: '',
      img: '/option_3.jpeg',
      menu: 'フットオイルマッサージ',
      contents: [],
      detail: '',
      time: '10分',
      price: '￥1,100',
    },
  ];
  return (
    <section ref={ref} className="py-20 px-40">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
        >
          <div className="mb-20 text-center">
            <p className="text-3xl mb-2 font-bold">{headers.Price.enTitle}</p>
            <p className="text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Price.jaTitle}</span>
              <span>―</span>
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-3 gap-8">
          {elements.map((element, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.6 + i * 0.3 }}
              className="flex"
            >
              <div
                className={`${
                  element.name === 'オプション' &&
                  'flex flex-col justify-between'
                }`}
              >
                <div>
                  <p className="relative underline-title mb-4 text-base text-text-primary text-center">
                    {element.name}
                  </p>
                  <p className="h-20 text-center whitespace-pre-wrap">
                    {element.desc}
                  </p>
                  <div className="relative block w-full h-auto mb-4">
                    <Image
                      src={element.img}
                      alt={element.name}
                      className="object-contain !relative !max-w-full"
                      fill
                      priority
                    />
                  </div>
                  <ul className="mb-4 text-center">
                    {element.contents.map((content, i) => (
                      <li key={i}>
                        {content}
                        {i === 1 && (
                          <p className="whitespace-pre-wrap text-xs">
                            {element.detail}
                          </p>
                        )}
                        <p>&darr;</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-center text-lg">
                  <span>{element.time}</span>
                  <span>{element.price}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Price.displayName = 'Price';
export default Price;
