# theGame

### Description

This project focused on creating a website linked to a database. The website had to be a type of store, so I created mine with an arcade theme. 

### Example

This is an example from the server.js file. It's for the index route.

```
app.get('/items', (req, res) => {
    // res.render('Index', {items: items})
   Item.find({}, (error, allItems) => {
    res.render('Index', {
        items: allItems
    })
   })
})
```

### List of Features 

* Access store welcome page
* Access store index page to view items
* Select individual item and see show page
* Purchase item 

### Routes
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /items/ | index of products to buy |
GET | /items/new | create a new product |
DELETE | /items/:id | delete a product |
PUT | /items/:id | a put request allows update |
GET | /items/:id/edit | page to edit item |
POST | /items/:id | initiates a post form request |
GET | /items/:id | show the individual item |

### List of Technologies Used
* Javascript
* CSS

### Demo Video

### Future Plans 

Due to time constraints I wasn't able to create the project I first had in mind. While working on this in the future I would love to add a game to the welcome page of the store's website. However many points the user wins will then be the amount of store credit they'd had to shop!