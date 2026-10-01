import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export function generateStaticParams() {
  return blogPosts.filter(post => post.slug).map((post) => ({
    slug: post.slug as string,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-background">
        <article className="container-main max-w-3xl mx-auto">
          {/* Back button */}
          <Link 
            href="/#blog" 
            className="inline-flex items-center gap-2 text-muted hover:text-pink transition-colors mb-12 font-mono text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>

          {/* Header */}
          <header className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-pink tracking-widest uppercase font-semibold">
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="font-mono text-xs text-muted tracking-widest uppercase">
                {post.readTime}
              </span>
            </div>
            
            <h1 className="font-display font-extrabold text-fluid-4xl leading-[1.1] tracking-tight mb-8 text-text">
              {post.title}
            </h1>
            
            <p className="font-body text-fluid-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-pink max-w-none">
            {post.content?.split('\n\n').map((paragraph, index) => (
              <p key={index} className="font-body text-fluid-base mb-6 leading-loose text-muted/90">
                {paragraph}
              </p>
            ))}
          </div>
          
          <hr className="my-16 border-border" />
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="relative w-14 h-14 rounded-full border-2 border-border/50 bg-surface shadow-md overflow-hidden">
                  <Image src="/avatar.png" alt="Avatar" fill className="object-cover" />
               </div>
               <div>
                  <h4 className="font-display font-bold text-text">Salma BABA</h4>
                  <p className="font-mono text-xs text-muted">Ingénieure DevOps & DevSecOps</p>
               </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
