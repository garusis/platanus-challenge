# Banana Bitcoin

  Solución al reto planteado por platanus en https://gist.github.com/agustinf/e457dd57e16141665859299c9a3ce49f

## Requirements
  This project use Docker, and this is why you don't need more 
  requirements that `docker`, `docker-compose` and `npm`.

## Run
### Development
In development you just need to run
    
    yarn run compose up

or

    npm run compose up    

When `compose up` task finish ... . The development container 
*(docker/Dockerfile.development)* has the project root mounted
as a volume at `/app` directory. For this reason, you don't need
rebuild the container if you make changes in code. All your changes
are reflected inside the container.

