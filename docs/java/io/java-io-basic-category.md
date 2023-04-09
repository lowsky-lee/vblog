## Java IO - 分类(传输，操作)

> 本文主要从`传输方式`和`数据操作`两个方面分析Java IO的分类。@pdai

+   [Java IO - 分类(传输，操作)](#java-io---%e5%88%86%e7%b1%bb%e4%bc%a0%e8%be%93%e6%93%8d%e4%bd%9c)
    +   [IO理解分类 - 从传输方式上](#io%e7%90%86%e8%a7%a3%e5%88%86%e7%b1%bb---%e4%bb%8e%e4%bc%a0%e8%be%93%e6%96%b9%e5%bc%8f%e4%b8%8a)
        +   [字节流](#%e5%ad%97%e8%8a%82%e6%b5%81)
        +   [字符流](#%e5%ad%97%e7%ac%a6%e6%b5%81)
        +   [字节流和字符流的区别](#%e5%ad%97%e8%8a%82%e6%b5%81%e5%92%8c%e5%ad%97%e7%ac%a6%e6%b5%81%e7%9a%84%e5%8c%ba%e5%88%ab)
        +   [字节转字符Input/OutputStreamReader/Writer](#%e5%ad%97%e8%8a%82%e8%bd%ac%e5%ad%97%e7%ac%a6inputoutputstreamreaderwriter)
    +   [IO理解分类 - 从数据操作上](#io%e7%90%86%e8%a7%a3%e5%88%86%e7%b1%bb---%e4%bb%8e%e6%95%b0%e6%8d%ae%e6%93%8d%e4%bd%9c%e4%b8%8a)
        +   [文件(file)](#%e6%96%87%e4%bb%b6file)
        +   [数组(\[\])](#%e6%95%b0%e7%bb%84)
        +   [管道操作](#%e7%ae%a1%e9%81%93%e6%93%8d%e4%bd%9c)
        +   [基本数据类型](#%e5%9f%ba%e6%9c%ac%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b)
        +   [缓冲操作](#%e7%bc%93%e5%86%b2%e6%93%8d%e4%bd%9c)
        +   [打印](#%e6%89%93%e5%8d%b0)
        +   [对象序列化反序列化](#%e5%af%b9%e8%b1%a1%e5%ba%8f%e5%88%97%e5%8c%96%e5%8f%8d%e5%ba%8f%e5%88%97%e5%8c%96)
        +   [转换](#%e8%bd%ac%e6%8d%a2)

## IO理解分类 - 从传输方式上

从数据传输方式或者说是运输方式角度看，可以将 IO 类分为:

+   字节流
+   字符流

`字节`是个计算机看的，`字符`才是给人看的

### 字节流

(整体结构如下，部分派生类有缺失)

![](https://www.pdai.tech/images/io/java-io-category-1-1.png)

### 字符流

(整体结构如下，部分派生类有缺失)

![](https://www.pdai.tech/images/io/java-io-category-2-1.png)

### 字节流和字符流的区别

+   字节流读取单个字节，字符流读取单个字符(一个字符根据编码的不同，对应的字节也不同，如 UTF-8 编码中文汉字是 3 个字节，GBK编码中文汉字是 2 个字节。)
+   字节流用来处理二进制文件(图片、MP3、视频文件)，字符流用来处理文本文件(可以看做是特殊的二进制文件，使用了某种编码，人可以阅读)。

> 简而言之，字节是给计算机看的，字符才是给人看的。

### 字节转字符Input/OutputStreamReader/Writer

编码就是把字符转换为字节，而解码是把字节重新组合成字符。

如果编码和解码过程使用不同的编码方式那么就出现了乱码。

+   GBK 编码中，中文字符占 2 个字节，英文字符占 1 个字节；
+   UTF-8 编码中，中文字符占 3 个字节，英文字符占 1 个字节；
+   UTF-16be 编码中，中文字符和英文字符都占 2 个字节。

UTF-16be 中的 be 指的是 Big Endian，也就是大端。相应地也有 UTF-16le，le 指的是 Little Endian，也就是小端。

Java 使用双字节编码 UTF-16be，这不是指 Java 只支持这一种编码方式，而是说 char 这种类型使用 UTF-16be 进行编码。char 类型占 16 位，也就是两个字节，Java 使用这种双字节编码是为了让一个中文或者一个英文都能使用一个 char 来存储。

![](https://www.pdai.tech/images/io/java-io-1.png)

## IO理解分类 - 从数据操作上

从数据来源或者说是操作对象角度看，IO 类可以分为:

![](https://www.pdai.tech/images/io/java-io-category-3.png)

### 文件(file)

FileInputStream、FileOutputStream、FileReader、FileWriter

### 数组(\[\])

+   字节数组(byte\[\]): ByteArrayInputStream、ByteArrayOutputStream
+   字符数组(char\[\]): CharArrayReader、CharArrayWriter

### 管道操作

PipedInputStream、PipedOutputStream、PipedReader、PipedWriter

### 基本数据类型

DataInputStream、DataOutputStream

### 缓冲操作

BufferedInputStream、BufferedOutputStream、BufferedReader、BufferedWriter

### 打印

PrintStream、PrintWriter

### 对象序列化反序列化

ObjectInputStream、ObjectOutputStream

### 转换

InputStreamReader、OutputStreamWriter