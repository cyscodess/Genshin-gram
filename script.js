const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let mainFeed = document.getElementById("main-feed")

let userPostHtml = ``

for (let post of posts) {
    userPostHtml += `
        <div class="user-post">
            <img src="${post.avatar}" alt="user profile photo">
            <h4 class="user-label">${post.name}</h4>
            <h5 class="user-location">${post.location}</h5>
            <img src="${post.post}" alt="user post">
            <div class="interact-btn">
                <img src=# alt="like button">
                <img src=# alt="comment button">
                <img src=# alt="direct message button">
            </div>
            <h4 class="user-label">${post.likes}</h4>
            <div class="post-caption">
                <h3>${post.username}</h3>
                <p>${post.comment}</p>
            </div>
            <p>${post.name}</p>
        </div>
        `
}

mainFeed.innerHTML = userPostHtml
