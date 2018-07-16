/*
I'm supposed to take these and assign the links to each variable.
I've not been able to even get the navigation links to work yet but
I'm sure that if I figure out one I'll figure out the rest.
*/


let navigationLinks;
let galleryLinks;
let footerImages;

galleryLinks = document.getElementById('gallery');

navigationLinks = document.getElementById('nav links');

console.log(galleryLinks);
console.log(typeof galleryLinks);

var items = galleryLinks.getElementsByTagName('li');
console.log(items);
console.log(typeof items);

console.log('In the list: ', items[0].getElementsByTagName('a')[0].href);

for (var i = 0; i < items.length; i++) {
	console.log(items[i]);
};
