document.addEventListener('DOMContentLoaded', () => {
    // Portfolio logic (for index.html)
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    const portfolioItems = [
        {
            title: 'ვებ საიტი "პორტფოლიო"',
            description: 'თანამედროვე და რეაგირებადი პორტფოლიო ვებგვერდი დიზაინერებისთვის.',
            category: 'web',
            image: 'images/project1.jpg' // შეცვალეთ თქვენი სურათის სახელით
        },
        {
            title: 'მობილური აპლიკაცია "სავაჭრო სია"',
            description: 'მარტივი და ინტუიციური სავაჭრო სიის მობილური აპლიკაცია.',
            category: 'mobile',
            image: 'images/project2.jpg' // შეცვალეთ თქვენი სურათის სახელით
        },
        {
            title: 'UI/UX ქეის სტადი "ბანკინგის აპლიკაცია"',
            description: 'ფინანსური აპლიკაციის დიზაინის კვლევა და პროტოტიპინგი.',
            category: 'uiux',
            image: 'images/project3.jpg' // შეცვალეთ თქვენი სურათის სახელით
        },
        {
            title: 'ონლაინ მაღაზია "ფეხსაცმელი"',
            description: 'სრულფასოვანი ელექტრონული კომერციის ვებგვერდი ფეხსაცმელებისთვის.',
            category: 'web',
            image: 'images/project4.jpg' // შეცვალეთ თქვენი სურათის სახელით
        },
        {
            title: 'მობილური თამაში "ფერადი ბურთები"',
            description: 'მარტივი და ნარკოტიული კაჟუალ თამაში მობილურისთვის.',
            category: 'mobile',
            image: 'images/project5.jpg' // შეცვალეთ თქვენი სურათის სახელით
        },
        {
            title: 'პროექტი "მონაცემთა ვიზუალიზაცია"',
            description: 'ინტერაქტიული მონაცემთა ვიზუალიზაცია D3.js-ის გამოყენებით.',
            category: 'web',
            image: 'images/project6.jpg' // შეცვალეთ თქვენი სურათის სახელით
        }
    ];

    function displayPortfolio(category) {
        if (!portfolioGrid) return; // Exit if portfolioGrid is not found (i.e., on contact.html)

        portfolioGrid.innerHTML = ''; // Clear existing items

        const filteredItems = category === 'all'
            ? portfolioItems
            : portfolioItems.filter(item => item.category === category);

        filteredItems.forEach(item => {
            const portfolioItemDiv = document.createElement('div');
            portfolioItemDiv.classList.add('portfolio-item');
            portfolioItemDiv.setAttribute('data-category', item.category);

            portfolioItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-item-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItemDiv);
        });
    }

    // Initialize portfolio display only if on index.html
    if (portfolioGrid) {
        displayPortfolio('all');
        filterButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');

                const category = event.target.dataset.category;
                displayPortfolio(category);
            });
        });
    }


    // Contact form handling (for contact.html)
    const contactForm = document.getElementById('contact-form');
    const messageStatus = document.getElementById('msg');

    if (contactForm) { // Ensure the form exists on the current page (contact.html)
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name === '' || email === '' || message === '') {
                messageStatus.textContent = 'გთხოვთ შეავსოთ ყველა ველი.';
                messageStatus.classList.add('error');
                messageStatus.classList.remove('success');
            } else if (!validateEmail(email)) { // Simple email validation
                messageStatus.textContent = 'გთხოვთ შეიყვანოთ სწორი ელ-ფოსტის მისამართი.';
                messageStatus.classList.add('error');
                messageStatus.classList.remove('success');
            } else {
                // Simulate form submission
                messageStatus.textContent = 'შეტყობინება წარმატებით გაიგზავნა! მალე დაგიკავშირდებით.';
                messageStatus.classList.remove('error');
                messageStatus.classList.add('success');

                // Clear form fields
                contactForm.reset();

                // Optional: You could send data to a server here using fetch API
                // console.log({ name, email, message });
            }
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
