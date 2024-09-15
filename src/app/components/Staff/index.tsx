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

const Staff = forwardRef<HTMLDivElement, Props>(({ isPc }, ref) => {
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
            <p className="text-5xl mb-2 font-bold">{headers.Staff.enTitle}</p>
            <p className="text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Staff.jaTitle}</span>
              <span>―</span>
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.6 }}
          >
            <div
              className="relative block w-full h-auto"
              style={{
                maxWidth: '400px',
              }}
            >
              <Image
                src="/staff.jpg"
                alt="手洗理沙"
                className="object-contain !relative !max-w-full"
                fill
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.7 }}
          >
            <div>
              <p className="mb-6 text-lg">
                <span>代表</span>手洗　理沙
              </p>
              <p className="mb-8">
                これまで年間500名以上のお客様を施術しました。
              </p>
              <p className="mb-8">
                脳疲労が回復すると「判断力・思考力・集中録・意欲力・記憶力」
                <br />
                の向上が期待できマインドフルネス脳に導きます。
              </p>
              <p className="mb-8">
                「現代を働く全ての人々をサポートしたい。」
                <br />
                ここに来たら、笑顔でリスタートできるという意味を込めて
                <br />
                ドライヘッドスパemireをOPENすることにしました。
              </p>
              <p className="mb-8">
                プライベート空間だからこそできることを追求し一人一人に
                <br />
                寄りそったオールハンドのドライヘッドスパ専門店です。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Staff.displayName = 'Staff';
export default Staff;
