
# MedWander Assignment


https://github.com/user-attachments/assets/bb4d93b6-b7c2-41d5-a52f-185eec2d7347




## Description

This is a web application project built using the stack - MySQL, Express, React, Node.js. The application features dynamic forms, data storage, and the ability to export form data to an Excel sheet. It demonstrates CRUD operations, form handling, and data synchronization with an external service.

## Installation Steps

### Prerequisites

1. **Node.js**: Ensure that Node.js is installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

2. **MySQL**: Install MySQL. Follow [MySQL installation guide](https://dev.mysql.com/doc/refman/8.0/en/installing.html) for your operating system.

3. **MySQL Workbench**: Optional, but recommended for managing MySQL databases. Download from [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Set Up Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
DB_DIALECT=mysql
```

### Install Dependencies

#### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```


#### Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

## How to Run the Application

### Set Up the Database
1. Open MySQL Workbench.
2. Connect to your MySQL server.
3. Execute the following SQL command to create the database:
4. 
```bash
CREATE DATABASE your_database_name;
```

### Backend

1. Navigate to the `backend` directory if not already there:

   ```bash
   cd backend
   ```

2. Start the backend server:

   ```bash
   npm index.js
   ```

   The server will run on `http://localhost:5000`.

### Frontend

1. Navigate to the `frontend` directory if not already there:

   ```bash
   cd ../frontend
   ```

2. Start the frontend application:

   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000`.

## Functionality Implemented

1. **Dynamic Forms**: Users can navigate to different forms (e.g., Form A and Form B) and fill out dynamic forms. The forms include fields for name, country code, and phone number.

2. **Form Validation**: Basic validation is applied to ensure that the form fields contain valid data.

3. **Local Storage**: Form data is saved to local storage to persist user inputs across page reloads.

4. **Data Submission**: Upon form submission, data is sent to the backend and stored in a MySQL database.

5. **Data Export**: A "Refresh" button allows users to download form data as an Excel sheet from the backend.
