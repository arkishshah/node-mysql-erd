# node-mysql-erd

## Application renders the following services:

### 1) Connects to MySQL database and displays a list of tables for users to select from.
### 2) Dynamically generates entitly relationship diagram for the selected schema.
### 3) Displays the common records.

## Steps to run the application.

Once the following folders are loaded in the workspace, initiate two separate terminals for running the node and angular application.

### Nodejs:

Installation:

1.	Nodejs & NPM
2.	MySQL
3.	Nginx or apache(that's up to you)

### Environment:

Step 1: Go to node app folder (erd-node-master)

Step 2: Create file .env

Step 3: Copy paste following details:
	
NODE_ENV= development

DB_HOST= localhost

DB_USER= ‘Your Username’

DB_PASS= ‘Your Password’ 

### Run:

Step 1: Go to the node app folder

Step 2: For dependency installation run below command

$ npm install

Step 3: To run app

	$ npm start (or) node ./bin/www
	
	
Step 4: Verification Test for the API’s the app is running or not

1.	http://localhost:3001/api/databases

2.	http://localhost:3001/api/database/your database name

### Angular:

Installation:

1.	Angular-CLI

2.	NPM

Run:

Step 1: Go to the Angular app folder (erd-angular-master)

Step 2: For dependency installation run below command

	$ npm install
	
Step 3: To run app

	$ ng serve
	
Step 4: Test

	http://localhost:4200

