export default function collapseMenu(){
    const button = document.getElementById('collapseMenu');
    console.log(button)

    button.addEventListener('click', () =>{
        if (button.classList.contains('fa-chevron-up')){
            button.classList.remove('fa-chevron-up');
            button.classList.add('fa-chevron-down')
        }else if(button.classList.contains('fa-chevron-down')){
            button.classList.remove('fa-chevron-down');
            button.classList.add('fa-chevron-up')
        }

    })
}