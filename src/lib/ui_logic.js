export const rotateIcon = () => {
    const icon = document.getElementById("light-random-icon");
    rotate(icon);
    const icon2 = document.getElementById("dark-random-icon");
    rotate(icon2);
}
const rotate = (icon) =>{
    icon.classList.add('rotate-360');
    setTimeout(() => {
        icon.classList.add('notransition');
        icon.classList.remove('rotate-360');
        icon.offsetHeight
        icon.classList.remove('notransition');
    }, 301);
}
