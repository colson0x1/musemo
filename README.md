# MuseMo

MuseMo is a React Redux app that allows users to create and manage movie and music playlists. Users can add movies and songs to their respective playlists, remove items from the playlists, and reset the playlists to their initial state. The app features an intuitive user interface and provides an enjoyable way to organize and discover new movies and songs.

### MuseMo Screenshot
![MuseMo screenshot](https://i.imgur.com/jmDTNO8.png)

## Features

- Create and manage a movie playlist
- Create and manage a music playlist
- Add movies and songs to the respective playlists
- Remove movies and songs from the playlists
- Reset the playlists to their initial state

## Technologies Used

- React
- Redux
- Redux Toolkit
- Bulma CSS framework
- Faker.js (for generating random movie and song names)

## Getting Started

To run the MuseMo app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/colson0x1/MuseMo.git`
2. Navigate to the project directory: `cd MuseMo`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to view the app

## Folder Structure

- `store`: Contains the Redux store configuration and action creators
- `store/slices`: Contains the Redux slices for managing the movies and songs state
- `components`: Contains the React components for the movie and song playlists
- `data`: Contains utility functions for generating random movie and song names
- `styles.css`: Contains custom styles for the app
- `index.js`: The entry point of the app where the Redux store is configured and the main `App` component is rendered

## App Structure
This app is written with function based approach as opposed to feature based approach because feature based approach seems to be not working well with RTK as we ending up with scenarios like circular imports.
## Screenshots

### MuseMo 
![MuseMo](https://i.imgur.com/jmDTNO8.png)

### MuseMo - Add Movie
![MuseMo - Add Movie](https://i.imgur.com/8BgXQQ1.png)

### MuseMo - Add more movies and songs
![MuseMo - Add more movies and songs](https://i.imgur.com/QNbHVfa.png)

### MuseMo - Delete Individually / Reset all 
![MuseMo - Delete Individually / Reset all](https://i.imgur.com/Ppm5pCm.png)
