let first = document.querySelectorAll('.first');
for (let i = 0; i < first.length; i++){
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        first[i].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    });
}

let second = document.querySelectorAll('.third');
for (let i = 0; i < second.length; i++){
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        second[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
}

function sized() {
    let size = window.innerWidth
    if (size < 1000) {
        new PanelSnap({
        
            // parent container
        
            container: document.removeAttribute('id'),
            // panel selector
            panelSelector: 'section',
        
            // threshold
            directionThreshold: 50,
        
            // scroll delay
            delay: 0,
        
            // duration in milliseconds
            duration: 300,
        
            // easing function
            easing: function(t) { return t }
        
        });
    } else {
        new PanelSnap({
        
            // parent container
    
            container: document.getElementById('projects'),
            // panel selector
            panelSelector: 'section',
        
            // threshold
            directionThreshold: 50,
        
            // scroll delay
            delay: 0,
        
            // duration in milliseconds
            duration: 300,
        
            // easing function
            easing: function(t) { return t }
        
        });
    }
    
}

sized()