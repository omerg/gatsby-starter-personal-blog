---
title: vim commands guide
subTitle: An introduction of most used vim commands
category: "linux"
cover: sai-kiran-anagani-555972-unsplash-cover.jpg
---

One of the most important things to know when analyzing and editing text in a UNIX environment is to be able to navigate effectively inside the textual content.

![unsplash.com](./sai-kiran-anagani-555972-unsplash.jpg)

The sections listed below will show the most common ways of navigating:

- [Character / word-based navigation](#character)
- [Navigating on the Line](#navigating-on-the-line)
- [Navigation between lines](#navigation-between-lines)
- [Screen-based navigation](#screen-based-navigation)
- [Navigating by navigation history](#navigation-history)
- [Navigating by search criteria](#navigating-by-search-criteria)
- [Navigating by bracket opening / closures](#navigating-by-brackets)
- [Further Reading](#further-reading)

<a name="character"></a>
### Character / word-based navigation

```
 h  move one character to the left

 j  move down one line

 k  move up one line

 l  move one character to the right

 w  go to the beginning of the next word

 b  go to the beginning of the previous word

 e  go to the end of the current word
 ```

You can specify the number of times the commands listed above should be repeated by adding a number next to it. For example, you can go down 4 lines with 4j command.

<a name="navigating-on-the-line"></a>
### Navigating on the line

```
 0  go to the beginning of the line

 $  go to the end of the line

 \_  go to first non space character of the line

 g\_  go to last non space character of the line
```

<a name="navigation-between-lines"></a>
### Navigation between lines

```
gg  go to the first line

 G  go to the last line

 nG  go tho n'th line ( where n is a positive integer )
```

<a name="screen-based-navigation"></a>
### Screen-based navigation

These are commands based on the range you are viewing on the screen:

```
 H  go to the first line currently visible

 M  go to the line that is in the middle of the screen

 L  go to the last line currently visible

 z.  move the window vertically so that the current line is in the middle

 zt  move the window vertically so that the current line is at the top

 zb  move the window vertically so that the current line is at the bottom

 Ctrl-D  move half page down

 Ctrl-U  move half page up

 Ctrl-B  move whole page up

 Ctrl-F  move whole page down
```

<a name="navigation-history"></a>
### Navigating by navigation history

```
 Ctrl-o  Go to the previous cursor position

 Ctrl-i  Go to the next cursor position (works only if you had gone back before)
```

<a name="navigating-by-search-criteria"></a>
### Navigating by search criteria

```
 n  next occurence of the search expression (to search, use :?\<exp> )

 N  previous occurence of the search expression

 \*  next repetition of the word on which the cursor is on

 \#  previous repetition of the word on which the cursor is on
```

<a name="navigating-by-brackets"></a>
### Navigating by bracket opening / closures

```
%  go to the matching bracket { } [] ( ) of the bracket that the curser is on
```

<a name="further-reading"></a>
### Further Reading

 - [http://vim.wikia.com/wiki/All_the_right_moves](http://vim.wikia.com/wiki/All_the_right_moves)
 - [http://www.zeitoun.net/articles/change-shell-debian-linux/start](http://www.zeitoun.net/articles/change-shell-debian-linux/start)
 - [Lucius : Light and dark color scheme for GUI and 256 color terminal.](http://www.vim.org/scripts/script.php?script_id=2536)
