table with 3 columns and 9 hour with a slot per each hour

calendar at the top

times from 9 - 5 that change color as time changes
    change the class (for color) as the time changes


the user can type in the textarea and then click the 
save button and it saves on the screen and in local storage
    set that text area to that text and save in local storage


you can select and change the text in an hour slot


get moment().hours()
when the hour passes the color changes to gray
    store hour in a var
    array of text areas $("textarea")
    .each()
    
        $(this).attr("id")
         (captures text area currently on)
use parseInt to turn id into integer before compasiron

compare hours to textarea id

set class based on outcome of comparison


when it is the hour it is red
when the hour is still to come it is green

