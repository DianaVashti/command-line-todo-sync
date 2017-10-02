const fs = require('fs');

const complete = (id) => {
  let data = fs.readFileSync('./tasks.json', 'utf8')
  let parsed = JSON.parse(data)

  for(let i=0; i<parsed.tasks.length; i++){
    if(parsed.tasks[i].id === parseInt(id)){
      console.log("completed item", id,":",parsed.tasks[i].item);
      parsed.tasks.splice(i,1)
      fs.writeFileSync('./tasks.json', JSON.stringify(parsed), 'utf8')
      return parsed
    }
  }
  console.log("No such task id found");
}

module.exports = complete
