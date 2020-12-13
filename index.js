class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let str=string.split(" ");
    let newstr= []
    for(let i=0; i<str.length;i++){
      newstr.push(str[i].charAt(0).toUpperCase()+val.slice(1));
    if(newstr[i] == "the" ||newstr[i] == "a" ||newstr[i]  == "an" || newstr[i]  == "but" || newstr[i]  == "of" ||newstr[i]  == "and" || newstr[i] == "for" || newstr[i]  == "at" || newstr[i]  == "by" || newstr[i]  == "from"){
      newstr[i] .toUpperCase();
    }
    }
    return newstr;
  }
}