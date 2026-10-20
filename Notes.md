# Material UI:

## Typography:

- Typography is used to add text on the webpage.
- Different type of text based tags like Heding tags, Paragraph, etc.

  ### Properties
  - **Variant**: Used to define html tag

## Button:

- Used to add Button into the webpage.
- Different pre-defined styles available

  ### Properties
  - **variant**: Styles like `outlined`, `contained`, etc.
  - **Additional properties**: `onClick`, `type`, `sx`, etc.

## Textfield:

- Used in form to add input
- Has more props like styles as compared to html`<input/>`

  ### Properties
  - **variant**: Styles like `styles`, `outlined`,`filled` etc.
  - **Additional properties**: `onChange`, `type`, `sx`, etc.

## Checkbox:

- Used in form to check options
- Has more props like styles as compared to html`<input/>`

  ### Properties
  - **defaultChecked**: For By Default Checked
  - **Additional properties**: `onChange`, `disabled`, `sx`, etc.

## Select:

- Used as dropdowns
- Uses a Menu List to select a dropdown

  ### Properties
  - **defaultValue**: For By Default Selected Item.
  - **Additional properties**: `onChange`, `disabled`, `sx`, etc.

## AppBar:

- App Bar displays content on top of the screen.
- It is used to build navigation bar with Material UI

  ### Properties
  - **position**: For Navbar Posotioning.
  - **Additional properties**: `color`, `sx`, etc.

## Toolbar:

- Toolbar provides a structure for adding elements.

  ### Properties
  - **flex position**: For display.
  - **Additional properties**: `color`, `sx`, etc.

## Menu:

- Menu is used to display list of choices to select
- It has MenuItem component to add list item.

  ### Properties
  - **anchorEl**: to set ahcor position(target tag)
  - **Additional properties**: `open`,`onClose`, `sx`, etc.

## Tabs:

- Help to switch between different views and navigations.
- The Tabs is a container of child `<Tab/>` Component

  ### Properties
  - **value, onChange**: to set active Tab
  - **Additional properties**:Like `indicator Color`,`textColor`, etc.

## Card:

- A surface that displays content and actions on single topic.
- can be images, Text, Headings, Actions like a Blog post.
- Have multiple components to complete a Card.

  ### Properties
  - **maxWidth**: To define maximum width
  - **Additional properties**:Like `sx`,`classes`, etc.

## Dialog:

- Dialog is a popup window which informs something to the user.
- Has backdrop freture which blurs the background when it's open

  ### Properties
  - **open, onClose**: To open and close dialog
  - **Additional properties**:Like `hideBackdrop`,`transition`, etc.

## Modal:

- MOdal is a popup window that can be shown to the user
- Has backdrop freture which blurs the background when it's open

  ### Properties
  - **open, onClose**: To open and close dialog
  - **Additional properties**:Like `hideBackdrop`,`transition`, etc.

- The Dialog box covers everything that the modal has but they have different use-cases
  - Dialog: To get a confirmation message or a permission which can be skipped
  - Modal: The modal requires an action to be completed and it can't be skipped

## List:

- Group of elements
- have child elemens lile `<ListItem/>` to add items to the list

  ### Properties
  - **divider**: to add a horizontal line
  - **Additional Properties**: like `component`, `sx` etc.

## AutoComplete:

- Dropdown which works on search feature
- Options ans textfield needs to be provided to handle search operations

  ### Properties
  - **options, renderInput**: to add options in list, to handle search input.
  - **Additional Properties**: like , `sx` etc.

## Grid System:

- Grid System
- Container and Items
- Breakpoints

  ### Properties
  - **options, renderInput**: to add options in list, to handle search input.
  - **Additional Properties**: like , `sx` etc.

## ImageList:

- Used to display collection of images in a group
- Have child components to add layout

  ### Properties
  - **variant, cols**: to add styles and columnsin group
  - **Additional properties**:Like `gap`,`sx`, etc.

## DataGrid:

- Used to add Tables with bunch of advance properties to add
- Fully customizable

  ### Properties
  - **rows, cols**: to add rows and columns fields

## Icons:

- Used to display SVG icon into the webpage
- can have iconButton for Button effect inside icons.

  ### Properties
  - **color, size**: to add color and size.

## IconButton:

- Used for Icons to add a button effect in icons
- Support all button properties

  ### Properties
  - **onClick, Color**: to add events and color

## ThemeProvider:

- Used to modify current Theme
- Child components needs to be wrapped inside it
- You can access current theme by useTheme()

  ### Properties
  - **theme**: to refer modified theme
