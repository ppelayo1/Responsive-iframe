# Wordpress-plugin-Responsive-iframe
Insert iframes thru Gutenberg Blocks that are responsive.

# INSTRUCTIONS

# Install
Can be found at https://wordpress.org/plugins/responsive-iframe/

# How to use
From the block editor under embed select Responsive iframes your website will display by default, with some default settings.

Site Address – The url address of the website you want to iframe

Width – This represents the actual width you want to display from the iframed website.

Height – This represents the actual height you want to display from the iframed website.

Scrollbar – Displays a scroll bar if the height,and width are smaller than the iframe website.

Border – Dislays a default border around the iframe element.

Scale – This will change the max-width percentage of the iframe’s parent element, it will allow the element to be scaled by size.

Additional CSS – Any additional CSS will be applied to the iframe’s parent element.

# TECHNICAL STUFF FOR DEVELOPERS
This section provides a technical overview of the plugin.

The plugin was created thru the use of Create-Guten-Block package that can be obtained thru NPM.

The source files can be found in the src folder.

responsiveIframe.js is the file that makes the iframes responsive from the post page.

constants.js hold the constants that are plugin wide.

block.js registers the block and handles the edit and save functions.
Any iframe responsiveness in the block editor is handled by the block.js.

inspector.js solely defines the inspector sidebar, this is used within block.js.
