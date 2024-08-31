import { forwardRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import {
  headers,
  titleVariants,
  transition,
  variants,
} from '@/app/utils/consts';

/**
 * sns iconダウンロード元
 * インスタ
 * SEE: https://about.meta.com/ja/brand/resources/instagram/instagram-brand/
 * LINE
 * SEE: https://icon-icons.com/ja/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/%E3%83%A9%E3%82%A4%E3%83%B3/66976
 */
const Access = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const medias = [
    {
      icon: '/sns_line.svg',
      alt: '公式ライン',
      link: 'https://lin.ee/Xen9wN5',
    },
    {
      icon: '/sns_insta.svg',
      alt: 'エミレ公式インスタグラム',
      link: 'https://www.instagram.com/headspa2024?igsh=OXB4aWR5YXFpazBr&utm_source=qr',
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
          <div className="mb-10 text-center">
            <p className="text-3xl mb-2 font-bold">{headers.Access.enTitle}</p>
            <p className="text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Access.jaTitle}</span>
              <span>―</span>
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.6 }}
          >
            <div>
              <div className="flex">
                <div className="relative bloc mb-5 kw-[200px] h-auto md:w-[200px]">
                  <Image
                    src="/logo_large.png"
                    alt="emire"
                    className="object-contain !relative !max-w-full"
                    fill
                    priority
                  />
                </div>
              </div>
              <div className="flex gap-8 mb-5">
                <p className="mr-4 w-20 font-bold">Access</p>
                <p>
                  <span>150-0011</span>
                  <span>東京都渋谷区東3-12-12</span>
                </p>
              </div>
              <div className="flex gap-8 mb-5">
                <p className="mr-4 w-20 font-bold">Tel</p>
                <a href="tel:+81-080-4007-4656">080-4007-4656</a>
              </div>
              <div className="flex gap-8 mb-5">
                <p className="mr-4 w-20 font-bold">Mail</p>
                <a href="mailto:dhs.emire.2024@gmail.com">
                  dhs.emire.2024@gmail.com
                </a>
              </div>
              <div className="flex gap-8 mb-5">
                <p className="mr-4 w-20 font-bold">Open</p>
                <div>
                  <p>［月～水］ 20 時～21 時</p>
                  <p>［木～土］ 11 時～20 時</p>
                  <p className="mb-3">［定休日］祝日・日曜日 </p>
                  <p className="text-sm">
                    出張も承っております。 ご相談ください。
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <p className="mr-4 w-20 font-bold">Follow us</p>
                <div className="flex gap-2">
                  {medias.map((media, i) => (
                    <button key={i}>
                      <a
                        href={media.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p
                          className={`relative block h-auto ${
                            i === 0
                              ? 'w-[50px] md:w-[30px] '
                              : 'w-[40px] md:w-[22px] '
                          }`}
                        >
                          <Image
                            src={media.icon}
                            alt={media.alt}
                            className="object-contain !relative !max-w-full"
                            fill
                            priority
                          />
                        </p>
                      </a>
                    </button>
                  ))}
                </div>
              </div>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51873.2763720313!2d139.66931509223377!3d35.65040615538974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b421986ecc1%3A0xb04cf055a29719f4!2z44CSMTUwLTAwMTEg5p2x5Lqs6YO95riL6LC35Yy65p2x77yT5LiB55uu77yR77yS4oiS77yR77yS!5e0!3m2!1sja!2sjp!4v1723990089839!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Access.displayName = 'Access';
export default Access;
