import React, { useState } from 'react';

const About = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample data for the menu
  const menuItems = [];

for (let i = 1; i <= 30; i++) {
  menuItems.push(`Item ${i}`);
}

  // Function to handle click events
  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="grid grid-cols-3 h-screen">
      {/* Left column - Menu */}
      <div className="col-span-1 overflow-y-auto">
        <div className="p-10">
        {menuItems.map((item, index) => (
          <div className="p-1">
          <div
            key={index}
            className="p-4 rounded-lg hover:bg-gray-200 hover:shadow-sm cursor-pointer"
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </div>
          </div>
        ))}
        </div>
      </div>

      {/* Right column - Content Display */}
      <div className="col-span-2 bg-gray-100 p-4">
        {selectedItem ? <p>Content for {selectedItem}</p> : <p>Select an item</p>}
      </div>
    </div>
  );
};

export default About;