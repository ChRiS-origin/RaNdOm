import {get, writable} from "svelte/store";
import {options} from "./optionStore";

export const result_selection = writable({
    text: "",
    selected: true,
    id: 0
});

export const result_order = writable([]);  

export const getRandom = () => {
    let opts = writable(get(options));
    opts.update(opts => opts.filter(opt => opt.selected));
    let fixOpts = get(opts);
    if (fixOpts.length > 0) {
        result_selection.update(() => fixOpts[Math.floor(Math.random()*fixOpts.length)]);
    }
    else { result_selection.update(() => fixOpts);}
};

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

export const getRandomOrder = () => {
    let opts = writable(get(options));
    opts.update(opts => opts.filter(opt => opt.selected));
    let fixOpts = get(opts);
    result_order.update(() => shuffle([...fixOpts]));
};