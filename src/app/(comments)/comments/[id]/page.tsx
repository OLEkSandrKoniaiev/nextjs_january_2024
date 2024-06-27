import React from 'react';

type Params = { id: string };

const CommentPage = ({params}: { params: Params }) => {
    return (
        <div>
            Comment Page {params.id}
        </div>
    );
};

export default CommentPage;