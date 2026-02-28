import { BlogHeader } from '@/components/BlogHeader';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { ProgressBar } from '@/components/ProgressBar';
import { BlogArticleWrapper } from '@/components/BlogArticleWrapper';

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            <Navbar />
            <ProgressBar />
            <BlogHeader />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-6xl flex flex-col gap-32 lg:gap-40">
                    {posts.map((post, index) => (
                        <BlogArticleWrapper key={post.slug}>
                            <article className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                                {/* Left Sticky Meta Column */}
                                <div className="lg:col-span-3 relative hidden lg:block">
                                    <div className="sticky top-32 flex flex-col gap-6">
                                        <div>
                                            <p className="text-zinc-500 font-medium italic text-sm mb-2">Published</p>
                                            <p className="text-white font-bold italic">
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-zinc-500 font-medium italic text-sm mb-2">Topics</p>
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="text-[#d4ff00] uppercase tracking-widest text-[10px] font-black bg-white/5 px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Cinematic Line */}
                                        <div className="w-10 h-px bg-white/20 mt-4" />
                                    </div>
                                </div>

                                {/* Right Content Column */}
                                <div className="lg:col-span-9 max-w-3xl">
                                    {/* Mobile Meta (Hidden on Desktop) */}
                                    <div className="lg:hidden flex items-center gap-4 mb-6">
                                        <span className="text-zinc-500 font-medium italic text-sm">
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                        <div className="flex gap-2">
                                            {post.tags.map((tag) => (
                                                <span key={tag} className="text-[#d4ff00] uppercase tracking-widest text-[10px] font-black">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-4xl md:text-5xl font-black mb-10 text-white tracking-tight italic uppercase leading-tight">
                                        {post.title}
                                    </h2>

                                    {/* Cover Image Parallax Container */}
                                    <div className="w-full aspect-[21/9] rounded-3xl mb-12 relative overflow-hidden border border-white/10 group">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="prose prose-invert max-w-none text-zinc-400 prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white prose-a:text-[#3b82f6] hover:prose-a:text-[#d4ff00] prose-a:transition-colors prose-blockquote:border-l-[#d4ff00] prose-blockquote:bg-white/5 prose-blockquote:px-8 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl prose-blockquote:rounded-l-sm prose-blockquote:font-medium prose-blockquote:not-italic prose-blockquote:text-white prose-blockquote:shadow-xl prose-blockquote:backdrop-blur-sm mx-auto tracking-wide selection:bg-white/10 selection:text-[#d4ff00]">
                                        <MDXRemote source={post.content} />
                                    </div>
                                </div>
                            </article>

                            {/* Divider between posts */}
                            {index !== posts.length - 1 && (
                                <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-32" />
                            )}
                        </BlogArticleWrapper>
                    ))}

                    {posts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-zinc-500 font-medium italic">No posts found. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
