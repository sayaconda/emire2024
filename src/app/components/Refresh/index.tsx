import { forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import {
  headers,
  titleVariants,
  transition,
  variants,
} from '@/app/utils/consts';

const Refresh = forwardRef<HTMLDivElement, {}>((_, ref) => {
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
          <div className="mb-10 text-center">
            <p className="text-3xl mb-2 font-bold">{headers.Refresh.enTitle}</p>
            <p className="text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Refresh.jaTitle}</span>
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
                着目したのは「脳疲労」
                <br />
                完全プライベート空間
                <br />
                五感で癒し脳内をリフレッシュ
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.7 }}
            >
              <p className="mb-4">
                外部からの情報やストレスの過剰状態が長時間続くと、脳内で情報処理できずオーバーヒートします。
              </p>
              <p className="mb-4">
                お仕事や勉強中などに「眠くなる」「ぼーっとする」「言葉がまとまらない」「思考が停止する」といった経験はありませんか？
              </p>
              <p className="mb-4">
                頭皮には約50個が頭部に集中しています。頭部のツボには自律神経のバランスを整えたり、眼精疲労、肩こりなどの改善も期待でき、血流を良くすることで、脳を究極にリラックスさせ、『判断力』『記憶力』『集中力』『思考力』『意欲力』の向上につながり、脳本来のパフォーマンスを広げることができます。
              </p>
              <p className="mb-4">
                ドライヘッドスパemireは、リラクゼーションだけでなく、大切なお仕事の前に脳をリラックスさせ本来の力を発揮できる、「冴える脳」にするお手伝いをしていきます。
              </p>
            </motion.div>
          </div>
          <div>
            <div className="relative block w-full h-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.8 }}
              >
                <Image
                  src="/img_1.jpeg"
                  alt="emire"
                  className="object-contain !relative !max-w-full"
                  fill
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Refresh.displayName = 'Refresh';
export default Refresh;
