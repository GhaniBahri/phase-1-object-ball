// Step 1
function gameObject(){
    const gameobj ={
        home:{
            teamName: "Brooklyn Nets",
            colors:["Black", "White"],
            players: {
                "Alan Anderson":{
                    Number:0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    SlamDunk:1
                },
                "Reggie Evans":{
                    Number:30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    SlamDunk:7,
                },
                "Brook Lopez":{
                    Number:11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    SlamDunk:15
                },
                "Mason Plumlee":{
                    Number:1,
                    Shoe:19,
                    Points:26,
                    Rebounds:12,
                    Assists:6,
                    Steals:3,
                    Blocks:8,
                    SlamDunk:5
                },
                "Jason Terry":{
                    Number:31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assists:2,
                    Steals:4,
                    Blocks:11,
                    SlamDunk:1
                },
                
            }
        },
        away:{
            teamName: "Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players: {
                "Jeff Adrien":{
                    Number:4,
                    Shoe:18,
                    Points:10,
                    Rebounds:1,
                    Assists:1,
                    Steals:2,
                    Blocks:7,
                    SlamDunk:2
                },
                "Bismak Biyombo":{
                    Number:0,
                    Shoe:16,
                    Points:12,
                    Rebounds:4,
                    Assists:7,
                    Steals:7,
                    Blocks:15,
                    SlamDunk:10,
                },
                "DeSagna Diop":{
                    Number:2,
                    Shoe:14,
                    Points:24,
                    Rebounds:12,
                    Assists:12,
                    Steals:4,
                    Blocks:5,
                    SlamDunk:5
                },
                "Ben Gordon":{
                    Number:8,
                    Shoe:15,
                    Points:33,
                    Rebounds:3,
                    Assists:2,
                    Steals:1,
                    Blocks:1,
                    SlamDunk:0
                },
                "Brendan Haywood":{
                    Number:33,
                    Shoe:15,
                    Points:6,
                    Rebounds:12,
                    Assists:12,
                    Steals:22,
                    Blocks:5,
                    SlamDunk:12
                },
                
            }
        }
    }
    return gameobj
}
// Step 2
function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
//functions building
function numPointsScored(name){
    let obj = gameObject()
    // debugger
    for (item in obj){/* debugger */
        for (player in obj[item].players){ 
            if (player === name){/* debugger */
                return obj[item]["players"][player].Points
            }
        }
    }
    return 'not found'
}
function shoeSize(name){
    let obj = gameObject()
    // debugger
    for (item in obj){/* debugger */
        for (player in obj[item].players){ 
            if (player.toLowerCase() === name.toLowerCase()){/* debugger */
                return obj[item]["players"][player].Shoe
            }
        }
    }
    return 'not found'
}
function teamColors(name){
    let obj = gameObject()
    // debugger
    for (item in obj){/* debugger */
        if (obj[item].teamName.toLowerCase() === name.toLowerCase()){/* debugger */
            return obj[item].colors
        }
    }
    return 'not found'
}
function teamNames(){
    let obj = gameObject()
    const names= []
    for(item in obj){
        names.push(obj[item].teamName)
    }
    return names
}
function playerNumbers(team){
    let obj = gameObject()
    const players= []
    for(item in obj){
        for (player in obj[item].players){
            players.push(obj[item].players[player].Number)
        }
    }
    return players
}
function playerStats(name){
    let obj = gameObject()
    for (item in obj){/* debugger */
        for (player in obj[item].players){ 
            if (player.toLowerCase() === name.toLowerCase()){/* debugger */
                return obj[item]["players"][player]
            }
        }
    }
}
function bigShoeRebounds(){
    let obj = gameObject()
    let big={Shoe: 0}
    for (item in obj){/* debugger */
        for (player in obj[item].players){ 
            if (obj[item]["players"][player].Shoe > big.Shoe){/* debugger */
                big = {player,...obj[item]["players"][player]}
            }
        }
    }
    return big.Rebounds
}
function mostPointsScored(){
    let obj = gameObject()
    let big={Points: 0}
    for (item in obj){/* debugger */
        for (player in obj[item].players){ 
            if (obj[item]["players"][player].Points > big.Points){/* debugger */
                big = {player,...obj[item]["players"][player]}
            }
        }
    }
    
    return  {player} = big
}
function winningTeam(){
    let obj = gameObject()
    let sum={home:0, away:0}
    for (item in obj){/* debugger */
        for (player in obj[item].players){ 
            sum[item] += obj[item].players[player].Points 
        }
        obj[item].points = sum[item]
    }
    
    return  obj.away.points>obj.home.points? obj.away.teamName : obj.home.teamName 
}
function playerWithLongestName(){
    let obj = gameObject()
    let longest={name:"", length:0} 
    for (item in obj){/* debugger */
        for (player in obj[item].players){ 
            if (player.trim().length > longest.length){/* debugger */
                longest.name = player
                longest.length= player.trim().length
            }
        }
    }
    
    return  longest
}
function doesLongNameStealATon(){
    let obj = gameObject()
    let stealer={name:"", steals:0} 
    for (item in obj){/* debugger */
        for (player in obj[item].players){ 
            if (obj[item].players[player].Steals > stealer.steals){/* debugger */
                stealer.name = player
                stealer.steals= obj[item].players[player].Steals
            }
        }
    }
    const longest = playerWithLongestName()
    return  longest.name === stealer.name
}