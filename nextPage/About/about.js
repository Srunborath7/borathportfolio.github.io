

document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function(){
        $('.menu-btn').click(function(){
            $('.side-bar').addClass('active');
            $('.menu-btn').css("visibility", "hidden");
        });
        $('.close-btn').click(function(){
            $('.side-bar').removeClass('active');
            $('.menu-btn').css("visibility", "visible");
        });
        $('.sub-btn').click(function(){
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.bx-chevron-right').toggleClass('rotate');
        });
    });
    var typed = new Typed(".multiple_text_personal", {
        strings: ['Srun Borath.'],
        typeSpeed: 100,
        backSpeed:100,
        backDelay:1000,
        loop: true
    });
    if(new Date().getHours()>21){
        document.getElementById('time').innerHTML='Good night!';
    }else if (new Date().getHours()>16){
        document.getElementById('time').innerHTML='Good Evening!';
    }
    else if (new Date().getHours()>11){
        document.getElementById('time').innerHTML='Good afternoon!';
    }else if (new Date().getHours()>4){
        document.getElementById('time').innerHTML='Good morning!';
    };

    const downloadBtn = document.querySelector(".download-btn");
    const fileLink = "https://drive.google.com/file/d/1f9nVCSuzVvzYz3wrCCA3zXqvqCid1eJp/view?usp=drive_link";

    const initTimer = () => {
        if(downloadBtn.classList.contains("disable-timer")) {
            return location.href = fileLink;
        }
        let timer = downloadBtn.dataset.timer;
        downloadBtn.classList.add("timer");
        downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        const initCounter = setInterval(() => {
            if(timer > 0) {
                timer--;
                return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
            }
            clearInterval(initCounter);
            location.href = fileLink;
            downloadBtn.innerText = "Your file is downloading...";
            setTimeout(() => {
                downloadBtn.classList.replace("timer", "disable-timer");
                downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                         <span class="text">Download Again</span>`;
            }, 3000);
        }, 1000);
    }

    if(downloadBtn) {
        downloadBtn.addEventListener("click", initTimer);
    }
    
});
