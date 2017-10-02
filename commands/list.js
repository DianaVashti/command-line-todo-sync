const fs = require('fs');
const Table = require('easy-table')

const list = () => {

  var t = new Table

  let data = fs.readFileSync('./tasks.json', 'utf8')
  let parsed = JSON.parse(data)
  let myList = parsed.tasks

  myList.forEach(function(item) {
    t.cell('id', item.id)
    t.cell('task', item.item)
    t.newRow()
  })

  console.log(t.toString())
  return parsed
}

module.exports = list
