import { Transition, Variants } from 'framer-motion';

export const headers = {
  Refresh: {
    enTitle: 'Refresh',
    jaTitle: 'リフレッシュ',
  },
  Concept: {
    enTitle: 'Concept',
    jaTitle: 'コンセプト',
  },
  Technique: {
    enTitle: 'Technique',
    jaTitle: '技術',
  },
  Price: {
    enTitle: 'Price',
    jaTitle: '料金',
  },
  Staff: {
    enTitle: 'Staff',
    jaTitle: 'スタッフ',
  },
  Reservation: {
    enTitle: 'Reservation',
    jaTitle: 'ご予約',
  },
  Access: {
    enTitle: 'Access',
    jaTitle: 'アクセス',
  },
};
// 配列に変換して各値を取り出す
export const headerArray = Object.values(headers).map((header) => ({
  enTitle: header.enTitle,
  jaTitle: header.jaTitle,
}));

export type SectionType = 'Top' | keyof typeof headers;

// フレームごとに変わるスタイルを設定
export const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const transition: Transition = {
  duration: 0.8,
  ease: 'easeOut',
};

// タイトル専用のアニメーションスタイル
export const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)',
  },
};