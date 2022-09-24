# Getting Things Done

A to-do list that increments priority of old tasks.

## Steps

1. [x] choose a ui framework
    - [Mantine UI](https://mantine.dev/)
2. [x] choose an auth method
    - [Next-Auth](https://github.com/nextauthjs/next-auth-example)
3. [x] choose a database
   - [AWS DynamoDB](https://aws.amazon.com/dynamodb/pricing/)
4. [x] (12:22) setup NextJS with Eslint, typescript, jest
5. [x] (12:48) add testing hooks
6. [x] (13:47) add database connection
7. [ ] add logging
8. [ ] create db schema
9. [ ] add auth
10. [ ] render a page
11. [ ] Vercel
12. [ ] be responsive
13. [ ] add user auth
14. [ ] add a todo item
15. [ ] when state changes we should save to db and/or local storage
16. [ ] ability to store history
17. [ ] add importance incrementer
18. [ ] add item editting
19. [ ] add ability to add/remove items
20. [ ] be able to move items up/down
21. [ ] be able to sort items
22. [ ] add ability to export as JSON (but versioned schema so can change it later)
23. [ ] add ability to have detailed notes for each task
24. [ ] be able to have sub tasks
25. [ ] be able to have related tasks
26. [ ] be able to set deadline for task which would change priority change speed
27. [ ] be able to set default priority change speed
28. [ ] be able to manually change task priority 
29. [ ] [Production readiness](https://nextjs.org/docs/going-to-production)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

