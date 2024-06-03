document.addEventListener('DOMContentLoaded', () => {
  const blogPostsContainer = document.getElementById('blog-posts');

  fetch('blogData.json')
      .then(response => response.json())
      .then(data => {
          data.forEach(blog => {
              const blogCard = document.createElement('div');
              blogCard.classList.add('card', 'mb-4');

              const blogImg = document.createElement('img');
              blogImg.src = blog.image;
              blogImg.alt = blog.title;
              blogImg.classList.add('card-img-top');

              const blogBody = document.createElement('div');
              blogBody.classList.add('card-body');

              const blogTitle = document.createElement('h5');
              blogTitle.classList.add('card-title');
              blogTitle.textContent = blog.title;

              const blogDate = document.createElement('small');
              blogDate.classList.add('text-muted');
              blogDate.textContent = blog.date;

              const blogExcerpt = document.createElement('p');
              blogExcerpt.classList.add('card-text');
              blogExcerpt.textContent = blog.content;

              const readMoreLink = document.createElement('a');
              readMoreLink.href = `singleblogpage.html?id=${blog.id}`; // Change this to include the blog post ID
              readMoreLink.textContent = 'Read More';
              readMoreLink.classList.add('btn', 'btn-primary');

              blogBody.appendChild(blogTitle);
              blogBody.appendChild(blogDate);
              blogBody.appendChild(blogExcerpt);
              blogBody.appendChild(readMoreLink);

              blogCard.appendChild(blogImg);
              blogCard.appendChild(blogBody);

              blogPostsContainer.appendChild(blogCard);
          });
      })
      .catch(error => console.error('Error fetching blog data:', error));
});
