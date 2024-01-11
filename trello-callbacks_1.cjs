/*
	Each function that you write must take at least 2s to execute using the setTimeout function like so:

	function() {
		setTimeout(() => {
			// Your code here
		}, 2 * 1000);
	}

    OPTIONAL: You may randomize the time to make things more interesting.
*/

/*
    How the given data is associated:
        Boards have ids and names
        Lists belong to boards
        Cards belong to lists
*/

/*
    Folder structure:
        ├── callback1.cjs
        ├── callback2.cjs
        ├── callback3.cjs
        ├── callback4.cjs
        ├── callback5.cjs
        ├── callback6.cjs
        └── test
            ├── testCallback1.cjs
            ├── testCallback2.cjs
            ├── testCallback3.cjs
            ├── testCallback4.cjs
            ├── testCallback5.cjs
            └── testCallback6.cjs

*/

/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/

/* 
	Problem 4: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

/* 
	Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/

/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/