=== Responsive iframe ===
Contributors: PatrickPelayo
Tags: responsive, iframe,block
Requires at least: 5.4.2
Tested up to: 5.6.0
Stable tag: 1.0.0
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A Responsive iframe

== Description ==
An iframe that will look the same regardless of the width of the page.

= Instructions =
From the block editor under embed select Responsive iframes your website will display by default, with some default settings.
										
Site Address - The url address of the website you want to iframe

Width -  This represents the actual width you want to display from the iframed website.

Height - This represents the actual height you want to display from the iframed website.
												
Scrollbar - Displays a scroll bar if the height,and width are smaller than the iframe website.

Border - Dislays a default border around the iframe element.
							   
Scale - This will change the max-width percentage of the iframe's parent element, it will allow the element to be scaled by size.

										
Additional CSS - Any additional CSS will be applied to the iframe's parent element.

= Technical Stuff for Developers =
> This section provides a technical overview of the plugin.

The plugin was created thru the use of  [Create-Guten-Block](https://github.com/ahmadawais/create-guten-block) package that can be obtained thru NPM.

The source files can be found in the src folder.
* responsiveIframe.js is the file that makes the iframes responsive from the post page.


* constants.js hold the constants that are plugin wide.


* block.js registers the block and handles the edit and save functions. 
Any iframe responsiveness in the block editor is handled by the block.js.


* inspector.js solely defines the inspector sidebar, this is used within block.js.

== Screenshots ==
1. Example of New York Times in an iframe.
2. The iframe in the website, demonstrating from a mobile viewpoint.
3. The iframe in the website, demonstrating from a desktop viewpoint.

== Changelog ==

= 1.0 =
* first release
	
== Upgrade Notice ==

= 1.0 =
* first release
	
== Frequently Asked Questions ==

 = In the editor I can't click on the iframe =
 
 Click directly underneath the iframe element, you want to select the block so you can edit it. 
 
 = What can I stylize without breaking the iframe =
 
 Leave the iframe element largly alone, focus css on the parent div element. 
 Do not modify the height on the div element.