import React from 'react';
import {postService, userService} from "@/services/api.service";

type Params = { id: string };

const PostPage = async ({params}: { params: Params }) => {
    let post = await postService.getPostById(params.id);
    let user = await userService.getUserById(post.userId);
    return (
        <div>
            <p>Owner: {user?.name}</p>
            <p>Title: {post?.title}</p>
            <p>Body: {post?.body}</p>
        </div>
    );
};

export default PostPage;