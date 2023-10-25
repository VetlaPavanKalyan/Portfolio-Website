const mobNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // state
    let isMobileNavOpen = false;
    
    headerBtn.addEventListener('click', () => {
        if (isMobileNavOpen) {
            mobileNav.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            mobileNav.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        isMobileNavOpen = !isMobileNavOpen;
    });

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    })
};

export default mobNav;