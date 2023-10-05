# blogAnalytics Middleware using express

## Getting started
* Fork this repository (Click the Fork button in the top right of this page, click your Profile Image)
* Clone your fork down to your local machine

```markdown
git clone https://github.com/mukut-d/blogAnalytics
```
* pre requisites should already be installed :-
```
Node.js
npm
```
* Install packages

```markdown
npm int -y
npm i express axios lodash
npm i nodemon --save-dev
```

*  to start project

```markdown
nodemon app.js
```

##  tasks completed
### 1. Data Retrieval:

   - Use Express to create a route at `/api/blog-stats`.

   - When a GET request is made to this route, your middleware should make the provided curl request to fetch the blog data.


### 2. Data Analysis:

   - After fetching the data, use Lodash to perform the following analytics:

     - Calculate the total number of blogs fetched.

     - Find the blog with the longest title.

     - Determine the number of blogs with titles containing the word "privacy."

     - Create an array of unique blog titles (no duplicates).

### 3. Response:

   - Respond to the client with a JSON object containing the following statistics:

     - Total number of blogs.

     - The title of the longest blog.

     - Number of blogs with "privacy" in the title.

     - An array of unique blog titles.

### 4. Blog Search Endpoint:

   - Create an additional route at `/api/blog-search`.

   - This route should accept a query parameter, e.g., `/api/blog-search?query=privacy`.

   - Implement a search functionality that filters the blogs based on the provided query string (case-insensitive).

   - Ensure that the search functionality is an original implementation, and copied code from external sources is not allowed.

### 5. Error Handling:

   - Handle any errors that may occur during the data retrieval, analysis, or search process. If the third-party API is unavailable or returns an error, respond with an appropriate error message.

   - Error handling should be implemented without direct copying of code from external sources.
