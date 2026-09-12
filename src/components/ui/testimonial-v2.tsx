"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialV2Item {
  text?: string;
  image: string | StaticImageData;
  name: string;
  role?: string;
  href?: string;
}

export interface TestimonialV2Props {
  items: TestimonialV2Item[];
  variant?: "testimonial" | "logo";
  badge?: string;
  heading?: string;
  description?: string;
  showHeading?: boolean;
  className?: string;
}

function normalizeHref(href?: string) {
  if (!href) return undefined;
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("/")) {
    return href;
  }
  return `https://${href}`;
}

const cardMotion = {
  scale: 1.03,
  y: -8,
  boxShadow:
    "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
};

const TestimonialsColumn = ({
  className,
  items,
  duration,
  variant = "testimonial",
  isPaused = false,
}: {
  className?: string;
  items: TestimonialV2Item[];
  duration?: number;
  variant?: "testimonial" | "logo";
  isPaused?: boolean;
}) => {
  const y = useMotionValue(0);
  const yPercent = useTransform(y, (value) => `${value}%`);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const controls = animate(y, -50, {
      duration: duration || 10,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    controlsRef.current = controls;

    if (isPaused) {
      controls.pause();
    }

    return () => {
      controls.stop();
    };
  }, [duration, y]);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    if (isPaused) {
      controls.pause();
    } else {
      controls.play();
    }
  }, [isPaused]);

  return (
    <div className={className}>
      <motion.ul
        style={{ y: yPercent }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {items.map(({ text, image, name, role, href }, i) => {
                const destination = normalizeHref(href);
                const isDuplicate = index === 1;

                const content =
                  variant === "logo" ? (
                    <>
                      <div className="relative h-28 w-full">
                        <Image
                          src={image}
                          alt={`${name} logo`}
                          fill
                          className="object-contain"
                          sizes="256px"
                        />
                      </div>
                      <p className="mt-6 font-semibold tracking-tight leading-5 text-center text-neutral-900 dark:text-white transition-colors duration-300">
                        {name}
                      </p>
                      {destination ? (
                        <span className="mt-2 inline-flex items-center justify-center gap-1.5 text-sm text-green-700 dark:text-green-400">
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          Visit website
                        </span>
                      ) : null}
                    </>
                  ) : (
                    <blockquote className="m-0 p-0">
                      {text ? (
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal m-0 transition-colors duration-300">
                          {text}
                        </p>
                      ) : null}
                      <footer className="flex items-center gap-3 mt-6">
                        <Image
                          width={40}
                          height={40}
                          src={image}
                          alt={`Avatar of ${name}`}
                          className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-800 group-hover:ring-green-600/30 transition-all duration-300 ease-in-out"
                        />
                        <div className="flex flex-col">
                          <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 dark:text-white transition-colors duration-300">
                            {name}
                          </cite>
                          {role ? (
                            <span className="text-sm leading-5 tracking-tight text-neutral-500 dark:text-neutral-500 mt-0.5 transition-colors duration-300">
                              {role}
                            </span>
                          ) : null}
                        </div>
                      </footer>
                    </blockquote>
                  );

                return (
                  <motion.li
                    key={`${index}-${i}`}
                    aria-hidden={isDuplicate}
                    tabIndex={isDuplicate || destination ? -1 : 0}
                    whileHover={cardMotion}
                    whileFocus={cardMotion}
                    className="p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-black/5 max-w-xs w-full bg-white dark:bg-neutral-900 transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-green-600/30"
                  >
                    {destination ? (
                      <Link
                        href={destination}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isDuplicate ? -1 : 0}
                        className="flex flex-col items-center text-center focus:outline-none"
                        aria-label={`Visit ${name} website`}
                      >
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </motion.li>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialV2({
  items,
  variant = "testimonial",
  badge = "Testimonials",
  heading = "What our users say",
  description = "Discover how thousands of teams streamline their operations with our platform.",
  showHeading = true,
  className,
}: TestimonialV2Props) {
  if (!items.length) {
    return null;
  }

  const [isPaused, setIsPaused] = useState(false);
  const firstColumn = items.filter((_, index) => index % 3 === 0);
  const secondColumn = items.filter((_, index) => index % 3 === 1);
  const thirdColumn = items.filter((_, index) => index % 3 === 2);

  return (
    <section
      aria-labelledby={showHeading ? "testimonials-heading" : undefined}
      className={cn(
        "bg-transparent relative overflow-hidden",
        showHeading ? "py-24" : "py-2",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container px-4 z-10 mx-auto"
      >
        {showHeading ? (
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
            <div className="flex justify-center">
              <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
                {badge}
              </div>
            </div>

            <h2
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900 dark:text-white transition-colors"
            >
              {heading}
            </h2>
            {description ? (
              <p className="text-center mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-sm transition-colors">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}

        <div
          className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label={variant === "logo" ? "Scrolling partner logos" : "Scrolling testimonials"}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <TestimonialsColumn items={firstColumn} duration={15} variant={variant} isPaused={isPaused} />
          {secondColumn.length > 0 ? (
            <TestimonialsColumn
              items={secondColumn}
              className="hidden md:block"
              duration={19}
              variant={variant}
              isPaused={isPaused}
            />
          ) : null}
          {thirdColumn.length > 0 ? (
            <TestimonialsColumn
              items={thirdColumn}
              className="hidden lg:block"
              duration={17}
              variant={variant}
              isPaused={isPaused}
            />
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}
