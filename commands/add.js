const fs = require('fs');

const add = (string) => {
  let entry = {
    item: string,
    id: null
  }

  let todo = {
    tasks: []
  }

  if(!fs.existsSync('./tasks.json')){
    console.log("creating file now...")
    entry.id = 1
    todo.tasks.push(entry)
    fs.writeFileSync('./tasks.json', JSON.stringify(todo), 'utf8')
    let data = fs.readFileSync('./tasks.json', 'utf8')
    console.log(string," has beed added to list with id: ", entry.id);
    return entry
  } else {
    let data = fs.readFileSync('./tasks.json', 'utf8')
    let parsed = JSON.parse(data)
    let lastId = parsed.tasks[parsed.tasks.length - 1].id
    entry.id = lastId+1
    parsed.tasks.push(entry)
    fs.writeFileSync('./tasks.json', JSON.stringify(parsed), 'utf8')
    console.log(string," has beed added to list with id: ", entry.id);
    return entry
  }
}

module.exports = add
