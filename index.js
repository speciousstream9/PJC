import { Draggable } from '@shopify/draggable';

const draggable = new Draggable(document.querySelectorAll('#dragees'), {
    draggable: 'li', 
    dropzone: '#drop'
});

draggable.on('drag:start', () => console.log('drag:start'));
draggable.on('drag:move', () => console.log('drag:move'));
draggable.on('drag:stop', () => console.log('drag:stop'));
