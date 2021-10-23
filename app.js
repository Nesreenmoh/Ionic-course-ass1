const courseName= document.querySelector('#course-name');
const courseRating= document.querySelector('#course-rating');


const addBtn= document.querySelector('#btn-add');
const coursesList = document.querySelector('#courses-list');


addBtn.addEventListener('click',() =>{
 const enteredCourse = courseName.value;
 const enteredRating = courseRating.value;
 const newItem = document.createElement('ion-item');
 
 if(enteredCourse.trim()<=0 || enteredRating.trim()<=0 || enteredRating<=0){
   const alert=  document.createElement('ion-alert');
   alert.message= 'Please Enter Course Name and Rating!',
   alert.header='Error!',
    alert.buttons=['OK']
    document.body.appendChild(alert);
    return alert.present();
     
 }
newItem.textContent = enteredCourse + ' - '+enteredRating+ '/5';
newItem.classList.add("bold-class");
coursesList.appendChild(newItem);
clear();
})


   const clear =() => {
    courseName.value='';
    courseRating.value='';
   }