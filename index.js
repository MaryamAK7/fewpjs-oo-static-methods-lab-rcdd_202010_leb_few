class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let str=string.splice(" ");
    for(let val of str){
      val = val.charAt(0).toUpperCase()+val.slice(1);
    if(val == "the" ||val == "a" || val == "an" || val == "but" || val == "of" || val == "and" || val == "for" || val == "at" || val == "by" || val == "from"){
      val.toUpperCase();
    }
    }
    return str;
  }
}