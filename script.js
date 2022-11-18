const posts = [
    {
        name: "Barbatos",
        username: "venti616",
        location: "Mondstadt Cathedral",
        avatar: "photos/venti-dp.jpg",
        post: "photos/venti-post.jpg",
        comment: "Fly, fly away, Like a bird in the sky.",
        likes: 21
    },
    {
        name: "Morax",
        username: "zhongli1231",
        location: "Third-Round Knockout, Liyue",
        avatar: "photos/zhongli-dp.jpg",
        post: "photos/zhongli-post.jpg",
        comment: "Osmanthus wine tastes the same as I remember... but where are those who share the memory?",
        likes: 4
    },
    {
        name: "Baal",
        username: "raiden0626",
        location: "Narukami Shrine, Inazuma",
        avatar: "photos/raiden-dp.jpg",
        post: "photos/raiden-post.jpg",
        comment: "With you by my side, though our mouths stay silent, my heart is at peace.",
        likes: 152
    },
    {
        name: "Kusanali",
        username: "nahida1027",
        location: "Sumeru jungle",
        avatar: "photos/nahida-dp.jpg",
        post: "photos/nahida-post.jpg",
        comment: "If you're not sure what to do next, how about I take you on a walk?",
        likes: 238
    }
]

let mainFeed = document.getElementById("main-feed")

let userPostHtml = ``

function renderPosts() {
    for (let post of posts) {
        userPostHtml += `
            <div class="user-post">
                <div class="post-top-label">
                    <div class="post-user-img-container">
                        <img src="${post.avatar}" alt="user profile photo" class="user-avatar">
                    </div>
                    <div class="post-user-info">
                        <h4 class="user-label">${post.name}</h4>
                        <h5 class="user-label">${post.location}</h5>
                    </div>
                </div>
                <img src="${post.post}" alt="user post" class="user-img-post">
                <div class="interact-btn">
                    <img src="photos/like.png" alt="like button" class="post-btn like-btn" onclick="clickLike()">
                    <img src="photos/comment.png" alt="comment button" class="post-btn comment-btn">
                    <img src="photos/dm.png" alt="direct message button" class="post-btn dm-btn">
                </div>
                <h4 class="user-label post-likes">${post.likes} likes</h4>
                <div class="post-caption">
                    <h3 class="post-caption-user"></h3>
                    <p class="post-caption-comment"><a href="#" class="post-caption-user">${post.username}</a> ${post.comment}</p>
                </div>
            </div>
            `
    }
    
    mainFeed.innerHTML = userPostHtml
}

renderPosts()

// When Clicking Like

function clickLike(){
    
}

