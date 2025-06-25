// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    // Animation des champs au focus
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Gestion de la soumission du formulaire
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validation basique
        if (!validateForm(data)) {
            return;
        }
        
        // Simulation d'envoi
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        
        // Simulation d'un délai d'envoi
        setTimeout(() => {
            showSuccessMessage();
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
        }, 2000);
    });
    
    // Validation du formulaire
    function validateForm(data) {
        const errors = [];
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push('Le nom doit contenir au moins 2 caractères');
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Veuillez entrer une adresse email valide');
        }
        
        if (!data.subject) {
            errors.push('Veuillez sélectionner un sujet');
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Le message doit contenir au moins 10 caractères');
        }
        
        if (errors.length > 0) {
            showErrorMessage(errors);
            return false;
        }
        
        return true;
    }
    
    // Validation d'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Affichage des messages d'erreur
    function showErrorMessage(errors) {
        // Suppression des messages existants
        removeMessages();
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'message error-message';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <div>
                <h4>Erreur de validation</h4>
                <ul>
                    ${errors.map(error => `<li>${error}</li>`).join('')}
                </ul>
            </div>
        `;
        
        contactForm.insertBefore(errorDiv, submitBtn);
        
        // Auto-suppression après 5 secondes
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
    
    // Affichage du message de succès
    function showSuccessMessage() {
        // Suppression des messages existants
        removeMessages();
        
        const successDiv = document.createElement('div');
        successDiv.className = 'message success-message';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <div>
                <h4>Message envoyé !</h4>
                <p>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
            </div>
        `;
        
        contactForm.insertBefore(successDiv, submitBtn);
        
        // Auto-suppression après 5 secondes
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 5000);
    }
    
    // Suppression des messages existants
    function removeMessages() {
        const existingMessages = contactForm.querySelectorAll('.message');
        existingMessages.forEach(message => message.remove());
    }
    
    // Animation des icônes de contact
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon i');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        method.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Effet de parallaxe léger sur le scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.contact-container');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
});

// Styles CSS pour les messages (ajoutés dynamiquement)
const messageStyles = `
    .message {
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        animation: slideIn 0.3s ease-out;
    }
    
    .error-message {
        background: rgba(220, 53, 69, 0.1);
        border: 1px solid rgba(220, 53, 69, 0.3);
        color: #dc3545;
    }
    
    .success-message {
        background: rgba(40, 167, 69, 0.1);
        border: 1px solid rgba(40, 167, 69, 0.3);
        color: #28a745;
    }
    
    .message i {
        font-size: 1.2rem;
        margin-top: 0.1rem;
    }
    
    .message h4 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
    }
    
    .message p {
        margin: 0;
        font-size: 0.9rem;
    }
    
    .message ul {
        margin: 0.5rem 0 0 0;
        padding-left: 1.5rem;
    }
    
    .message li {
        margin-bottom: 0.25rem;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .form-group.focused label {
        color: #667eea;
    }
    
    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none !important;
    }
`;

// Ajout des styles au head
const styleSheet = document.createElement('style');
styleSheet.textContent = messageStyles;
document.head.appendChild(styleSheet); 