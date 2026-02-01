// ==========================================
// 1. FIREBASE IMPORTS & CONFIGURATION
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Replace the values below with your specific keys from the Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyD2ZcY4kzl37JaeiZxhSuOr7oM8ur6Qljc",
    authDomain: "project-4062947966317276427.firebaseapp.com",
    projectId: "project-4062947966317276427",
    storageBucket: "project-4062947966317276427.firebasestorage.app",
    messagingSenderId: "410814952202",
    appId: "1:410814952202:web:c2338ca0bd4d0452f7c0f3",
    measurementId: "G-D0L9DZ0E7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export db and auth if you need to use them in other files, 
// or simply use them inside the event listener below.
console.log("Firebase initialized");

// ==========================================
// 2. SLIDESHOW LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const slides = document.querySelectorAll('.slide');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    // Configuration
    let currentSlideIndex = 0;
    const slideIntervalTime = 4000; // 4 seconds between slides
    let slideInterval; // Variable to hold the setInterval ID
    let isPlaying = true;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides first
        slides.forEach(slide => {
            slide.classList.remove('active-slide');
        });

        // Ensure index stays within bounds (looping)
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        // Show the targeted slide
        // Check if slides exist to prevent errors
        if (slides.length > 0) {
            slides[currentSlideIndex].classList.add('active-slide');
        }
    }

    // Function to move to the next slide
    function nextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    // Function to start the automatic slideshow
    function startSlideshow() {
        if (!isPlaying) {
            slideInterval = setInterval(nextSlide, slideIntervalTime);
            isPlaying = true;
            // Toggle button visibility
            if (playBtn && pauseBtn) {
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'inline-block';
            }
        }
    }

    // Function to pause the automatic slideshow
    function pauseSlideshow() {
        if (isPlaying) {
            clearInterval(slideInterval);
            isPlaying = false;
            // Toggle button visibility
            if (playBtn && pauseBtn) {
                pauseBtn.style.display = 'none';
                playBtn.style.display = 'inline-block';
            }
        }
    }

    // Event Listeners for controls
    if (playBtn) playBtn.addEventListener('click', startSlideshow);
    if (pauseBtn) pauseBtn.addEventListener('click', pauseSlideshow);

    // Initialize: Start the slideshow automatically on load
    // We set isPlaying to false initially so startSlideshow logic runs correctly
    isPlaying = false;
    startSlideshow();
});
