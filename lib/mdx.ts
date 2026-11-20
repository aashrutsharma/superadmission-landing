import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MDXFrontmatter {
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  readTime?: string;
  tags?: string[];
  [key: string]: unknown;
}

export interface MDXFile {
  slug: string;
  frontmatter: MDXFrontmatter;
  content: string;
}

function getContentDirectory(subdirectory: string): string {
  return path.join(process.cwd(), "content", subdirectory);
}

export function getAllMDXFiles(subdirectory: string): MDXFile[] {
  const contentDir = getContentDirectory(subdirectory);

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const parsed = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(contentDir, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      frontmatter: data as MDXFrontmatter,
      content,
    };
  });

  // Sort by date descending
  return parsed.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date ?? 0).getTime();
    const dateB = new Date(b.frontmatter.date ?? 0).getTime();
    return dateB - dateA;
  });
}

export function getMDXFile(subdirectory: string, slug: string): MDXFile | null {
  const contentDir = getContentDirectory(subdirectory);
  const fullPath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as MDXFrontmatter,
    content,
  };
}

export function getAllPosts(): MDXFile[] {
  return getAllMDXFiles("blog");
}

export function getPostBySlug(slug: string): MDXFile | null {
  return getMDXFile("blog", slug);
}

