---
title: Temel Linux Shell Komutları
subTitle: UNIX temelli işletim sistemlerini etkin biçimde kullanabilmeniz için gerekli olan komutlar
category: "linux"
cover: simon-abrams-286276-unsplash-cover.jpg
---

# Temel Linux Shell Komutları

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

Windows ortamında iseniz CygWin ya da PUTTY, Linux ve Mac OS X ortamlarında ise Terminal açılır:

```console
Last login: Thu Apr 10 22:28:44 on ttys000
Omers-iMac:~ omerg$
```

<a name="clear"></a>
### clear

Bir sonraki komutun sonuçlarını okumayı kolaylaştırması için ekranı clear komutuyla temizleyelim:

```console
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

```console
$ whoami
omerg
$
```

<a name="hostname"></a>
### hostname

Makinanın ismini yazar:

```
$ hostname
tolvanen
$
```

<a name="env"></a>
### env

Ortam değişkenlerini bildirir:

```
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

```
$ pwd
/home/omerg
$
```

<a name="ls"></a>
### ls

Üzerinde olunan dizindeki dosyaları listeler (List)

```
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

```
$ pwd
/home/omerg
$ cd ..
$ pwd
/home
$
```

İstenilen dizine gitmek için cd komutu aşağıdaki gibi kullanılır:

```
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

```console
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

```
$ sudo apt-get install vim
  
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:
  
    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.
  
[sudo] password for omerg: 
```

Şifre girilir ve kurulum komutu verilir:

```
[sudo] password for omerg:
Reading package lists... Done
Building dependency tree      
Reading state information... Done
vim is already the newest version.
0 upgraded, 0 newly installed, 0 to remove and 11 not upgraded.
$
```

Vim Text Editörünü kullanmaya başlayalım:

```
$ ls
newFile
$ vim newFile
```

İlgili dosya görüntüleme modunda açılır. Görüntüleme modunda içerikte değişiklik yapılamaz:

```
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

```
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

<a name="mv"></a>
### mv

Bir dosyanın ismini veya yerini değiştirmek için kullanılır:

```
$ ls
newFile
$ mv newFile newFileRenamed
$ ls
newFileRenamed
$
```

<a name="cp"></a>
### cp

Bir dosyayı bir yerden bir yere kopyalamaya yarar:

```
$ ls
newFileRenamed
$ cp newFileRenamed copyOfFile
$ ls
copyOfFile  newFileRenamed
$
```

<a name="rm"></a>
### rm

Dosya silme komutudur:

```
$ ls
copyOfFile  newFileRenamed
$ rm newFileRenamed
$ ls
copyOfFile
$
```

<a name="mkdir"></a>
### mkdir

Yeni dizin yaratır (Make Directory)

```
$ ls
copyOfFile
$  mkdir newFileDir
$ ls
copyOfFile  newFileDir
$
```

Yeni yarattığımız dizini silmek istediğimizde rm komutuyla ilgili yeni bir bilgi öğreniyoruz:

```
$ ls
copyOfFile  newFileDir
$ rm copyOfFile
$ ls
newFileDir
$ rm newFileDir
rm: cannot remove `newFileDir': Is a directory
$
```

Dosya silmek için rm komutu yeterli olurken, dizin silmek için rm -rf komutu kullanılır. (f: force r: recursive)

```
$ ls
newFileDir
$ rm -rf newFileDir
$ ls
$
```

<a name="zip"></a>
### zip

Dosyaları .zip formatında sıkıştırmak için kullanılır:

```
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

Sıkıştırılmış zip dosyalarını açmak için kullanılır:

```
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

Linux platformlarında daha yaygın olan .tgz ve tar.gz formatındaki sıkıştırılmış dosyaları açmak için kullanılır.

Varolan bir açık (sıkıştırılmamış) dosyayı sıkıştırmak için tar komutunu -zcvf argumanı ile kullanın:

```
$ ls
a  a.zip
$ tar -zcvf a.tar.gz a
a
$ ls
a  a.tar.gz  a.zip
$
```

Varolan sıkıştırılmış dosyayı açmak için -xzvf argumanını kullanın:

```

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

Verilen Web adresindeki dosyayı indirir:

```
$ wget http://download.thinkbroadband.com/5MB.zip
```

<a name="exit"></a>
### exit

SSH ile bağlanılmışsa bağlantıyı koparır. SSH bağlantısı yoksa terminali kapatır:

```
$ exit
Connection to dev.lucidcode.com.tr closed.
Omers-iMac:~ omerg$
```

<a name="apt-get"></a>
### aptitude / apt-get

Debian Linux dağıtımlarına özgü paket yöneticisidir. Yeni uygulamalar bulmanızı ve sistteme kurmanızı sağlar.

Örneğin bağlı olunan uygulama Repository'sindeki uygulamalar arasında ismi içinde 'text' olanları arayalım:

```

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

Listede gördüğümüz 'dev-text' uygulamasını indirmek istediğimizde birmesajla karşılaşacağız:

```
$ apt-get install dev-text
E: Could not open lock file /var/lib/dpkg/lock - open (13: Permission denied)
E: Unable to lock the administration directory (/var/lib/dpkg/), are you root?
$
```

apt-get install komutu sistem üzerinde kurulum yapmak üzere çalışan bir komut olduğundan, Super User (su) yetkisi gerektirmektedir. Linux platformlarında herhangi bir komutu 'sudoers' yetkisiyle çalıştırmak için başına 'sudo' eki eklenir:


```
$ sudo apt-get install dev-text
```

>sudo ekini kullanarak komut tetiklemek için ilgili kullanıcının 'sudoers' yetkisine sahip olması gerekmektedir. Yetkiyi admin kullanıcısı verir.

apt-get install komutu sudo ekiyle tekrar çalıştırılır:

```
$ apt-get install dev-text
[sudo] password for omerg:
```
