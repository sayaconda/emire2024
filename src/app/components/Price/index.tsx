import { forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import {
  headers,
  titleVariants,
  transition,
  variants,
} from '@/app/utils/consts';

type Props = {
  isPc: boolean;
};

const Price = forwardRef<HTMLDivElement, Props>(({ isPc }, ref) => {
  const elements = [
    {
      name: 'お試しコース',
      desc: 'まずはこちらをお試しください。',
      img: '/option_1.jpeg',
      menu: '炭酸ヘッドマッサージ',
      contents: ['カウンセリング', 'リンパマッサージ', 'ヘッドマッサージ'],
      detail: 'デコルテ/肩甲骨/肩/首/耳/目)\n※アロマオイルか指圧か選択可能',
      time: '60分',
      price: '￥5,900',
    },
    {
      name: '人気No1',
      desc: '脳内をリフレッシュ\nオーダーメイドで組み合わせます。\n「眼精疲労」「疲れが取れない」「頭が重い」など\n不調がある方におすすめです',
      img: '/option_2.jpeg',
      menu: '炭酸ヘッドマッサージ',
      contents: ['カウンセリング', 'リンパマッサージ', 'ヘッドマッサージ'],
      detail: 'デコルテ/肩甲骨/肩/首/耳/目/手)\n※アロマオイルか指圧か選択可能',
      time: '90分',
      price: '￥8,900',
    },
    {
      name: 'オプション',
      desc: '「むくみ」「脚が重い」方におすすめです',
      img: '/option_3.jpeg',
      menu: 'フットオイルマッサージ',
      contents: [],
      detail:
        'フットオイルマッサージ\nx\n脂肪燃焼炭酸ローション\n足裏〜脚全体にアプローチ',
      time: '10分',
      price: '￥1,100',
    },
    {},
  ];
  return (
    <section ref={ref} className="py-8 px-4 md:py-20 md:px-40">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
        >
          <div className="mb-10 md:mb-20 text-center">
            <p className="text-5xl mb-2 font-bold">{headers.Price.enTitle}</p>
            <p className="mb-3 text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Price.jaTitle}</span>
              <span>―</span>
            </p>
            <p className="mb-3 text-2xl">
              マインドフルネス{!isPc && <br />}脳ドライヘッドスパ
            </p>
            <span className="font-sm">※料金は税抜き表記です。</span>
          </div>
        </motion.div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-x-8 gap-y-12">
          {elements.map((element, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.6 + i * 0.3 }}
            >
              {i !== 3 ? (
                <div>
                  <div>
                    <p className="relative underline-title mb-8 text-xl text-text-primary text-center">
                      {element.name}
                    </p>
                    <p
                      className={`mb-3 h-auto ${
                        i == 2 ? 'md:h-auto' : 'md:h-24'
                      } text-center whitespace-pre-wrap`}
                    >
                      {element.desc}
                    </p>
                    <div className="relative block w-full h-auto mb-4">
                      {element.img && (
                        <Image
                          src={element.img}
                          alt={element.name}
                          className="object-contain !relative !max-w-full"
                          fill
                          priority
                        />
                      )}
                    </div>
                    <ul className="mb-4 text-center">
                      {element?.contents?.map((content, i) => (
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
                    {i === 2 && (
                      <p className="whitespace-pre-wrap text-center">
                        {element.detail}
                      </p>
                    )}
                  </div>
                  <p className="mt-5 text-center text-lg">
                    <span>{element.time}</span>
                    <span>{element.price}</span>
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-5">
                    <p className="relative underline-title mb-8 text-xl text-text-primary text-center">
                      回数券(５枚)
                    </p>
                    <p>有効期限:6ヶ月</p>
                  </div>
                  <div className="mb-5">
                    <p className="text-lg">60分27,000円</p>
                    <p className="text-base">※ 通常29,500</p>
                  </div>
                  <div className="mb-5">
                    <p className="text-lg">90分42,000円</p>
                    <p className="text-base">※通常44,500</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Price.displayName = 'Price';
export default Price;
