"use client";

import { contactData, socialLinks } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

/**
 * Contact — Headline, short pitch, email and social links.
 * No form: nothing would receive the messages.
 */
export function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="container-main">
        <ScrollReveal>
          <span className="section-label">Contact</span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-4 items-end">
          {/* Left */}
          <ScrollReveal delay={0.1}>
            <div>
              <h2 className="font-display font-extrabold text-fluid-3xl leading-[1.1] tracking-tight mb-6">
                {contactData.headline.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="font-body text-fluid-base text-muted leading-relaxed max-w-md">
                {contactData.body}
              </p>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-start gap-8">
              <a
                href={`mailto:${contactData.email}`}
                className="font-display font-bold text-fluid-xl text-pink hover:text-green transition-colors duration-300 break-all"
              >
                {contactData.email}
              </a>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton href={`mailto:${contactData.email}`} variant="filled" accent="pink">
                  M&apos;écrire
                </MagneticButton>
                {socialLinks.map((link) => (
                  <MagneticButton key={link.name} href={link.href} variant="ghost" accent="green">
                    {link.name}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
