const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUser: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id,

    postBaseUrl: '/posts',
    allPosts: () => base + urlBuilder.postBaseUrl,
    singlePost: (id: string | number) => base + urlBuilder.postBaseUrl + '/' + id,

    commentBaseUrl: '/comments',
    allComments: () => base + urlBuilder.commentBaseUrl,
    singleComment: (id: string | number) => base + urlBuilder.commentBaseUrl + '/' + id,
};

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        let users = await fetch(urlBuilder.allUsers())
            .then(value => value.json());
        console.log(users);
        return users;
    },
    getUserById: async (id: string | number): Promise<IUser> => {
        let user = await fetch(urlBuilder.singleUser(id))
            .then(value => value.json());
        console.log(user);
        return user;
    }
};

const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        let posts = await fetch(urlBuilder.allPosts())
            .then(value => value.json());
        console.log(posts);
        return posts;
    },
    getPostById: async (id: string | number): Promise<IPost> => {
        let post = await fetch(urlBuilder.singlePost(id))
            .then(value => value.json());
        console.log(post);
        return post;
    }
};

const commentService = {
    getAllComments: async (): Promise<IComment[]> => {
        let comments = await fetch(urlBuilder.allComments())
            .then(value => value.json());
        console.log(comments);
        return comments;
    },
    getCommentById: async (id: string | number): Promise<IComment> => {
        let comment = await fetch(urlBuilder.singleComment(id))
            .then(value => value.json());
        console.log(comment);
        return comment;
    }
};

export {
    userService,
    postService,
    commentService
};