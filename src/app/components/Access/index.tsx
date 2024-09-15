import { forwardRef } from 'react';
import { useState } from 'react';

import LegalModal from '../LegalModal';
import PolicyModal from '../PolicyModal';

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

type Props = {
  isPc: boolean;
};

const Access = forwardRef<HTMLDivElement, Props>(({ isPc }, ref) => {
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
  const [isOpenLegalModal, setIsOpenLegalModal] = useState<boolean>(false);
  const [isOpenPolicyModal, setIsOpenPolicyModal] = useState<boolean>(false);
  const openLegalModal = () => {
    setIsOpenLegalModal(true);
  };
  const openPolicyModal = () => {
    setIsOpenPolicyModal(true);
  };

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
            <p className="text-5xl mb-2 font-bold">{headers.Access.enTitle}</p>
            <p className="text-base text-text-primary">
              <span>―</span>
              <span className="px-3">{headers.Access.jaTitle}</span>
              <span>―</span>
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.6 }}
          >
            <div>
              <div className="flex">
                <div className="relative mb-5 h-auto hidden md:block md:w-[200px]">
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
                <p className="w-6 h-6 font-bold">
                  <Image
                    src="/map.svg"
                    alt="map"
                    className="object-contain !relative w-3 h-3 !max-w-full"
                    fill
                    priority
                  />
                </p>
                <p>
                  <span>150-0011</span>
                  <span>東京都渋谷区東3-12-12</span>
                  <p className="text-sm">
                    プライベートサロンの為詳細は、 ご予約の際にお伝えします。
                  </p>
                </p>
              </div>
              <div className="flex gap-8 mb-5">
                <p className="w-6 h-6 font-bold">
                  <Image
                    src="/phone.svg"
                    alt="phone"
                    className="object-contain !relative w-3 h-3 !max-w-full"
                    fill
                    priority
                  />
                </p>
                <a href="tel:+81-080-4007-4656">080-4007-4656</a>
              </div>
              <div className="flex gap-8 mb-5">
                <p className="w-6 h-6 font-bold">
                  <Image
                    src="/mail.svg"
                    alt="mail"
                    className="object-contain !relative w-3 h-3 !max-w-full"
                    fill
                    priority
                  />
                </p>
                <a href="mailto:dhs.emire.2024@gmail.com">
                  dhs.emire.2024@gmail.com
                </a>
              </div>
              <div className="flex gap-8 mb-5">
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
                              ? 'w-[40px] md:w-[30px] '
                              : 'w-[30px] md:w-[22px] '
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
              <div className="flex gap-8 mb-5">
                <div>
                  <p>［月～水］ 20 時～22 時</p>
                  <p>［木～土］ 11 時～20 時</p>
                  <p className="mb-3">［定休日］木曜日 </p>
                  <p className="text-sm">
                    出張も承っております。 <br /> LINEにてご相談ください。
                  </p>
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
            <div className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51873.2763720313!2d139.66931509223377!3d35.65040615538974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b421986ecc1%3A0xb04cf055a29719f4!2z44CSMTUwLTAwMTEg5p2x5Lqs6YO95riL6LC35Yy65p2x77yT5LiB55uu77yR77yS4oiS77yR77yS!5e0!3m2!1sja!2sjp!4v1723990089839!5m2!1sja!2sjp"
                width={isPc ? '600' : '100%'}
                height={isPc ? '450' : '225'}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <div>
                <div className="mb-2">
                  <p
                    className="cursor-pointer hover:opacity-60"
                    onClick={openLegalModal}
                  >
                    特定商取法に基づく表記
                  </p>
                  {isOpenLegalModal && (
                    <LegalModal setIsOpenLegalModal={setIsOpenLegalModal} />
                  )}
                </div>
                <div>
                  <p
                    className="cursor-pointer hover:opacity-60"
                    onClick={openPolicyModal}
                  >
                    ドライヘッドスパに関する利用規約とキャンセルポリシー
                  </p>
                  {isOpenPolicyModal && (
                    <PolicyModal setIsOpenPolicyModal={setIsOpenPolicyModal} />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Access.displayName = 'Access';
export default Access;
