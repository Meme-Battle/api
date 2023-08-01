## Git

Follow the [Meme Battle styleguide](https://github.com/Meme-Battle/styleguide/blob/main/git.md).

## Folder Structure (general) ##
``` 
.
├── api
│   ├── prisma
│   │   ├── migrations
│   │   └── schema.prisma
│   └── src
│       ├── app.controller.ts
│       ├── app.module.ts
│       ├── app.service.ts
│       ├── main.ts
│       └── modules
│           ├── gateways
│           │   ├── gatewayExample.gateway.ts
│           │   └── gateways.module.ts
│           ├── guards
│           │   ├── guardExample.guard.ts
│           │   └── guards.module.ts
│           ├── providers
│           │   ├── providerExample.provider.ts
│           │   └── providers.module.ts
│           ├── repositories
│           │   ├── repositories.module.ts
│           │   └── repositoryExample.repository.ts
│           └── useCases
│               └── useCaseExample
│                   ├── CreateExample
│                   │   ├── createExample.controller.ts
│                   │   ├── createExample.dto.ts
│                   │   ├── createExample.schema.ts
│                   │   └── createExample.service.ts
│                   └── useCaseExample.module.ts
├── CHANGELOG.md
└── README.md
```