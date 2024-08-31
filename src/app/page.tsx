'use client';

import { useCallback, useRef } from 'react';

import Access from '@/app/components/Access';
import Concept from '@/app/components/Concept';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Kv from '@/app/components/Kv';
import Price from '@/app/components/Price';
import Refresh from '@/app/components/Refresh';
import Reservation from '@/app/components/Reservation';
import Staff from '@/app/components/Staff';
import Technique from '@/app/components/Technique';
import { SectionType } from '@/app/utils/consts';

export default function Home() {
  const refreshRef = useRef(null);
  const conceptRef = useRef(null);
  const techniqueRef = useRef(null);
  const priceRef = useRef(null);
  const staffRef = useRef(null);
  const reservationRef = useRef(null);
  const accessRef = useRef(null);
  const topRef = useRef(null);

  const scrollToSection = useCallback((section: SectionType) => {
    let sectionRef: React.MutableRefObject<HTMLElement | null>;

    switch (section) {
      case 'Top':
        sectionRef = topRef;
        break;
      case 'Refresh':
        sectionRef = refreshRef;
        break;
      case 'Concept':
        sectionRef = conceptRef;
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
      <Header scrollToSection={scrollToSection} />
      <main>
        <Kv ref={topRef} />
        <Refresh ref={refreshRef} />
        <Concept ref={conceptRef} />
        <Technique ref={techniqueRef} />
        <Price ref={priceRef} />
        <Staff ref={staffRef} />
        <Reservation ref={reservationRef} />
        <Access ref={accessRef} />
      </main>
      <Footer />
    </>
  );
}
