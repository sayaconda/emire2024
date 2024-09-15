import { forwardRef } from 'react';

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

const Commitment = forwardRef<HTMLDivElement, Props>(({ isPc }, ref) => {
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
          <div className="mb-10 text-center">
            <p className="text-5xl mb-2 font-bold">
              {headers.Commitment.enTitle}
            </p>
            <p className="text-base text-text-primary">
              <span className="flex-1 break-words">―</span>
              <span className="px-3">{headers.Commitment.jaTitle}</span>
              <span className="flex-1 break-words">―</span>
            </p>
          </div>
        </motion.div>
        <div>
          <ul>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.6 }}
            >
              <li className="flex items-center gap-6 mb-7 md:mb-5 flex-col md:flex-row">
                <span className="relative commit-box-blue py-4 px-6 w-40 border-solid border-2 rounded-full border-gray-500 text-lg text-center">
                  脳波
                </span>
                <span className="flex-1 break-words">
                  アルファ波からシータ波の状態にする事で脳を究極にリラックスさせていきます。
                </span>
              </li>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.7 }}
            >
              <li className="flex items-center gap-6 mb-7 md:mb-5 flex-col md:flex-row">
                <span className="relative commit-box-pink py-4 px-6 w-40 border-solid border-2 rounded-full border-gray-500 text-lg text-center">
                  刺激
                </span>
                <span className="flex-1 break-words">
                  頭皮だけでなく肩甲骨・肩・首・デコルテを刺激血行を促進し『美と健康』はもちろんのこと、『脳本来の力が発揮できるよう』サポートします。
                </span>
              </li>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.8 }}
            >
              <li className="flex items-center gap-6 mb-7 md:mb-5 flex-col md:flex-row">
                <span className="relative commit-box-green py-4 px-6 w-40 border-solid border-2 rounded-full border-gray-500 text-lg text-center">
                  ホルモン
                </span>
                <span className="flex-1 break-words">
                  心地よい刺激を与えることで、脳内に「セロトニン」と「オキシトシン」が広がりメラトニンの誘発を促すことでリラックスさせます。
                </span>
              </li>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.9 }}
            >
              <li className="flex items-center gap-6 mb-7 md:mb-5 flex-col md:flex-row">
                <span className="relative commit-box-purple py-4 px-6 w-40 border-solid border-2 rounded-full border-gray-500 text-lg text-center">
                  音楽・香り
                </span>
                <span className="flex-1 break-words">
                  脳を休めるための音楽を厳選し、空間に広がる香りで音楽・香り
                  ドーパミンの分泌を促し眠りを誘います
                </span>
              </li>
            </motion.div>
          </ul>
        </div>
      </div>
    </section>
  );
});

Commitment.displayName = 'Commitment';
export default Commitment;
