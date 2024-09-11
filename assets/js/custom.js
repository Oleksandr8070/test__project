function createComment(content) {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comments');

  commentDiv.innerHTML = `
      <div class="profile">
          <img src="assets/img/optimisation/anon.jpg" alt="Anônimo">
      </div>
      <div class="comment-content">
          <p class="name">Anônimo</p>
          <p>${content}</p>
      </div>
      <div class="clr"></div>
      <div class="comment-status">
          <span>
              Curte·comente
              <img src="assets/img/like.png" width="15px" height="15px">
              0
          </span>
          <small>
              · <u>agora</u>
          </small>
      </div>
  `;

  document.getElementById('commentsContainer').appendChild(commentDiv);
}


document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const commentContent = document.getElementById('userComment').value;
  if (commentContent) {
      createComment(commentContent); 
      document.getElementById('userComment').value = '';
  }
});

