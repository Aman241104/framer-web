import { BlogHeader } from '@/components/BlogHeader';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { FooterCustom } from '@/components/FooterCustom';
import { getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { ProgressBar } from '@/components/ProgressBar';
import { BlogArticleWrapper } from '@/components/BlogArticleWrapper';

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-black font-sans relative overflow-x-hidden">
            <Navbar />
            <ProgressBar />
            <BlogHeader />

            <section className="py-24 bg-black relative">
                {/* Ambient background glow for the entire blog section */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

                <div className="container mx-auto px-6 max-w-6xl flex flex-col gap-32 lg:gap-40 relative z-10">
                    {posts.map((post, index) => {
                        // Calculate estimated read time (assuming ~200 words per minute)
                        const wordCount = post.content.split(/\s+/).length;
                        const readTime = Math.ceil(wordCount / 200) || 1;

                        return (
                            <BlogArticleWrapper key={post.slug}>
                                <article className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                                    {/* Left Sticky Meta Column */}
                                    <div className="lg:col-span-3 relative hidden lg:block">
                                        <div className="sticky top-32 flex flex-col gap-8 bg-[#0a0a0a] p-6 rounded-3xl border border-white/5 shadow-2xl">
                                            
                                            {/* Author */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                                                    <User className="w-4 h-4" />
                                                    <p className="font-normal text-sm">Author</p>
                                                </div>
                                                <p className="text-white font-normal tracking-tight">Vishva Ambasana</p>
                                                <p className="text-zinc-500 text-xs mt-1">Founder, VeeBran</p>
                                            </div>

                                            {/* Published Date */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                                                    <Calendar className="w-4 h-4" />
                                                    <p className="font-normal text-sm">Published</p>
                                                </div>
                                                <p className="text-white font-normal tracking-tight">
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                                </p>
                                            </div>

                                            {/* Read Time */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                                                    <Clock className="w-4 h-4" />
                                                    <p className="font-normal text-sm">Read Time</p>
                                                </div>
                                                <p className="text-white font-normal tracking-tight">{readTime} min read</p>
                                            </div>

                                            {/* Topics */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-3 text-zinc-500">
                                                    <Tag className="w-4 h-4" />
                                                    <p className="font-normal text-sm">Topics</p>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.map((tag) => (
                                                        <span key={tag} className="text-[#3B82F6] tracking-widest text-[10px] font-medium bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-3 py-1.5 rounded-full hover:bg-[#3B82F6]/20 transition-colors cursor-default">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Right Content Column */}
                                    <div className="lg:col-span-9 max-w-3xl w-full">
                                        
                                        {/* Mobile Meta (Hidden on Desktop) */}
                                        <div className="lg:hidden flex flex-wrap items-center gap-x-4 gap-y-3 mb-8 bg-[#0a0a0a] p-4 rounded-2xl border border-white/5">
                                            <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                                                <User className="w-4 h-4" />
                                                <span>Vishva Ambasana</span>
                                            </div>
                                            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                            <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                            <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                                                <Clock className="w-4 h-4" />
                                                <span>{readTime} min read</span>
                                            </div>
                                            <div className="w-full flex gap-2 mt-2">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="text-[#3B82F6] tracking-widest text-[9px] font-medium bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-2 py-1 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-4xl md:text-[52px] font-medium mb-10 text-white tracking-tight leading-[1.05]">
                                            {post.title}
                                        </h2>

                                        {/* Cover Image Parallax Container */}
                                        <div className="w-full aspect-[21/10] rounded-[32px] mb-14 relative overflow-hidden border border-white/10 group shadow-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                priority={index === 0}
                                                className="object-cover transition-transform duration-[30s] ease-linear group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed 
                                            prose-headings:font-medium prose-headings:prose-headings:prose-headings:tracking-tight prose-headings:text-white 
                                            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                                            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-zinc-200
                                            prose-p:mb-6 prose-p:leading-[1.8]
                                            prose-a:text-[#3B82F6] prose-a:no-underline hover:prose-a:text-[#60a5fa] prose-a:transition-colors prose-a:border-b prose-a:border-[#3B82F6]/30 hover:prose-a:border-[#60a5fa]
                                            prose-strong:text-white prose-strong:font-medium
                                            prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2 prose-li:marker:text-[#3B82F6]
                                            prose-ol:list-decimal prose-ol:pl-6
                                            prose-blockquote:border-l-[#3B82F6] prose-blockquote:bg-[#3B82F6]/5 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:rounded-r-2xl prose-blockquote:rounded-l-sm prose-blockquote:font-medium prose-blockquote:not-prose-blockquote:text-white prose-blockquote:shadow-xl prose-blockquote:backdrop-blur-sm prose-blockquote:my-10
                                            prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10 prose-img:my-12
                                            prose-hr:border-white/10 prose-hr:my-16
                                            mx-auto tracking-wide selection:bg-[#3B82F6]/30 selection:text-white"
                                        >
                                            <MDXRemote source={post.content} />
                                        </div>
                                    </div>
                                </article>

                                {/* Divider between posts */}
                                {index !== posts.length - 1 && (
                                    <div className="w-full flex items-center justify-center mt-32 mb-16 opacity-50">
                                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
                                        <div className="mx-4 text-[#3B82F6]">✦</div>
                                        <div className="w-32 h-px bg-gradient-to-r from-[#3B82F6] via-[#3B82F6] to-transparent" />
                                    </div>
                                )}
                            </BlogArticleWrapper>
                        );
                    })}

                    {posts.length === 0 && (
                        <div className="text-center py-32 bg-[#0a0a0a] rounded-3xl border border-white/5">
                            <p className="text-zinc-500 font-normal text-xl">No posts found. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            <FooterCustom />
        </main>
    );
}
