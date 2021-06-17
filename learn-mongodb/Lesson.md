#### **Create Document (using shell commnad)**
* First Open the terminal and make sure to up and running mongo server `mongo`
* Create Document => `doc = {"_id": 20191157, "name" : "viraj", "status" : "single"}`
* Insert Document into DB => `db.user.insertOne(doc)` (user == name of database, if database doesnt exist, then automatically create new one as *user*)
* To view the database => `db.user.find().pretty();`

#### **Shell Command**
*Open terminal and run the command `mongo` before access following commands*

***Basic Commands***

* Show all database: `show dbs;`
* Navigate to the certain database: `use <name-of-the-database>`
* Get the name of current database: `db.getName();`
* Show all collections, inside the current database:`show collections;`
* Create new collection: `db.<name-of-the-collection>.insertOne({});`

***Query Commands***

* If we pass command as,
	(before working with certain database, you have to navigate to that database)
	* `db.user.find()`, then show all the data in the database
	* `db.user.find({"name" : "viraj"});`, then it shows only the relavant details matches with **"name"**
	* `db.user.find({"_id" : 1}, {"name" : 1});`, only show the **"name"** of the user
	* `db.user.find({"_id" : 1}, {"name" : 0});`, show except the **"name"** of the user
	* `db.user.find({}, {"name":1})`, show only the **"name"** of the users

	Lets use the prevously added document 'recipes.json'
	* `db.recipes.find({"title" : { $regex: /taco/i }}, { "title": 1});`

	Count the Number of Documents
	* `db.recipes.find().count()` : Return an integer of count

	Limiting Results
	* `db.recipes.find({}, {"title" : 1}).limit(3);` : output only 3 documents

	Sorting Results
	* `db.recipes.find({}, {"title" : 1}).sort({"title" : 1});` : Ascending order to title param
	* `db.recipes.find({}, {"title" : 1}).sort({"title" : -1});` : Ascending order to title param

	Skipping Results
	* `db.recipes.find({}, {"title" : 1}).sort({"title" : -1}).skip(1);` Skip the first element of the decending ordered list
	* `db.recipes.find({}, {"title" : 1}).skip(1);` : Skip the first element of the list of documents


	Less than ($lt) and Greater than ($gt)
	* Query for all recipes which are less than 30 cookning time
		* `db.recipes.find({"cook_time" : { $lt: 30 }}, {"title" : 1});`

	* Query for all recipes which are greater than 30 cookning time
		* `db.recipes.find({"cook_time" : { $gt: 30 }}, {"title" : 1});`

	* Query for combinationation of both greather than and less than
		* `db.recipes.find({"cook_time" : { $gt: 10}, "cook_time" : {$lt: 40}}, {"title" : 1});`

	Mulitiple Conditions ( $all and $in operators)
	* Filter the recipe that have both easy and mexican tags
		* `db.recipes.find({"tags" : {$all :  ["mexican", "easy"] }}, {"tags" : 1});`
	* Filter the recipe that have easy or mexican tags
		* `db.recipes.find({"tags" : {$in :  ["mexican", "easy"] }}, {"tags" : 1});`