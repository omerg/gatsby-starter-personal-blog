---
title: Temel Linux Shell Komutları - 1
subTitle: UNIX temelli işletim sistemlerini etkin biçimde kullanabilmeniz için gerekli olan komutlar
category: "linux"
cover: simon-abrams-286276-unsplash-cover.jpg
---

# Temel Linux Shell Komutları ( 1. Bölüm )

Bu yazımda UNIX temelli işletim sistemlerini etkin biçimde kullanabilmeniz için gerekli olan komutları anlatacağım.

![unsplash.com](./simon-abrams-286276-unsplash.jpg)

Aşağıda listelenmiş olan kısayollar size bunu sağlayacaktır:

- [clear](#clear)
- [whoami](#whoami)
- [hostname](#hostname)
- [env](#env)
- [pwd](#pwd)
- [ls](#ls)
- [cd](#cd)
- [touch](#touch)
- [vim](#vim)

Windows ortamında iseniz CygWin ya da PUTTY, Linux ve Mac OS X ortamlarında ise Terminal açılır:

```bash
Last login: Thu Apr 10 22:28:44 on ttys000
Omers-iMac:~ omerg$
```

<a name="clear"></a>
### clear

Bir sonraki komutun sonuçlarını okumayı kolaylaştırması için ekranı clear komutuyla temizleyelim:

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
 
Ekran temizlendi.

Aşağıda listlenmiş komutların başına sayı ekleyerek kaç kez tekrar edilmesi  gerektiğini belirtebilirsiniz. (Örnek: 4j komutu ile 4 satır aşağı inebilirsiniz.)

<a name="whoami"></a>
### whoami

Hangi kullanıcı ile bağlandığımızı bize hatırlatır:

```bash
$ whoami
omerg
$
```

<a name="hostname"></a>
### hostname

Makinanın ismini yazar:

```bash
$ hostname
tolvanen
$
```

<a name="env"></a>
### env

Ortam değişkenlerini bildirir:

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

Üzerinde olunan dizini belirtir (Print Working Directory):

```bash
$ pwd
/home/omerg
$
```

<a name="ls"></a>
### ls

Üzerinde olunan dizindeki dosyaları listeler (List)

```bash
$ ls
$
```

Gizli dosyalari görmek için ls -a komutu kullanılır:
```
$ ls -a
.  ..  .bash_logout  .bashrc  .profile
$
```

>ls komuru için faydalı argumanlar:
> 
> - ls -a -> Gizli dosyaları görüntüler
> - ls -l > Tüm dosyaları detay bilgileriyle alt alta listeler (Gizli dosyalar için ls -a -l )
> - ls -l --color Tüm dosyaları alt alta renkli olarak listeler

<a name="cd"></a>
### cd

Dizin değiştirmeye yarar. (Change Directory)

Bir önceki dizine gitme için cd .. komutu girilir:

```bash
$ pwd
/home/omerg
$ cd ..
$ pwd
/home
$
```

İstenilen dizine gitmek için cd komutu aşağıdaki gibi kullanılır:

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

Yeni dosya yaratır:

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

Linux ortamında yaygın olarak kullanılan Text Editor'dur.

Eğer vim komutu sistemde bulunamadıysa Vim Text Editor sistemde kurulu değil demektir. Bu durumda Vim programını indirmek için apt-get komutunu kullanabilirsiniz. Linux Debian sürümlerinde apt-get paket yöneticisi istenilen araçları sisteme kurar ve ayarlarını yapar.

Kurulum yapabilmek için Super User yetkilerine sahip omak gerekir. Bu yüzden sudo ön eki kullanılır:

```bash
$ sudo apt-get install vim
  
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:
  
    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.
  
[sudo] password for omerg: 
```

Şifre girilir ve kurulum komutu verilir:

```bash
[sudo] password for omerg:
Reading package lists... Done
Building dependency tree      
Reading state information... Done
vim is already the newest version.
0 upgraded, 0 newly installed, 0 to remove and 11 not upgraded.
$
```

Vim Text Editörünü kullanmaya başlayalım:

```bash
$ ls
newFile
$ vim newFile
```

İlgili dosya görüntüleme modunda açılır. Görüntüleme modunda içerikte değişiklik yapılamaz:

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

İçerikte değişiklik yapabilmek için "i" karakterine basılır ve "insert mode" açılmış olur:

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

Aşağıdaki komutlar Vim Text editörü ile temel dosya güncelleme işlemlerini gerçekleştirebilmeniz için yeterlidir:


| Komut         |                     Açıklama                  | 
| ------------- |:---------------------------------------------:| 
| Esc           | Insert modunu kapatır. Diğer tüm komutların çalışması için ve dosyayı kapatmak için gereklidir. | 
| :             | Komut giriş modunu açar.                      | 
| w             | Değişiklikleri kaydeder.                      | 
| q             | Vim'i kapatır. (Eğer kaydedilmemiş değişiklilk varsa uyarı verir)| 
| q!            | Değişiklikleri kaydetmeden Vim'i kapatır.     | 
