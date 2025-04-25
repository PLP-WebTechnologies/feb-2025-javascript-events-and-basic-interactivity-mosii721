        const magicButton = document.querySelector('.magic-button');
        let clickCount = 0;
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'];
        const texts = ['Click Me!', 'Wow!', 'Amazing!', 'Keep Going!'];

        magicButton.addEventListener('click', () => {
            clickCount = (clickCount + 1) % colors.length;
            magicButton.style.backgroundColor = colors[clickCount];
            magicButton.textContent = texts[clickCount];
            magicButton.classList.add('fade-in');
            setTimeout(() => magicButton.classList.remove('fade-in'), 500);
        });

        magicButton.addEventListener('dblclick', () => {
            alert('🎉 Secret Double-Click Unlocked! Check the console!');
            console.log('Secret action triggered!');
        });

        magicButton.addEventListener('mouseenter', () => {
            magicButton.style.transform = 'scale(1.1)';
        });

        magicButton.addEventListener('mouseleave', () => {
            magicButton.style.transform = 'scale(1)';
        });


        // Gallery Functionality
        const galleryImages = document.querySelectorAll('.gallery img');
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                galleryImages.forEach(i => i.style.opacity = '0.5');
                img.style.opacity = '1';
                img.classList.add('fade-in');
                setTimeout(() => img.classList.remove('fade-in'), 500);
            });
        });

        // Tabs Functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                button.classList.add('active');
                document.getElementById(button.dataset.tab).classList.add('active');
            });
        });

        // Form Validation
        const form = document.querySelector('#signup-form');
        const formInputs = document.querySelectorAll('.form-group input');
        const submitBtn = document.querySelector('.submit-btn');
        const interactedFields = new Set();

        function validateEmail(email) {
            console.log(`Validating email: ${email}`);
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function validateInput(input) {
            const errorElement = document.getElementById(`${input.id}-error`);
            let isValid = true;

            console.log(`Before validation - ${input.id}: ${input.value}`);

            if (input.id === 'name') {
                if (!input.value.trim()) {
                    console.log('Name invalid: empty');
                    errorElement.style.display = 'block';
                    isValid = false;
                } else {
                    console.log('Name valid');
                    errorElement.style.display = 'none';
                }
            }

            if (input.id === 'email') {
                if (!validateEmail(input.value)) {
                    console.log('Email invalid');
                    errorElement.style.display = 'block';
                    isValid = false;
                } else {
                    console.log('Email valid');
                    errorElement.style.display = 'none';
                }
            }

            if (input.id === 'password') {
                if (input.value.length < 8) {
                    console.log('Password invalid: too short');
                    errorElement.style.display = 'block';
                    isValid = false;
                } else {
                    console.log('Password valid');
                    errorElement.style.display = 'none';
                }
            }

            console.log(`After validation - ${input.id}: ${input.value}, Valid: ${isValid}`);
            return isValid;
        }

        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                console.log(`Input event - ${input.id}: ${input.value}`);
                interactedFields.add(input.id);
                validateInput(input);
            });
        });

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Submit button clicked');
            handleFormSubmission();
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Form submit event triggered');
            handleFormSubmission();
        });

        function handleFormSubmission() {
            console.log('Handling form submission');
            console.log('Interacted fields:', Array.from(interactedFields));

            if (interactedFields.size !== formInputs.length) {
                console.log('Not all fields interacted, aborting submission');
                alert('Please fill out all fields.');
                return;
            }

            let isFormValid = true;

            formInputs.forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                }
            });

            if (isFormValid) {
                console.log('Form is valid');
                alert('🎉 Form submitted successfully!');
            } else {
                console.log('Form is invalid');
            }
        }
