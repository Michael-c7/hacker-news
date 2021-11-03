import React from 'react'
import { useGlobalContext } from './context'

const Posts = () => {
    const {postData,loading} = useGlobalContext();

    if(loading) {
      return <h1 style={{textAlign:"center"}}>Loading...</h1>;
    }

    return (
        <section className="posts-container">
        <ul className="posts">
          {postData.map((post) => {
            const {points,num_comments:commentsAmount,author,title,url,created_at_i:id} = post;

            return (
              <li className="post" key={id}>
                <h2 className="post__heading">{title}</h2>
                <div className="post__info">
                  <span className="post__points">{points} points · </span>
                  <span className="post__author">post by {author} | </span>
                  <span className="post__comments">{commentsAmount} comments</span>
                </div>
                <div className="post__buttons">
                  <button className="post__button post__button-read-more"><a href={url} target="_blank" rel="noreferrer">Read More</a></button>
                  <button className="post__button post__button-remove">Remove</button>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    )
}

export default Posts
