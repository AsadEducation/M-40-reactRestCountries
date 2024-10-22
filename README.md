# Flag Management App

## Overview
This project allows users to manage flags by adding them through button clicks. The application uses React to manage the state and display the flags dynamically.

## How Flags are Added

1. **Create a Button**: Implement a button with an `onClick` event.
2. **Wrap with Another Function**: This function will handle the passing of the image URL.
3. **Write the `handleFlagClicked` Function**: This function should be defined within the component to handle button clicks.
4. **Pass Flag URL to Parent**: In the `handleFlagClicked` function, you’ll need to create a function in the parent component to receive the flag URL.
5. **Create a `visitedFlag` Function**: This function in the parent component will manage the list of flags.
6. **Child Component**: The child component does not know what `visitedFlag` is, so we need to pass it as a prop.
7. **Receive the `visitedFlag` in Child**: The child component will receive the `visitedFlag` function as a prop and can use it to set values.
8. **Pass the URL via `visitedFlag`**: The child will pass the flag URL to the parent via the `visitedFlag` function.
9. **Receive in Parent**: The parent component will receive the flag URL in its `visitedFlag` function.
10. **Declare State**: In the parent component, declare a state to keep track of the flags.
    ```javascript
    const [flags, setFlags] = useState([]);
    ```
11. **Update Flags**: Since `flags` is an array, append the flag URL to it.
    ```javascript
    const newFlags = [...flags, flagUrl];
    setFlags(newFlags);
    ```
12. **Render Flags**: Finally, render the flags using the `map` function.
    ```javascript
    flags.map((flag, index) => {
        return <img key={index} src={flag} alt="" />;
    });
    ```

## Screenshots
![Screenshot 1](image.png)
![Screenshot 2](image-1.png)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
