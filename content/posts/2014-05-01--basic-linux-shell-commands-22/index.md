---
title: Basic Linux Shell Commands - 2
subTitle: Commands required to use UNIX-based operating systems effectively
category: "linux"
cover: simon-abrams-286276-unsplash-cover.jpg
---

We continue to examine the commands needed to use UNIX-based operating systems effectively. [In the previous post](/basic-linux-shell-commands-12/), we looked at the most essential file system navigation commands. We also looked at basic vim commands.

In this post, I will be showing a few more commands for file manipulation.

![unsplash.com](./simon-abrams-286276-unsplash.jpg)

The commands listed below will be described with example usages:

- [mv](#mv)
- [cp](#cp)
- [rm](#rm)
- [mkdir](#mkdir)
- [zip](#zip)
- [unzip](#unzip)
- [tar](#tar)
- [wget](#wget)
- [exit](#exit)
- [aptitude / apt-get](#apt-get)

<a name="mv"></a>
### mv

Used to change the name or location of a file:

```bash
$ ls
newFile
$ mv newFile newFileRenamed
$ ls
newFileRenamed
$
```

<a name="cp"></a>
### cp

Used to copy a file from one place to another:

```bash
$ ls
newFileRenamed
$ cp newFileRenamed copyOfFile
$ ls
copyOfFile  newFileRenamed
$
```

<a name="rm"></a>
### rm

The file delete command:

```bash
$ ls
copyOfFile  newFileRenamed
$ rm newFileRenamed
$ ls
copyOfFile
$
```

<a name="mkdir"></a>
### mkdir

Creates a new directory (Make Directory)

```bash
$ ls
copyOfFile
$  mkdir newFileDir
$ ls
copyOfFile  newFileDir
$
```

When we want to delete the newly created directory, we learn a new information about the rm command:

```bash
$ ls
copyOfFile  newFileDir
$ rm copyOfFile
$ ls
newFileDir
$ rm newFileDir
rm: cannot remove `newFileDir': Is a directory
$
```

The rm command is sufficient to delete a file. For deleting a directory however, rm -rf command is used. (f: force r: recursive)

```
$ ls
newFileDir
$ rm -rf newFileDir
$ ls
$
```

<a name="zip"></a>
### zip

Used to compress files in .zip format:

```bash
$ ls
$ touch a #dosya yaratır
$ ls
a
$ zip a.zip a
  adding: a (stored 0%)
$ ls
a  a.zip
$
```

<a name="unzip"></a>
### unzip

Used to open zipped files:

```bash
$ ls
a  a.zip
$ rm a
$ ls
a.zip
$ unzip a.zip
Archive:  a.zip
 extracting: a                      
$ ls
a  a.zip
$
```

<a name="tar"></a>
### tar

It is used to open compressed files in .tgz and tar.gz format which are more common on Linux platforms.

To compress an existing open (uncompressed) file, use the tar command with the -zcvf argument:

```bash
$ ls
a  a.zip
$ tar -zcvf a.tar.gz a
a
$ ls
a  a.tar.gz  a.zip
$
```

Use the -xzvf argument to open an existing compressed file:

```bash
$ ls
a  a.tar.gz  a.zip
$ rm a
$ ls
a.tar.gz  a.zip
$ tar -xzvf a.tar.gz
a
$ ls
a  a.tar.gz  a.zip
$
```

<a name="wget"></a>
### wget

Downloads the file at the given Web address:

```bash
$ wget http://download.thinkbroadband.com/5MB.zip
```

<a name="exit"></a>
### exit

If it is a session connected via SSH, it breaks the connection. If there is no SSH connection, the terminal closes:

```bash
$ exit
Connection to dev.lucidcode.com.tr closed.
Omers-iMac:~ omerg$
```

<a name="apt-get"></a>
### aptitude / apt-get

apt-get is a package manager for Debian Linux distributions. It allows you to find and install new applications.

For example, lets go to app repository and search for apps whose name includes 'text' within their name:

```bash
$ aptitude search text
p   alsaplayer-text                 - PCM player designed for ALSA (text version
p   bible-kjv-text                  - King James Version of the Bible - text and
p   cl-contextl                     - context orientation for Common Lisp      
p   context                         - powerful TeX format                      
p   context-modules                 - additional ConTeXt modules               
p   contextfree                     - image generator based on context-free gram
p   dav-text                        - A minimalist ncurses-based text editor   
p   doc-linux-fr-text               - Linux docs in French: HOWTOs, MetaFAQs in
p   doc-linux-ja-text               - Linux HOWTOs and FAQs in Japanese (TEXT fo
p   docbook-xsl-doc-text            - stylesheets
```

We will see a message when we want to download 'dev-text' application:

```bash
$ apt-get install dev-text
E: Could not open lock file /var/lib/dpkg/lock - open (13: Permission denied)
E: Unable to lock the administration directory (/var/lib/dpkg/), are you root?
$
```

The apt-get install command requires Super User authorization because it is a command that makes modifications on the system. To run any command on Linux platforms with 'sudoers' authority, the 'sudo' suffix is ​​added:

```bash
$ sudo apt-get install dev-text
```

> To trigger a command by using the sudo attachment, the user must have 'sudoers' privilege. The admin user gives the privilege.

The apt-get install command is run again with the sudo attachment:

```bash
$ apt-get install dev-text
[sudo] password for omerg:
```

Congratulations! Now you are familiar with the most commonly used Linux Shell Commands.
