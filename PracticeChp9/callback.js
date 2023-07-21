
function person(name, callback)
{
    console.log(`My name is ${name}`);
    callback(name);
}

function personAge(name)
{
    console.log(`My Age is 25: ${name}`);
}

person("Atif",personAge);