const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const countdownBtn = document.querySelector('.btn')

countdownBtn.addEventListener('click',() =>{
    backdrop.classList.add('show')
    modal.classList.add('show')
})

backdrop.addEventListener('click',()=>{
    backdrop.classList.remove('show')
    modal.classList.remove('show')
})


function updateTimer (){
    let futureDate = Date.parse('Jun 8, 2022')
    let currentDate = new Date()
    let diff = futureDate-currentDate
    
    let days = Math.floor(diff/ (60 * 60 * 24 * 1000))
    let hrs = Math.floor(diff/(60 * 60 * 1000))
    let mins = Math.floor(diff /(60 * 1000))
    let secs = Math.floor(diff / (1000))

    let d = days;
    let h = hrs - days * 24;
    let m = mins - hrs * 60;
    let s = secs - mins * 60;

    modal.innerHTML = `
    <div class="countdown day">
    <h3>${d}</h3>
    <p>Days</p>
    </div>

    <div class="countdown hour">
    <h3>${h}</h3>
    <p>Hours</p>
    </div>

    <div class="countdown minute">
    <h3>${m}</h3>
    <p>Min</p>
    </div>

    <div class="countdown second">
    <h3>${s}</h3>
    <p>Sec</p>
    </div>`
}

setInterval(() => {
    updateTimer()
}, 1000);

