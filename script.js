//your JS code here. If required.
        const openModal = document.getElementById("openModal");
        const modal = document.querySelector(".modal");
        const closeModal = document.querySelector(".close-modal");
        // Open modal
        openModal.addEventListener("click", function () {
            modal.style.display = "flex";
        });
        // Close using X button
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });
        // Close when clicking outside modal-content
        modal.addEventListener("click", function (event) {
           if (event.target === modal) {
                modal.style.display = "none";
            }
        });
