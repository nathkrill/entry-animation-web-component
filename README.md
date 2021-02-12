# entry-animation-web-component
Web Component to easily handle scroll entry animations

## Usage

 1. Install the package `npm install entry-animation-web-component`
 2. Include `dist/js/entry-animation.min.js` in your project
 3. Use the element in your HTML: 
    ```
        <entry-animation>
            <article>
                <h2>Elements
                <p>Put here elements to animate in</p>
            </article>
        </entry-animation>
    ```
 4. Add handler for entry event in JS:
    ```
        let entry = document.querySelector('entry-animation');
        entry.addEventListener('enterStart', () => {
            // Do something here
        }, false);
    ```

## Events

|enterStart|Fired when the element first enters the viewport|
|enterQuarter|Fires when the element is 25% of the way in|
|enterHalf|Fires when the element is half-way in the viewport|
|enterThreeQuarters|Fires when the element is 75% of the way in|
|enterEnd|Fires when the element is all the way in|

## Development

To develop, clone the repo, then run `npm run develop` to watch `src/entry-animation.js` and build.

Run `npm run build` to build a minified version.