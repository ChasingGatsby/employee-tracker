# Week 12: Employee Tracker ![License](https://img.shields.io/badge/License-MIT-yellow.svg)
  ## Description
  This week's challenge tasked us with creating a node.js application that allows a user to interact with an MySQL database of a workplace. The app would demonstrate functionality to display information on the organization (employees, departments, salaries, etc.), as well as to add and update information on new employees, jobs, or departments.

  While not a particularly difficult project, it was definitely eye-opening on the inefficiencies of certain operations we've learned about. Interacting with MySQL in a vacuum is pretty straightforward, but performing queries on the database itself using JavaScript was a bit tricky. While I was nominally aware of the existence of the async/await functions in order to sequence asynchronous functions, I had already done a good portion of the codebase using the more "traditional" method of nesting multiples queries within callback functions. I also wanted to treat the project as if I'd never heard of async/await, especially since it was subject material for the following week.

  I can certainly see why async/await is more efficient. While my query chains weren't terribly complex, even linking two queries together resulted in an unexpectedly dense block of code that I was constantly reevaluating to make sure I had the syntax right. I couldn't imagine realizing i'd missed something along the way, and have to steel myself with having to debug those callback chains. It was definitely an experience watching and actively writing callback hell. If I ever do get the chance to revisit this application, I'd love to refactor it using async/await, primarily for clarity and ease of modification.

  Unfortunately, the potential headache of sifting through callback hell led to a small bug, more inconvenient than detrimental to function: reinitializing the app whenever an operation/task was completed. Because the code for restarting the app was written separately from the scripts performing the queries, upon finishing an operation the app will display the prompt menu before the console is populated with the response from the queries. The menu can still be accessed and functions as it should, but interacting it will reiterate it over the logged query results. Again, this doesn't interfere with the functionality of the app, but operating it can be a little clunky at times. This could probably be easily rectified by a reorganization of the codebase as well as shifting from callback functions to async/await functions. 
  

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  Clone off of GitHub. Make sure to have packages for inquirer, mysql2, and console.table installed before starting the application.

  ## Usage
  Initialize the app through node.

  ## Contributions
  Feel free to contact me!

  ## Tests
  No tests needed.

  ## License

This project is licensed under [MIT License](https://opensource.org/licenses/MIT). ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Questions
  https://github.com/ChasingGatsby

  jabriel0ne@gmail.com

  If you have any questions, please feel free to contact me using the above!
