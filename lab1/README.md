1. Install *Node* from https://nodejs.org/en/download 

2. Install *npm*
    ```
    npm install -g npm 
    ```
3. Install *nodemon* to get latest updates of your server automatically 
    ```
    npm install -g nodemon
    ```
    and add its path to Variables Environment
4. To run it, open cmd in the file location
    ```
    nodemon calcServer.js
    ```
    Then write *http://localhost:7000/* in the browser
- To check try:
    - http://localhost:7000/add/2/3/2 
    - http://localhost:7000/multiply/6/3/1
    - http://localhost:7000/divide/6/3/2
    - http://localhost:7000/divide/6/0/2