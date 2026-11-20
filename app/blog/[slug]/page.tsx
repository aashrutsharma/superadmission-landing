import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) return {};
  return {
    title: `${result.frontmatter.title} | Superadmission Blog`,
    description: result.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const result = getPostBySlug(slug);

  if (!result) {
    notFound();
  }

  const { frontmatter, content } = result;

  return (
    <article className="w-full">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6 font-normal">
        <Link href="/blog" className="hover:text-gray-900 transition-colors no-underline">
          Blog
        </Link>
        <span>&rsaquo;</span>
        <span className="text-gray-600 truncate max-w-[360px]">{frontmatter.title}</span>
      </nav>

      {/* Tags with crisp 2px corners */}
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono font-medium text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded-[2px]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title (Font-Medium) */}
      <h1 className="text-3xl sm:text-[34px] font-medium tracking-tight text-gray-950 leading-[1.2] mb-3.5">
        {frontmatter.title}
      </h1>

      {/* Meta row */}
      <div className="flex items-center gap-2.5 text-xs text-gray-400 mb-6 pb-5 border-b border-gray-100 font-mono">
        {frontmatter.author && (
          <span className="font-sans font-medium text-gray-700">By {frontmatter.author}</span>
        )}
        {frontmatter.date && (
          <>
            <span>&middot;</span>
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </>
        )}
        {frontmatter.readTime && (
          <>
            <span>&middot;</span>
            <span>{frontmatter.readTime}</span>
          </>
        )}
      </div>

      {/* Image placeholder with crisp 4px corners */}
      <div className="w-full h-64 rounded-[4px] bg-gradient-to-br from-blue-900 to-slate-900 flex flex-col items-center justify-center p-6 mb-8 border border-gray-200 text-center">
        <span className="text-[10px] font-mono font-medium text-blue-300 uppercase tracking-widest bg-blue-950/70 border border-blue-400/30 px-2.5 py-0.5 rounded-[2px] mb-1.5">
          EDITORIAL
        </span>
        <p className="text-xs text-blue-200/70">[Blog Banner Placeholder]</p>
      </div>

      {/* MDX Content with font-medium headings */}
      <div className="prose prose-gray max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-gray-950 prose-headings:scroll-mt-20 prose-p:text-[14px] prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#2563eb] prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={content} />
      </div>

      {/* Back to Blog */}
      <div className="mt-12 pt-6 border-t border-gray-100">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors no-underline"
        >
          &larr; Back to all writing
        </Link>
      </div>

      <div className="pt-8">
        <Footer />
      </div>
    </article>
  );
}
