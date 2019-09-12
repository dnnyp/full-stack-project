# Fantasy Feedback API

## Project Links
- https://github.com/dnnyp/full-stack-project-api
- https://morning-shore-48477.herokuapp.com/rosters
- https://github.com/dnnyp/full-stack-project-client
- https://dnnyp.github.io/full-stack-project-client

## Technologies Used
- HTML
- CSS
- Bootstrap
- Bootstrap Table
- JavaScript
- jQuery
- AJAX
- Handlebars

## Process
This application is a fantasy football roster rating client which utilizes a Rails API. My initial instinct was to shoot for the moon and create a full application which would allow users to create rosters, add players to the rosters, and add comments and ratings to other rosters. I had to take a step back and reconsider what my MVP was and narrow my focus on it. Utilizing ERDs and wireframes helped me visualize what I needed to build out.

I initially had trouble getting traction on this project because I was too preocupied with trying to use what I did with my previous project. I was scared of straying from what was tried and tested. I spent a lot of time fumbling around with code copied from my previous project and didn't let myself start fresh. I got my CRUD actions completed and stepped away from it for the weekend so I could come back with a fresh mind.

Once I started using Bootstrap to code my UI I was able to get really creative with trying out different things. I spent a lot of time reading through the Bootstrap documentation to figure out the best components for what I was trying to do. A huge challenge was refactoring my existing code to fit into the Bootstrap framework. I poached some features from my previous project such as the alerts.

A major component of my UI is an interactive table styled using the Bootstrap extension Bootstrap Tables. I spent a lot of time researching how to get it working. There was a lot of back and forth between working on my API and the table to integrate them. I tried a couple of Ruby gems to get my data in the correct format. StackOverflow and the issues queue had a lot of useful information that I was able to use to get it working. I found a lot of useful methods in the Bootstrap Tables API which allowed me to do cool things such as selecting an item on the table and extracting its ID to make an API call and refreshing the table after CRUD actions. I managed to figure out how to filter the tables and only display the user's rosters. This allowed me to create two views: one with the user's resources and one with everyone's.

I focused on frequent and good commit messages with this project and developed a format for myself to follow.

## Unsolved Problems
I wasn't able to implement my full original plan of letting users add player resources to their rosters and adding comments and ratings to each roster. V2 will implement these features. My idea is to have a separate table of prepopulated player resources and allow users to use a dropdown generated with handlebars to select and add players. Players would have a small photo of them which shows when a user clicks on a single roster. I would also love to implement more animations.

## Wireframe
[![ERD](https://raw.git.generalassemb.ly/ga-wdi-boston/full-stack-project-practice/a0e5a99e7d478e47803ec5c471611182b087bbc9/public/wireframes.jpg)](https://generalassemb.ly/education/web-development-immersive)

## User Stories
- As a user I would like to be able to create a fantasy football roster.
- As a user I would like to be able to add players to a roster.
- As a user I would like to be able to provide feedback to a roster.
- As a user I would like to be able to see all feedback for a roster.
