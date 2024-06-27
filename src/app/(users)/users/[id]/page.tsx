import React from 'react';
import {userService} from "@/services/api.service";

type Params = { id: string };

const UserPage = async ({params}: { params: Params }) => {
    let user = await userService.getUserById(params.id);
    return (
        <div>
            <p>Name: {user?.name}</p>
            <p>Username: {user?.username}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default UserPage;