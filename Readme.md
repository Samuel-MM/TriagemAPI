# TriagemAPI
Simple API to store and retrieve patient and history data. FETIN 2024 Project
#  Technologies

 - Node.js
 - PostgreSQL
 - MongoDB
 - Docker
 
# Running with docker

## Build the image

In order to build the docker image, run the following command:

    docker build -t triagem .

## Run container

In order to run the container, run the following command:

    docker run -d -p 3000:3000 --name triagem triagem

# Running without docker (development environment)

## Installing Dependencies
This project is being developed using Node.js version **20.13.1**

In order to install all the necessary dependencies to run the project, run the following command:

    npm install

## Development Enviroment

To run the project in the development enviroment, run the following command:

    npm run dev
