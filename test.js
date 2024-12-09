function shareHeadline(headline, image) {
  if (navigator.share) {
      navigator.share({
          title: headline,
          text: headline,
          url: window.location.href, // You can replace this with the specific URL of the news article
      })
      .then(() => console.log('Successfully shared'))
      .catch((error) => console.error('Something went wrong sharing:', error));
  } else {
      // Fallback for browsers that do not support the Web Share API
      alert('Sharing is not supported in this browser.');
  }
}
