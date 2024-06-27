import React from 'react';

type Params = { id: string };

const PostPage = ({params}: { params: Params }) => {
    return (
        <div>
            Post page {params.id}
        </div>
    );
};

export default PostPage;