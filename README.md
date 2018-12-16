## Assumptions
- Hotels dataset is in tens of thousand or more and hence I opted to make paginated calls to improve load time performance and reduce memory utilised on users device. Resulting in dealing with smaller set of data sets(20 per page).
- I have done minimal unit testing (using jest's snapshot rendering plus some event based tests), not because it wasn't one of the criteria for judging the test but purely because of time limitations
- I have also used bootstrap as css framework so that I can quickly style the page, which has its drawbacks of file size and dependencies on jQuery
- Didn't feel a need for a state management library as the feature set is small and not much of global state shared across higher level components

## Getting Started

1. Download the repository ```git clone https://github.com/melwynfurtado/dnata.git```
2. Install all dependency ```npm i```
3. Run the server ```npm start```

Project should run at ```http://localhost:8080/``` and open a new browser window

### Some other npm scripts
* ```npm test``` for unit tests
* ```npm run build``` for production builds

## Folder structure
```
  - src
    - components (React components)
    - clients (HTTP client wrapper currently using axios)
    - services (hotelService with just one method to get hotels, should be fairly easy to extend)
    - __mocks__ (Simulate API server responses)
```

## Further improvements
- Loading state UX to be more of like a blocker ui (overlay) over the rendered list until new list is available
- Build recommendations logic (maybe based of Location key) within mocks/service to fetch on intial App mount
- SEO friendly by either using client side routing to register user state within browser history api or maybe If I use a hybrid approach using next.js to do server side rendering could be easier to maintain the app.
- Fallback to default image if hotel image is not found
