const { ref } = Vue

const load = Vue.createApp({
    setup () {
        return {
            CarouselText1: 'You are entering the mainframe.',
            CarouselText2: 'When playing with other player, be respectful.',
            CarouselText3: 'This is a learning server. Feel free to ask questions.',
            CarouselText4: 'TMG has always been a place to learn.',
            
            DownloadTitle: 'Downloading tmgCore Server',
            DownloadDesc: "Hold tight while we begin downloading all the resources/assets required to play on tmgCore Server. \n\nAfter the download has finished successfully, you'll be placed into the server and this screen will disappear. Please don't leave or turn off your PC.",
            
            slide: ref('1'),
            download: ref(true)
        }
    }
})

load.use(Quasar, { config: {} })
load.mount('#loading-main')

// Loading Bar Logic
let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },
    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },
    startDataFileEntries(data) {
        count = data.count;
    },
    performMapLoadFunction(data) {
        ++thisCount;
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    }
};

window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});