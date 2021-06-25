export default function collapsedMenu(){
    const button = document.getElementById('collapseMenu');
    const tracker = document.getElementById('tracker-items');

    button.addEventListener('click', () =>{
        if (button.classList.contains('fa-chevron-up')){
            button.classList.remove('fa-chevron-up');
            button.classList.add('fa-chevron-down')
            tracker.classList.add('tracker-info__items--closed')
        }else if(button.classList.contains('fa-chevron-down')){
            button.classList.remove('fa-chevron-down');
            button.classList.add('fa-chevron-up')
            tracker.classList.remove('tracker-info__items--closed')
        }

    })
}