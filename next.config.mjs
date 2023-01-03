import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-title';
import remarkPrism from 'remark-prism';

export default {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter, remarkGfm, remarkSlug, remarkPrism],
            rehypePlugins: [rehypeHighlight, rehypeAutolinkHeadings],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    loader: 'imgix',
    path: 'https://images.unsplash.com/',
  },
};
