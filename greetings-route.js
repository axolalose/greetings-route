module.exports = function() {
  var counter = 0;
  var result = "";
  var greetedName = {};
  let string = "";
  var list=[];

  function greet(name, lang) {
    var matches = name.match(/[a-zA-Z]+/g, "");
    var sameName = name.toLowerCase();
    var nameName = name.toUpperCase().charAt(0) + name.slice(1);

    if (matches !== null) {
      if (greetedName[sameName] === undefined) {
        greetedName[sameName] = 0;
      }
      console.log(greetedName);

      if (!lang || !name) {
        return "name or lang not provided";
      } else {
        counter++;
      }

      if (lang === "Xhosa") {
        string = "Molo, " + nameName;
      }

      if (lang === "English") {
        string = "Hello, " + nameName;
      }
      if (lang === "Afrikaans") {
        string = "Hallo, " + nameName;
      }
    } else {
      string = " Please enter the name ";
    }
    list.push(string)
    console.log(string)
  }

  function getName() {
    var x = greetedName;
    return x;
  }

  function count() {
    var a = Object.keys(greetedName);
    return a.length;
  }

  function getString() {
    return string;
  }

  function nameGet(){
    return list
  }

  return {
    greet,
    getName,
    count,
    getString,
    nameGet
  };
};
