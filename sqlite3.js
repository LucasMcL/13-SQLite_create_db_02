'use strict'

const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('business_records.sqlite')

// Create emloyees table
db.run(`Create table if not exists employees
	(id INTEGER PRIMARY KEY,
	 firstName TEXT,
	 lastName TEXT,
	 jobTitle TEXT,
	 address TEXT
	)`)

const data = require('./employees.json')

db.run()
