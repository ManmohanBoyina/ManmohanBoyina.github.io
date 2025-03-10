// ✅ HAMBURGER MENU TOGGLE
function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// ✅ EXPERIENCE & EDUCATION DETAILS TOGGLE
document.addEventListener("DOMContentLoaded", () => {
  function toggleDetails(containerId, detailsId) {
    const container = document.getElementById(containerId);
    const details = document.getElementById(detailsId);

    if (container && details) {
      container.addEventListener("click", () => {
        details.style.display = details.style.display === "none" || details.style.display === "" ? "block" : "none";
      });
    }
  }

  toggleDetails("experience-container", "additional-details");
  toggleDetails("education-container", "education-details");
});

// ✅ TYPING ANIMATION EFFECT


// ✅ FIREBASE INITIALIZATION & VIEW COUNTER
document.addEventListener("DOMContentLoaded", function () {
  if (typeof firebase === "undefined") {
    console.error("Firebase SDK is not loaded properly.");
    return;
  }

  // ✅ Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCyBiEQEMPzVKWLowat-GCGEEQhU0zCwRk",
    authDomain: "portfolio-analysis-c8691.firebaseapp.com",
    projectId: "portfolio-analysis-c8691",
    storageBucket: "portfolio-analysis-c8691.appspot.com",
    messagingSenderId: "532713325790",
    appId: "1:532713325790:web:f5f02be855159fde6f6e4f",
  };

  // ✅ Initialize Firebase (Prevents duplicate initialization)
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();
  const viewsRef = db.collection("portfolio").doc("views");

  // ✅ Function to animate the counter (Triggers when section is visible)
  function animateCounter(targetElement, start, end, duration) {
    let current = start;
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    let timer = setInterval(() => {
      current++;
      targetElement.textContent = current;
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // ✅ Observe when the views section becomes visible
  const viewCountElement = document.getElementById("view-count");
  if (viewCountElement) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !viewCountElement.dataset.animated) {
          viewCountElement.dataset.animated = "true"; // Prevent duplicate animations

          // ✅ Fetch and update view count from Firebase
          viewsRef.get().then((doc) => {
            let newViews = doc.exists ? doc.data().count + 1 : 1;
            viewsRef.set({ count: newViews }, { merge: true }).then(() => {
              animateCounter(viewCountElement, 0, newViews, 2000); // 2-second animation
            });
          }).catch((error) => {
            console.error("Error updating views:", error);
          });

          observer.unobserve(entry.target); // Stop observing after animation runs
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(viewCountElement);
  }

});
