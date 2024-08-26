document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('analysis-form');
  const saveAllButton = document.querySelector('.save');
  const updateAllButton = document.querySelector('.update');
  const clearButton = document.querySelector('.clear');
  const detailsSaveButtons = document.querySelectorAll('.details-save');

  // Load saved data from localStorage
  function loadData() {
      const savedData = JSON.parse(localStorage.getItem('analysisData'));
      if (savedData) {
          Object.keys(savedData).forEach(key => {
              const element = document.getElementById(key);
              if (element) element.value = savedData[key];
          });
      }
      checkAllSectionsFilled();
  }

  // Save form data to localStorage
  function saveData() {
      const formData = getFormData();
      localStorage.setItem('analysisData', JSON.stringify(formData));
      alert('Datos guardados exitosamente.');
  }

  // Get form data as an object
  function getFormData() {
      const formData = {};
      Array.from(form.elements).forEach(element => {
          if (element.tagName === 'TEXTAREA') {
              formData[element.id] = element.value;
          }
      });
      return formData;
  }

  // Enable or disable section save buttons
  function checkSectionFilled(detailsSection) {
      const textareas = detailsSection.querySelectorAll('textarea');
      const saveButton = detailsSection.querySelector('.details-save');
      const allFilled = Array.from(textareas).every(textarea => textarea.value.trim() !== '');

      saveButton.disabled = !allFilled;
  }

  // Enable or disable global save and update buttons
  function checkAllSectionsFilled() {
      const allTextareas = form.querySelectorAll('textarea');
      const allFilled = Array.from(allTextareas).every(textarea => textarea.value.trim() !== '');

      saveAllButton.disabled = !allFilled;
      updateAllButton.disabled = !allFilled;
  }

  // Update form data in localStorage
  function updateData() {
      saveData();
  }

  // Clear form data and localStorage
  function clearData() {
      if (confirm('¿Estás seguro de que quieres vaciar todos los datos?')) {
          localStorage.removeItem('analysisData');
          form.reset();
          detailsSaveButtons.forEach(button => button.disabled = true);
          saveAllButton.disabled = true;
          updateAllButton.disabled = true;
          alert('Datos vaciados.');
      }
  }

  // Event listeners
  detailsSaveButtons.forEach(button => button.addEventListener('click', saveData));
  saveAllButton.addEventListener('click', saveData);
  updateAllButton.addEventListener('click', updateData);
  clearButton.addEventListener('click', clearData);

  form.querySelectorAll('textarea').forEach(textarea => {
      textarea.addEventListener('input', (e) => {
          const detailsSection = e.target.closest('details');
          checkSectionFilled(detailsSection);
          checkAllSectionsFilled();
      });
  });

  // Load data on page load
  loadData();
});


// make <details> tags open
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('details').forEach(details => {
      details.open = true;
  });
});