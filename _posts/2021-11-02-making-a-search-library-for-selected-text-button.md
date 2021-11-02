---
layout: post
title: "Making a “Search library for selected text” button"
date: 2021-11-02 12:00:00
description: 
---

I have made a handy little shortcut for myself in my browser, which may be of use to anyone doing academic research. Here’s the “use case”:

We tend to navigate to the library website a lot, to search for books, etc. What if there was a quick way to do so, using a button that would pick up on (a) any selected text on the current page, or (b) any headers on the current page, and take you automatically to the search page for the library?

Let’s make it happen.

## Step 1

In a text editor (I’m going to use VS Code), we’re going to start a short JavaScript code block. We start it by constructing the surrounding elements. We know we want the browser to know that there’s JavaScript code a-coming, and that we want to execute it immediately:

```js
javascript:(
 function() {
  ...
 }
)();
```

On line 1, we tell the browser in a call that the following lines should be interpreted as JavaScript, and on line 5, we close out the JavaScript section, and using the final `()`, we tell the browser to execute the code immediately. (We could add it inside the code block as well, after the ending `}` for the unnamed function, but let’s keep it here for clarity.)

Line 2 and 4 are essentially just an unnamed function being returned to our call.

## Step 2

Next, we want to check whether the browser has text selected. If it does, that should be our automatically filled out text (`autoFill`) in our popup. If we have no text selected, it should join together any `<h1>...</h1>` html elements together with a space. Thus:

```js
javascript:(
  function(){
    var autoFill = getSelection().toString();
    if (!autoFill) {
      autoFill = [...document.querySelectorAll("h1")]
                    .map(elem=>elem.innerText)
     .join(' ');
    }
  }
)();
```

On line 3, we set up our `autoFill` variable to the selection of the window by using JavaScript’s built-in function `getSelection`. In one go, we convert it into a string by using the window selection’s built-in method `toString`.

On line 4, we check whether the `autoFill` variable has been set, and if it has not, in line 5, we start our logic for getting the text from all of the `h1` html elements. We do so first by querying the document for all the elements using the `querySelectorAll` function. Since it returns a collection of HTML elements and we want an array, we can use the `[...list]` syntax from JavaScript, which creates an array from any list.

On line 6 and 7, using JavaScript’s convenient chaining (having many functions following each other using a period in-between), we use the array’s `map` function to extract each of the `innerText` properties from the `h1` elements in the array. This will result in an array, which can be joined together using the `join` method of any array in JavaScript. We simply pass a space `' '` to the function, to have all the elements joined by a space.

## Step 3

Now, we want the script to verify with us, before it takes us to the library catalog, what it is about to search for. If it isn’t correct, we want to have the option to press “Cancel” in a popup, and stop any further action.

```js
javascript:(
  function(){
    var autoFill = getSelection().toString();
    if (!autoFill) {
      autoFill = [...document.querySelectorAll("h1")]
                    .map(elem=>elem.innerText)
                    .join(' ');
    }
    const searchFor = prompt('Search for?', autoFill);
    if (searchFor) {
      window.open(`https://library.website.here/search_script?query=${encodeURIComponent(searchFor)}`);
    }
  }
)();
```

On line 9, we set up a new constant (since this will only be changed once), which comes from a prompt presented to us. The prompt will ask what we want to “Search for?” And it will come pre-filled with our `autoFill` (which you will remember from the script above is either set to the current selection or a joined string of all the page’s headers).

Now, if we press “Cancel” in this prompt, we don’t want the script to continue any action. Thus, on line 10, we check to make sure that  the `searchFor` constant is set to anything (it will be `null` if “Cancel” was pressed and an empty string, `''`, if the field was left empty).

On line 11, you will have to do some research. Go to your library website (or whichever search engine you will want to query using this script), do a search for “TERM” (in all-caps), and copy the url into the angled single quotation marks ``...``. The result, say, if you are at the University of Chicago, would be:

window.open(`https://catalog.lib.uchicago.edu/vufind/Search/Results?lookfor=TERM&type=AllFields`);

Since we don’t want the script to search for “TERM” every time that we execute it, we will replace TERM in the URL with the expression `${encodeURIComponent(searchFor)}`. The built-in `encodeURIComponent` function will make sure that any string that we have put into `searchFor` will be encoded correctly for any URL string to interpret it correctly (so spaces will be converted to “%20,” the at-sign @ will be converted to “%40” etc.). So, the above example would be:

window.open(`https://catalog.lib.uchicago.edu/vufind/Search/Results?lookfor=${encodeURIComponent(searchFor)}&type=AllFields`);

Note that this URL will be very different, depending on your university. For example, for New York University, the same line would read:

window.open(`http://bobcat.library.nyu.edu/primo-explore/search?institution=NYU&vid=NYU&tab=all&search_scope=all&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&displayField=all&primoQueryTemp=TERM&query=any,contains,${encodeURIComponent(searchFor)}&sortby=rank&lang=en_US`);

And for CUNY, the line would read:

window.open(`https://cuny-gc.primo.exlibrisgroup.com/discovery/search?vid=01CUNY_GC:CUNY_GC&query=any,contains,{encodeURIComponent(searchFor)}&tab=Everything&search_scope=MyInst_and_CI&sortby=rank&mfacet=rtype,include,books,1&mfacet=rtype,include,book_chapters,1&lang=en_US&mode=basic&offset=0`);

# Step 4

Our script is now complete:

```js
javascript:(
  function(){
    var autoFill = getSelection().toString();
    if (!autoFill) {
      autoFill = [...document.querySelectorAll("h1")]
                    .map(elem=>elem.innerText)
                    .join(' ');
    }
    const searchFor = prompt('Search for?', autoFill);
    if (searchFor) {
      window.open(`https://catalog.lib.uchicago.edu/vufind/Search/Results?lookfor=${encodeURIComponent(searchFor)}&type=AllFields`);
    }
  }
)();
```

(Remember to replace your `window.open` line with the correct URL for your university or service!)

Now, all that’s missing is to put the script to work. In your browser, add a new bookmark in your toolbar. In Chrome, for example, right click on the toolbar and select “Add Page…”

In the popup, under “URL,” copy and paste the entire script. (Bonus point, you can remove all the spaces in the script to make it neater, but it is not necessary.) Under “Title,” you can put whatever you want the button to read in the toolbar. “Search library,” for instance.
