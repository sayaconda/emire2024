'use client';
// import { useMediaQuery } from '@mui/material';
import { useCallback, useRef } from 'react';

import Access from '@/app/components/Access';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Kv from '@/app/components/Kv';
import Price from '@/app/components/Price';
import Refresh from '@/app/components/Refresh';
import Reservation from '@/app/components/Reservation';
import Staff from '@/app/components/Staff';
import Technique from '@/app/components/Technique';
import { SectionType } from '@/app/utils/consts';

import Commitment from './components/Commitment';

export default function Home() {
  const commitmentRef = useRef(null);
  const refreshRef = useRef(null);
  const techniqueRef = useRef(null);
  const priceRef = useRef(null);
  const staffRef = useRef(null);
  const reservationRef = useRef(null);
  const accessRef = useRef(null);
  const topRef = useRef(null);

  const isPc = window.matchMedia('(min-width: 1028px)').matches;

  const scrollToSection = useCallback((section: SectionType) => {
    let sectionRef: React.MutableRefObject<HTMLElement | null>;

    switch (section) {
      case 'Top':
        sectionRef = topRef;
        break;
      case 'Commitment':
        sectionRef = commitmentRef;
        break;
      case 'Refresh':
        sectionRef = refreshRef;
        break;
      case 'Technique':
        sectionRef = techniqueRef;
        break;
      case 'Price':
        sectionRef = priceRef;
        break;
      case 'Staff':
        sectionRef = staffRef;
        break;
      case 'Reservation':
        sectionRef = reservationRef;
        break;
      case 'Access':
        sectionRef = accessRef;
        break;
      default:
        return;
    }

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Header scrollToSection={scrollToSection} isPc={isPc} />
      <main>
        <Kv ref={topRef} isPc={isPc} />
        <Commitment ref={commitmentRef} isPc={isPc} />
        <Refresh ref={refreshRef} isPc={isPc} />
        <Technique ref={techniqueRef} isPc={isPc} />
        <Price ref={priceRef} isPc={isPc} />
        <Staff ref={staffRef} isPc={isPc} />
        <Reservation ref={reservationRef} isPc={isPc} />
        <Access ref={accessRef} isPc={isPc} />
      </main>
      <Footer />
    </>
  );
}
