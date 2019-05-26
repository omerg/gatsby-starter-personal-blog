---
title: Basic Linux Shell Commands - 1
subTitle: Commands required to use UNIX-based operating systems effectively
category: "linux"
cover: simon-abrams-286276-unsplash-cover.jpg
---

In this article, I will describe the commands that are necessary for you to use UNIX-based operating systems effectively.

![unsplash.com](./simon-abrams-286276-unsplash.jpg)

The commands listed below will be described with example usages:

- [clear](#clear)
- [whoami](#whoami)
- [hostname](#hostname)
- [env](#env)
- [pwd](#pwd)
- [ls](#ls)
- [cd](#cd)
- [touch](#touch)
- [vim](#vim)

First, launch your command shell. If you are in a Windows environment, this will be CygWin or PUTTY. On Linux and Mac OS X environments it is the terminal:

```bash
Last login: Thu Apr 10 22:28:44 on ttys000
Omers-iMac:~ omerg$
```

<a name="clear"></a>
### clear

Let's clear the screen with the clear command to make it easier to read the results of the next command:

```bash
Last login: Thu Apr 10 22:28:44 on ttys000
Omers-iMac:~ omerg$ ssh omerg@dev.lucidcode.com.tr
omerg@dev.lucidcode.com.tr's password:
Linux (none) 3.13.7-x86_64-linode38 #1 SMP Tue Mar 25 12:59:48 EDT 2014 x86_64
 
The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.
 
Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
$ clear
 ```
 
The screen is cleared.

<a name="whoami"></a>
### whoami

Reminds us which user we're connected with:

```bash
$ whoami
omerg
$
```

<a name="hostname"></a>
### hostname

Prints the name of the machine:

```bash
$ hostname
tolvanen
$
```

<a name="env"></a>
### env

Displays the values of the environment variables:

```bash
$ env
MAIL=/var/mail/omerg
USER=omerg
SSH_CLIENT=**.***.**.*** 5***3 22
HOME=/home/omerg
SSH_TTY=/dev/pts/0
LC_CTYPE=UTF-8
LOGNAME=omerg
TERM=xterm-256color
PATH=/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
LANG=en_US.UTF-8
SHELL=/bin/sh
LC_ALL=en_US.UTF-8
PWD=/home/omerg
JAVA_HOME=/usr/lib/jvm/java-6-oracle
SSH_CONNECTION=**.***.**.*** ***** **.**.***.*** **
$
```

<a name="pwd"></a>
### pwd

Shows the name of the current directory (Print Working Directory):

```bash
$ pwd
/home/omerg
$
```

<a name="ls"></a>
### ls

Lists the files in the current directory:

```bash
$ ls
$
```

The ls -a command is used to see hidden files:

```
$ ls -a
.  ..  .bash_logout  .bashrc  .profile
$
```

> Some useful arguments for ls:
> 
> - `ls -a` : Displays hidden files
> - `ls -l` : List all files at the bottom of the detail information (`ls -a -l` for hidden files)
> -  `ls -l --color` : List all files in color

<a name="cd"></a>
### cd

Changes current directory

Enter the cd .. command to go to the previous directory:

```bash
$ pwd
/home/omerg
$ cd ..
$ pwd
/home
$
```

To go to the desired directory, the cd command is used as follows:

```bash
$ pwd
/home
$ cd omerg
$ pwd
/home/omerg
$
```

<a name="touch"></a>
### touch

Creates a new file:

```bash
$ pwd
/home/omerg
$ ls
$ touch newFile
$ ls
newFile
$
```

<a name="vim"></a>
### vim

Vim is a commonly used Text Editor in the Linux environment.

If the Vim command is not found in the system, this means that Vim Text Editor is not installed in the system. In this case you can use the apt-get command to download the Vim program. In Linux Debian distributions, the apt-get package manager installs and configures the required tools on the system.

To be able to install, you need to have Super User privileges. So the sudo prefix is ​​used:

```bash
$ sudo apt-get install vim
  
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:
  
    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.
  
[sudo] password for omerg: 
```

The password is entered and setup command is executed:

```bash
[sudo] password for omerg:
Reading package lists... Done
Building dependency tree      
Reading state information... Done
vim is already the newest version.
0 upgraded, 0 newly installed, 0 to remove and 11 not upgraded.
$
```

Let's start using Vim Text Editor:

```bash
$ ls
newFile
$ vim newFile
```

The corresponding file opens in view mode. Content cannot be modified in view mode:

```vim
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
"newFile" 0L, 0C                                              0,0-1         All
```

To make changes to the content, press "i" and "insert mode" is opened:

```vim
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
~                                                                              
-- INSERT --                                                  1,1           All
```

The following commands are often enough to perform basic file update with Vim Text editor:

| Command       |                     Description               | 
| ------------- |:---------------------------------------------:| 
| Esc           | Turns off the Insert mode. All other commands are required to work and to close the file. | 
| :             | Opens the command input mode.                 | 
| w             | Saves Changes                                 | 
| q             | He closes Vim. (A blocking warning is shown if there are unsaved changes)| 
| q!            | Closes Vim without saving changes.            | 

Congratulations for being here :) [In the next post](/temel-linux-shell-komutlari-22/), I will be showing you the essential commands for file manipulation.
