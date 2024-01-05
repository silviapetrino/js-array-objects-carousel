# js-array-objects-carousel

## Exercise Description

The objective of this exercise is to implement a carousel using JavaScript objects to represent the slides. Each slide should include an image, a title, and a descriptive text.

## Instructions

1. Open the HTML file where you want to implement the carousel and identify the element where the array will be displayed.

2. **Create the Array of Objects:**
   - Create an array of objects, each representing a carousel slide. Each object should have the following properties: `image` (for the image path), `title` (slide title), and `text` (text description).

3. **Printing Objects:**
   - Use a `forEach` loop to iterate through the array of objects and print each element on the page. Each element should be placed in a card structure containing the image, title, and text.

4. **Managing Image Position:**
   - Introduce a counter to keep track of the position of the active image in the carousel.

5. **Initializing the Active Image:**
   - Remove the `hide` class from the first carousel image.
   - Add the `active` class to the thumbnail image corresponding to the first slide.

6. **Adding Buttons:**
   - Insert two buttons for navigating forward and backward in the carousel.

7. **Carousel Functions:**
   - Create the necessary functions to handle the carousel's operation, including navigation forward and backward.

8. **Activating Buttons:**
   - Connect the buttons to the created functions to respond to user clicks.

9. **Timing Functions (Bonus 1):**
   - Experiment with the use of timing functions to enable automatic scrolling of images at desired time intervals.

10. **Inverting the "Direction" (Bonus 2):**
    - Implement a button that reverses the scrolling direction of the carousel.

11. **Image Change on Thumb Click (Bonus 3):**
    - Add the functionality to change the active image in the carousel by clicking on the thumbnails.

## Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>JavaScript Carousel</title>
</head>
<body>
    <div id="carousel-container"></div>

    <script src="carousel.js"></script>
</body>
</html>
