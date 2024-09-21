# Debug a video using different players

## Debug a video using different players

- cd the repository root
- npm install
- npm run dev
- open 'http://localhost:5173'

## debug with hls.js

- http://localhost:5173/hls
- It starts reporting errors at about 47 seconds.
- After the error is reported, 14.m4s will be loaded repeatedly

## debug with shaka-player

- http://localhost:5173/shaka
- the video cannot play, but the same video can play with hls.js
