class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.splice(1)
  }
  static sanitize(string){
    let str=[];
    for(let val of [...string])
    if(val){
      
    }
  }
  static titleize(string){
    let str=string.splice(" ");
    for(let val of str)
    if(val == "a" || val == "an" || val == "but" || val == "of" || val == "and" || val == "for" || val == "at" || val == "by" || val == "from"){
      val.toUpperCase();
    }
    return str;
  }
}