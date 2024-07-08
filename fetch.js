async function fetchpost() {
    return await new Promise((res, rej) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    rej('error');
                }
                return response.json();
            })
            .then((data) => {
                res(data);
            })
            .catch((err) => {
                rej(err);
            });
    });
}

function fetchpostbyid(postid) {
    return new Promise((res, rej) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
            .then((response) => {
                if (!response.ok) {
                    rej('error while fetching post');
                }
                return response.json();
            })
            .then((data) => {
                res(data);
            })
            .catch((err) => {
                rej(err);
            });
    });
}

fetchpost().then((posts) => {
    if (posts) {
        console.log("Array length:", posts.length);
        fetchpostbyid(2).then((post) => {
            if (post.userId === 1) {
                console.log("Post with userId 1 and id 2:", post);
            }
        }).catch((err) => {
            console.error(err);
        });
    }
}).catch((err) => {
    console.error(err);
});
