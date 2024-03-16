# Vite React TypeScript Starter with Drag-and-Drop

This repository hosts a starter project for React applications using Vite and TypeScript, featuring a simple yet powerful drag-and-drop UI component. It leverages react-dnd and immutability-helper for fluid and performant drag-and-drop interactions.

## Features

- **Vite**: Enjoy the blazing fast build times and out-of-the-box features Vite offers.
- **TypeScript**: Benefit from TypeScript's static typing for more reliable code.
- **Drag-and-Drop**: Utilize the DraggableComponent for intuitive drag-and-drop functionality within your React apps.
- **React and React-DnD**: Build on top of React 18 and integrate seamlessly with the React-DnD library for complex drag-and-drop scenarios.

## Installation

Clone this repository, then install dependencies:

```bash
git clone <this-repo-url>
cd vite-react-typescript-starter
npm install
```

## Usage

### Start the development server:

```bash
npm run dev
```

### Build the project:

```bash
npm run build
```

### Lint the project:

```bash
npm run lint
```

### Preview the build:

```bash
npm run preview
```

## DraggableComponent

The DraggableComponent is a versatile drag-and-drop component that can be used to enhance your application's interactivity. Here's how it works:

- **Drag and Drop**: Implements drag-and-drop functionality using react-dnd.
- **Flexibility**: Can handle any React node as children, allowing for diverse use cases.
- **Performance**: Utilizes immutability-helper for efficient state updates during drag operations.

## How to Use

- Wrap your app's entry component with DndProvider from react-dnd.
- Use DraggableComponent to wrap any element you wish to make draggable.
- Pass an id, index, and type prop to each DraggableComponent.
- Implement an onDrop function to handle the logic when an item is dropped.

## Example

Refer to the App.tsx file for a detailed example of using DraggableComponent in a React application.
