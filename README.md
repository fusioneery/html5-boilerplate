<h1><strong>Optimized HTML5 + SASS + JS Boilerplate</strong> based on Webpack 4 </h1>

<p>Author: <a href="https://vk.com/abramov_videotmb" target="_blank">Vlad Abramov</a></p>
<p>License: ISC</p>

<p>Optimized HTML5 start template is based on Webpack 4. This boilerplate is suitable for tiny static web-sites and landing pages. 

It has lots of great feautures such as:
- SASS support
- ES7 support
- Autoprefixer
- Image optimization
- JS and CSS minification
- Compression
- Maintainable and convinient folder structure
- Just one command to bring up and prepare all stuff (e.g. images, pages, styles) to production folder

The template contains a .htaccess file with caching rules for Apache web server.
Optimized HTML5 + SASS + JS Boilerplate has Social Graph Meta Data, favicons for all devices and browsers and other SEO meta data tags.
</p>

<p><strong>What`s has been included above theese things, but commented?</strong>
Yandex.Metrika and Google Tag Manager scripts, Bootstrap 4, JQuery.</p>


<h2>How to use Optimized HTML5 start template for development?</h2>

<ol>
	<li><a href="https://github.com/fusioneery/html5-boilerplate/archive/master.zip">Download</a> or clone <strong>Optimized HTML 5</strong> from GitHub</li>
	<li>Install Node Modules: <strong>npm i</strong></li>
	<li>Run the template: <strong>npm start</strong>.</li>
</ol>
<p>If you want to create <b>more than one page</b>, you should just create "yourpage.html" in the "src" folder. Webpack will automatically copy all of theese html pages. <i> Don't forget to copy "head" from index.html!</i></p>

<h2>How to make production build?</h2>

<strong>npm run-script build</strong>: runs task for cleaning dist directory and making prod build, which is ready for uploading to server, except favicons.

For this point, I recommend you a <a href="https://realfavicongenerator.net/">Favicon generator</a>. Place the contents of the archive into the "dist" folder. 


<h2>Rules for working with the starting HTML template and having a wonderful website</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>src/index.html</strong>;</li>
	<li>Don't forget to fill in the head! <a href="https://www.schemaapp.com/tools/jsonld-schema-generator/">Schema.org generator</a> and <a href="https://realfavicongenerator.net/">favicon generator</a>;</li>
	<li><strong>Custom HTML</strong> comment in app/index.html - all your custom HTML;</li>
		<li>Remember about accessibility, semantic layout and no errors on <a href="https://validator.w3.org/">validators</a>;</li>
        <li>If you want, you can use JQuery library, by uncommenting it in index.html <b>BUT</b> you can implement any feauture with native JS, providing better perfomance, than JQ. At the very least, you can use <a href="https://github.com/madrobby/zepto/">zepto.js</a>;</li>
	<li>All custom JS located in <strong>src/js/main.js</strong>;</li>
	<li>All Sass vars should be placed in <strong>src/sass/vars.sass</strong>;</li>
	<li>All Sass custom styles should be placed in <strong>src/sass/main.sass</strong>;</li>
    <li>All Sass media queries should be placed in <strong>src/sass/media.sass</strong>;</li>
</ol>

<p>
The template is developed for having best optimization results on all web-perfomance checkers and faster&better development experience for developers from developer, with love.
</p>
</p>