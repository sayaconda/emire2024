import { forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import {
  headers,
  titleVariants,
  transition,
  variants,
} from '@/app/utils/consts';

const Staff = forwardRef<HTMLDivElement, {}>((_, ref) => {
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
            <p className="text-3xl mb-2 font-bold">{headers.Staff.enTitle}</p>
            <p className="text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Staff.jaTitle}</span>
              <span>―</span>
            </p>
          </div>
        </motion.div>
        <div className="flex justify-center gap-20">
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
              <p className="mb-3">これまで年間500名以上のお客様を施術した。</p>
              <p className="mb-3">「現代を働く全ての人々サポートしたい。」</p>
              <p className="mb-3">
                ここに来たら、笑顔でリスタートきるという意味を込めて
                <br />
                ドライヘッスパemireをOPENすることにしました。
              </p>
              <p className="mb-3">
                プライベート空間だからこそできるとを追求し一人一人に
                <br />
                寄りそったオールハンドのライヘッスパ専門店です。
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
