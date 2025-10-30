    // create and insert the radio input and label using DOM APIs (no inline HTML tags in a .js file)
    const input = document.createElement("input");
    input.type = "radio";
    input.id = "otherRadio";
    input.name = "option";

    const label = document.createElement("label");
    label.htmlFor = "otherRadio";
    label.textContent = "Other";

    document.addEventListener("DOMContentLoaded", function () {
        // append the elements to the document once DOM is ready
        document.body.appendChild(input);
        document.body.appendChild(label);

        const otherRadio = document.getElementById("otherRadio");

        otherRadio.addEventListener("change", function () {
            if (otherRadio.checked) {
                window.open("https://www.youtube.com/watch?v=mpzaUcEbInQ&list=RDmpzaUcEbInQ&start_radio=1", "_blank");
            }
        });
    });