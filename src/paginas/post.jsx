import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { busca } from '../api/api';
import '../assets/css/post.css'
import { useParams, useHistory } from 'react-router';

const Post = () => {
    let history = useHistory()
    const {id} = useParams()
    const[post, setPost] = useState({})
    useEffect(() => {
        busca(`/posts/${id}`, setPost).catch(() =>{
            history.push("/404")
        })
    }, [id])
    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>


    )
}

export default Post