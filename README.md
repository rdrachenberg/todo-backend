# Todo Backend Setup Guide

Follow these steps to configure and run the Todo Backend application.

## Prestep: Clone the repo 
### In your terminal or command prompt run the following
    git clone https://github.com/rdrachenberg/todo-backend.git

## Step 1: Prepare the Environment Configuration File
1. Locate the `example.env` file in the project directory.
2. Rename it to `.env`
3. Save the file after renaming.

## Step 2: Configure the Database Connection
1. Open the `.env` file in a text editor.
2. Update the connection string as follows:

    ```
    mysql://<USERNAME>:<PASSWORD>@localhost:3306/todos
    ```

3. Replace `<USERNAME>` and `<PASSWORD>` with your MySQL credentials.
4. Save the `.env` file.

## Step 3: Install Dependencies and Start the Server
1. Open a terminal and navigate to the root of the project directory.
2. Run the following commands:

    ```
    npm install && npm start
    ```

## Step 4: Verify the Setup
If everything is configured correctly, you should see the following output in the terminal:

```
seeded db
Server running on port 8080
```

## Congratulations!
The Todo backend Express application is now up and running.
