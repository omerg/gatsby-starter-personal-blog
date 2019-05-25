---
title: Açık kaynaklı Projelerin Maven Central Repository Üzerinde Yayınlanması - 2
subTitle: Açık kaynaklı bir projenin Maven Central Repository'ye atılabilmesi için gerekli adımlar
category: "java"
cover: patrik-gothe-444-unsplash-cover.jpg
---

[Bir önceki yazıda](/acik-kaynakli-projelerin-maven-central-repository-uzerinden-yayinlanmasi-12/) projenin bir SCM'de oluşturulması ve Sonatype JIRA'a kayıt oluşturma adımlarını inceledik.

Bu yazıda paket imzalama ve Maven Central Repository'de proje yayınlama adımlarını göreceğiz.

#### 4 - Artifact'lerin imzalanması:

Öncelikle pom.xml dosyasının yer aldığı proje dizinine gidilir:

```sh
Omers-iMac:target omerg$ cd <projectPath>
```

İmzalanacak Jar'ların oluşması için proje Install edilir:

```sh
Omers-iMac:target omerg$ mvn clean install
```

Oluşan jar dosyası imzalanmadan önce imzalama işlemini yapacak kullanıcı için anahtar oluştturulur:

```sh
Omers-iMac:target omerg$  gpg --gen-key
```

Anahtarın doğru oluşturulduğu kontrol edilir. Aşağıdaki komutun ardından bir liste görüntülenmesi gerekir:

```sh
Omers-iMac:target omerg$ gpg --list-keys
 
 
/Users/omerg/.gnupg/pubring.gpg
-------------------------------
pub   2048D/00D026C4 2010-08-19 [expires: 2015-08-18]
uid                  GPGTools Team <team@gpgtools.org>
uid                  GPGMail Project Team (Official OpenPGP Key) <gpgmail-devel@lists.gpgmail.org>
uid                  GPGTools Project Team (Official OpenPGP Key) <gpgtools-org@lists.gpgtools.org>
uid                  [jpeg image of size 5871]
sub   2048g/DBCBE671 2010-08-19 [expires: 2015-08-18]
 
pub   2048R/7DE817E8 2014-04-13 [expires: 2018-04-13]
uid                  Omer Gurarslan <omerg@lucidcode.com.tr>
sub   2048R/96C4DFD1 2014-04-13 [expires: 2018-04-13]
 
Omers-iMac:target omerg$
```

> gpg --gen-key adımının bir defa yapılması yeterlidir.

Oluşan Jar'ların dizini olan target a gidilir:

```sh
Omers-iMac:target omerg$ cd target
```

İmzalanacak Jar seçilir ve imzalanır:

```sh
Omers-iMac:target omerg$ gpg -ab kite-archetype-1.0.9.jar
```

İmzalama işleminin başarılı olup olmadığını kontrol edin:

```sh
gpg --verify
```

İmzanın başka kişiler tarafından karşılaştırılıp doğrulanabilmesi için bir imza sunucusuna aktarın:

```sh
$ gpg --keyserver hkp://pool.sks-keyservers.net --send-keys C6EED57A
```

#### 5 -SNAPSHOT'ların publish edilmesi:

> İkinci adımdaki JIRA Issue'su cevaplandıktan ve konfigürasyonun tamamlandığına dair maili aldıktan sonra aşağıdaki adımlara geçebilirsiniz.

Aşağıdaki komut ile SNAPSHOT versiyonlu JAR dosyası OSS Repository'sine aktarılmış olur:

```sh
mvn clean deploy
```

#### 6 - Versiyonlanmış JAR'ların publish edilmesi (Staging)

```sh
$ mvn release:clean
$ mvn release:prepare
$ mvn release:perform
```

Bu adımlarda hata alıyorsanız komutları bir kez daha, -X argumanı ile çalıştırın ve logları inceleyin. Olası hata alma nedenleri:

 - İmzalama işlemi başarızız olmuş, .asc dosyaları oluşmamıştır.
 - SCM Versiyon Kontrol Sisteminde dosyalar bulunamamıştır ya da varsayılan Working Directory'de pom xml bulunamamıştır. pom.xml in SCM'dse kök dizinde olmasına özen gösterin.
 - İlgili pom.xml dosyasındaki versiyon tagında -SNAPSHOT son eki bulunmamaktadır.

#### 7 - Staging işleminin OSS Sonatype üzerinde tamamlanması

 - https://oss.sonatype.org/ sayfasına kullanıcı adınız ve şifrenizle giriş yapın.
 - Soldaki navigasyon panelinden "Staging Repositories" alanını seçin.
 - Ana ekrana gelen listede, yarattığınız artifact'e ait groupId'yi içeren satırı bulun.
 - Projenizi seçtiğinizde üst satırda "Close" buton aktifleşecektir. Bu butona bastığınızda POM dosyası ve asc dosyaları kontrol edilir.
 - İşlemin başarısız olması durumunda "Activity" tabında hata nedenini görebiliyor olacaksınız.

İşlemin başarılı olması durumunda "Release" butonuna basarak Release işlemini tamamlamış olacaksınız.

> **Önemli Not:**
> 
> İlk defa oluşturulan Release'ler için, daha önce açmış olduğunus JIRA task'ına geri dönüp bir comment yazmanız gerekiyor. Aşağıdaki şekilde olabilir:
> 
> *"The first release has been promoted. We kindly request that the artifact to be published to Maven Central Repository."*

### Sonuç

1 - 2 Saatlik süre içerisinde ilgili Maven Artifact, Maven Central Repository'de görülebilir hale gelecektir.

Bu sayede projeniz global olarak tüm Maven projeleri tarafından erişilebilir hale gelecektir.

### İlgili Dökümanlar

 - https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide
 - http://jroller.com/holy/entry/releasing_a_project_to_maven
 - http://central.sonatype.org/pages/releasing-the-deployment.html
 - https://docs.sonatype.org/display/Repository/How+To+Generate+PGP+Signatures+With+Maven
