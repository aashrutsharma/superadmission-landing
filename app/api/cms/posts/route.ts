import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

const blogDir = path.join(process.cwd(), "content", "blog");

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const post = getPostBySlug(slug);
      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
      return NextResponse.json({ post });
    }

    const posts = getAllPosts();
    return NextResponse.json({ posts });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, title, author, date, readTime, tags, excerpt, content } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
    }

    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    const frontmatter = {
      title,
      author: author || "Superadmission Team",
      date: date || new Date().toISOString().split("T")[0],
      readTime: readTime || "5 min read",
      tags: Array.isArray(tags) ? tags : (tags || "Counselling, Architecture").split(",").map((t: string) => t.trim()),
      excerpt: excerpt || title,
    };

    const fileContent = matter.stringify(content || "", frontmatter);
    const filePath = path.join(blogDir, `${slug}.mdx`);

    fs.writeFileSync(filePath, fileContent, "utf-8");

    return NextResponse.json({
      success: true,
      message: `Post '${title}' saved successfully`,
      slug,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const filePath = path.join(blogDir, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({ success: true, message: `Post '${slug}' deleted` });
    } else {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
