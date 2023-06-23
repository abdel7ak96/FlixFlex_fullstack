# FlixFlex

Context : Creation of a web application: Movie app FlixFlex.

⚠️ Demo video provided

## Techstack

- React 18
- Next js 12
- Prisma
- SQLite
- TypeScript
- Node
- JSON Web Token

## Endpoints

| Endpoint | Description                                                                            |
| -------- | -------------------------------------------------------------------------------------- |
| login    | endpoint responsible for authenticating a user and generating JWT token                |
| signup   | endpoint responsible for creating a new user and generating JWT token                  |
| favorite | endpoint responsible for add/deleting/returning list of favored movies by a given user |

## Database schema

| User      | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| id        | unique Id generating on a new user's account creation                               |
| username  | unique username picked by the user                                                  |
| password  | hashed version of the password stored on database                                   |
| favorites | relation to the Favorites table containing list of id of movies favored by the user |

| Favorites | favorites                       |
| --------- | ------------------------------- |
| id        | unique id generated on creation |
| UserId    | relation to User                |
| User      | Owner user id                   |
