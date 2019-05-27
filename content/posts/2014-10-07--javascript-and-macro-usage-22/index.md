---
title: JavaScript and Macro Usage - 2
subTitle: Let's get to know the JavaScript macro library named sweet.js!
category: "javascript"
cover: js-cover.png
---

![Sweets](./patrick-fore-389419-unsplash.jpg)

### Giriş

[Bir önceki yazıda](/javascript-and-macro-usage-12) ,basit örnekler ile JavaScirpt macro'larını yapısal olarak tanıdık. Macro'ların pek çok kullanım alanı olabilir; hızlı prototipleme ya da algoritma yazmak bunlardan bazıları, ama macro'lar kesinlikle size daha fazlasını sunabilecek potansiyele sahip. Burada iş tamamen sizin hayal gücünüze kalmış.

Bu yazıda örneklerimizi biraz daha genişletelim:

 <a name="ornek-class-syntax"></a>
#### Örnek: Class Syntax

Diyelim ki bir JavaScript nesnesi yaratmak istiyorsunuz. JavaScript ile bu işlemi yapmak için prototype alanını kullanarak aşağıdaki kodu yazarsınız:

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.say = function(msg) {
    console.log(this.name + " says: " + msg);
}
```

Yukarıda tanımlanan Person nesnesi ve "say" metodu, aşağıdaki gibi kullanılabilir:

```javascript
var you = new Person("Omer");
you.say("I love JavaScript!");

//Console Output
>Omer says: I love JavaScript!
```

Peki aynı nesneyi "class" syntax'ı ile yazmak istersek? Bunun için üç seçeneğimiz var:

 1. JavaScript'ten ayrılıp Java ile yazmaya devam etmek. (smile)
 2. ES6 Standartlarının yaygınlaşmasını beklemek.
 3. sweet.js kullanmak.

sweet.js sayesinde Java benzeri "class" sözdizimi kullanarak nesne oluşturmak isterseniz birkaç satırlık bir macro tanımlamanız yeterli:

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

İşte bu kadar. Artık JavaScript ile "class" tanımlayabilirsiniz:

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
 <a name="sonuc"></a>
### Sonuç

sweet.js in son derece güçlü bir araç olduğunu düşünüyorum ve açıkçası ilk gördüğümde JavaScript için geleceğine macro'ların yön verebileceği hissine kapıldım. Macro kavramı ile birlikte gündeme gelen Macro Hygiene konusunu ve macro kullanımının Google Closure Compiler ve benzeri derleyicilerin yerine geçme olasılığına başka bir yazıda değinebilirim. 

Bu arada örnekler ilginizi çektiyse daha fazla Makro örneğini inceleyebilirsiniz:

> *(Listede yer alan tamamen muzurluk amaçlı yapılmış "Randomly Disappearing Code" macro örneğini şiddetle tavsiye ederim. :smiley: )

 <a name="ilgili-yazilar"></a>
### İlgili Yazılar

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


<a name="ilginizi-cekebilecek-diger-konular"></a>
##### İlginizi Çekebilecek Diğer Konular

 - https://github.com/Gozala/wisp
 - [StackOverflow - What is the worst real-world macros/pre-processor abuse you've ever come across?](http://stackoverflow.com/questions/652788/what-is-the-worst-real-world-macros-pre-processor-abuse-youve-ever-come-across)
