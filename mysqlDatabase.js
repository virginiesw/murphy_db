// 1
const mysql = require('mysql')

// 2
const connection = mysql.createConnection({
  HOST: "us-cdbr-east-03.cleardb.com",
  USER: "be542df607f72a",
  PASSWORD: "85171675",
  DB: "heroku_24c0201cef08267"
})

// 3
function allMeals(callback) {
  const query = `
    SELECT * 
    FROM meals
  `
  connection.query(query, null, (error, results, fields) => {
    callback(error, results)
  })
}
exports.allMeals = allMeals


function createMeal(meal, callback) {
  // 1
  const query = `
    INSERT INTO meals (content, completed, date)
    VALUES (?, ?, ?)
  `

  // 2
  const params = [meal.content, meal.completed, meal.date]

  // 3
  connection.query(query, params, function (error, result) {
    callback(error, result.insertId)
  })
}
exports.createMeal = createMeal


  
function deleteMeal(mealId, callback) {
  
  //1
  let query = `
  DELETE FROM meals
  WHERE id = ?
  `
  
  //2
  let params = [mealId, callback]

  //3
  connection.query(query, params, (error, result) => {
    callback(error, result)
  })
}
exports.deleteMeal = deleteMeal





function updateMeal(id, data, callback) {

  let query = `
  UPDATE meals
  SET completed = ?
  WHERE id = ?
  `

  let params = [data.completed, id]

  //3
  connection.query(query, params, (error, result) => {
    callback(error, result)
  })

  
}
exports.updateMeal = updateMeal
