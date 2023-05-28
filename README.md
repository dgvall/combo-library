
# Combo Library

Combo Library is a single page application that allows users to upload, search, and filter combos for select fighting games. From these combos, a user can curate their own personal collection of combos on a per game, per character basis.

## How Combo Library Works

### Creating an Account

Signing up is as easy as picking a unique username and assigning a password. Accounts are associated with uploaded combos and user bookmarked combos.

### Games

Combo Library currently supports two fighting games, Guilty Gear: Strive and Street Fighter 6. Clicking on the "GAMES" tab in the navigation bar will allow users to swap between viewed games.

### Characters Page

After clicking a game, the user will be directed to the Characters Page will displays all cooresponding characters to that fighting game.

### Character Page

After clicking a character from the Characters Page, the user will be directed to the cooresponding Character Page. It is on this page where users can view/filter/bookmark combos, as well as access the combo builder by clicking the large "+" button at the top of the combos list.

### Combo Display

A combo will be displayed in groups of three on either a character page or a bookmarked character page. The combo will show the cooresponding: inputs (through images), starter, hit type, and location. Additionally, there are four icons that can be clicked. The notes icon will open the cooresponding author notes. The play icon will open the cooresponding youtube video. The cogwheel icon will only appear if the logged in user uploaded the combo, and will redirect to cooresponding edit combo page. The bookmark icon will only show up if the user is logged in and will add or remove an icon from the cooresponding bookmarked combo list.

### Combo Filter

From the Character Page, a user can filter through combos based on important attributes such as: starter, location, hit type, and whether the combo requires meter

### Uploading a Combo

Once a user is signed in, they will be able to upload combos using the combo builder. Combos require inputs, relevant combo details, and a youtube ID to be uploaded. It is optional for the uploader to include "author notes" which may contain more information regarding the particular combo. An uploaded combo will be permanently bookmarked for the author unless it is deleted.

### Combo Builder

The combo builder creates digestible, easy to read combo notation through the use of input serialization. An input has a cooresponding image on a per game basis that displays combos in a similar fashion to how the official in-game training mode would notate character actions.

### Bookmarks

When a user uploads or bookmarks a combo, a cooresponding character will appear in the Bookmarks page. Clicking a character will take you to your personal list of uploaded/bookmarked combos for that particular character. It will appear and function exactly like the Character Page. A URL to your personal list can be sent to other users.

### Editing and Deleting a Combo

After clicking the cog icon for an authored combo, the user will be redirected to the Edit Combo Page. Information from the combo will be auto filled to their current values and can be edited by the user. On this page, the author may also click the "DELETE" button to delete their combo.

## Front-end Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the /showcase directory, run

### `npm install --prefix client`

Installs packages necessary for the build to function.

### `npm start --prefix client`

Runs the front-end on port http://localhost:4000.

## Back-end Setup

This project was built with with [Ruby](https://github.com/ruby).

## Installation

In the /server directory, run

### `bundle install`

Installs gems necessary for server to function.

### `rails db:create`
Runs migration files and builds schema for database

### `rails s`

Runs the server on port http://localhost:3000. Fetch data with the prefix /api.