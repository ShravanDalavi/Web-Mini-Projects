
        let currentStep = 0;
        const steps = document.querySelectorAll(".step");
        const nextBtn = document.querySelector(".next");
        const prevBtn = document.querySelector(".prev");
        const submitBtn = document.querySelector(".submit");
        const stepCircles = document.querySelectorAll(".step-circle");

        function showStep(stepIndex) {
            steps.forEach((step, index) => {
                step.classList.toggle("active", index === stepIndex);
            });
            stepCircles.forEach((circle, index) => {
                circle.classList.toggle("active", index <= stepIndex);
            });
            prevBtn.disabled = stepIndex === 0;
            nextBtn.style.display = stepIndex === steps.length - 1 ? "none" : "inline-block";
            submitBtn.style.display = stepIndex === steps.length - 1 ? "inline-block" : "none";
        }

        function nextStep() {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        }

        function prevStep() {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        }

        document.getElementById("multiStepForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Form Submitted Successfully!");
        });

        showStep(currentStep);
   