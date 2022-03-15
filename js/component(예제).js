Vue.component('todo-footer', {
    /* html */
    template : `<p>This is another cgild global component</p>`
})

let str = {
    /* html */
    template: `<p>This is another cgild global component</p>`
}

new Vue({
    el: '#app',
    data: {
        message : 'This is a parent component'
    },
    components : {
        'todo-list' : str
    }
});