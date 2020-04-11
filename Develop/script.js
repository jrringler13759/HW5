function currentDay () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }
 
function getStoredInputs () {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
  }
  

function rowColor(){
    $("textarea").each(function(){
    var txtId = parseInt($(this).attr("id"));
    console.log(txtId);
    var hourId = moment().hours();
    console.log(hourId);
    if (txtId === hourId){
      $(this).addClass("present");
    } if (txtId > hourId){
      $(this).addClass("future");
    } if (txtId < hourId) {
      $(this).addClass("past");
    }
  });
  }
 
$(".saveBtn").on("click", function(){
    var txtArea = $(this).parent().siblings("textarea");
    //capture the user input
    var userInput = txtArea.val();
    //capture time related to row
    var time = txtArea.attr("id");
    //store both to local storage
    localStorage.setItem(time, userInput);
  });
  
  
  getStoredInputs();
  currentDay();
  setInterval(currentDay, 1000);
  setInterval(rowColor,1000*60*60);


  
  
  