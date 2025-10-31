document.addEventListener("DOMContentLoaded", function () {
  const radioGroup = document.querySelector(".radio-group");

  // Create "Other" radio button and label dynamically
  const wrapper = document.createElement("div");
  const otherRadio = document.createElement("input");
  const otherLabel = document.createElement("label");

  otherRadio.type = "radio";
  otherRadio.id = "otherRadio";
  otherRadio.name = "subgenre";
  otherRadio.value = "Other";

  otherLabel.htmlFor = "otherRadio";
  otherLabel.textContent = "Other";

  // Add to the same group as other radios
  wrapper.appendChild(otherRadio);
  wrapper.appendChild(otherLabel);
  radioGroup.appendChild(wrapper);

  // Add event listener
  otherRadio.addEventListener("change", function () {
    if (otherRadio.checked) {
      window.open(
        "https://www.youtube.com/watch?v=mpzaUcEbInQ&list=RDmpzaUcEbInQ&start_radio=1",
        "_blank"
      );
    }
  });
});