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
      newstr.push(str[0].charAt(0).toUpperCase()+str[0].slice(1));
    for(let i=1; i<str.length;i++){
    if(str[i] == "the" ||newstr[i] == "a" ||newstr[i]  == "an" || newstr[i]  == "but" || newstr[i]  == "of" ||newstr[i]  == "and" || newstr[i] == "for" || newstr[i]  == "at" || newstr[i]  == "by" || newstr[i]  == "from"){
      newstr.push .toUpperCase();
    }
    }
    return newstr;
  }
}