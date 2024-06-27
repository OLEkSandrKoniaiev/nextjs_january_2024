import React from 'react';
import {commentService, postService} from "@/services/api.service";

type Params = { id: string };

const CommentPage = async ({params}: { params: Params }) => {
    let comment = await commentService.getCommentById(params.id);
    let post = await postService.getPostById(comment.postId);
    return (
        <div>
            <p>Post: {post.title}</p>
            <p>User email: {comment.email}</p>
            <p>Comment title: {comment.name}</p>
            <p>Comment body: {comment.body}</p>
        </div>
    );
};

export default CommentPage;