"use client";

import Image from "next/image";
import SectionLabel from "@/components/shared/SectionLabel";

const clients = [
  "/clients/client-01.png",
  "/clients/client-02.png",
  "/clients/client-03.png",
  "/clients/client-04.png",
  "/clients/client-05.png",
  "/clients/client-06.png",
  "/clients/client-07.png",
];

export default function Clients() {
  return (
    <section className="overflow-hidden py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>
          Selected Collaborations
        </SectionLabel>
      </div>

      <div className="relative mt-16 overflow-hidden">

        <div className="marquee-track">

          {[...clients, ...clients].map((logo, index) => (
            <div
              key={index}
              className="
                flex
                h-24
                items-center
                justify-center
                px-16
                flex-shrink-0
              "
            >
              <Image
                src={logo}
                alt=""
                width={180}
                height={80}
                className="
                  h-12
                  w-auto
                  object-contain
                  invert
                  opacity-70
                  transition-all
                  duration-300
                  hover:opacity-100
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}