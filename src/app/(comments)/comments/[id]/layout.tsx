import React from "react";
import {Metadata} from "next";
import {commentService} from "@/services/api.service";

// export const metadata: Metadata = {
//     title: 'CommentLayout metadata'
// }

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    let comment = await commentService.getCommentById(params.id);
    return {
        title: comment.name
    }
}

type Props = { children: React.ReactNode }
const CommentLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CommentLayout;