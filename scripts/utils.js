import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const readingTime = require('reading-time');



const readTime = (content) => {
  const WPS = 275 / 60

  var images = 0
  const regex = /\w/

  let words = content.split(' ').filter((word) => {
    if (word.includes('<img')) {
      images += 1
    }
    return regex.test(word)
  }).length

  var imageAdjust = images * 4
  var imageSecs = 0
  var imageFactor = 12

  while (images) {
    imageSecs += imageFactor
    if (imageFactor > 3) {
      imageFactor -= 1
    }
    images -= 1
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60)

  return minutes
}


export const getPosts = (pageIndex) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'posts', file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);
      const date = new Date(data.publishedOn);
      const time = readingTime(content);
      console.log(time);
      console.log(file.name) 
      const slug = file.name.replace(/.mdx$/, '');
      return { data, content, slug };
    })
    .filter((post) => post);

  return filterPostsByPageIndex(posts, pageIndex);
};

export const filterPostsByPageIndex = (posts, pageIndex) => {
  const postPerPage = 5;
  // get the total posts from page 1 to current page
  const totalPagePosts = +pageIndex * postPerPage;

  // get the total posts from page 1 to previous page
  const prevPagePosts = totalPagePosts - postPerPage;

  return posts.filter(
    (post, index) => index < totalPagePosts && index >= prevPagePosts
  );
};

export const createMultiplePosts = (posts) => {
  const multiplePosts = [];

  posts.forEach((post) => {
    for (let i = 0; i < 5; i++) {
      multiplePosts.push(post);
    }
  });

  return multiplePosts;
};

