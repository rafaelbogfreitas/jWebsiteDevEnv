J World Music
=============
[About](#About)

[Technologies](#Technologies)

[Usage](#Usage)

[Build](#Build)

[Contact](#Contact)

## About
> This project was built to meet the client's request for a website to display some of his musical work. The idea was to create a player to listen to some of his songs, have a link to play his video, as well as find some info about him and contact form him that linke to his email.
The website is hosted on [Netlify](https://www.netlify.com/).
 
## Technologies
This project was built using the following technologies:
- HTML5
- SASS compiled with GULP-SASS
- JQuery
- JavaScript
- Mustache
- Gulp

## Usage
After cloning the project's folder, the following command must be ran in the terminal to download the dependencies:
~~~
npm i --save-dev gulp-browserify gulp-concat gulp-compass gulp-cssnano gulp-imagemin gulp-minify-html gulp-uglify-es
~~~

Following the installation, the we can run the command bellow to watch changes in *./components/* to automatically compile all ***.scss*** into **.css** and concatenate all ***.js** files into one script file:

~~~
gulp watch
~~~

and the defaul gulp command,

~~~~
gulp
~~~~

will run the following dependencies 
- gulp-minify-html
- gulp-cssnano
- gulp-uglify-es
- imagemin

to minify all files and pipe them to **./builds/dist**.

## Build

>The root of the project's folder consist in two main folders: **components** and **builds**.
The **components** folder contains two files:
-scripts
-sass
>Inside **sass** are located all sass partials, organized by components. All of them are exported to a main **style.scss**, which imports all partials and is then compile to *CSS* and piped to *./builds/development/css*.
In **scripts** can be found all **\*.js** files which are concatenated using *gulp-concat* into a single **script.js** and piped to *~/builds/development/js*.

**MarkUp**

Almost all html is contained in **index.html** and separeted in the following sections:

```html
<!-- Home section -->
    ...
<!-- MEET section -->
    ...
<!-- SONGS section -->
    ...
<!-- VIDEO section -->
    ...
<!-- CONTACT section -->
    ...
    <!-- FORM section -->
        ...
```
The markup for the song player is build dinamically using this **Mustache** template:

```html
 <script type="text/template" id="template">
    {{#songs}}
    <li>
    <img data-src={{dataSource}} src={{src}} alt={{alt}}>
    <div>{{songTitle}}</div>
    <!-- <span>paused</span> -->
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
    </li>
    {{/songs}}

</script>
```

which is rendered using a *JavaScript* object and *JQuery* located in *./builds/development/js* folder. It contains the relevant data for every song in the player. 

```javascript
let data = {
        "songs":[
            {
                "songTitle":"Get Out",
                "dataSource":"songs/getOut.mp3",
                "src":"images/play.svg",
                "alt":"play button"
            }
        ]
};

let content = $('#template').html();

    let result = Mustache.render(content, data);

    $('#template-container').html(result);
```

*JQuery* finds the *script* tag in **index.html**, uses the *data* object to render the markup and then target a container, *#template-container* element with the resulting code.

**Scripts**

## Contact

[Email](rafaelbogfreitas@gmail.com)
[Linkedin](https://github.com/rafaelbogfreitas)
Project built by [Rafael Freitas](https://www.rafaelfreitas.co.uk) | 2019