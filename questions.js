const faqs = [ 
    { 
        question: "What is Cinemix?", 
        answer: "Cinemix is a movie catalog website where users can explore a variety of films and their details, including genres, release dates, ratings, and more." 
    }, 
    { 
        question: "What benefits do I get with the Cinemix subscription?", 
        answer: "With the Cinemix subscription, you'll stay up-to-date with the latest updates, movie releases, and upcoming events on our platform, receiving notifications directly to your email." 
    }, 
    { 
        question: "Is Cinemix free to use?", 
        answer: "Yes, Cinemix is completely free to use. You can explore all the movie details and ratings without any subscription fees." 
    }, 
    { 
        question: "Can I watch movies directly on Cinemix?", 
        answer: "No, Cinemix does not host movies. It is a platform for browsing movie details and information, not for streaming or downloading." 
    }, 
    { 
        question: "Can I create a watchlist on Cinemix?", 
        answer: "Currently, we don't offer a watchlist feature. However, we're continuously improving our platform, so stay tuned for updates and new features!" 
    }, 
    { 
        question: "How can I suggest a movie or provide feedback to Cinemix?", 
        answer: "If you'd like to suggest a movie or provide feedback, you can reach out to us through the 'Contact Us' page on our website. Your input helps us make Cinemix better!" 
    } 
]; 

const faqSection = document.getElementById('faq-section'); 

faqs.forEach(faq => { 
    const faqItem = document.createElement('div'); 
    faqItem.classList.add('faq-item'); 

    const faqQuestion = document.createElement('div'); 
    faqQuestion.classList.add('faq-question'); 
    faqQuestion.textContent = faq.question; 

    const faqAnswer = document.createElement('div'); 
    faqAnswer.classList.add('faq-answer'); 
    faqAnswer.innerHTML = `<p>${faq.answer}</p>`; 

    faqItem.appendChild(faqQuestion); 
    faqItem.appendChild(faqAnswer); 

    faqSection.appendChild(faqItem); 
}); 

document.querySelectorAll('.faq-question').forEach((question) => { 
    question.addEventListener('click', function () { 
        const answer = this.nextElementSibling; 
        answer.classList.toggle('show'); 
    }); 
}); 