This is the example setup of the Swell + Next.JS + GraphQL blogpost: https://www.swell.is/blog/swell-next-js-graphql-building-modern-ecommerce-experiences

[Next.js](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/) and [GraphQL Codegen](https://the-guild.dev/graphql/codegen)

## Getting Started

Install the dependencies:

```bash
pnpm install
```

Update the credentials in the following files:
```
/.graphqlrc.yml
/codegen.ts
/lib/client.ts
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

