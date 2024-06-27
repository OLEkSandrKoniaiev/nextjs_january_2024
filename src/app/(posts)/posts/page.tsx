import React from 'react';
import {postService} from "@/services/api.service";
import PostComponent from "@/components/PostComponent";

const PostsPage = async () => {
    let allPosts = await postService.getAllPosts();

    return (
        <div>
            <ul>
                {
                    allPosts.map(post =>
                    <li key={post.id}>
                        <PostComponent post={post}/>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default PostsPage;