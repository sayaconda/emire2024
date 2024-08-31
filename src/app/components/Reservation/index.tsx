import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import {
  headers,
  titleVariants,
  transition,
  variants,
} from '@/app/utils/consts';

const Reservation = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <section ref={ref} className="py-20 px-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={titleVariants}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.5 }}
      >
        <div className="mb-20 text-center">
          <p className="text-3xl mb-2 font-bold">
            {headers.Reservation.enTitle}
          </p>
          <p className="text-base text-text-primary">
            <span>―</span>
            <span className="px-3">{headers.Reservation.jaTitle}</span>
            <span>―</span>
          </p>
        </div>
      </motion.div>
      <div className="text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.6 }}
        >
          <p className="relative underline-title mb-6 text-lg">予約の流れ</p>
          <p className="mb-24">
            ご予約の際には、事前決済をお願いしており、決済完了後ご予約が確定となります。
            <br />
            予約日までに、カルテ入力と同意書をごー読いただき十分理解した上でのご予約をお願いいたします。
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.7 }}
        >
          <p className="relative underline-title mb-6 text-lg">
            キャンセルポリシー
          </p>
          <p className="mb-20">
            万が一、日程の変更やキャンセルをされる際は、予約日の3日前までにご連絡ください。
            <br />
            それ以降は、キャンセル料として¥3,000を頂戴し、費用については返金ではなく、
            <br />
            日程変更をお願いしております。当日キャンセルと無断キャンセルの場合は100％キャンセル料を頂戴することご了承ください。
            <br />
            回数券をご購入の方は、当日キャンセル・無断キャンセルは、1回分の消化としいかなる理由でも
            <br />
            有効期限の延長や返金手続きは致し兼ねます。回数券は購入日より6ヶ月間有効です。
          </p>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
        transition={{ ...transition, delay: 0.8 }}
      >
        <button className="flex mx-auto border custom-border py-4 px-8 hover:bg-accent-gradient font-bold">
          <a
            href="https://stekina.com/profile/GUZQ-PFVS?stype=lp"
            target="_blank"
            rel="noopener noreferrer"
          >
            ご予約はこちらから
          </a>
        </button>
      </motion.div>
    </section>
  );
});

Reservation.displayName = 'Reservation';
export default Reservation;
