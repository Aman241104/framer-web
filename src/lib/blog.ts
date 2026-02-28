import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
    content: string;
    tags: string[];
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const realSlug = slug.replace(/\.mdx$/, '');
        const fullPath = path.join(contentDir, `${realSlug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: realSlug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            coverImage: data.coverImage,
            tags: data.tags || [],
            content,
        };
    } catch (e) {
        return null;
    }
}

export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(contentDir)) {
        return [];
    }
    const slugs = fs.readdirSync(contentDir);
    const posts = slugs
        .filter((slug) => slug.endsWith('.mdx'))
        .map((slug) => getPostBySlug(slug))
        .filter((post): post is BlogPost => post !== null)
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
