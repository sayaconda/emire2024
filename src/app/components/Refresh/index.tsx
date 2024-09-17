import { forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { transition, variants } from '@/app/utils/consts';

type Props = {
  isPc: boolean;
};

const Refresh = forwardRef<HTMLDivElement, Props>(({ isPc }, ref) => {
  return (
    <section ref={ref} className="py-8 px-4 md:py-20 md:px-40">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
        >
          <div className="mb-10 text-center">
            <p className="text-base md:text-3xl mb-2 font-bold">
              着目したのは「脳波」×「血の巡り」 <br />
              完全プライベート空間でマインドフルネス脳へ
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-16 mb-10 md:items-end">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.7 }}
            >
              <p className="mb-6 md:mb-10">
                外部からの情報やストレスの過剰状態が長時間続くと、脳内で情報処理できずオーバーヒートします。
              </p>
              <p className="mb-6 md:mb-10">
                お仕事や勉強中などに「眠くなる」『ぼーっとする』「言葉がまとまらない」「思考が停止」するなど経験はありませんか？
              </p>
              <p className="mb-6 md:mb-10">
                頭部には約50個のツボが集中しています。頭部のツボには自律神経のバランスを整えたり、眼精疲労、肩こりなどの改善も期待でき、血流を良くすることで、脳をリラックスさせ、マインドフルネス脳にすることで『判断力』『記憶力』『集中力』『思考力』『意欲力』の向上に繋げ、脳本来のパフォーマンスを広げる事ができます。
              </p>
              <p className="mb-0 md:mb-10">
                ドライヘッドスパemireは、リラクゼーションだけでなく、脳波をシータ派に向けることで睡眠を誘い脳本来の力を発揮できる、「冴える脳」にするお手伝いをしていきます。
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.9 }}
        >
          <div className="mb-4">
            <p className="text-2xl md:text-3xl mb-2 font-bold">
              全ての施術に採用
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 md:items-end mb-10">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 1 }}
            >
              <p className="mb-2 md:mb-4 text-lg md:text-2xl">
                RE L’AMOUR
                <br />
                エキスパートローション
              </p>
              <div className="text-base">
                <p>
                  6種類の植物性幹細胞由来成分が配合
                  <br />
                  炭酸濃度10,000ppmのパワーで
                  <br />
                  髪毛・頭皮にアプローチ
                  <br />
                  毛細血管を５倍まで栄養を届けます。
                </p>
              </div>
            </motion.div>
          </div>
          <div>
            <div className="relative block w-full h-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 1.1 }}
              >
                <p className="mb-2 md:mb-4 text-lg md:text-2xl">
                  エキスパートマックスボディー
                </p>
                <div>
                  <p>
                    炭酸濃度20,000ppmのパワーで
                    <br />
                    分厚い脂肪やセルライトにアプローチ。 <br />
                    脂肪燃焼効果抜群
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 1.2 }}
        >
          <div className="mb-4">
            <p className="text-2xl md:text-3xl mb-2 font-bold">NEW PEACE</p>
          </div>
        </motion.div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-16 md:items-end">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 1.3 }}
            >
              <div className="mb-4">
                <p className="mb-1 text-lg md:text-2xl">Recovery Blanket</p>
                <span className="flex-1 break-words">―</span>
                <span className="px-3 text-base md:text-lg">
                  リカバリーブランケット
                </span>
                <span className="flex-1 break-words">―</span>
              </div>
              <p>
                身に纏うことで遠赤外線効果とオールハンドで揉み解すことで相乗効果となり『血の巡り」をより高めます。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

Refresh.displayName = 'Refresh';
export default Refresh;
