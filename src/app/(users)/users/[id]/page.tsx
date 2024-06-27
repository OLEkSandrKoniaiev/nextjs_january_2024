import React from 'react';

type Params = { id: string };

const UserPage = ({params}: { params: Params }) => {
    return (
        <div>
            UserPage {params.id}
        </div>
    );
};

export default UserPage;