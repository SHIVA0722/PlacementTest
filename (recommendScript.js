document.addEventListener('DOMContentLoaded', function () {
    const recommendBookForm = document.getElementById('recommendBookForm');
    const recommendationTitleInput = document.getElementById('recommendationTitle');
    const recommendationAuthorInput = document.getElementById('recommendationAuthor');
    const loader = document.getElementById('loader');

    recommendBookForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const recommendationTitle = recommendationTitleInput.value.trim();
        const recommendationAuthor = recommendationAuthorInput.value.trim();

        if (!recommendationTitle || !recommendationAuthor) {
            alert('Please fill in both fields.');
            return;
        }

        // Clear form fields and show loader
        recommendationTitleInput.value = '';
        recommendationAuthorInput.value = '';
        loader.style.display = 'block';

        try {
            // Simulated API endpoint (replace with actual backend API)
            const apiUrl = 'https://api.example.com/recommendBook';

            // Example using Axios for API request
            const response = await axios.post(apiUrl, {
                title: recommendationTitle,
                author: recommendationAuthor
            });

            // Example handling API response
            if (response.status === 200) {
                alert('Book recommended successfully!');
            } else {
                console.error('Unexpected API response:', response);
                alert('Failed to recommend book. Please try again later.');
            }
        } catch (error) {
            console.error('Error recommending book:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            // Hide loader after operation completes
            loader.style.display = 'none';
        }
    });
});
