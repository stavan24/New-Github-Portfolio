
        // 1. Toggles the 'active' class on the menu when the PFP is clicked
        document.getElementById('pfp-btn').addEventListener('click', function(e) {
            // Stops the click event from propagating up to the document handler
            e.stopPropagation(); 
            document.getElementById('pfp-dropdown').classList.toggle('active');
        });

        // 2. Closes the dropdown if the user clicks anywhere else on the page
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('pfp-dropdown');
            const button = document.getElementById('pfp-btn');
            
            // Check if the click target is NOT the dropdown or the button
            if (dropdown && button && !dropdown.contains(event.target) && !button.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });
    