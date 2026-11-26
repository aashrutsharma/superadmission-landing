import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-wider">
            WRITING
          </p>
          <Link
            href="/cms"
            className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#2563eb] hover:underline"
          >
            <Plus className="w-3 h-3" /> Author CMS ↗
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-950 leading-tight mb-3">
          From the Superadmission team
        </h1>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
          Thinking about India&apos;s higher education infrastructure, admissions systems, and the technology to fix them.
        </p>
      </div>

      {/* Blog list with crisp 4px corners */}
      <div className="flex flex-col gap-3.5 mb-12">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1.5 p-5 border border-gray-200/90 rounded-[4px] hover:border-gray-300 hover:bg-gray-50/70 transition-all no-underline shadow-2xs bg-white"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-[15px] font-medium text-gray-950 mb-1.5 group-hover:text-[#2563eb] transition-colors leading-snug">
                  {post.frontmatter.title}
                </h2>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-2.5 font-normal">
                  {post.frontmatter.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono">
                  <span className="font-sans font-medium text-gray-700">
                    {post.frontmatter.author || "Superadmission Team"}
                  </span>
                  <span>&middot;</span>
                  <span>
                    {(() => {
                      if (!post.frontmatter.date) return "";
                      const d = new Date(post.frontmatter.date);
                      return isNaN(d.getTime())
                        ? post.frontmatter.date
                        : d.toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          });
                    })()}
                  </span>
                  <span>&middot;</span>
                  <span>{post.frontmatter.readTime}</span>
                </div>
              </div>
              <span className="text-gray-300 group-hover:text-[#2563eb] transition-colors flex-shrink-0 text-base mt-0.5">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-8">
        <Footer />
      </div>
    </div>
  );
}
