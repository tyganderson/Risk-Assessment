# Risk Assessment Form

This project encapsulates the work completed by my team for our Senior Project at the University of Central Missouri.

For this project, team LAW.DAT coordinated with Charter and Go, a charter company with university alumni, to design a pre-flight Risk Assessment form, simulating a tool needed by the company. The project began with some basic requirements engineering, defining the type of data captured in the form, unique values, risk breakpoints, and style preferences. By request of the client, we focused on developing the form around a singular JSON object representing the form data, allowing for easy modification of the form submission, and later the viewing and editing of the form, by adjusting a single JSON file. Also by request of the client, we incorporated the use of AWS Lambda.

Our team chose to use this project to explore new frameworks and technologies that were not covered in our courses. Namely, we chose to build the project using React.js and MongoDB. We wanted to explore React.js due to the popularity of the framework and its benefits in modular design and dynamic page content. For MongoDB, we simply wanted to explore a NoSQL database, given that our courses all focused on the SQL language. This project also included our first design and development of an API, used to make database calls to our MongoDB collection.

# Post-submission Updates

This project was originally completed and submitted in May 2022. As of August 2024, I've worked to update the project using personal AWS Lambda and MongoDB back-ends and providing a live project demo for interested parties using GitHub pages. There are several features that were not included in the original project, due to time constraints, that I will be gradually working to implement. These features include:

* Airport IATA code lookup for form Departure and Destination blocks
* Validating IATA codes at form submission
* Validating trip number format 
* Validating tail number format 
* User authentication and authorization
* Add footer content
* Restrict editing priveleges to admin users
* Allow admin users to delete flight entries
* Include search function when viewing submitted entries
* Load additional flight entries when scrolling to bottom of view
