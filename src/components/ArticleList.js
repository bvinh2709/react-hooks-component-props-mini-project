import React from "react";
import Article from "./Article"
import blogData from "../data/blog";

console.log(blogData)
function ArticleList() {
    const articleItem = blogData.posts.map((post) => {
        let timeRead = post.minutes
        let prefix = ""
    if (timeRead < 30) {
        for(let i=0;i<timeRead;i=i+5){
            prefix = '☕️' + prefix
        }
        timeRead = prefix + timeRead
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={timeRead}/>
    }
    else if (timeRead > 30) {
        for(let i=0;i<timeRead;i=i+10){
            prefix = '🍱' + prefix
        }
        timeRead = prefix + timeRead
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={timeRead}/>

    }

    })
    return (
        <main>
            {articleItem}
        </main>
    )
}

export default ArticleList;