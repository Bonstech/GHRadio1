function shareHeadline(headline, image) {
  if (navigator.share) {
      navigator.share({
          title: headline,
          text: headline,
          window.location.href = "https://ghradio1.com/businessc1.html";
 
      })
      .then(() => console.log('Successfully shared'))
      .catch((error) => console.error('Something went wrong sharing:', error));
  } else {
      // Fallback for browsers that do not support the Web Share API
      alert('Sharing is not supported in this browser.');
  }
}
