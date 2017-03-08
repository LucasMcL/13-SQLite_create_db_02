'use strict'

const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('business_records.sqlite')

// Create emloyees table
const createTable = function() {
	db.run(`Create table if not exists employees
		(id INTEGER PRIMARY KEY,
		 firstName TEXT,
		 lastName TEXT,
		 jobTitle TEXT,
		 address TEXT
		)`)
}
// createTable()

const populateTable = function() {
	// Get employees data from .json file
	const {employees} = require('./employees.json')

	employees.forEach(employee => {
		const {id, firstName, lastName, jobTitle, address} = employee
		db.run(`INSERT INTO employees (id, firstName, lastName, jobTitle, address) VALUES
						(${id}, "${firstName}", "${lastName}", "${jobTitle}", "${address}")`, err => {if(err) console.error(err)})
	})
}
// populateTable()

const logEmployeeRecords = function() {
	db.all(`SELECT * FROM employees`, (err, data) => {
		if(err) console.error(err)
		data.forEach(obj => console.log(obj))
	})
}
// logEmployeeRecords()

const logEmployeeJobTitles = function() {
	db.all(`SELECT jobTitle FROM employees`, (err, data) => {
		if(err) console.error(err)
		data.forEach(obj => console.log(obj))
	})
}
// logEmployeeJobTitles()

const logEmployeeAddresses = function() {
	db.all(`SELECT firstName, lastName, address FROM employees`, (err, data) => {
		if(err) console.error(err)
		data.forEach(obj => console.log(obj))
	})
}
// logEmployeeAddresses()









