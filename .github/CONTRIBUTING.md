## Git

Follow the [Meme Battle styleguide](https://github.com/Meme-Battle/styleguide/blob/main/git.md).

## Folder Structure (general) ##
``` 
├── api
│   ├── prisma
│   │   ├── migrations
│   │   └── schema.prisma
│   └── src
│       ├── main.ts
│       ├── app.module.ts
│       ├── errors
│       │   └── <error_type>.error.ts
│       ├── middlewares
│       │   └── <type_middleware>.middleware.ts
│       ├── <modules>
│       │   └── <module>
│       │       ├── <module>.module.ts
│       │       └── UseCases
│       │           ├── <module>.controller.ts
│       │           ├── <module>.DTO.ts
│       │           └── <module>.service.ts
│       ├── providers
│       │   └── <provider>.provider.ts
│       └── repositories
│           └── <entity>.repository.ts
├── CHANGELOG.md
└── README.md
```