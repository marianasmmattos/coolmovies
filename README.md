- [Introduction](#sparkles-introduction)
  - [About](#pushpin-about)
  - [Technologies](#pushpin-technologies)
  - [Features](#pushpin-features)
- [Getting Started](#sparkles-getting-started)
  - [Install docker](#pushpin-install-docker-and-docker-compose)
  - [Running our app](#pushpin-running-our-app)
    - [Run it all](#pushpin-running-our-app)
    - [Only backend server and database](#pushpin-backend-server-and-database)
    - [Only build UI structure](#pushpin-build-ui-structure)
    - [Stop containers](#pushpin-stop-running-current-container)

# :sparkles: Introduction

Coolmovies is an app where you can share your ideas about... Movies. Here you can read other people's reviews and also post your own. You are allowed to change your mind so be free to edit whatever you've said before.

Coolmovies is also a CRUD app which was my first project using Docker, GraphQL, Apollo and Typescript. I'm not used to coding with React until then, but I've already tried to built some basic apps with it when I was first studying javascript.

## :pushpin: Technologies

- React.Js
- Typescript
- Styled Components
- Apollo Client
- GraphQl

## :pushpin: Features

- [x] List all reviews
- [x] List each movie's reviews
- [x] Update user's reviews
- [x] Delete reviews

# :sparkles: Getting Started

## :pushpin: Install Docker and Docker compose

https://docs.docker.com/engine/install/ubuntu/ 

## :pushpin: Running our app

If you want to get the app up, you can just run:

  `docker-compose up`

And visit [port 3000](http://localhost:3000) to see our application preview.

If you want to change our application code base, we recommend you to follow the next steps:

### :pushpin: Backend server and database

Open a terminal window.

1. First we need to be at our backend's directory path

  `cd coolmovies-backend`

2. Then, we should run our docker compose file

  `docker-compose up`

:mega: To rebuild docker image, we can use `docker-compose up --build`

### :pushpin: Build UI structure

Open a new terminal window.

1. First we need to be at our frontend's directory path

  `cd coolmovies-frontend/ui`

2. Then we'll need to create our app's image. You can do this by the script `docker:up` set by our package.json script or by the original command:

  `docker build -t react-coolmovies:app .`

3. Now we're gonna tun that built image.

3.1 If you want to use docker container **with** hotreload for local development, then use the shortcut:

  `docker:watch`

This shortcut has also been set in our package.json file.

3.2 Otherwise, to get the app up **without** hotreload, you can run the shortcut `docker:run` set by our package.json file or the original command: 

  `docker run -p 3000:3000 react-coolmovies:app`

4. That's it! Access [port 3000](http://localhost:3000)

### :pushpin: Stop running current container

1. Check current running containers by following command:

  `docker ps`

2. Your terminal should show a table where two first collums ate "containe id" and "image", looks something like this:

| CONTAINER ID |  IMAGE          |
|--------------|-----------------|
| 00NUMBERID00 | react:app       |

3. Get the number of which container you want to stop and execute:

  `docker stop 00NUMBERID00`

4. That's it! Then you can run another one at the same port. To check built images, run command `docker images`