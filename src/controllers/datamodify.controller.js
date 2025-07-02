const fs = require('fs');
const path = require('path');
const Blog = require('../models/blogs.model');
const News = require('../models/news.model');
// Load blogs.json
console.log('Loading blogs.json...', __dirname);
const blogsPath = path.join(__dirname, 'blogs.json');
const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));
const newsPath = path.join(__dirname, 'news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf-8'));

async function getHtmlFromPostFile(postId) {
  const postFile = path.join(__dirname, 'post', `Post${postId}.js`);
  console.log(postFile);
  if (!fs.existsSync(postFile)) return null;
  const content = await fs.promises.readFile(postFile, 'utf-8');
  // Assumes: export default `<div>...</div>`;
  
  const match = content.match(/return\s*\(\s*([\s\S]*?)\s*\);/);
  // console.log(`Processing file: ${match}`);
  if (match) {
    // Remove backticks and return the string
    return match[1];
  }else{
    return null;
  }
}

exports.modifyBlogs = async (req, res) => {
    
    // Update blogs with html from Post+<id>.js
    let updated = 0;
     await Promise.all(
      blogs.map(async (blog) => {
        const html = await getHtmlFromPostFile(blog.postId);
        console.log(`Post ID: ${blog.postId}, HTML: ${html ? 'found' : 'not found'}`);
        if (html) {
          blog.html = html;
          updated++;
        }
      })
    );
    // Save updated blogs.json
    fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2), 'utf-8');
    console.log(`Updated html for ${updated} blog posts.`);
    res.status(200).json({
        message: `Updated html for ${updated} blog posts.`,
        updatedCount: updated
    });
}

exports.insertBlogDB = async (req, res) => {
  try {
    await Promise.all(
      blogs.map(async (blog) => {
        if(!blog.html){
          console.warn(`Blog post ${blog.postId} has no HTML content.`);
        }
        const blogData = {
          Content_Type: 'blog', 
          Description: blog.content, 
          Title: blog.title, 
          Graphic1: blog.postMedia, 
          Graphic2: null, 
          Body: blog.html,
          Author: 'Charlee AI', 
          AuthorTitle: 'Charlee AI', 
          AuthorCompany: 'Charlee AI', 
          DateWritten: blog.postDate, 
          Relevance: blog.postName,
          Status: 'Active', 
          LastUpdated: blog.postDate, 
          LastUpdatedBy: 'Charlee AI', 
          PDFVersion: 0
        }
        const addedblog = await Blog.create(blogData);
        
        // res.status(201).json(addedblog);
      })
    );
    res.status(201).json('addedblog')
  } catch (error) {
    console.error('Error inserting blog into DB:', error);
    res.status(500).json({
      message: 'Error inserting blog into DB',
      error: error.message
    });
  }
}

exports.insertNewsDB = async (req, res) => {
  try {
    await Promise.all(
      news.map(async (newsItem) => {
        const newsData = {
          ContentType: 'News',
          Description: '',
          Title: newsItem.title,
          Graphic1: newsItem.postMedia,
          Graphic2: null,
          Body: null,
          Source: newsItem.link,
          DatePublished: newsItem.postDate,
          Relevance: newsItem.postName,
          Status: 'Active',
          LastUpdated: newsItem.postDate,
          LastUpdatedBy: 'Charlee AI',
          PDFVersion: 0
        };
        const addedNews = await News.create(newsData);
      })
    );
    res.status(201).json('addedNews');
  } catch (error) {
    console.error('Error inserting news into DB:', error);
    res.status(500).json({
      message: 'Error inserting news into DB',
      error: error.message
    });
  }
}