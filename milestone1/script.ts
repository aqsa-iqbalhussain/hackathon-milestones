const toggleButtons = document.getElementById('toggle-skills') as HTMLButtonElement;
const skill = document.getElementById('skills') as HTMLElement;
toggleButtons.addEventListener('click', () =>{
    if(skill.style.display == 'none'){
        skill.style.display = 'block';
    }else{
        skill.style.display = 'none';
    
}});