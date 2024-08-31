import { forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import {
  headers,
  titleVariants,
  transition,
  variants,
} from '@/app/utils/consts';

const Technique = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const lists = [
    {
      name: '頭',
      bg: 'bg-decoration-accent1',
      top: '-40px',
      left: '0',
      right: '0',
      margin: 'auto',
    },
    {
      name: '肩・首',
      bg: 'bg-decoration-accent2',
      top: '40px',
      right: '-10px',
    },
    {
      name: 'デコルテ',
      bg: 'bg-decoration-accent3',
      bottom: '40px',
      right: '-10px',
    },
    {
      name: '耳',
      bg: 'bg-decoration-accent4',
      bottom: '-40px',
      left: '0',
      right: '0',
      margin: 'auto',
    },
    {
      name: '手・足',
      bg: 'bg-decoration-accent5',
      bottom: '40px',
      left: '-10px',
    },
    {
      name: '肩甲骨',
      bg: 'bg-decoration-accent6',
      top: '40px',
      left: '-10px',
    },
  ];
  return (
    <section ref={ref} className="bg-sub py-20 px-40">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
        >
          <div className="mb-20 text-center">
            <p className="text-3xl mb-2 font-bold">
              {headers.Technique.enTitle}
            </p>
            <p className="text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Technique.jaTitle}</span>
              <span>―</span>
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.6 }}
            >
              <p className="text-2xl mb-6">
                あらゆる箇所を刺激することで血液の巡りを良くし不調をリセット。脳本来のパフォーマンスを広げます。
              </p>
            </motion.div>
            <div className="relative block w-full h-auto mb-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.7 }}
              >
                <Image
                  src="/img_2.jpeg"
                  alt="emire"
                  className="object-contain !relative !max-w-full"
                  fill
                  priority
                />
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.8 }}
            >
              <p>
                デコルテ
                骨〜首まではオイルマッサージを採用。水溶性のオイルと植物性幹細胞由来成分が配合した炭酸ローションとの相乗効果で、血行促進させオールハンドでゆっくりとほぐします。
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.7 }}
            >
              <div className="relative ml-10 w-[400px] h-[400px] rounded-full border border-black">
                {lists.map((list, i) => (
                  <div
                    key={i}
                    className={`absolute flex items-center justify-center w-20 h-20 rounded-full text-center text-sm font-bold ${list.bg}`}
                    style={{
                      top: list.top,
                      right: list.right,
                      bottom: list.bottom,
                      left: list.left,
                      margin: list.margin,
                    }}
                  >
                    {list.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

Technique.displayName = 'Technique';
export default Technique;
