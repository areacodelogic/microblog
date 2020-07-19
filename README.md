

### Microblog

A full-stack A full-stack microblog application.

Users can create posts, read, edit, comment, delete, and vote on posts. 

Data is stored in a Postgres database.

Live site: http://staking-weather.surge.sh/

### Layers and Key Elements

Database: 
* PostgreSQL

Backend: 
* Node.js
* Express.js
* 'pg' module - connect to postgres database
* Parameterized queries - prevent SQL injection

Frontend:
* React
* React-router
* Redux
* Redux Thunk
* HTML/CSS
* Bootstrap

### Component Architecture
```
App
├─┬ containers/TitleList
│ └── components/Title
├─┬ containers/NewPost
│ └── components/PostForm
└─┬ containers/PostDetail
  └─┬ components/PostDetail
    ├─┬ components/CommentList
    │ └── components/Comment
    ├── components/CommentForm
    └── components/PostForm

```