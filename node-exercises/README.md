**Instructions:** Build a simple command line tool that lets you make a request to an API and store the data in a text file. This application should accept a command line argument using process.argv. The command line argument should be the name of a movie and your application should make an API request to the [omdb API](https://www.omdbapi.com) and output the plot of the movie. Your program should also save the name of the movie to a file called results.txt.

**Use the following modules:**
- fs - for reading and writing to a file
- process - for gathering arguments from the command line
- request - for making API requests (this is an external module)
