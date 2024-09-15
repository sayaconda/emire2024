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

const Technique = forwardRef<HTMLDivElement, Props>(({ isPc }, ref) => {
  const lists = [
    {
      name: '頭',
      bg: 'bg-decoration-accent1',
      top: isPc ? '-80px' : '-40px',
      left: '0',
      right: '0',
      margin: 'auto',
    },
    {
      name: '肩・首',
      bg: 'bg-decoration-accent2',
      top: '40px',
      right: isPc ? '-50px' : '-20px',
    },
    {
      name: 'デコルテ',
      bg: 'bg-decoration-accent3',
      bottom: isPc ? '40px' : '20px',
      right: isPc ? '-50px' : '-20px',
    },
    {
      name: '耳',
      bg: 'bg-decoration-accent4',
      bottom: isPc ? '-80px' : '-40px',
      left: '0',
      right: '0',
      margin: 'auto',
    },
    {
      name: '手・足',
      bg: 'bg-decoration-accent5',
      bottom: isPc ? '40px' : '20px',
      left: isPc ? '-50px' : '-20px',
    },
    {
      name: '肩甲骨',
      bg: 'bg-decoration-accent6',
      top: isPc ? '40px' : '20px',
      left: isPc ? '-50px' : '-20px',
    },
  ];
  return (
    <section ref={ref} className="py-8 px-4 md:py-20 md:px-40">
      <div className="mx-auto w-full md:max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
        >
          <div className="mb-20 text-center">
            <p className="text-5xl mb-2 font-bold">
              {headers.Technique.enTitle}
            </p>
            <p className="text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Technique.jaTitle}</span>
              <span>―</span>
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.6 }}
            >
              <p className="text-2xl mb-6">
                頭部にある約50個のツボを刺激することで血液の巡りを良くし脳波をシータ派に向けることで睡眠を誘い脳疲労を回復させ脳本来のパフォーマンスを広げます。
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
          </div>
          <div className="m-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.8 }}
            >
              <div className="relative md:ml-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-black">
                {lists.map((list, i) => (
                  <div
                    key={i}
                    className={`absolute flex items-center justify-center w-24 h-24 md:w-36 md:h-36 rounded-full text-center text-sm font-bold ${list.bg}`}
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.8 }}
        >
          <p>
            植物性幹細胞由来成分が配合した炭酸ローションとオールハンドマッサージの相乗効果で血行促進させ、
            <br />
            一人一人のお悩みに合わせメニューを組み合わせゆっくりとほぐします。
          </p>
        </motion.div>
      </div>
    </section>
  );
});

Technique.displayName = 'Technique';
export default Technique;
