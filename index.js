// Selectors
const tweetButton = document.querySelector('.add-tweet')
const tweetInput = document.querySelector('.tweet-text')
const newsFeed = document.querySelector('.post')
const newsFeedContainer = document.querySelector('newsfeed')
const user = document.querySelector('.user').innerHTML
const profileAvatar = document.querySelector('.user-avatar').src
let tweets=[] 

tweetButton.addEventListener('click', addTweet)

// Functions
function addTweet(e) {
    e.preventDefault()
    tweets.unshift({tweet:tweetInput.value})
    updateTweets()
    tweetInput.value=''
}
function updateTweets() {
    console.log(tweets);
    let posts = tweets
    newsFeed.innerHTML=''

    posts.forEach((post,index) =>{
        post.id = index +1
        // Create Tweet Container
        const postContent = document.createElement("div")
        postContent.classList.add('post-content')
        newsFeed.appendChild(postContent)

        // Create avatar
        const avatar = document.createElement('img')
        avatar.src = profileAvatar
        postContent.appendChild(avatar)

        // create Post text container
        const postText = document.createElement('div')
        postText.classList.add('post-text')
        postContent.appendChild(postText)

        // Create Username
        const userName = document.createElement('h4')
        const tweetText = document.createElement('p')
        const handler = document.createElement('span')
        handler.innerText = '@Hassan_87'
        userName.innerHTML = user
        tweetText.innerHTML = post.tweet
        postText.appendChild(userName)
        userName.appendChild(handler)
        postText.appendChild(tweetText)

        // create Reactions Buttons Div
        const reactionsButtons = document.createElement('div')
        reactionsButtons.classList.add('reaction-buttons')
        newsFeed.appendChild(reactionsButtons)
        
        // Create retweet Button
        const retweetBtn = document.createElement('button')
        retweetBtn.classList.add('retweet')
        retweetBtn.innerHTML = `<span class="material-symbols-outlined">
        autorenew
        </span>`
        reactionsButtons.appendChild(retweetBtn)
        
        // Create Like Button
        const likeBtn = document.createElement('button')
        likeBtn.classList.add('like')
        likeBtn.innerHTML = `<span class="material-symbols-outlined">
        favorite
        </span>`
        reactionsButtons.appendChild(likeBtn)
        
        // newsFeed.innerHTML +=`<div class="post-content">
        //         <img src="`+avatar+`" alt="Hassan alabadla avatar">
        //         <div class="post-text">
        //             <h4>`+user+`<span>@Hassan_87</span></h4>
        //             <p>`+post.tweet+`</p>
        //         </div>
        //         </div>
        //         <div class="reaction-buttons">
        //             <button>
        //                 <svg viewBox="0 0 24 24" width="20" fill="#72757b" stroke="#72757b" aria-hidden="true" ><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>215K
        //             </button>
        //             <button>
        //                 <svg viewBox="0 0 24 24" width="20" fill="#72757b" stroke="#72757b" aria-hidden="true"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>21
        //             </button>
        //             <button class="retweet" onClick="retweet(`+post.id+`)">
        //                 <svg viewBox="0 0 24 24" width="20" fill="#72757b" stroke="#72757b" aria-hidden="true" ><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>237
        //             </button>
        //             <button class="like" onClick="like(`+post.id+`)">
        //                 <svg viewBox="0 0 24 24" width="20" fill="#72757b" stroke="#72757b" aria-hidden="true" ><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>754
        //             </button>
        //         </div>`

        retweetBtn.addEventListener('click', function() {
            retweet(post.id)
        })
        likeBtn.addEventListener('click', function(e) {
            like(e)
        })
    })
    
}

function retweet(index) {
    let retweetCount = 0
    retweetCount++
    let retweeted = tweets
    let x = retweeted.find(item => item.id === index).tweet
    tweets.unshift({tweet: x , retweet: retweetCount})
    console.log(tweets);
    updateTweets()
}

function like(e) {
    let item = e.target
    item.classList.toggle('liked')
}