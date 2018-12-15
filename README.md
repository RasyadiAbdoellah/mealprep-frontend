# MealPrepper
MealPrepper is a digital representation of how my wife and I plan out our meals for the month. We have a collection of recipes, and assign them to days of the month. Then we split this month-long list of recipes into weeks, and use that week-long list to compile a shopping list.

The project has two resources at the moment, recipes and ingredients. The resources have a many-to-many relationship with each other and are connected through a join table that also holds the quantity of an ingredient for a certain recipe. In a sense, ingredients behave like tags, and the frontend is designed to autocomplete the ingredient name as a user types it in.

Current iteration goals is to show a list of recipes ordered by the day of the month. Selecting a recipe will show it full detail. In future iterations this list will be split between recipes that have a day assigned to them and unassigned recipes. Assigned recipes are shown in a calendar view so you can see what recipes are coming up for the month.

A login and registration feature may be implemented in future iterations. This of course requires a new users resource and connecting the recipes resource to the user.

This is the frontend for MealPrepper.

Backend repo: https://github.com/RasyadiAbdoellah/mealprep-api

## Tech Stack
- React frontend
- Express and Sequelize backend

## User Stories
### V1
**- Epic: As a user, I want to save a recipe**
- As a user I want to create a new recipe
- As a user I want to see all of my recipes
- As a user I want to update a recipe
- As a user I want to delete a recipe

### V2
**- Epic: As a user, I want to set ingredients for each recipe**
- As a user I want to create a new ingredient and its quantity for a recipe
- As a user I want to see the ingredients in a recipe
- As a user I want to update the ingredients in a recipe
- As a user I want to delete an ingredient in a recipe

### V3
**- Epic: As a user, I want to see recipes sorted by day of the month**
- As a user I want to assign a day for a recipe
- As a user I want the information sorted by this parameter

### Reach Goals
- As a user, I want to see my recipes on a calendar
- As a user I want to share recipes with other users


### Wireframes
These wireframes are rough ideas of how the UI will look. I plan to update these with more detailed mockups as this project progresses.

**Login View**
![Login View](https://i.imgur.com/JxdSIFw.png)


**Main view when a user logs in**
![Main View](https://i.imgur.com/VnxCtoX.png)


**Recipe list view**
![Recipe List View](https://i.imgur.com/5ZI8khC.png)


**Add Recipe view**
![Add Recipe View](https://i.imgur.com/aLDDzgV.png)


**Single Recipe view**
![Single Recipe View](https://i.imgur.com/083fFLO.png)


### Dev log


### Technical issues/improvements



