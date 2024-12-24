# Hospital Management System

## Overview
This project is a Hospital Management System built using Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend. It allows for the management of patient data, including adding new patients through a user-friendly form.

## Features
- Patient entry form for adding new patients.
- SQLite database integration for storing patient information.
- RESTful API for handling patient data.

## Project Structure
```
hospital-management-system
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── hospital
│   │   │           ├── HospitalManagementSystemApplication.java
│   │   │           ├── controller
│   │   │           │   └── PatientController.java
│   │   │           ├── model
│   │   │           │   └── Patient.java
│   │   │           ├── repository
│   │   │           │   └── PatientRepository.java
│   │   │           └── service
│   │   │               └── PatientService.java
│   │   ├── resources
│   │   │   ├── application.properties
│   │   │   └── static
│   │   │       ├── css
│   │   │       │   └── styles.css
│   │   │       ├── js
│   │   │       │   └── scripts.js
│   │   │       └── templates
│   │   │           └── patientForm.html
│   │   └── webapp
│   │       └── WEB-INF
│   │           └── web.xml
├── .gitignore
├── build.gradle
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd hospital-management-system
   ```
3. Build the project using Gradle:
   ```
   ./gradlew build
   ```
4. Run the application:
   ```
   ./gradlew bootRun
   ```
5. Access the patient entry form at `http://localhost:8080/patientForm`.

## Usage
- Fill out the patient entry form with the required information.
- Submit the form to save the patient data to the SQLite database.

## Technologies Used
- Spring Boot
- SQLite
- HTML/CSS/JavaScript

## License
This project is licensed under the MIT License.