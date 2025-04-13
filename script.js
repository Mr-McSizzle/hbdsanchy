function toggleChecked(itemId) {
    const item = document.getElementById(itemId);
    if (item.checked) {
        alert(`${itemId.charAt(0).toUpperCase() + itemId.slice(1)} is checked off! 🎉`);
    } else {
        alert(`${itemId.charAt(0).toUpperCase() + itemId.slice(1)} is unchecked.`);
    }
}