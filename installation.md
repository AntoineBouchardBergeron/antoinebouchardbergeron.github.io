# Installation notes

This is the steps I used to install the project on my machine (macOs).
I already had node v16.14.0 along side npm v8.19.2, therefore I will be using [v8](https://pnpm.io/installation#compatibility) of pnpm

1. Install pnpm : 
`curl -fsSL https://get.pnpm.io/install.sh | sh -`

2. Use corepack to force pnpm: `corepack enable pnpm`

3. Upgrade Node.js and npm to use pnpm v9 using the follwing:
```
    npm cache clean --force
    npm install -g n
    n latest
    node -v 
```

4. Did step 1 and 2 again

5. Created the app with `pnpm create react-app cv-antoine --template typescript`

6. Started coding!