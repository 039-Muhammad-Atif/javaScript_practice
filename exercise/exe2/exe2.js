let runAgain = true;
while(runAgain)
{
    let user = prompt("Enter S,W or G :");
    user = user.toUpperCase();
    
    if(user !== "S" && user !== "W" && user !== "G")
    {
        alert("You have Entered invalid Character. Please Try Again");
        console.error("You have Entered invalid Character");
    }
    else
    {
        let cpuI = Math.floor(Math.random()*(3));
        let cpu = ["S", "W", "G"][cpuI];
        
        const match = (cpu, user)=>
        {
            if(cpu === user)
            {
                return "Nobody"
            }
            else if(cpu === "S" && user === "W")
            {
                return "cpu"
            }
            else if(cpu === "S" && user === "G")
            {
                return "user"
            }
            else if(cpu === "W" && user === "S")
            {
                return "user"
            }
            else if(cpu === "W" && user === "G")
            {
                return "cpu"
            }
            else if(cpu === "G" && user === "W")
            {
                return "user"
            }
            else if(cpu === "G" && user === "S")
            {
                return "cpu"
            }
        }
        let result = match(cpu,user);
        console.log(`User is: ${user} \nCPU IS: ${cpu}  \nThe Winer is : ${result}`)
        document.write(`USER : ${user} <br> CPU : ${cpu} <br> The Winer is : ${result.toUpperCase()}`);

        if(result === "user")
        {
            document.body.style.background = 'green';
        }
        else if(result === "cpu")
        {
            document.body.style.background = 'red';
        }
        else
            document.body.style.background = 'yellow';
    alert("You have Done")
    }

    runAgain = confirm("Do you want to run Again")
}