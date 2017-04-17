**Instructions:** Build a simple application to store a shopping list. Use an array to store the items in the shopping list.

The application should have the following routes:
- `GET /` - this page should render a pug template that lists all of the items in the shopping list. This page should also render a form that allows a user to search for items in their grocery list. When the form is submitted, the browser should make a `GET` request to `/search`.
- `GET /search` - this route should take the search query and return a new page with the results displayed.
- `GET /new-item` - this page should render a form where a user can add an item to their shopping list. When the form is submitted, the browser should make a `POST` request to `/add-item`.
- `POST /add-item` - this route should accept form data and add it to the shopping list.
