var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Meng Seng my buddy!',
        message_new1: 'This is Lee Yiaw first Vue JS on Netlify!',
        message_new2: 'You can learn how to do it too!'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
