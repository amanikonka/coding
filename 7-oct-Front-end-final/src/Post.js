import React from 'react'

export default function Post({ heading, para, author, title, postedOn, Id, getAllPosts, likes }) {

    const deleteMe = () => {
        fetch(`http://localhost:3001/posts/${Id}`,
            {
                method: 'DELETE'
            }
        ).then(x => x.json())
            .then(response => {
                //call parent function to refetch the data
                getAllPosts()
            })
    }

    const likePost = () => {
        fetch(`http://localhost:3001/posts/${Id}/like`)
            .then(s => s.json())
            .then(response => {
                getAllPosts()                
            })
    }

    const dislikePost = ()=>{
        fetch(`http://localhost:3001/posts/${Id}/dislike`)
            .then(s => s.json())
            .then(response => {
                getAllPosts()                
            })
    }

    return (
        <div className="faq-container">
            <h1 className='heading'>{heading}</h1>
            <span className='right-top' onClick={deleteMe}><i class="fa fa-trash" aria-hidden="true"></i></span>
            <div>
                <span className='light-shade-color'> By </span>
                <span className='blue'> {author} </span>
                |<span className='blue'> {title} </span>|
                <span className='light-shade-color'> {postedOn}</span>
            </div>
            <p>{para}</p>
            <div>
                <span><i class="fa fa-thumbs-o-up" aria-hidden="true" onClick={likePost}></i>&nbsp;{likes}</span>
                &nbsp;
                &nbsp;
                <span><i class="fa fa-thumbs-o-down" aria-hidden="true" onClick={dislikePost}></i></span>
            </div>
            <div>
                <input/> <button>Comment</button>
            </div>

            <div>
                <p>hii</p>
                <p>secon comment</p>
                <p>hii</p>
                <p>hifoutk </p>
            </div>
        </div>
    )
}
