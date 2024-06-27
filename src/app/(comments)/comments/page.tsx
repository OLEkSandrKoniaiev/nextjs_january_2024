import React from 'react';
import {commentService} from "@/services/api.service";
import CommentComponent from "@/components/CommentComponent";

const CommentsPage = async () => {
    let allComments = await commentService.getAllComments();

    return (
        <div>
            <ul>
                {
                    allComments.map(comment =>
                    <li key={comment.id}>
                        <CommentComponent comment={comment}/>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default CommentsPage;