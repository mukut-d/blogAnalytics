const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const app = express();


const { reset } = require('nodemon');
app.get('/api/blog-stats', async (req, res) => {
  try {
    // TASK 1
    // Fetch blog data using Axios
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
      headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
      }
    });
    
    const blogs = response.data;
    

 // TASK 2
    // Calculate statistics using Lodash
    const totalBlogs = blogs.blogs.length;
    const blogWithLongestTitle = _.maxBy(blogs.blogs, 'title.length');
    const blogsWithPrivacyTitle = _.filter(blogs.blogs, blog => _.includes(blog.title.toLowerCase(), 'privacy'));
    const uniqueBlogTitles =  _.uniqBy(blogs.blogs, 'title');


    // TASK 3
    // Respond with statistics
    res.json({
      totalBlogs,
      longestBlogTitle: blogWithLongestTitle.title,
      numberOfBlogsContainingPrivacy: blogsWithPrivacyTitle.length,
      uniqueBlogTitles: uniqueBlogTitles.map(blog => blog.title)
     });
  }
    // TASK 5
  catch (error) {
    // Handle errors
    console.error('Error:', error.message);
    res.sendStatus(500).json({ error: 'Internal Server Error' });
  }
});

// TASK 4
 // Blog search functionality
app.get('/api/blog-search', async (req, res) => {
   // Fetch blog data using Axios
   const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
      headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
      }
    });
  
  
  const blogs = response.data;
  const blog = blogs.blogs; 
  // res.json(blog);
  
  // console.log(req.query);
  try{
  const query =  req.query.search; 
// console.log(query)

  const searchResult = await blog.filter((blog) => {
    let isValid = true;
    for(key in query)
    {
      isValid = isValid && blog.title[key].toLowerCase() === query[key].toLowerCase();
    }
    return isValid;
  });
  // console.log(searchResult)
  
  res.json(searchResult);
  }
  // Handle errors
  catch(err){
    console.error('Error:', err.message);
    res.sendStatus(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
