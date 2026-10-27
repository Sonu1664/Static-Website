// ============================================
// SKILLPROBE — QUESTIONS BANK
// Phase-2: Dynamic Content (JS)
// ============================================

const QUESTION_BANK = {
  webdev: [
    {
      q: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<style>", "<script>", "<link>"],
      answer: 1, cat: "Web Development"
    },
    {
      q: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      answer: 1, cat: "Web Development"
    },
    {
      q: "Which CSS property is used to change the text color of an element?",
      options: ["fgcolor", "text-color", "color", "font-color"],
      answer: 2, cat: "Web Development"
    },
    {
      q: "Which JavaScript method is used to select an HTML element by its ID?",
      options: ["document.getElement()", "document.querySelector('#id')", "document.getElementById()", "document.findById()"],
      answer: 2, cat: "Web Development"
    },
    {
      q: "What is the correct syntax to add an event listener in JavaScript?",
      options: [
        "element.addEvent('click', fn)",
        "element.addEventListener('click', fn)",
        "element.on('click', fn)",
        "element.listen('click', fn)"
      ],
      answer: 1, cat: "Web Development"
    },
    {
      q: "Which HTML attribute is used to define inline styles?",
      options: ["font", "styles", "class", "style"],
      answer: 3, cat: "Web Development"
    },
    {
      q: "What does the CSS 'flexbox' layout model primarily help with?",
      options: ["3D transformations", "Animating elements", "One-dimensional layouts", "Database connections"],
      answer: 2, cat: "Web Development"
    },
    {
      q: "Which method converts a JavaScript object to a JSON string?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toString()"],
      answer: 1, cat: "Web Development"
    },
    {
      q: "What is the purpose of the 'alt' attribute in an <img> tag?",
      options: ["Sets image size", "Provides alternative text for accessibility", "Changes image color", "Links to another image"],
      answer: 1, cat: "Web Development"
    },
    {
      q: "Which of the following is NOT a valid way to declare a JavaScript variable?",
      options: ["var x = 5", "let x = 5", "const x = 5", "int x = 5"],
      answer: 3, cat: "Web Development"
    },
    {
      q: "What does the <head> tag in HTML contain?",
      options: ["Visible page content", "Metadata, links, title", "Navigation menus", "Footer information"],
      answer: 1, cat: "Web Development"
    },
    {
      q: "Which CSS unit is relative to the root element's font size?",
      options: ["em", "px", "rem", "vh"],
      answer: 2, cat: "Web Development"
    },
    {
      q: "What is the purpose of a 'media query' in CSS?",
      options: ["Play media files", "Apply styles based on screen size", "Fetch data from server", "Add animations"],
      answer: 1, cat: "Web Development"
    },
    {
      q: "Which tag is used for the largest heading in HTML?",
      options: ["<h6>", "<header>", "<h1>", "<heading>"],
      answer: 2, cat: "Web Development"
    },
    {
      q: "What does DOM stand for in JavaScript?",
      options: ["Document Object Model", "Data Object Management", "Design Object Method", "Document Orientation Module"],
      answer: 0, cat: "Web Development"
    }
  ],

  python: [
    {
      q: "What is the output of: print(type([]))?",
      options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'dict'>"],
      answer: 1, cat: "Python Programming"
    },
    {
      q: "Which keyword is used to define a function in Python?",
      options: ["function", "define", "def", "func"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "What is the correct file extension for Python files?",
      options: [".pyth", ".pt", ".py", ".pyt"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "How do you start a comment in Python?",
      options: ["//", "/*", "#", "--"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "Which of the following is a mutable data type in Python?",
      options: ["int", "string", "tuple", "list"],
      answer: 3, cat: "Python Programming"
    },
    {
      q: "What does the len() function do in Python?",
      options: ["Returns the largest item", "Returns the number of items", "Converts to string", "Counts only integers"],
      answer: 1, cat: "Python Programming"
    },
    {
      q: "What will print(2 ** 3) output?",
      options: ["6", "23", "8", "Error"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "Which method removes and returns the last item from a list?",
      options: ["remove()", "delete()", "pop()", "discard()"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "What is the correct syntax for an if-else in Python?",
      options: [
        "if (x > 0) { } else { }",
        "if x > 0: ... else: ...",
        "if x > 0 then ... else ...",
        "if x > 0 | else ..."
      ],
      answer: 1, cat: "Python Programming"
    },
    {
      q: "Which Python keyword is used for exception handling?",
      options: ["catch", "error", "except", "handle"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "What does 'self' refer to in a Python class?",
      options: ["The parent class", "The current instance of the class", "A static variable", "The module itself"],
      answer: 1, cat: "Python Programming"
    },
    {
      q: "Which built-in function converts a string to an integer?",
      options: ["str()", "float()", "int()", "num()"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "What does the 'import' keyword do in Python?",
      options: ["Creates a new class", "Exports functions", "Loads external modules", "Declares global variables"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "Which of these creates an empty dictionary in Python?",
      options: ["[]", "()", "{}", "set()"],
      answer: 2, cat: "Python Programming"
    },
    {
      q: "What is the output of: print('Hello'[1])?",
      options: ["H", "e", "He", "Error"],
      answer: 1, cat: "Python Programming"
    }
  ],

  aptitude: [
    {
      q: "What is 15% of 200?",
      options: ["20", "25", "30", "35"],
      answer: 2, cat: "Quantitative Aptitude"
    },
    {
      q: "If a train travels 240 km in 4 hours, what is its speed?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "What is the next number in the series: 2, 4, 8, 16, __?",
      options: ["24", "32", "28", "20"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "A shopkeeper sells an item at ₹120 which cost ₹100. What is the profit %?",
      options: ["10%", "15%", "20%", "25%"],
      answer: 2, cat: "Quantitative Aptitude"
    },
    {
      q: "If 6 workers can do a job in 8 days, how many days will 4 workers take?",
      options: ["10", "12", "14", "16"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "What is the LCM of 12 and 18?",
      options: ["24", "36", "48", "72"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "Simplify: (25 × 4) ÷ (5 × 2)",
      options: ["5", "10", "15", "20"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "A car covers 360 km in 6 hours. How long will it take to cover 540 km at the same speed?",
      options: ["7 hours", "8 hours", "9 hours", "10 hours"],
      answer: 2, cat: "Quantitative Aptitude"
    },
    {
      q: "What is the square root of 144?",
      options: ["11", "12", "13", "14"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "If today is Monday, what day will it be after 100 days?",
      options: ["Sunday", "Monday", "Wednesday", "Tuesday"],
      answer: 2, cat: "Quantitative Aptitude"
    },
    {
      q: "What percentage is 45 of 180?",
      options: ["20%", "25%", "30%", "35%"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "The average of 5 numbers is 40. If one number is removed, the average becomes 35. What was the removed number?",
      options: ["55", "60", "65", "70"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "Find the missing term: 1, 4, 9, 16, 25, __",
      options: ["30", "36", "42", "49"],
      answer: 1, cat: "Quantitative Aptitude"
    },
    {
      q: "What is 20% of 350?",
      options: ["60", "65", "70", "75"],
      answer: 2, cat: "Quantitative Aptitude"
    },
    {
      q: "If 3x + 7 = 22, what is x?",
      options: ["3", "4", "5", "6"],
      answer: 2, cat: "Quantitative Aptitude"
    }
  ],

  dbms: [
    {
      q: "What does SQL stand for?",
      options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "Sequential Query Layer"],
      answer: 0, cat: "Database & SQL"
    },
    {
      q: "Which SQL command is used to retrieve data from a database?",
      options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
      answer: 2, cat: "Database & SQL"
    },
    {
      q: "Which keyword is used to filter records in SQL?",
      options: ["HAVING", "WHERE", "FILTER", "MATCH"],
      answer: 1, cat: "Database & SQL"
    },
    {
      q: "What is a PRIMARY KEY?",
      options: [
        "A key used for encryption",
        "A column that uniquely identifies each row",
        "The first column in a table",
        "A key that can be NULL"
      ],
      answer: 1, cat: "Database & SQL"
    },
    {
      q: "Which SQL statement is used to delete all records from a table without deleting the table?",
      options: ["DROP TABLE", "DELETE FROM", "TRUNCATE", "REMOVE ALL"],
      answer: 2, cat: "Database & SQL"
    },
    {
      q: "What does DBMS stand for?",
      options: ["Data Backup Management System", "Database Management System", "Digital Binary Management Software", "Data Business Module System"],
      answer: 1, cat: "Database & SQL"
    },
    {
      q: "Which JOIN returns all rows from both tables, with NULLs where no match?",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
      answer: 3, cat: "Database & SQL"
    },
    {
      q: "Which SQL function counts the number of rows?",
      options: ["SUM()", "TOTAL()", "COUNT()", "NUM()"],
      answer: 2, cat: "Database & SQL"
    },
    {
      q: "What is normalization in database design?",
      options: [
        "Increasing database size",
        "Organizing data to reduce redundancy",
        "Backing up the database",
        "Adding indexes to tables"
      ],
      answer: 1, cat: "Database & SQL"
    },
    {
      q: "Which command is used to add a new row to a table?",
      options: ["ADD", "INSERT INTO", "UPDATE", "APPEND"],
      answer: 1, cat: "Database & SQL"
    },
    {
      q: "What is a FOREIGN KEY?",
      options: [
        "A key from another country's database",
        "A column that references a PRIMARY KEY in another table",
        "A key used for encryption",
        "The second column of any table"
      ],
      answer: 1, cat: "Database & SQL"
    },
    {
      q: "Which clause is used with aggregate functions to filter groups?",
      options: ["WHERE", "FILTER", "HAVING", "GROUP FILTER"],
      answer: 2, cat: "Database & SQL"
    },
    {
      q: "What does the ORDER BY clause do?",
      options: ["Filters records", "Sorts the result set", "Groups records", "Joins tables"],
      answer: 1, cat: "Database & SQL"
    },
    {
      q: "Which SQL command modifies existing records in a table?",
      options: ["MODIFY", "ALTER", "UPDATE", "CHANGE"],
      answer: 2, cat: "Database & SQL"
    },
    {
      q: "What is an INDEX in a database?",
      options: [
        "A list of database users",
        "A data structure that improves query speed",
        "A type of JOIN",
        "A backup of the database"
      ],
      answer: 1, cat: "Database & SQL"
    }
  ]
};

// Build combined 'all' pool
QUESTION_BANK.all = [
  ...QUESTION_BANK.webdev,
  ...QUESTION_BANK.python,
  ...QUESTION_BANK.aptitude,
  ...QUESTION_BANK.dbms
];

// Shuffle utility
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQuestions(category, count) {
  const pool = QUESTION_BANK[category] || QUESTION_BANK.all;
  return shuffleArray(pool).slice(0, Math.min(count, pool.length));
}
