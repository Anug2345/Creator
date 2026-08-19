import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Use GSAP context for safe cleanup in React 19
    const ctx = gsap.context(() => {
      // 1. Single Element Reveals (Headings, Subheadings, Banners)
      const singleReveals = document.querySelectorAll('.gsap-reveal');
      singleReveals.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Staggered Containers (Cards, Grids, Steps, Benefit items)
      const staggerContainers = document.querySelectorAll('.gsap-stagger');
      staggerContainers.forEach((container) => {
        const children = container.children;
        if (children.length > 0) {
          gsap.fromTo(
            Array.from(children),
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // 3. Subtle scale-in for interactive preview containers
      const scaleReveals = document.querySelectorAll('.gsap-scale-reveal');
      scaleReveals.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.96,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    // Refresh ScrollTrigger calculations
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);
};
