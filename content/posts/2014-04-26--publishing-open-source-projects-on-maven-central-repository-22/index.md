---
title: Publishing Open Source Projects on Maven Central Repository - 2
subTitle: Necessary steps for exposing a project to the Open Source World
category: "java"
cover: patrik-gothe-444-unsplash-cover.jpg
---

[In the previous post](/publishing-open-source-projects-on-maven-central-repository-12/) we've reviewed the steps to create the project in an SCM and create a Sonatype JIRA record.

In this article, we will see the steps of package signing and project delivery at Maven Central Repository.

#### 4 - Signing Artifacts

First go to the project directory where the pom.xml file is located:

```sh
Omers-iMac:target omerg$ cd <projectPath>
```

Install the project so that jars to sign would get created:

```sh
Omers-iMac:target omerg$ mvn clean install
```

Before signing the resulting jar file, the key is created for the user to do the signing:

```sh
Omers-iMac:target omerg$  gpg --gen-key
```

Make sure that the key is created correctly. A list should appear after the following command:

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

Browse the target directory of the created jars:

```sh
Omers-iMac:target omerg$ cd target
```

The Jar to be shared is selected and signed:

```sh
Omers-iMac:target omerg$ gpg -ab kite-archetype-1.0.9.jar
```

Check that the signing is successful:

```sh
gpg --verify
```

Transfer the signature to a signature server so that the signature can be compared and verified by other people:

```sh
$ gpg --keyserver hkp://pool.sks-keyservers.net --send-keys C6EED57A
```

#### 5 -Deploying the SNAPSHOT's

> Once the JIRA Issue in step 2 has been answered and you have received the mail that the configuration is complete, you can proceed with the following steps.

The following command transfers the JAR file with the SNAPSHOT version to the OSS Repository:

```sh
mvn clean deploy
```

#### 6 - Publishing versioned JARs (Staging)

```sh
$ mvn release:clean
$ mvn release:prepare
$ mvn release:perform
```

If you are getting errors in these steps, run the commands one more time with the -X argument and examine the logs. Possible causes for getting the error:

 - Signing process was successful and .asc files were not created.
 - Files were not found in the SCM Version Control System or pom xml was not found in the default Working Directory. If pom.xml is in SCM, make sure it is in the root directory.
 - In the corresponding pom.xml file, the version tag does not have a -SNAPSHOT suffix.

#### 7 - Completing Staging on OSS Sonatype

 - Log in to https://oss.sonatype.org/ with your username and password.
 - Select "Staging Repositories" from the navigation panel on the left.
 - In the list on the main screen, find the line containing the artifact's groupId.
 - When you select your project, the "Close" button will be activated in the top row. POM file and asc files are checked when you press this button.
 - If the transaction fails, you will be able to see the cause of the error in the "Activity" tab.

If the operation is successful, you will have completed the Release process by pressing the "Release" button.

> **An Important Note:**
> 
> 
For the first-time Release, you have to go back to the JIRA task that you had previously opened and write a comment. The following figure may be:
> 
> *"The first release has been promoted. We kindly request that the artifact to be published to Maven Central Repository."*

### Final


Within 1 to 2 hours the Maven Artifact will be visible on the Maven Central Repository.

This will make your project globally accessible to all Maven projects.

### Further Reading

 - https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide
 - http://jroller.com/holy/entry/releasing_a_project_to_maven
 - http://central.sonatype.org/pages/releasing-the-deployment.html
 - https://docs.sonatype.org/display/Repository/How+To+Generate+PGP+Signatures+With+Maven
