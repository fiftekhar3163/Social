import { Subscriber } from './class.js';

// Dummy data for subscriber
const subscriberData = {
    id: 1,
    name: "John Doe",
    userName: "johndoe123",
    email: "johndoe@example.com",
    pages: ["Page1", "Page2"],
    groups: ["Group1", "Group2"],
    canMonetize: true
};

const subscriber = new Subscriber(
    subscriberData.id,
    subscriberData.name,
    subscriberData.userName,
    subscriberData.email,
    subscriberData.pages,
    subscriberData.groups,
    subscriberData.canMonetize
);

document.getElementById('userInfo').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    document.getElementById('modalUserInfo').innerHTML = subscriber.getInfo();
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

// Handle form submission
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const postText = document.getElementById('postText').value;
    const imageFile = document.getElementById('imageUpload').files[0]; // You can handle image upload here
    const post = createPost(postText, imageFile);
    document.getElementById('posts').appendChild(post);
});

// Function to create a post element
function createPost(text, image) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');
    postHeader.innerHTML = `
        <img src="user-icon.png" alt="User Icon">
        <div class="post-info">
            <span class="user-name">${subscriber.name}</span>
            <span class="post-date">${getCurrentDate()}</span>
        </div>`};