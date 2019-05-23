---
title: Temel Linux Shell Komutları ( 2. Bölüm )
subTitle: UNIX temelli işletim sistemlerini etkin biçimde kullanabilmeniz için gerekli olan komutlar
category: "linux"
cover: simon-abrams-286276-unsplash-cover.jpg
---

# Temel Linux Shell Komutları ( 2. Bölüm )

UNIX temelli işletim sistemlerini etkin biçimde kullanabilmeniz için gerekli olan komutları anlattığım yazıya kaldığımız yerden devam ediyoruz.

![unsplash.com](./simon-abrams-286276-unsplash.jpg)

Aşağıda listelenmiş olan kısayollar size bunu sağlayacaktır:

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
