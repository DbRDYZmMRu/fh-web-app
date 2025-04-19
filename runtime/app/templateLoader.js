




/**
 * Dynamically loads a template into a target DOM element.
 * 
 * @param {string} templateId - The ID of the template to load.
 * @param {string} targetId - The ID of the target element where the template will be inserted.
 */
export function loadTemplate(templateId, targetId) {
  const template = document.getElementById(templateId);
  const target = document.getElementById(targetId);
  
  if (template && target) {
    target.innerHTML = template.innerHTML; // Insert the template content into the target element
    console.log(`Template "${templateId}" loaded into "${targetId}".`);
  } else {
    console.warn(`Template "${templateId}" or target "${targetId}" not found.`);
  }
}