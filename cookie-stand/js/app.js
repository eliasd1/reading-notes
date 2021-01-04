var seattle = {
    minCust: 23,
    maxCust: 65,
    avgPerCust:6.3,
    randomNum: function(){
        min = Math.ceil(this.minCust); 
        max = Math.floor(this.maxCust); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },
    simulatedAmount: function(){
        this.results = []
        for(let i = 6; i< 20; i++){
            this.results.push({
                time: function(){
                    if(i === 12){
                        return i + "pm"
                    } else if(i < 13){
                        return i + "am"
                    } else{
                        return (i-12) + "pm"
                    }
                }(),
                amount: Math.ceil(this.avgPerCust * this.randomNum())
            })
        }
    },
    results: []
}
var body = document.querySelector("body")
var ul = document.createElement("ul");
body.appendChild(ul)
seattle.simulatedAmount();

for(let i = 0; i<seattle.results.length; i++){
    var li = document.createElement("li");
    li.textContent = seattle.results[i].time + ": " + seattle.results[i].amount + " cookies";
    ul.appendChild(li);
}