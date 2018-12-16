## Assumptions
- Hotels data set is in tens of thousand or more and hence I opted to make paginated calls to improve load time performance and reduce memory utilised on users device. Resulting in dealing with smaller set of data sets(20 per page).
- I have done minimal unit testing (using jest's snapshot rendering plus some event based tests), not because it wasn't one of the criteria for judging the test but purely because of time limitations
- I have also used bootstrap as css framework so that I can quickly style the page, which has its drawbacks of file size and dependencies on jQuery

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
    - clients (HTTP client abstraction currently using axios)
    - services (hotelService with just one method to get hotels, should be fairly easy to extend)
```

## Further improvements
- 