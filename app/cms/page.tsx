"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit3, Trash2, ExternalLink, Check, FileText, Users, HelpCircle, ArrowLeft } from "lucide-react";

interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
}

interface PostData {
  slug: string;
  frontmatter: {
    title: string;
    author?: string;
    date?: string;
    readTime?: string;
    excerpt?: string;
    tags?: string[];
  };
  content?: string;
}

export default function CMSDashboard() {
  const [activeTab, setActiveTab] = useState<"posts" | "editor" | "authors" | "guide">("posts");
  const [posts, setPosts] = useState<PostData[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Editor Form State
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("Superadmission Team");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [tags, setTags] = useState("Counselling, Architecture");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [editorMode, setEditorMode] = useState<"write" | "preview">("write");

  // Fetch Posts & Authors
  const loadData = async () => {
    setLoading(true);
    try {
      const [resPosts, resAuthors] = await Promise.all([
        fetch("/api/cms/posts"),
        fetch("/api/cms/authors"),
      ]);
      const dataPosts = await resPosts.json();
      const dataAuthors = await resAuthors.json();
      if (dataPosts.posts) setPosts(dataPosts.posts);
      if (dataAuthors.authors) setAuthors(dataAuthors.authors);
    } catch (err) {
      console.error("Failed to load CMS data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle Title Change (Auto-generate slug if new)
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingSlug) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(generatedSlug);
    }
  };

  // Open Post in Editor
  const handleEdit = async (postSlug: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/cms/posts?slug=${postSlug}`);
      const data = await res.json();
      if (data.post) {
        const p = data.post;
        setEditingSlug(p.slug);
        setSlug(p.slug);
        setTitle(p.frontmatter.title || "");
        setAuthor(p.frontmatter.author || "Superadmission Team");
        setDate(p.frontmatter.date || "");
        setReadTime(p.frontmatter.readTime || "5 min read");
        setTags(Array.isArray(p.frontmatter.tags) ? p.frontmatter.tags.join(", ") : "");
        setExcerpt(p.frontmatter.excerpt || "");
        setContent(p.content || "");
        setActiveTab("editor");
      }
    } catch (err) {
      console.error("Failed to fetch post details:", err);
    } finally {
      setLoading(false);
    }
  };

  // Reset Editor for New Post
  const handleNewPost = () => {
    setEditingSlug(null);
    setTitle("");
    setSlug("");
    setAuthor(authors[0]?.name || "Superadmission Team");
    setDate(new Date().toISOString().split("T")[0]);
    setReadTime("5 min read");
    setTags("Counselling, Architecture");
    setExcerpt("");
    setContent(
      "## Introduction\n\nWrite your article content here using standard Markdown.\n\n### Key Principles\n\n* Clear, verified records\n* Transparent seat allocation\n* Zero algorithmic bias"
    );
    setActiveTab("editor");
  };

  // Save Post
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug) return;
    setSaving(true);
    try {
      const payload = {
        slug,
        title,
        author,
        date: date || new Date().toISOString().split("T")[0],
        readTime,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        excerpt,
        content,
      };

      const res = await fetch("/api/cms/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2500);
        await loadData();
      }
    } catch (err) {
      console.error("Failed to save post:", err);
    } finally {
      setSaving(false);
    }
  };

  // Delete Post
  const handleDelete = async (postSlug: string) => {
    if (!confirm(`Are you sure you want to delete '${postSlug}'?`)) return;
    try {
      const res = await fetch(`/api/cms/posts?slug=${postSlug}`, {
        method: "DELETE",
      });
      if (res.ok) {
        await loadData();
      }
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  return (
    <div className="w-full max-w-[640px] mx-auto pb-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono font-medium text-gray-400 uppercase tracking-widest">
            CONTENT MANAGEMENT SYSTEM
          </span>
          <Link
            href="/blog"
            className="text-xs font-mono text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3 h-3" /> Back to Blog
          </Link>
        </div>
        <h1 className="text-2xl font-medium tracking-tight text-gray-950 mb-1">
          Superadmission CMS
        </h1>
        <p className="text-xs text-gray-500 leading-relaxed font-normal">
          Manage articles, author attributions, and publication metadata for your entire team.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 p-0.5 bg-gray-100/80 border border-gray-200/80 rounded-[4px] mb-8 text-xs font-medium">
        <button
          onClick={() => setActiveTab("posts")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] transition-all cursor-pointer ${
            activeTab === "posts"
              ? "bg-white text-gray-950 shadow-2xs font-semibold"
              : "text-gray-500 hover:text-gray-900 bg-transparent"
          }`}
        >
          <FileText className="w-3.5 h-3.5" /> All Articles ({posts.length})
        </button>
        <button
          onClick={handleNewPost}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] transition-all cursor-pointer ${
            activeTab === "editor"
              ? "bg-white text-gray-950 shadow-2xs font-semibold"
              : "text-gray-500 hover:text-gray-900 bg-transparent"
          }`}
        >
          <Plus className="w-3.5 h-3.5" /> {editingSlug ? "Editing Article" : "New Article"}
        </button>
        <button
          onClick={() => setActiveTab("authors")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] transition-all cursor-pointer ${
            activeTab === "authors"
              ? "bg-white text-gray-950 shadow-2xs font-semibold"
              : "text-gray-500 hover:text-gray-900 bg-transparent"
          }`}
        >
          <Users className="w-3.5 h-3.5" /> Team Authors
        </button>
        <button
          onClick={() => setActiveTab("guide")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] transition-all cursor-pointer ${
            activeTab === "guide"
              ? "bg-white text-gray-950 shadow-2xs font-semibold"
              : "text-gray-500 hover:text-gray-900 bg-transparent"
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" /> How it Works
        </button>
      </div>

      {/* TAB 1: ALL ARTICLES */}
      {activeTab === "posts" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500">
              Published Articles
            </span>
            <button
              onClick={handleNewPost}
              className="inline-flex items-center gap-1 bg-[#2563eb] text-white text-xs font-medium px-2.5 py-1 rounded-[3px] hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer"
            >
              <Plus className="w-3 h-3" /> Create New
            </button>
          </div>

          {loading ? (
            <div className="py-12 text-center text-xs text-gray-400 font-mono">
              Loading articles...
            </div>
          ) : posts.length === 0 ? (
            <div className="py-12 text-center text-xs text-gray-400 border border-dashed border-gray-200 rounded-[4px]">
              No articles found. Click &quot;Create New&quot; to write your first post.
            </div>
          ) : (
            <div className="border border-gray-200/90 rounded-[4px] divide-y divide-gray-100 bg-white">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50/60 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-medium text-gray-950 mb-1 truncate">
                      {post.frontmatter.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono">
                      <span className="text-gray-600 font-sans font-medium">
                        {post.frontmatter.author || "Superadmission Team"}
                      </span>
                      <span>&middot;</span>
                      <span>{post.frontmatter.date}</span>
                      <span>&middot;</span>
                      <span>{post.frontmatter.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="p-1.5 text-gray-400 hover:text-gray-900 border border-gray-200 rounded-[3px] hover:bg-white transition-colors"
                      title="View Live"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => handleEdit(post.slug)}
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 text-gray-700 hover:text-black border border-gray-200 rounded-[3px] hover:bg-white transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.slug)}
                      className="p-1.5 text-red-500 hover:text-red-700 border border-gray-200 rounded-[3px] hover:bg-white transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: ARTICLE EDITOR */}
      {activeTab === "editor" && (
        <form onSubmit={handleSave} className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <span className="text-xs font-medium text-gray-900">
              {editingSlug ? `Editing: ${editingSlug}.mdx` : "New MDX Article"}
            </span>
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center p-0.5 bg-gray-100 rounded-[3px] text-xs">
                <button
                  type="button"
                  onClick={() => setEditorMode("write")}
                  className={`px-2 py-0.5 rounded-[2px] transition-all cursor-pointer ${
                    editorMode === "write" ? "bg-white text-gray-950 shadow-2xs font-medium" : "text-gray-500"
                  }`}
                >
                  Write
                </button>
                <button
                  type="button"
                  onClick={() => setEditorMode("preview")}
                  className={`px-2 py-0.5 rounded-[2px] transition-all cursor-pointer ${
                    editorMode === "preview" ? "bg-white text-gray-950 shadow-2xs font-medium" : "text-gray-500"
                  }`}
                >
                  Preview
                </button>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-1.5 bg-[#2563eb] text-white hover:bg-blue-700 text-xs font-semibold px-3 py-1.5 rounded-[3px] transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" /> Saved Live!
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" /> {saving ? "Saving..." : "Save & Publish"}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Understanding JoSAA Allocation Rounds"
                className="w-full text-sm font-medium px-3 py-2 border border-gray-200 rounded-[3px] bg-white focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                URL Slug *
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="understanding-josaa"
                className="w-full text-xs font-mono px-3 py-2 border border-gray-200 rounded-[3px] bg-white focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                Author
              </label>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-gray-200 rounded-[3px] bg-white focus:outline-none focus:border-blue-600"
              >
                {authors.map((a) => (
                  <option key={a.id} value={a.name}>
                    {a.name} ({a.role})
                  </option>
                ))}
                <option value="Superadmission Team">Superadmission Team</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                Publication Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-xs font-mono px-3 py-2 border border-gray-200 rounded-[3px] bg-white focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                Read Time
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="5 min read"
                className="w-full text-xs px-3 py-2 border border-gray-200 rounded-[3px] bg-white focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                Tags (Comma Separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="JoSAA, Spot Round, Architecture"
                className="w-full text-xs px-3 py-2 border border-gray-200 rounded-[3px] bg-white focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                Short Excerpt / Summary
              </label>
              <textarea
                rows={2}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A concise 1-2 sentence overview for the card and SEO..."
                className="w-full text-xs px-3 py-2 border border-gray-200 rounded-[3px] bg-white focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* Markdown Content Area */}
          <div>
            <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1">
              Markdown Body Content *
            </label>
            {editorMode === "write" ? (
              <textarea
                rows={16}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write article in standard Markdown..."
                className="w-full font-mono text-xs leading-relaxed px-3 py-2.5 border border-gray-200 rounded-[3px] bg-white focus:outline-none focus:border-blue-600"
              />
            ) : (
              <div className="border border-gray-200 rounded-[3px] p-5 bg-white prose prose-gray max-w-none text-xs min-h-[300px]">
                <div className="whitespace-pre-wrap font-sans leading-relaxed text-gray-700">
                  {content || "No content written yet."}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 bg-[#2563eb] text-white hover:bg-blue-700 text-xs font-semibold px-4 py-2 rounded-[3px] transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
            >
              {saveSuccess ? "Saved Live to content/blog/" : saving ? "Saving..." : "Save & Publish Live"}
            </button>
          </div>
        </form>
      )}

      {/* TAB 3: AUTHORS */}
      {activeTab === "authors" && (
        <div className="space-y-4">
          <p className="text-xs text-gray-500">
            Registered team authors. You can select any author when publishing an article.
          </p>

          <div className="border border-gray-200/90 rounded-[4px] divide-y divide-gray-100 bg-white">
            {authors.map((a) => (
              <div key={a.id} className="p-4 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-[14px] font-medium text-gray-950">
                    {a.name}
                  </h4>
                  <p className="text-xs text-[#2563eb] font-mono">{a.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{a.bio}</p>
                </div>
                <span className="text-[11px] font-mono text-gray-400">
                  {a.email}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: HOW THE CMS WORKS GUIDE */}
      {activeTab === "guide" && (
        <div className="space-y-5 text-xs text-gray-700 leading-relaxed font-normal">
          <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white space-y-2">
            <h3 className="text-sm font-medium text-gray-950">
              1. How are articles stored?
            </h3>
            <p>
              Every post is saved directly as a clean, standardized Markdown (`.mdx`) file inside the project directory at <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-800">content/blog/[slug].mdx</code>.
            </p>
          </div>

          <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white space-y-2">
            <h3 className="text-sm font-medium text-gray-950">
              2. How can my team write and edit?
            </h3>
            <p>
              Your team has two seamless ways to edit:
            </p>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                <strong>In-Browser CMS:</strong> Simply visit <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">/cms</code> right here! Fill the fields, write markdown, and hit &ldquo;Save & Publish&rdquo;. It updates the live site instantly without writing code.
              </li>
              <li>
                <strong>Git / IDE:</strong> Any developer or team member can also create or edit files directly in <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">content/blog/</code>.
              </li>
            </ul>
          </div>

          <div className="border border-gray-200/90 rounded-[4px] p-4 bg-white space-y-2">
            <h3 className="text-sm font-medium text-gray-950">
              3. Automatic Navigation &amp; Table of Contents
            </h3>
            <p>
              When a team member writes headings (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono">## Heading</code>), the fixed left sidebar automatically extracts them and generates the interactive ruler line ToC on the live article!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
