import React from 'react'

const Posts = () => {
    return (
        <section className="posts-container">
        <ul className="posts">
          <li className="post">
            <h2 className="post__heading">Yarn – A New Package Manager For JavaScript</h2>
            <div className="post__info">
              <span className="post__points">1714 points · </span>
              <span className="post__author">post by cpojer | </span>
              <span className="post__comments">469 comments</span>
            </div>
            <div className="post__buttons">
              <button className="post__button post__button-read-more"><a href="/">Read More</a></button>
              <button className="post__button post__button-remove">Remove</button>
            </div>
          </li>
        </ul>
      </section>
    )
}

export default Posts
