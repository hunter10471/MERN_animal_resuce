# :smiley_cat: Animal Rescue 

Hey everyone, presenting to you *Bay-Zuban* an animal rescue portal where you can adopt different pet as well as put multiple pets up for adoption. The portal has an admin and nomral user views where admin can add and delete pets whereas user can only view them or adopt them.  The app is built on the MERNG stack and also includes login through your Google account!.

## :ticket: Demo

A link for the demo is given below:

:link: https://bayzuban.herokuapp.com

_User account_:
```bash
username: admin
password: 12345678
```

_.env variables_
```bash
MONGO_URI <Your mongodb URI>
CRYPTOJS_SECRET_KEY <Any secret combination or password>
JWT_SECRET_KEY <Any secret combination or password>
MAIL_EMAIL <Any email you have>
MAIL_PASS <Its password>
GOOGLE_PUBLIC = <Your google public key found on developers console>
GOOGLE_SECRET = <Your google private key found on developers console>
```

## 🔥 Features

### :lock: Authentication
- User registration & login
- Login with Google
- JWT auth methods with secure sessions using redux-persist

### :stars: API fetching
- Pets fetching (Graphql API is used for fetching only the relevant data)
- User fetching (Existing users cannot register with same email or username again)
- Add/delete pets using the admin portal by logging in through admin account


### :zap: Animations with framer-motion
- Element animations added for better ux
- All animations viewport triggered ( Only triggered if user enters the given div or heading etc)
- Pages don't change abruptly but smoothly exit an animation and enter another 



## :camera: Screenshots

### Landing page
![](https://github.com/hunter10471/MERN_animal_resuce/blob/master/screenshots/ss1.png?raw=true)

### Login Page
![](https://github.com/hunter10471/MERN_animal_resuce/blob/master/screenshots/ss2.png?raw=true)

### Pet page
![](https://raw.githubusercontent.com/hunter10471/MERN_animal_resuce/master/screenshots/ss3.png)

## :key: Client Dependencies

```JSON
"dependencies":{
  "@apollo/client": "^3.6.9",
    "@emotion/react": "^11.9.3",
    "@emotion/styled": "^11.9.3",
    "@mui/icons-material": "^5.8.4",
    "@reduxjs/toolkit": "^1.8.3",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/google-one-tap": "^1.2.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.43",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "autoprefixer": "^10.4.7",
    "axios": "^0.27.2",
    "framer-motion": "^6.5.1",
    "google-one-tap": "^1.0.6",
    "graphql": "^16.5.0",
    "jwt-decode": "^3.1.2",
    "postcss": "^8.4.14",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-intersection-observer": "^9.3.5",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux-persist": "^6.0.0",
    "tailwindcss": "^3.1.5",
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4"

  },

  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.30.5",
    "@typescript-eslint/parser": "^5.30.5",
    "eslint": "^8.19.0",
    "eslint-plugin-react": "^7.30.1"
    }

```

## :construction_worker: Server dependencies

```JSON
    "dependencies":{
    "apollo-server": "^3.10.0",
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-graphql": "^0.12.0",
    "graphql": "^15.8.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.4.4",
    "nodemailer": "^6.7.7",
    "winston": "^3.8.1"
    }

    "devDependencies": {
    "nodemon": "^2.0.19"
  }
  
  ```



## 🏗️ How to Set up `Bayzuban` for Development

1. Clone the repository

```bash
git clone https://github.com/hunter10471/MERN_animal_rescue.git
```

2. Change the working directory

```bash
cd MERN_animal_rescue
```

3. Install dependencies

```bash
npm install # or, yarn install
```

4. Run the app

```bash
npm run dev # or, yarn dev
```

That's All!!! Now open [localhost:4000](http://localhost:4000/) to see the app.


## 🍔 Built With
_These are just some major resources used in the project, there are others too that can be found in the dependencies section_
- [React JS](https://nextjs.org/): The most popular framework around
- [TailwindCss](https://tailwindcss.com/) A utility-first CSS framework packed with classes
- [Heroku](http://vercel.com/): Easiest hosting for a MERN app
- [Framer-motion](https://www.framer.com/motion/) Amazing animations done easily
- [Redux/@reduxjs/toolkit](https://redux-toolkit.js.org/) For persisting data and easy access to store
- [Material-UI](https://mui.com/) All the icons were taken from this amazing library
- [Axios](https://axios-http.com/) For easy data fetching from  backend
- [Eslint](https://eslint.org/) All the front end and backend code is linted using ESlint to prevent any errors and follow a singular code pattern
- [React-router](https://reactrouter.com/) Page transitions and re-directions done right
- [GraphQL](https://graphql.org/) Fetching only what you want 



## 🛡️ License
This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.



