var page = 1; // Keep track of the current page number

// Function to fetch posts and append them to the container
function loadPosts() {
  $.ajax({
    url: "/posts/" + page, // Replace with the endpoint or URL to fetch posts
    method: "GET",
    success: function (response) {
      var posts = response.posts; // Assuming the response contains an array of posts

      if (posts.length > 0) {
        posts.forEach(function (post) {
          var postHTML =
            "<h2>" +
            post.title +
            "</h2>" +
            "<p>" +
            post.date +
            "</p>" +
            '<img src="' +
            post.cover +
            '" alt="Post Cover">' +
            "<p>" +
            post.content.substring(0, 300) +
            "</p>" +
            '<button class="readMore">Read More</button>';

          $("#postContainer").append(postHTML);
        });

        page++; // Increment the page number for the next request
      }
    },
  });
}

// Load initial posts on page load
$(document).ready(function () {
  loadPosts();
});

// Load more posts as the user scrolls down
$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    loadPosts();
  }
});
