# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

####### PROEJCT  NOTES ##################
1) PROJECT.
    ## Project : movies-master.
  -- Homepage like netflix.
  -- SignIn form.
     -- React Forms.
     -- Add validations.
  -- Signup form.
      -- React Forms.
      -- Validations.
 -- Backend.
  -- Backend - Firebase.
      -- Implementing Fire page (Create project, sel AUTh, enabling EMail/password...)
  -- Deploye project on LIVE.
      -- Still pending.
  -- AUTH process.
       - Firebase API. (Sign IN - Sign UP).
       - Checking User/pass.
  -- Show notifications.
      - Error Notification.
      - Success Notifications...
  -- Routing/redirect user to homepage if sign-in sucess.
      -- Installing routing (npm i react-router-dom).
      -- Create router configuration.
         ex : "/" : Login Component.
         es : "/allmovies" : Allmovies component.
         ex : "/"cart" : Cart component.
      -- provide the router confignternal linking the pages. to Application. 
      -- 
  --  state varibale/data
      -- we discussed. .
  -- Important topics : Redux Store.
     -- Will have a one Redux Store for Application.
     -- Will create a Store.
     --  after will provide that store to Application.
            1) Redux Store.
            2) Slice.
            3) Provide the Store to application.
            4) Dispatch a Action.
            5) Reducer function.
            6) Subscribe to store using Selectors.
    -- when clik on button -> Dispatch Action -> Reducer Function -> Modify/add/delete the Slice Data.
    -- To keep update the component - we subscire to store using Selectors.        
    -- install store : npm i @reduxjs/toolkit
                       npm i react-redux.
    -- We crate a store -> Provide to app.
    -- We will call Reducer function using Dispatching Action. (We will save user object into UserSlice.).
    -- We will read the userSlice data by using Selectors(emai, username, profie photo).
    -- Active event listner.
       -- useEffect Hook(something you want call only onetime when compmnent render/call)
    --- SignUP and Workflow--
        1) SignUP -> Fullname, email, password. (SignUp Sucess).
        2) Login -> Navigate to 'Allmovies' component and will save current user data on "UserSlice" store.
        3) AllMovies compoent is allowed for Autheticated/Login user
            -- if  We directly come to Allmivies - we will not not give the acees - we take back to Login Page.
        4) SignOut methods.
           -- We will remove the user from the store. using removeUser function.
           -- Will actull do Signout API.
        5) Add Active event listner : onAuthStateChanged - will keep check user is logged in or not.
    -- Conditinal Rendering.
        -- Accessing any component with a passed condition.
    -- TO Dispalu=y movies on Allmovies component we sung TMDB API.
       -- We made nowPlayong API in AllMovies component.
       -- We need to store the data om Store.  
             -- Create new MoviesSLice.
             -- Update main store with movieSlice.
             -- Update moviesSlice data in Allmovies components.

    -- Debugging Application.
        -- You can check Step by Steps how code is excuting in background.
        -- You can degugg code/page on "SOURCE" Tab
        -- we will use - 
    -- Displaying Movis on AllComponent page.
       {
                /*
                 movies-container
                   -- Background Video.
                   -- Movies titlr.
                   -- Movie Description.
                   -- Play Button
                 Listiling Movies Catagories.
                */
            }.
    -- Properties Drilling (Props Drilling.)

      -- Optional Chaning.
    -- JavScript Iframe.
         - To play/run/show any external source into your Application. then Iframe.  
         


  
 2) Concepets. 
    -- React - Hooks....
       -useState Hook.
       -useEffect Hook.
       -useRef Hook.
   -- How click works in React.
   -- Condotion based form switching.
   -- Condotion based HTML displaying.
   -- React Routings..
      -- npm install react-router-dom.
      -- config the routers.


skzlfhbv alisbgv
 - 



