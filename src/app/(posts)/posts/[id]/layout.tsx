import React from "react";
import {Metadata} from "next";
import {postService} from "@/services/api.service";

// export const metadata: Metadata = {
//     title: 'PostLayout metadata'
// }

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    let post = await postService.getPostById(params.id);
    return {
        title: post.title
    }
}

type Props = { children: React.ReactNode }
const PostLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostLayout;