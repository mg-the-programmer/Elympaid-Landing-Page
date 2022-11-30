const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        // else {
        //     entry.target.classList.remove("show");
        // }
    });
});

const observerY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("showY");
        }
        // } else {
        //   entry.target.classList.remove("showY");
        // }
    });
});

const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("tracking-in-contract");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenRightElements = document.querySelectorAll(".hiddenRight");
hiddenRightElements.forEach((el) => observer.observe(el));

const hiddenTopElements = document.querySelectorAll(".hiddenTop");
hiddenTopElements.forEach((el) => observerY.observe(el));

const titleReveal = document.querySelectorAll(".titleReveal");
titleReveal.forEach((el) => observerReveal.observe(el));
