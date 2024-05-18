// waits for the DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {

    // search bar
    document.querySelector("#categorySearchBar").addEventListener('input',(input) =>{
        const x = input.target.value.toLowerCase();
        for (let i=0;i<allEntries.length;i++){
            let entry = allEntries[i];
            if (!entry.innerHTML.toLowerCase().includes(x)){
                entry.style.visibility='hidden';
                entry.style.position = 'absolute';
            }
            
            // this looks redundant, but the element will not reappear otherwise when search criteria is removed.
            else {
                entry.style.visibility='visible';
                entry.style.position = 'relative';
            }
        }
    });
    let selectedButton = 
    
    // button color swapping
    const buttons = document.querySelectorAll('.toggle-button');
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle-button')) {
            buttons.forEach(button => button.classList.remove('selected-button'));  // Remove 'selected-button' from all buttons
            e.target.classList.add('selected-button');                              // Add 'selected-button' to the clicked button
        }
    });
}); 

// here's the part where id send da shit to da sever
async function accountSubmitter(){
    const name = document.querySelector("#nameInput");
    const email = document.querySelector("#emailInput"); 
}
