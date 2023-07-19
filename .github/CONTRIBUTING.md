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
│       │   └── TypeErrorExample.error.ts
│       ├── middlewares
│       │   └── TypeMiddlewareExample.middleware.ts
│       ├── modules
│       │   └── moduleExample
│       │       ├── moduleExample.module.ts
│       │       └── UseCases
│       │           ├── moduleExample.controller.ts
│       │           ├── moduleExample.DTO.ts
│       │           └── moduleExample.service.ts
│       ├── providers
│       │   └── providerExample.provider.ts
│       └── repositories
│           └── entityExample.repository.ts
├── CHANGELOG.md
└── README.md
```