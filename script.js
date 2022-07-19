var today = moment();
$("#currentDay").text(today.format("dddd MMM Do, YYYY"));

var currentHour = moment().format("HH")

$(".description").each(function(){
var id = $(this).attr("id").split("-")[1]
if(currentHour>id){
    $(this).addClass("past")
}
else if(currentHour==id){
    $(this).addClass("present")
}
else{
    $(this).addClass("future")
}
 addEventListener

localStorage.getItem("btn")
})