
//objects to traverse to

const object = { 
    submit: $('#submitButton'),
   comment: $('#commentInput'),
   userName: $('#userName'),
   replies: $('#replies'),
   editButton: $('#editButton'),
   deleteButton: $('#deleteButton'),
   doneButton: $('#done')
}


 



$('#replies').on('click',' #editButton', function () {

    let editButton1 = $(this).parents()[1]
    let editButton2 = $(editButton1).children()[3]
  

    $(editButton2).toggleClass('inputWrapper')
});

$('#replies').on('click', '#done', function(){
let done1 = $(this).parents()[1]
let done2 = $(done1).children()[3]
let done3 = $(done2).children()
console.log(done1); 
console.log(done2);
console.log(done3); 


let doneValue = $(done3).val()

let done4 = $(this).parents()[1];
console.log(done4);
let done5 = $(done4).children()[2];
console.log(done5);

$(done5).text(doneValue); 

});




//delegation and $(this).parents&children week5day4
$('#replies').on('click',' #deleteButton', function () {

    let deleteButton1 = $(this).parents()[3]
    $(deleteButton1).remove(); 


});



//comment pastes onto div element
//fix html statements 
object.submit.on('click' , function() {  
$('#replies').append(`
<div id="pfpandCommentWrapper"> 
    <div id="commentSectionContainer"> 
       <div id="avatarImage" class="overallComment"> </div>
        <div id="userNameandCommentWrapper"> 

        <div id="delete_edit_and_done_Buttons"> 
          <button id="deleteButton"class="overallComment"" type="submit"> Delete </button>
          <button id="editButton" class="overallComment" type="submit"> Edit </button> 
          <button type="submit" id="done" class="overallComment"> Done </button>
        </div>
           <div id="userNameSectionContainer" class="overallComment"> @ ${$('#userName').val()}</div>
           <div> ${$('#commentInput').val()} </div>
           <div id="inputWrapper" class="inputWrapper"> 
          <input id="editButtonFeature" input type="text" placeholder="edit your comment"/> 
        </div>
       </div>
    </div>    
</div>`)


});

