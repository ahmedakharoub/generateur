let btn=document.getElementById('btn')
let qts=document.getElementById('qts')
let quotes = [
"The moon stays bright when it doesn’t avoid the night",
"Discipline is the bridge between goals and accomplishment",
"When the need to succeed is as bad as the need to breathe, then you’ll be successful.",
"If you love life, don’t waste time, for time is what life is made up of",
"Depression is the result of over thinking. The mind creates problems that didn’t even exist",
"Do not let the behavior of others destroy your inner peace",
"Even if they ignore you now, they’ll need you later",
"I do not care how great you feel to me, if you act exactly the opposite"
]
btn.addEventListener('click',function(){
    let rand=Math.floor(Math.random()*7)
    qts.innerHTML=quotes[rand]
})