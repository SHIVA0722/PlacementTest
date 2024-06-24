document.addEventListener('DOMContentLoaded', function () {
    const bookReviewForm = document.getElementById('bookReviewForm');
    const bookTitleInput = document.getElementById('bookTitle');
    const authorInput = document.getElementById('author');
    const reviewTextarea = document.getElementById('review');
    const loader = document.getElementById('loader');

    bookReviewForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const bookTitle = bookTitleInput.value.trim();
        const author = authorInput.value.trim();
        const review = reviewTextarea.value.trim();

        if (!bookTitle || !author || !review) {
            alert('Please fill in all fields.');
            return;
        }

        // Clear form fields and show loader
        bookTitleInput.value = '';
        authorInput.value = '';
        reviewTextarea.value = '';
        loader.style.display = 'block';

        try {
            // Simulated API endpoint (replace with actual backend API)
            const apiUrl = 'https://api.example.com/submitReview';

            // Example using Axios for API request
            const response = await axios.post(apiUrl, {
                title: bookTitle,
                author: author,
                review: review
            });

            // Example handling API response
            if (response.status === 200) {
                alert('Review submitted successfully!');
            } else {
                console.error('Unexpected API response:', response);
                alert('Failed to submit review. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            // Hide loader after operation completes
            loader.style.display = 'none';
        }
    });
});
