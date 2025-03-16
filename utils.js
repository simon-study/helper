// scrolling checked item
const selectDropdown = document.querySelector('.ant-select-selector');
if (selectDropdown) {
  // Click to open dropdown
  selectDropdown.click();
  
  // Function to click all options with scrolling
  const clickAllOptions = async () => {
    const listHolder = document.querySelector('.ant-select-dropdown .rc-virtual-list-holder');
    const totalHeight = listHolder.scrollHeight;
    const viewHeight = listHolder.clientHeight;
    let currentScroll = 0;
    
    while (currentScroll <= totalHeight) {
      // Get visible options and click them
      const options = Array.from(document.querySelectorAll('.ant-select-item-option'));
      options.forEach((option) => {
        if (!option.classList.contains('ant-select-item-option-selected')) {
          option.click();
        }
      });
      
      // Scroll down
      currentScroll += viewHeight;
      listHolder.scrollTop = currentScroll;
      
      // Wait for new items to render
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  };

  // Wait for dropdown to open, then start clicking
  setTimeout(clickAllOptions, 100);
}
