---
title: Cucumber ile Behavior Driven Development - 2
subTitle: BDD Test yaklaşımını Cucumber üzerinden inceliyoruz.
category: "testing"
cover: cucumber_logo.jpg
---

![Cucumbers](./jonathan-pielmayer-89798-unsplash.jpg)

[Bir önceki yazıda](/cucumber-ile-behavior-driven-development-12/) dosya hiyerarşisini oluşturduk. Bu yazıda uygulamanın içini dolduralım.

### 1 - Test senaryosu yazılır

calculator.feature isimli bir dosya oluşturulur ve tercihen src/test/resources altında yer alan Java Package'a yerleştirilir.

calculator.feature dosyası içerisinde daha önce de değindiğmiz test senaryosu yazılır:

> src/test/resources/tr/com/lucidcode/demo/calculator/calculator.feature
> ```
> Feature: I want to be told the sum of two numbers
>  
>   Scenario: Add two numbers
>     Given I have entered 70 and 50 into the calculator
>     When I press add
>    Then result should be 120 on the screen
>```

Feature dosyaları [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin) olarak adlandırılan basit bir kural kümesini temel alır. Buna göre feature dosyası 2 ana bölümden oluşur:

#### Feature:

"Feature" kelimesiyle başlar, düz metin ile devam eder. Birden fazla satırdan oluşabilir.

 - Uygulamanın genel işleyişini kapsayan ve kullanıcıya sağladığı faydalardan birini anlatan bir açıklama metnidir. 
 - Kendisine bağlı olan "Scenario" parçaları, bu "Feature"ın teknik olarak hangi işlemler aracılığıyla mümkün kılındığını açıklar.
 - Feature alanının en önemli kullanım amacı, kendisine bağlı olan tüm senaryo parçalarını özetlemesidir.

#### Scenario:

 - "Scenario" kelimesiyle başlar, tercihen bir satırlık bir açıklama cümlesi ile devam eder.
 - "Given", "And", "When", "Then" gibi anahtar kelimelerle başlayan ve yapılması gereken işi ifade eden alt cümleciklerden oluşur. Bu cümleciklerin her birine "Step Definition" denir.

### 2 - Step Definiton'lar yazılır

Test senaryosunu çalıştırabilmek için aşağıdaki standart kod parçacığı kullanılır:

> src/test/java/tr/com/lucidcode/demo/calculator/RunCukesTest.java
> ```java
> package tr.com.lucidcode.demo.calculator;
>  
> import cucumber.api.junit.Cucumber;
> import org.junit.runner.RunWith;
>  
> @RunWith(Cucumber.class)
> public class RunCalculatorTest {
> }
>```

Test senaryosunu oluşturan her bir cümleciğin, yani "StepDefiniton" tanımının karşılık geldiği bir Java metodu oluşturulması gerekiyor. Birinci adımda gördüğümüz feature dosyasını hatırlayalım; bu dosyada yer alan senaryoları oluşturan her bir cümle aşağıdaki örnekte yer alan StepDefinitions.java sınıfı içerisinde tanımlanmıştır:

> src/test/java/tr/com/lucidcode/demo/calculator/StepDefinitions.java
> ```java
> package tr.com.lucidcode.demo.calculator;
>   
> import static org.hamcrest.CoreMatchers.equalTo;
> import static org.junit.Assert.assertThat;
> import cucumber.api.java.en.Given;
> import cucumber.api.java.en.Then;
> import cucumber.api.java.en.When;
>   
> public class StepDefinitions {
>     private Calculator calculator;
>   
>     @Given("^I have entered (\\d+) and (\\d+) into the calculator$")
>     public void i_have_entered_into_the_calculator(Integer firstNumber, Integer secondNumber) throws Throwable {
>         calculator = new Calculator();
>         calculator.firstNumber = firstNumber;
>         calculator.secondNumber = secondNumber;
>     }
>   
>     @When("^I press (.*)$")
>     public void i_press(String operator) throws Throwable {
>         calculator.operator = operator;
>     }
>   
>     @Then("^result should be (\\d+) on the screen")
>     public void result_should_be(Integer expectedResult) throws Throwable {
>         assertThat(calculator.performOperation(), equalTo(expectedResult));
>     }
> }
>```

Gördüğünüz gibi üç adet metod mevcut. Her biri "Add Two Numbers" isimli senaryoda yer alan adımlara karşılık geliyor. Her bir metod bir Gherkin anahtar kelimesiyle ("Given", "When", "Then") annotate edilmiş durumda. Aynı zamanda her annotation birer Regular Expression içeriyor. Buna göre ilgili test cümleciği içerisinde değişken sayılar ve kelimeler kullanılabiliyor.

Örneğin birinci metod, yani `i_have_entered_into_the_calculator`, metod isminin önünde yer alan annotation sayesinde, feature dosyasında yer alan `"Given I have entered 70 and 50 into the calculator"` Step Definition cümlesiyle eşleşiyor. Bu sayede ilgili Step Definition cümlesinden 2 adet parametre alıyor:

 - FirstNumber = 70
 - SecondNumber = 50
 
 ### 3 - Hesap Makinesi Kodu Yazılır
 
 [Test Driven Development](http://en.wikipedia.org/wiki/Test-driven_development) yaklaşımında olması gerektiği gibi, asıl kodu yazmayı en sona bıraktık. Bu sayede kodu yazmaya başlarken çıkış noktamız, test koşullarını sağlamak olacak.
 
 Yazılacak kod çok basit bir şekilde iki sayıyı toplayıp çıkarabilen bir hesap makinesi uygulaması (Kodu mümkün olduğunca sade kılmak için getter/setter kullanımını es geçtim):
 
 > src/main/java/tr/com/lucidcode/demo/calculator/Calculator.java
 > ```java
> package tr.com.lucidcode.demo.calculator;
>  
> public class Calculator {
>      
>     public Integer firstNumber;
>     public Integer secondNumber;
>     public String operator;
>  
>     public Integer performOperation() {
>         if ("+".equals(this.operator)) {
>             return firstNumber + this.secondNumber;
>         } else {
>             return firstNumber - this.secondNumber;
>         }      
>     }
> }
>```
 
 ### 4 - Örnek test çalıştırılır
 
 Testleri çalıştırmak için Eclipse üzerinde ilgili proje sağ tıklanır ve Run As -> JUnit seçimi yapılır:
 
 Test sonuçları, Eclipse'de yer alan JUnit penceresinde karşımıza çıkar:
 
 ![JUnit](./junit.png)

 ### Best Practice: Tekrar Kullanım
 
 Test senaryolarından ve Step Definition'lardan en etkin biçimde faydalanmanın yolu, onları tekrar tekrar kullanabilmeye müsait yapılar kurmaktır.
 
 Aşağıda görülen "Subtract two numbers" senaryosunu calculator.feature dosyasına eklediğmizde, yeni Step Definition'lar yazmaksızın, elimizdeki Step Definition'ların değişken yapısını kullanarak yeni bir test yapabiliyor olabileceğiz:
 
 ```
 Feature: I want to be told the sum and subtraction of two numbers
   
   Scenario: Add two numbers
     Given I have entered 70 and 50 into the calculator
     When I press +
     Then result should be 120 on the screen
      
   Scenario: Subtract two numbers
     Given I have entered 70 and 50 into the calculator
     When I press -
     Then result should be 20 on the screen
 ```
 
 Tekrar testleri başlattığımızda (Sağ Click -> Run As -> JUnit) aşağıdaki yeni sonuçlarla karşılaşacağız: 
 
  ![JUnit](junit2.png)
  
### Sonuç
  
  Bu örnek Cucumber'ın sadece temel özelliklerini anlatan ve temel olarak Behavior Driven Development kavramını irdeleyen bir örnekti. Eğer örneği daha da sindirerek öğrenmek isterseniz feature dosyasındaki sayıları ya da + / - işaretlerini değiştirip testi geçecek bir kod yazma sürecine girmenizi tavsiye ederim. 
  
  Cucumber ile diğer yapabilecekleriniz (Aklıma gelen birkaçı):
  
   - [Selenium](http://docs.seleniumhq.org/docs/01_introducing_selenium.jsp) entegrasyonu ile ekran testleri
   - Feature dosyalarının Türkçe yazılması
   - Liste halinde verilen değişkenler ile testlerin tekrar tekrar koşumu
   
### Kaynaklar

Cucumber ile ilgili elimizde yeter ki miktarda kaynak olduğunu gönül rahatlığı ile söyleyebiliriz:

 - http://www.cihataltuntas.com/test-driven-development/
 - http://teachmetocode.com/screencasts/introduction-to-outside-in-development-with-cucumber/
 - http://cukes.info/
 - [Cucumber Github Sayfası](https://github.com/cucumber)
 - [Tutorials and Related Blogs](https://github.com/cucumber/cucumber/wiki/Tutorials-and-Related-Blog-Posts)
 - http://thomassundberg.wordpress.com/2014/05/29/cucumber-jvm-hello-world/
 - http://cukes.info/step-definitions.html
 - https://github.com/cucumber/cucumber/wiki
 - http://dannorth.net/whats-in-a-story/  
