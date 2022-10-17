const letsRun = () => {
    console.log("Lets go")
};

//letsRun();

//Immediately Invoked Function Expression
//Vor der IIFE benötigen wir ein Semikolon https://262.ecma-international.org/5.1/#sec-7.9

(() => {
    console.log("Lets immediately go");
    const testVar = 24;
})();

const testVar = 25;

((runnersName) => {
    console.log(`Lets go ${runnersName}`);
})("Bolt");


/* *
 * Syntax ermöglicht bei klassischer Funktionsschreibweise die () innerhalb 
 * der ersten Klammers zu packen -> (function(){}())
 */
(function () {
    console.log("Lets go classical runner");
})();

console.log(testVar)

// Module Pattern

const myModule = (()=> {
    const secretName = "Santa Claus"
    
    const returnName = () => {
        return secretName
    }
    
    return {
        version: 1.0,
        author: "Ferdi Hoske",
        returnName: returnName
    }
})()

console.log(myModule.returnName())