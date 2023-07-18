## Git

Follow the [Meme Battle styleguide](https://github.com/Meme-Battle/styleguide/blob/main/git.md).

## Folder Structure (general) ##
``` 
 ├── prisma/
 │       └── migrations/ 
 │       └── schema.prisma/ #Montagem das models
 ├── src/
    │   ├── providers/
    │   ├── └── #Provedores do projeto, ex : prisma, typeorm, sequelize e etc.
    │   ├── repositories/
    │   ├── └── #Repositórios do projeto, ex : Onde vai estar os métodos de execução com o banco.
    │   ├── middlewares/
    │   │   └── #Middlewares do projeto, ex : verificadores de autênticação.
    │   ├── modules/
    │   │   └──<module>/
    │   │       └── UseCases
    │   │                 └── #Casos de uso do projeto
    │   └── errors/
    │       └── #Manipuladores de Erros do projeto, ex: ErrorHTTP.
```