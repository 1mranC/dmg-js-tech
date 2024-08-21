# dmg-js-tech

# Task

We'd like to track scroll depth through a news article webpage. When a user scrolls their
window to 25%, 50%, 100% of the article body we'd like to inform them of their current
progress.

Write a JavaScript program that will dispatch an event to the window object at each of these
scroll offsets. Include the offset percentage in the details of the event.
You may choose a design pattern that you think is most appropriate for this task and can
explain in interview.

Please use the following article as input. We should be able to load your JS program on to
the page for testing.

https://metro.co.uk/2024/08/10/pointless-london-gallery-crowned-uks-biggest-tourist-let-down-21393090/

# Scroll Depth Tracking

This project tracks user scroll depth on a news article webpage and dispatches custom events when the user reaches specific scroll offsets (25%, 50%, and 100%). This allows for monitoring user engagement and interaction with the content.

## Getting Started

### Deployment and Setup

1.  **Fork the Repository**: Ensure you have forked the repository containing the `index.html` and the custom JavaScript file.
2.  **Load the Page**: Open your `index.html` file in a browser to test the script. The JavaScript will automatically track scroll depth and dispatch events based to the console.
