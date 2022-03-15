Vue.component('child-component', {
    template:
    /* html */
    `
        <div class = "container">
            <p>ChildComponent입니다.</p>
        </div>
    `
});

Vue.component('child-article', {
    template:
    /* html */
    `
        <div>
            <div class = "article">
                Lorem ipsum dolor sit amet consectetur adipisicing elit,
                <child-component></child-component>
            </div>
        </div>
    `
});

new Vue({
    el: '#app'
});