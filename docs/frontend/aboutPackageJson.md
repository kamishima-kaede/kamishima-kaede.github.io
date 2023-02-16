---
title: package.json
icon: icon-npm
category: [前端]
tag:
  - package.json
isOriginal: false
date: 2022-11-21
---

本文档是你需要了解`package.json`文件中所需内容的全部信息。它必须是`JSON`格式，而不是`JavaScript`对象。

本文档中描述的许多行为都受[config](https://docs.npmjs.com/cli/v9/using-npm/config)中描述的配置设置的影响。

<!-- more -->

## name

`name`是包的名称。当我们的包发布到`NPM`仓库后，其他人才能通过`name`来搜索安装.

命名规则:
- 名称必须小于等于214个字符。这包括范围包的范围。
- 范围包的名称可以以点或下划线开始。在没有范围的情况下，这是不允许的。
- 新包的名称中不能有大写的字母。
- 这个名字最终会成为`URL`的一部分，成为命令行的一个参数，以及一个文件夹名称。因此，名字不能包含任何非`URL`安全的字符。

所谓的范围包指的是`@scope/`,例如下面的例子`@vuepress/`就是作用域范围,是为了防止包命名污染提出来的
```json
{
  name: "@vuepress/client"
}
```
<br>

`name`命名建议:
- 不要使用与核心`Node`模块相同的名字。
- 不要把`js`或`node`放在名称中。因为你写的是`package.json`文件，所以它被认为是`js`，而且你可以使用`engines`字段来指定引擎（见下文）。
- 这个名字可能会作为参数传递给`require()`，所以它应该是简短的，但也是合理的描述性的东西。
- 趁着你还没有太重视`npm`包的`name`之前，检查一下[`npm`](https://www.npmjs.com/)是否已经有这个名字的包了。

`name`可以选择以范围为前缀，例如：`@myorg/mypackage`。


## version

如果你打算发布你的包，`package.json`中最重要的属性是`name`和`version`，因为它们将是必需的。因为这两个属性形成了`npm`包的唯一表标识。`npm`包的更改应该伴随着版本的更改。如果你不打算发布包，则名称和版本字段是可选的。

`version`必须可以被`node-semver`](https://github.com/npm/node-semver)解析，它作为依赖项与`npm`捆绑在一起。（[`node-semver`使用](https://docs.npmjs.com/cli/v6/using-npm/semver)）


## description

表示项目的描述。它是一个字符串。这有助于人们发现你的包，因为它被列在`npm`搜索中。


## keywords

把关键字放在里面。它是一个字符串数组。这有助于人们发现你的包，因为它在`npm`搜索中列出。


## homepage

项目主页的URL

```json
{
  "homepage": "https://github.com/owner/project#readme"
}
```


## bugs

项目问题跟踪或者问题报告的网站地址或者邮件地址。这些信息对于使用你的包遇到问题的人很有帮助。

```json
{
  "bugs": {
    "url" : "https://github.com/owner/project/issues",
    "email" : "project@hostname.com"
  }
}
```
你可以指定一个或两个值。如果你想只提供一个`URL`，你可以把`bugs`的值指定为字符串而不是一个对象。  
如果提供了一个URL，它将被`npm bugs`命令所使用。


## license

你应该为你的软件包指定一个许可证，以便人们知道他们被允许如何使用它，以及你对它的任何限制。  
如果你使用一个普通的许可证，如`BSD-2-Clause`或`MIT`，为你使用的许可证添加一个当前的SPDX许可证标识符，像这样:
```json
{
  "license" : "BSD-3-Clause"
}
```
你可以查看[`SPDX`](https://spdx.org/licenses/)许可证ID的完整列表。理想情况下，你应该选择一个被[`OSI`](https://opensource.org/licenses/alphabetical)认可的。  
如果你的软件包有多个通用许可证，请使用`SPDX`许可证表达式语法2.0版字符串，如下所示：
```json
{
  "license" : "(ISC OR GPL-3.0)"
}
```

如果你使用的许可证尚未分配`SPDX`标识符，或者你使用的是自定义许可证，请使用如下字符串值：
```json
{
  "license" : "SEE LICENSE IN <filename>"
}
```
然后在包的顶层包含一个名为`filename`的文件。

一些旧的软件包使用许可证对象或包含许可证象数组的`licenses`属性：
```json
// 无效写法
{
  "license" : {
    "type" : "ISC",
    "url" : "https://opensource.org/licenses/ISC"
  }
}

// 无效写法
{
  "licenses" : [
    {
      "type": "MIT",
      "url": "https://www.opensource.org/licenses/mit-license.php"
    },
    {
      "type": "Apache-2.0",
      "url": "https://opensource.org/licenses/apache2.0.php"
    }
  ]
}
```

这些样式现在已经废弃了。取而代之的是使用SPDX表达式，像这样：
```json
{
  "license": "ISC"
}
```
```json
{
  "license": "(MIT OR Apache-2.0)"
}
```

最后，如果你不希望在任何条件下授予他人使用私人或未公布的软件包的权利。
```json
{
  "license": "UNLICENSED"
}
```

也可以考虑设置`private:true`，以防止意外的发布。


## author&contributors

`author`表示是一个人。`contributors`是表示一群人的数组。`author`包含有`name`、`url`和`email`属性。像这样:
```json
{
  "author": {
    "name" : "Barney Rubble",
    "email" : "b@rubble.com",
    "url" : "http://barnyrubble.tumblr.com/"
  }
}
```

或者你可以把这些都缩短成一个字符串，`npm`会帮你解析。
```json
{
  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
}
```
电子邮件和网址都是可选的。

`npm`还会用你的`npm`用户信息设置一个顶级的`maintainers`字段。


## funding

您可以指定一个包含`URL`的对象或一个字符串的`URL`，或这些的数组，该`URL`提供有关帮助资助开发包的方法的最新信息:
```json
{
  "funding": {
    "type" : "individual",
    "url" : "http://example.com/donate"
  },

  "funding": {
    "type" : "patreon",
    "url" : "https://www.patreon.com/my-account"
  },

  "funding": "http://example.com/donate",

  "funding": [
    {
      "type" : "individual",
      "url" : "http://example.com/donate"
    },
    "http://example.com/donateAlso",
    {
      "type" : "patreon",
      "url" : "https://www.patreon.com/my-account"
    }
  ]
}
```
用户可以使用`npm fund`子命令来列出他们项目的所有依赖关系(包括直接和间接)的资金`URL`。在提供项目名称时，也有一个访问每个资金网址的快捷方式，如：`npm fund <projectname>`（当有多个网址时，将访问第一个网址）。


## files

可选的`files`字段是一个文件模式的数组，它描述了当你的软件包作为依赖关系安装时要包括的条目。文件模式的语法与`.gitignore`相似但相反，包括文件、目录或全局模式（`*`、`**/*`，诸如此类）将使该文件在打包时被包含在压缩包中。省略这个字段将使它默认为`["*"]`，这意味着它将包括所有文件。

一些特殊的文件和目录也会被包含或排除，不管它们是否存在于文件数组中（见下文）。

你也可以在你的包的根部或子目录中提供一个`.npmignore`文件，这将防止文件被包含在内。在包的根目录下，它不会覆盖`files`字段，但在子目录中会。`.npmignore`文件就像`.gitignore`一样。 如果有`.gitignore`文件，但缺少`.npmignore`，则将使用`.gitignore`的内容。