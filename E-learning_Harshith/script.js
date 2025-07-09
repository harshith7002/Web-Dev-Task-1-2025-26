document.addEventListener('DOMContentLoaded', function() {
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });


    const signUpBtn = document.getElementById('signUpBtn');
    const signUpModal = document.getElementById('signUpModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModalBtn');


    const openModal = () => {
        signUpModal.classList.remove('hidden');
    
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    };

    const closeModal = () => {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            signUpModal.classList.add('hidden');
        }, 300); 
    };

 
    signUpBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);


    signUpModal.addEventListener('click', (event) => {
        if (event.target === signUpModal) {
            closeModal();
        }
    });


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !signUpModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    const faders = document.querySelectorAll('.fade-in');
    

    const appearOptions = {
        threshold: 0.2, 
        rootMargin: "0px 0px -50px 0px" 
    };


    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
           
            if (!entry.isIntersecting) {
                return;
            } else {
               
                entry.target.classList.add('visible');
                
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
