---
title: vim komut rehberi
subTitle: En çok kullanılan vim komutlarının tanıtımı
category: "linux"
cover: sai-kiran-anagani-555972-unsplash-cover.jpg
---

UNIX ortamında metin inceleme ve düzenleme söz konusu olduğunda bilinmesi gereken en önemli şeylerden biri de metin içerisinde ve metinler arasında etkin bir şekilde gezinebilmektir.

![unsplash.com](./sai-kiran-anagani-555972-unsplash.jpg)

Aşağıda listelenmiş olan kısayollar size bunu sağlayacaktır:

- [Karakter / kelime bazlı navigasyon](#karakter)
- [Satır üzerinde navigasyon](#satir-ustu)
- [Satırlar arası navigasyon](#satir-arasi)
- [Ekran bazlı navigasyon](#ekran-bazli)
- [Navigasyon geçmişine göre](#navigasyon-gecmisi)
- [Arama kriterine göre](#arama-kriteri)
- [Parantez açılış kapanışlarına göre](#parantez)
- [İlgili Yazılar](#ilgili)

<a name="karakter"></a>
### Karakter / kelime bazlı navigasyon:

```
h  bir karakter sola git

 j  bir satır aşağı in

 k  bir satır yukarı çık

 l  bir karakter sağa git

 w  bir sonraki kelimenin başına git

 b  bir önceki kelimenin başına git

 e  üzerinde olduğun kelimenin sonuna git
 ```

Aşağıda listlenmiş komutların başına sayı ekleyerek kaç kez tekrar edilmesi  gerektiğini belirtebilirsiniz. (Örnek: 4j komutu ile 4 satır aşağı inebilirsiniz.)

<a name="satir-ustu"></a>
### Satır üzerinde navigasyon:

```
0  satırın başına git

 $  satırın sonuna git

 \_  satırın boşluk olmayan ilk karaktere git

 g\_  satırın boşluk olmayan son karakterine git
```

<a name="satir-arasi"></a>
### Satırlar arası navigasyon:

```
gg  ilk satıra git

 G  son satıra git

 nG  n&#39;inci satıra git (n verdiğiniz sayı)
```

<a name="ekran-bazli"></a>
### Ekran bazlı navigasyon:

Ekranda görüntülediğiniz aralığı baz alan komutlardır:

```
H  ekranın başına git

 M  ekranın ortasına git

 L  ekranın sonuna git

 z.  üzerinde bulunulan satır ortada olacak şekilde sayfayı dikey yönlendir

 zt  üzerinde bulunulan satır en başta olacak şekilde sayfayı dikey yönlendir

 zb  üzerinde bulunulan satır en sonda olacak şekilde sayfayı dikey yönlendir

 Ctrl-D  yarım sayfa aşağı in

 Ctrl-U  yarım sayfa yukarı çık

 Ctrl-B  tam sayfa yukarı çık

 Ctrl-F  tam sayda aşağı in
```

<a name="navigasyon-gecmisi"></a>
### Navigasyon geçmişine göre:

```
 Ctrl-o  Bir önceki imleç pozisyonuna git

 Ctrl-i  Bir sonraki imleç pozisyonuna git (Eğer öncesinde geri gitmiştiyseniz)
```

<a name="arama-kriteri"></a>
### Arama akriterine göre:

```
 n  aranan motifin bir sonraki tekrarı (arama yapmak için :?\&lt;motif\&gt;)

 N  aranan motifin bir önceki tekrarı

 \*  imlecin üzerinde bulunduğu kelimenin bir sonraki tekrarı

 \#  imlecin üzerinde bulunduğu kelimenin bir önceki tekrarı
```

<a name="parantez"></a>
### Parantez açılış kapanışlarına göre:

```
%  üzerinde bulunulan { } [] ( ) paranteziyle eşleşen paranteze git.
```

<a name="ilgili"></a>
### İlgili Yazılar

[http://vim.wikia.com/wiki/All_the_right_moves](http://vim.wikia.com/wiki/All_the_right_moves)
[http://www.zeitoun.net/articles/change-shell-debian-linux/start](http://www.zeitoun.net/articles/change-shell-debian-linux/start)
[Lucius : Light and dark color scheme for GUI and 256 color terminal.](http://www.vim.org/scripts/script.php?script_id=2536)
