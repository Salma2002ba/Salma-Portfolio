"use client";

import { blogPosts } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

/**
 * Blog — Editorial list layout with hover reveals.
 */
export function Blog() {
  return (
    <section id="blog" className="section-spacing">
      <div className="container-main">
        <ScrollReveal>
          <span className="section-label">Thoughts</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-extrabold text-fluid-3xl leading-[1.1] tracking-tight mb-14">
            Writing &amp; thinking.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col border-t border-border mt-10">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.title} delay={0.1 + i * 0.08}>
              <a
                href={post.href}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 border-b border-border transition-colors duration-500 hover:bg-surface/40 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 flex-1">
                  <div className="flex flex-col md:w-32 shrink-0">
                    <span className="font-mono text-sm text-pink tracking-widest uppercase mb-1">
                      {post.date}
                    </span>
                    <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-none text-text group-hover:text-pink transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    {/* Hidden description that smoothly expands on desktop hover, always visible on mobile */}
                    <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out mt-4 md:mt-0">
                      <div className="overflow-hidden">
                        <p className="font-body text-fluid-sm text-muted max-w-xl md:pt-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-border group-hover:border-pink group-hover:bg-pink/10 transition-all duration-500 shrink-0 transform group-hover:rotate-45 ml-8">
                  <ArrowUpRight size={24} className="text-muted group-hover:text-pink transition-colors" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
