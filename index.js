(()=>{

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    const observer = new IntersectionObserver((entries)=> {
        entries.forEach( entry => {
            entry.isIntersecting ? entry.target.classList.remove('hidden') : entry.target.classList.add('hidden')            
        })
    })

    document.querySelectorAll('.scroll_animation_content').forEach(item => observer.observe(item))

    
    window.addEventListener('scroll', function() {

        handleNavLinks()

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const rotation = scrollTop * -0.01;
        document.querySelector('.background').style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

        document.querySelector('#scroll_indicator').style.opacity = `${((-1/500) * scrollTop) + 1}`
    });    

    function handleNavLinks(){
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 250) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');                
            }
        });
    }

    const cardImageContainers = document.querySelectorAll('.project_card .image_holder');
    let activeImageIndex = 1
    function animateImages(){        
        
        cardImageContainers.forEach((imageContainer)=>{
            const images = imageContainer.querySelectorAll('img')

            if(images.length > 1){
                const index = activeImageIndex % images.length
                imageContainer.querySelector('img.show').classList.remove('show')
                images[index].classList.add('show')
            }
            
        })

        activeImageIndex += 1        
    }

    const imageAnimationInterval = setInterval(animateImages, 4000)    

})()