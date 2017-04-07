# Banana Bitcoin

  Solución al reto planteado por platanus en https://gist.github.com/agustinf/e457dd57e16141665859299c9a3ce49f

## Requerimientos

  Este proyecto solo requiere tener instalado Node v4 o superior o Docker.

## Ejecutar con Docker
  Una version con los mas recientes cambios de este proyecto se encuentra en Docker-Hub por lo que puede 
  ejecutarse por medio de una terminal, sin clonar este repositorio, asi:
  
```
  docker run -p 3000:3000 --name banana-bitcoinapp garusis/banana-bitcoin
```

  Si ya ha clonado previamente el repositorio, puede pararse en la raiz del proyecto y usar en su lugar
```
  docker run runc
```

## Ejecutar sin Docker
  Esta tarea requiere tener instalado Node V4 o superior y NPM o Yarn. Para arrancar el server local primero debe
  instalar las dependencias con `npm install` o `yarn` y despues ejecutar `npm start` o `yarn start`

## Generar una nueva imagen con Docker
  Si desea generarse una imagen desde el repositorio, primero debe clonarse en un directorio local, 
  y luego desde una terminal ejecutar `npm run buildc`. Esta imagen podra ejecutarse posteriormente por medio de `docker run runc`

## Otras tareas
  Se han añadido tareas que permiten facilmente detener, eliminar, acceder a logs y bash interna de los contenedores generados.
  
