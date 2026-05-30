import { useRef } from "react";
import { Button3d } from "@app/components/button";
import {
  Hero,
  HeroContent,
  HeroHeading,
  CtaAction,
  HeroImage,
  HeroSubText,
} from "./styled/landing-page.styled";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export const LandingPage = () => {
  // Posisikan ref di wrapper terluar agar semua elemen anak bisa diakses GSAP
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "bounce" } });

      tl.from("h1, p", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      })

        .from(
          "h1 span",
          {
            scale: 0,
            rotation: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(2.5)",
          },
          "-=0.4",
        )

        .from(
          "button",
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.5)",
          },
          "-=0.2",
        )

        .from(
          "img",
          {
            scale: 0.8,
            opacity: 0,
            rotation: 2,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        );
    },
    { scope: container, dependencies: [container] },
  );

  return (
    <Hero id="hero" ref={container}>
      <HeroContent>
        <HeroHeading>
          Mulai hasilkan <span>uang</span> dari karyamu bersama{" "}
          <span>Supme.com</span>
        </HeroHeading>
        <HeroSubText>
          Karena kamu berhak mendapat apresiasi lebih dari sekadar ucapan terima
          kasih. Ubah dukungan penikmat karyamu menjadi pendapatan nyata.
        </HeroSubText>
        <CtaAction>
          <Button3d>Join As Creator</Button3d>
          <Button3d>Explore Creators</Button3d>
        </CtaAction>
      </HeroContent>
      <HeroImage
        src="https://web.archive.org/web/20210618075727im_/https://trakteer.id/images/mix/bg-3.png"
        alt="Ilustrasi Supme.com"
      />
    </Hero>
  );
};
