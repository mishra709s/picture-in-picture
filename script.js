const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
// Use of top level await, without using the async function wrapper
async function selectMediaStream() {
  try {
    // Screen capture API
    // Get the media stream data
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // Pass the media stream to teh video object as the source object
    videoElement.srcObject = mediaStream;
    // When the video has loaded its metedata, it gonna call a function that is going to play the video
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start picture on picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On load
selectMediaStream();
