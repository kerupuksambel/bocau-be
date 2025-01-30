# Bocau - Backend

## Preparation
- JS project prep
```bash
yarn
```

- Generate private and public key
```bash
mkdir .keys
openssl genpkey -algorithm RSA -out private.pem
openssl rsa -in private.pem -pubout -out public.pem
```
- Ensure the frontend also have the same pubkey for verification purpose in FE side

## Runner
```bash
yarn start
```

## Todo
- General
    - Dockerization
- Auth
    - Dynamic pubkey
    - Keys generation upon startup
