export class Player {
  constructor(name, level) {
   this.name = String (name)
   this.level = Number (level)
  }
  info(){
    return console.log(`${this.name} has reached Level ${this.level}!`)
  }

  levelUp(){
  this.level++ 
  return this.level
  }
  
  }


