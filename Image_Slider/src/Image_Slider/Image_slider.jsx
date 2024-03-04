import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './Style.css'

/**
 * ImageSlider component displays a slider of images fetched from a provided URL.
 * It supports navigation through images using left and right arrows, as well as
 * indicators for each image.
 * @param {string} url - The URL to fetch images from.
 * @param {number} [limit=5] - The number of images to fetch per page.
 * @param {number} [page=1] - The page number to fetch images from.
 */
export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]); // State variable to store fetched images
  const [currentSlide, setCurrentSlide] = useState(0); // State variable to track current slide
  const [loading, setLoading] = useState(false); // State variable to track loading state

  /**
   * Function to fetch images from the provided URL.
   * @param {string} getUrl - The URL to fetch images from.
   */
  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  /**
   * Function to handle navigation to the previous slide.
   */
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  /**
   * Function to handle navigation to the next slide.
   */
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  // Fetch images when the URL changes
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

 

  return (
    <div className="container">
      {/* Left arrow for navigating to the previous slide */}
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {/* Render images */}
      {images 
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      {/* Right arrow for navigating to the next slide */}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      {/* Indicators for each image */}
      <span className="circle-indicators">
        {images 
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

/*
Learnings:
1. This code demonstrates the use of useState and useEffect hooks in React functional components.
2. It showcases fetching data from an API endpoint using asynchronous JavaScript (async/await) and handling loading states.
3. The component uses event handlers to implement image slider functionality for navigating between images.
4. Conditional rendering is employed to display loading messages when data is being fetched.
5. CSS classes and styles are applied to create a visually appealing image slider with navigation arrows and indicators.
6. The use of default parameters allows customization of the number of images to fetch per page and the initial page number.
7. Key React concepts such as state management, side effects, and event handling are demonstrated in this component.

Interview Questions and Answers:

Certainly! Here are the interview questions along with their answers:

1. **How does the ImageSlider component fetch images from a URL? Explain the role of useEffect and async/await in this process.**
   
   *Answer:* The ImageSlider component fetches images from a URL using the `fetchImages` function, which is called inside a `useEffect` hook. The `useEffect` hook triggers the `fetchImages` function whenever the `url` prop changes. Inside the `fetchImages` function, we use the `async/await` syntax to make an asynchronous request to the provided URL. This allows us to wait for the response from the server before proceeding with further actions, such as setting the state with the fetched images.

2. **How are loading states managed in the ImageSlider component? What message is displayed to the user while data is being fetched?**

   *Answer:* Loading states in the ImageSlider component are managed using the `loading` state variable. When the component is fetching data, the `loading` state is set to `true`, indicating that data is being loaded. This triggers conditional rendering to display a loading message to the user. The message "Loading data! Please wait..." is displayed to inform the user about the ongoing data fetching process.

3. **Describe the purpose of the handlePrevious and handleNext functions. How do they enable navigation between images?**

   *Answer:* The `handlePrevious` and `handleNext` functions are responsible for navigating between images in the slider. `handlePrevious` is invoked when the user clicks on the left arrow icon to move to the previous slide, while `handleNext` is invoked when the user clicks on the right arrow icon to move to the next slide. These functions update the `currentSlide` state variable, which determines the currently displayed image in the slider.

4. **What is the significance of the currentSlide state variable in the ImageSlider component? How is it updated when navigating between slides?**

   *Answer:* The `currentSlide` state variable in the ImageSlider component tracks the index of the currently displayed image in the slider. It is updated dynamically based on user interaction with the navigation arrows or indicators. When navigating to the previous slide (`handlePrevious`), the `currentSlide` is decremented by 1, and when navigating to the next slide (`handleNext`), it is incremented by 1. If the current slide is at the beginning or end of the slider, it loops back to the last or first slide accordingly.

5. **How are indicators implemented in the ImageSlider component? What role do they play in user interaction with the slider?**

   *Answer:* Indicators in the ImageSlider component are implemented as clickable buttons that represent each image in the slider. They provide a visual cue to the user about the number of images and their position in the slider. When a user clicks on an indicator, it triggers a function to update the `currentSlide` state variable, causing the slider to display the corresponding image.

6. **Discuss the use of default parameters in the ImageSlider component. How do they enhance the component's flexibility and usability?**

   *Answer:* Default parameters (`limit` and `page`) in the ImageSlider component allow customization of the number of images to fetch per page and the initial page number. If these parameters are not provided when using the component, they default to `5` for `limit` and `1` for `page`. This enhances the component's flexibility by providing sensible defaults while still allowing users to override them based on their requirements.

7. **Explain the importance of key React concepts such as useState, useEffect, and conditional rendering in building the ImageSlider component.**

   *Answer:* React concepts such as `useState`, `useEffect`, and conditional rendering play crucial roles in building the ImageSlider component:
   - `useState` is used to manage state variables (`images`, `currentSlide`, `loading`) in the component, enabling dynamic updates and re-renders based on user interactions and data fetching.
   - `useEffect` is utilized to perform side effects, such as fetching data from a URL when the component mounts or when the `url` prop changes. This ensures that the component stays in sync with external data sources.
   - Conditional rendering is employed to display loading messages while data is being fetched (`loading` state), as well as to render images and navigation elements based on the current state of the component.

8. **How would you optimize the ImageSlider component for performance, especially when dealing with a large number of images?**

   *Answer:* To optimize the ImageSlider component for performance when dealing with a large number of images, several strategies can be employed:
   - Implement lazy loading or pagination to fetch images incrementally, reducing the initial load time and memory usage.
   - Use image caching techniques to store previously fetched images locally, reducing redundant network requests.
   - Optimize image loading by using image compression and lazy loading techniques to improve page load times and responsiveness.
   - Consider implementing virtualization techniques, such as windowing or virtual lists, to render only the visible images in the viewport, thus reducing the overall rendering overhead.
*/