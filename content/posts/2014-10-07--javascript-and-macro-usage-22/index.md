---
title: JavaScript and Macro Usage - 2
subTitle: Let's get to know the JavaScript macro library named sweet.js!
category: "javascript"
cover: js-cover.png
---

![Sweets](./patrick-fore-389419-unsplash.jpg)

<a name="intro"></a>
### Intro

[In the previous post](/javascript-and-macro-usage-12), we studied some very simple examples of JavaScirpt macro structures. Macros can have many uses; Some of them write rapid prototyping or algorithm, but macros definitely have the potential to offer you more. It's up to your imagination.

Let's expand our examples a little more with a class notation example written in a macro:

 - [Intro](#intro)
 - [Example: Class Syntax](#example-class-syntax)
 - [Summary](#summary)
 - [Further Reading](#further-reading)
 - [Fun Stuff](#fun-stuff)

 <a name="example-class-syntax"></a>
#### Example: Class Syntax

Let's say you want to create a JavaScript class object. To do this with JavaScript, you can use the prototype feature to write the following code:

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.say = function(msg) {
    console.log(this.name + " says: " + msg);
}
```

The Person object described above and the "say" method can then be used as follows:

```javascript
var you = new Person("Omer");
you.say("I love JavaScript!");

//Console Output
>Omer says: I love JavaScript!
```

So what if we want to write the same object with the "class" syntax? We have three options:

 1. Leave JavaScript and continue to write with Java. ( :smile: )
 2. Wait for ES6 Standards to become widespread.
 3. Using sweet.js !

If you want to create an object using the Java-like "class" syntax with sweet.js, just define a few lines of macro:

```javascript
macro class {
 
  rule {
 
    $className {
        constructor $cparams $cbody
        $($mname $mparams $mbody) ...
    }
 
  } => {
 
    function $className $cparams $cbody
 
    $($className.prototype.$mname
      = function $mname $mparams $mbody; ) ...
 
  }
}
```

That's it. You can now define a "class" with JavaScript:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  say(msg) {
    console.log(this.name + " says: " + msg);
  }
}
var you = new Person("Omer");
you.say("Macros are sweet!");
```
Console:
```javascript
>Omer says: Macros are sweet!
```
 <a name="summary"></a>
### Summary

I think sweet.js is an extremely powerful tool and, frankly, when I first saw it, I had the feeling that macros could give direction to the future for JavaScript. 

Macro Hygiene, which comes up with the concept of Macro, and the use of a macro to replace Google Closure Compiler and similar compilers can be mentioned in another article.

In the meantime, if you are interested in examples, you can review more Macros:

> *(I highly recommend the macro Randomly Disappearing Code Random macro example, which is made entirely for fun. :smiley: )*

 <a name="further-reading"></a>
### Further Reading

 - http://sweetjs.org/
 - https://github.com/mozilla/sweet.js
 - [Stop Writing JavaScript Compilers! Make Macros Instead](http://jlongster.com/Stop-Writing-JavaScript-Compilers--Make-Macros-Instead)
 - http://disnetdev.com/blog/2012/12/20/how-to-read-macros/
 - https://github.com/mozilla/sweet.js/wiki/Example-macros
 - http://sweetjs.org/browser/editor.html
 - http://www.paulgraham.com/onlisp.html
 - http://en.wikipedia.org/wiki/Hygienic_macro
 - http://jlongster.com/Writing-Your-First-Sweet.js-Macro
 - http://jlongster.com/Compiling-JSX-with-Sweet.js-using-Readtables
 - https://mail.mozilla.org/pipermail/es-discuss/2008-August/006837.html
 - http://www.okanakyuz.com/lisp-notlari-giris/
 - http://blog.fatihak.in/sweet-js-ile-javascript-macrolar-a-giris/
 - https://github.com/Gozala/wisp

<a name="fun-stuff"></a>
##### Fun Stuff

 - [StackOverflow - What is the worst real-world macros/pre-processor abuse you've ever come across?](http://stackoverflow.com/questions/652788/what-is-the-worst-real-world-macros-pre-processor-abuse-youve-ever-come-across)
