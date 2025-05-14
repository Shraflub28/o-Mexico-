// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Add occasional pulse effect to decorative items
    const decorationItems = document.querySelectorAll('.decoration-item');
    if (decorationItems.length > 0) {
        setInterval(() => {
            // Randomly select one of the decoration items
            const randomIndex = Math.floor(Math.random() * decorationItems.length);
            const randomItem = decorationItems[randomIndex];
            
            // Add pulse class
            randomItem.classList.add('pulse-effect');
            
            // Remove pulse class after animation completes
            setTimeout(() => {
                randomItem.classList.remove('pulse-effect');
            }, 1000);
        }, 3000); // Trigger every 3 seconds
    }
    
    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '0 5%';
            header.classList.add('scrolled');
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            header.style.padding = '0 5%';
            header.classList.remove('scrolled');
        }
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-text');
    const decorations = document.querySelectorAll('.decoration-item');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (hero && scrollPosition < window.innerHeight) {
            // Move the background slower than the scroll rate
            hero.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
            
            // Fade out hero content as user scrolls
            if (heroContent) {
                heroContent.style.opacity = 1 - (scrollPosition / (window.innerHeight * 0.6));
                heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            }
            
            // Move decoration items at different speeds and directions
            if (decorations.length) {
                decorations.forEach((item, index) => {
                    // Different movement for different decoration types
                    if (item.classList.contains('decoration-top') || item.classList.contains('decoration-bottom')) {
                        const direction = index % 2 === 0 ? 1 : -1;
                        item.style.transform = `rotate(${direction * (15 + scrollPosition * 0.02)}deg) translateY(${scrollPosition * 0.1 * direction}px)`;
                    } 
                    // Move right decorations horizontally
                    else if (item.className.includes('decoration-right')) {
                        const itemNumber = parseInt(item.className.split('-').pop());
                        const speed = itemNumber % 2 === 0 ? 0.15 : -0.1;
                        const rotationDirection = itemNumber % 2 === 0 ? 1 : -1;
                        const rotationSpeed = 0.03;
                        const baseRotation = itemNumber * 5;
                        
                        item.style.transform = `translateX(${scrollPosition * speed}px) rotate(${baseRotation + rotationDirection * scrollPosition * rotationSpeed}deg)`;
                    }
                });
            }
        }
    });
    
    // Menu Filter
    const menuBtns = document.querySelectorAll('.menu-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (menuBtns.length > 0 && menuItems.length > 0) {
        // Function to refresh random images
        const refreshRandomImages = (category) => {
            const itemsToRefresh = category === 'all' 
                ? document.querySelectorAll('.menu-item') 
                : document.querySelectorAll(`.menu-item[data-category="${category}"]`);
            
            itemsToRefresh.forEach(item => {
                const img = item.querySelector('img');
                const itemCategory = item.getAttribute('data-category');
                const imgAlt = img.getAttribute('alt');
                
                // Create a new URL with a random query parameter to bypass cache
                const randomParam = Math.floor(Math.random() * 10000);
                
                // Set specific food image URL based on category and item name
                let imageUrl = '';
                
                // Map menu items to specific food images
                switch(imgAlt.toLowerCase()) {
                    case 'guacamole':
                        imageUrl = 'https://images.unsplash.com/photo-1604545263427-17b147f3e6c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3VhY2Ftb2xlLGF2b2NhZG98fHx8fHwxNjg0MzMxMjQy&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'nachos':
                        imageUrl = 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'quesadilla':
                        imageUrl = 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'tacos':
                        imageUrl = 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'enchiladas':
                        imageUrl = 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'burrito':
                        imageUrl = 'https://images.unsplash.com/photo-1629092704313-0c60683fce86?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'fajitas':
                        imageUrl = 'https://images.unsplash.com/photo-1628491300808-0ba3e766909a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'churros':
                        imageUrl = 'https://images.unsplash.com/photo-1624471649507-89485da0ed68?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'flan':
                        imageUrl = 'https://images.unsplash.com/photo-1595389008468-1be24060ad5d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'sopapillas':
                        imageUrl = 'https://images.unsplash.com/photo-1625478733282-8b1ac70454b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'margarita':
                        imageUrl = 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'horchata':
                        imageUrl = 'https://images.unsplash.com/photo-1546853020-ca4909aef454?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'michelada':
                        imageUrl = 'https://images.unsplash.com/photo-1617524455170-dec47290ef53?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    case 'sangria':
                        imageUrl = 'https://images.unsplash.com/photo-1539518721003-901322e6e667?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400';
                        break;
                    default:
                        // Fall back to a direct image from Unsplash if no match
                        imageUrl = `https://source.unsplash.com/featured/400x300/?${imgAlt.toLowerCase()},${itemCategory},food&sig=${randomParam}`;
                }
                
                // Update the image source
                img.src = imageUrl;
            });
        };
        
        // Add click event to menu buttons
        menuBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                menuBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get data category
                const category = this.getAttribute('data-category');
                
                // Filter menu items
                menuItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        if (document.querySelector('.menu-items').classList.contains('show-all') || item.classList.contains('visible-item')) {
                            item.style.display = 'block';
                        }
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Refresh the images for the visible category
                refreshRandomImages(category);
            });
        });
        
        // Initialize with random images on page load
        window.addEventListener('load', () => {
            refreshRandomImages('all');
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Add flag banner to the top of the page
    const body = document.body;
    const flagBanner = document.createElement('div');
    flagBanner.className = 'flag-banner';
    
    const greenStripe = document.createElement('div');
    greenStripe.className = 'flag-banner-green';
    
    const whiteStripe = document.createElement('div');
    whiteStripe.className = 'flag-banner-white';
    
    const redStripe = document.createElement('div');
    redStripe.className = 'flag-banner-red';
    
    flagBanner.appendChild(greenStripe);
    flagBanner.appendChild(whiteStripe);
    flagBanner.appendChild(redStripe);
    
    // Insert the flag banner at the top of the body
    body.insertBefore(flagBanner, body.firstChild);
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 70)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // View More/Less functionality
    const viewMoreBtn = document.getElementById('view-more-btn');
    const viewLessBtn = document.getElementById('view-less-btn');
    const menuContainer = document.querySelector('.menu-items');
    
    if (viewMoreBtn && viewLessBtn) {
        // Show View More button initially
        viewMoreBtn.style.display = 'inline-flex';
        viewLessBtn.style.display = 'none';
        
        viewMoreBtn.addEventListener('click', function() {
            menuContainer.classList.add('show-all');
            
            // Get active category
            const activeCategory = document.querySelector('.menu-btn.active').getAttribute('data-category');
            
            // Show only items of active category
            menuItems.forEach(item => {
                if (activeCategory === 'all' || item.getAttribute('data-category') === activeCategory) {
                    item.style.display = 'block';
                    // Add fade-in animation
                    if (item.classList.contains('hidden-item')) {
                        item.classList.add('fade-in');
                    }
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Toggle buttons
            viewMoreBtn.style.display = 'none';
            viewLessBtn.style.display = 'inline-flex';
        });
        
        viewLessBtn.addEventListener('click', function() {
            menuContainer.classList.remove('show-all');
            
            // Get active category
            const activeCategory = document.querySelector('.menu-btn.active').getAttribute('data-category');
            
            // Hide items with hidden-item class
            menuItems.forEach(item => {
                if (item.classList.contains('hidden-item')) {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                } else if (activeCategory === 'all' || item.getAttribute('data-category') === activeCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Toggle buttons
            viewMoreBtn.style.display = 'inline-flex';
            viewLessBtn.style.display = 'none';
            
            // Scroll back to menu section
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                window.scrollTo({
                    top: menuSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
        
        // Update button visibility when changing menu categories
        menuBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                if (menuContainer.classList.contains('show-all')) {
                    viewMoreBtn.style.display = 'none';
                    viewLessBtn.style.display = 'inline-flex';
                } else {
                    viewMoreBtn.style.display = 'inline-flex';
                    viewLessBtn.style.display = 'none';
                }
            });
        });
    }
}); 