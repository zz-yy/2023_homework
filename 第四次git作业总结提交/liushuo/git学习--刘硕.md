## git创建仓库

### git init

初始化git仓库  

## 添加文件到git仓库

1. 使用命令`git add <file>`，注意，可反复多次使用，添加多个文件；
2. 使用命令`git commit -m <message>`，完成。

如果你觉得 git add 提交缓存的流程太过繁琐，Git 也允许你用 -a 选项跳过这一步。命令格式如下：

```
git commit -a
```

## linux命令

### mkdir命令

创建新的目录，是"make directory"的缩写

> mkdir [OPTION]... DIRECTORY...

这里的`[OPTION]`是可选的命令选项，`DIRECTORY`是您想要创建的目录的名称。

以下是`mkdir`命令的一些常用选项：

| 选项 | 说明                                       |
| ---- | ------------------------------------------ |
| `-m` | 设置创建的目录的文件模式（权限）。         |
| `-p` | 创建必要的父目录，如果这些目录不存在的话。 |
| `-v` | 在每次创建新目录时显示消息。               |

eg:

> mkdir newdir

这个命令会在当前工作目录下创建一个名为`newdir`的新目录

> mkdir -p dir1/dir2/dir3

这个命令会创建一个目录结构，即`dir1`目录下有一个`dir2`目录，`dir2`目录下又有一个`dir3`目录

> mkdir -m 700 private_dir

这个命令会创建一个名为`private_dir`的新目录，并设置其权限为700。

> mkdir dir1 dir2 dir3

这个命令会在当前工作目录下创建三个新的目录，分别名为`dir1`、`dir2`和`dir3`。

> mkdir -v newdir

这个命令会创建一个名为`newdir`的新目录，并显示一条消息来确认目录已经被创建。

### pwd命令

`pwd`是`Print Working Directory`的缩写，其功能是显示当前所在工作目录的全路径。主要用在当不确定当前所在位置时，通过`pwd`来查看当前目录的绝对路径。

## git基本操作

### git add

**git add** 命令可将该文件的修改添加到暂存区。

通过运行 **git add** 命令，你可以告诉 Git 哪些文件的修改应该包含在下一次提交（commit）中。

添加一个或多个文件到暂存区：

> git add [file1] [file2] ...

添加指定目录到暂存区，包括子目录：

> ```
> git add [dir]
> ```

添加当前目录下的所有文件到暂存区：

> git add .

### git commit

git commit 命令将暂存区内容添加到本地仓库中。

提交暂存区到本地仓库中:

```
git commit -m [message]
```

[message] 可以是一些备注信息。

提交暂存区的指定文件到仓库区：

```
$ git commit [file1] [file2] ... -m [message]
```

**-a** 参数设置修改文件后不需要执行 git add 命令，直接来提交

```
$ git commit -a
```

**设置提交代码时的用户信息**

开始前我们需要先设置提交的用户信息，包括用户名和邮箱：

```
$ git config --global user.name 'runoob'
$ git config --global user.email test@runoob.com
```

如果去掉 --global 参数只对当前仓库有效。



### git status

用于查看 Git 仓库当前状态，可以查看在你上次提交之后是否有对文件进行再次修改。

### git diff

比较文件的不同，即比较文件在暂存区和工作区的差异。

显示已写入暂存区和已经被修改但尚未写入暂存区文件的区别。

### git reset

用于回退版本，可以指定退回某一次提交的版本。

> git reset [--soft | --mixed | --hard] [HEAD]

**--mixed** 为默认，可以不用带该参数，用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变。

> ```
> $ git reset HEAD^            # 回退所有内容到上一个版本  
> $ git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本  
> $ git  reset  052e           # 回退到指定版本
> ```

**--soft** 参数用于回退到某个版本：

> git reset --soft HEAD
>
> $ git reset --soft HEAD~3   # 回退上上上一个版本 

**--hard** 参数撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交：

> git reset --hard HEAD
>
> $ git reset --hard HEAD~3  # 回退上上上一个版本  
> $ git reset –hard bae128  # 回退到某个版本回退点之前的所有信息。 
> $ git reset --hard origin/master    # 将本地的状态回退到和远程的一样 

**HEAD 说明：**

- HEAD 表示当前版本
- HEAD^ 上一个版本
- HEAD^^ 上上一个版本
- HEAD^^^ 上上上一个版本
- 以此类推...

可以使用 ～数字表示

- HEAD~0 表示当前版本
- HEAD~1 上一个版本
- HEAD^2 上上一个版本
- HEAD^3 上上上一个版本
- 以此类推...

**git reset HEAD 命令用于取消已缓存的内容，即执行 git reset HEAD 以取消之前 git add 添加，但不希望包含在下一提交快照中的缓存。**

### git reflog

显示可引用的历史版本记录，即显示命令历史

![](E:\git学习\2495229-b7cefe27813a4489.webp)

### git checkout

**git checkout** 命令用于在不同的分支之间切换、恢复文件、创建新分支等操作。

**切换分支：**

以下命令允许你从当前分支切换到指定的分支 **<branch-name>**:

```
git checkout <branch-name>
```

例如将你的工作目录切换到主分支:

```
git checkout master 
```

**创建新分支并切换：**

以下命令用于创建一个新分支 **<new-branch-name>** 并立即切换到新创建的分支:

```
git checkout -b <new-branch-name>
```

例如创建一个名为 feature-branch 的新分支并切换到它:

```
git checkout -b feature-branch
```

**切换到前一个分支：**

以下命令可以让你快速切换回前一个分支，无需记住分支名称:

```
git checkout -
```

**检出文件：**

以下命令可以将指定文件 **<file>** 恢复到最新的提交状态，**丢弃所有未提交的更改**，这对于撤销不需要的更改非常有用：

```
git checkout -- <file>
```

> *`git checkout`其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”**

**切换到特定提交：**

你可以使用提交的哈希值 **<commit-hash>** 来切换到特定的提交状态。这将使你进入"分离头指针"状态，只能查看历史记录，而不能进行分支操作。通常情况下，不建议在分离头指针状态下工作，因为更改可能会丢失。

```
git checkout <commit-hash>
```

**切换到标签：**

如果你有一个标签 **<tag-name>**，你可以使用这个命令来切换到该标签所指向的提交状态。

```
git checkout tags/<tag-name>
```

### git rm 

git rm 命令用于删除文件。

如果只是简单地从工作目录中手工删除文件，运行 **git status** 时就会在 **Changes not staged for commit** 的提示。

git rm 删除文件有以下几种形式：

1、将文件从暂存区和工作区中删除：

```
git rm <file>
```

以下实例从暂存区和工作区中删除 runoob.txt 文件：

```
git rm runoob.txt 
```

2、如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 **-f**。

强行从暂存区和工作区中删除修改后的 runoob.txt 文件：

```
git rm -f runoob.txt 
```

3、想把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除，使用 **--cached** 选项即可：

```
git rm --cached <file>
```

以下实例从暂存区中删除 runoob.txt 文件：

```
git rm --cached runoob.txt
```

文件从暂存区域移除，但工作区保留：

```
$ git rm --cached README 
rm 'README'
$ ls
README
```

### git push

**git push** 命令用于从将本地的分支版本上传到远程并合并。

命令格式如下：

```
git push <远程主机名> <本地分支名>:<远程分支名>
```

如果本地分支名与远程分支名相同，则可以省略冒号：

```
git push <远程主机名> <本地分支名>
```

> git push -u origin master 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。

**实例**

以下命令将本地的 master 分支推送到 origin 主机的 master 分支。

```
$ git push origin master
```

相等于：

```
$ git push origin master:master
```

如果本地版本与远程版本有差异，但又要强制推送可以使用 --force 参数：

```
git push --force origin master
```

删除主机的分支可以使用 --delete 参数，以下命令表示删除 origin 主机的 master 分支：

```
git push origin --delete master
```

### git branch

创建分支命令：

```
git branch (branchname)
```

列出分支

```
git branch
```

没有参数时，**git branch** 会列出你在本地的分支。

```
$ git branch
* master
```

此例的意思就是，我们有一个叫做 **master** 的分支，并且该分支是当前分支。

当你执行 **git init** 的时候，默认情况下 Git 就会为你创建 **master** 分支。

### git clone

**git clone** 是一个用于克隆（clone）远程 Git 仓库到本地的命令。

**git clone** 可以将一个远程 Git 仓库拷贝到本地，让自己能够查看该项目，或者进行修改。

**git clone** 命令，你可以复制远程仓库的所有代码和历史记录，并在本地创建一个与远程仓库相同的仓库副本。

拷贝项目命令格式如下：

```
 git clone [url]
```

**[url]** 是你要拷贝的项目。

**git clone** 命令会自动将远程仓库的所有分支和历史记录复制到本地，你可以使用其他 Git 命令（如 git checkout、git pull 等）在本地仓库进行操作。

默认情况下，Git 会按照你提供的 URL 所指向的项目的名称创建你的本地项目目录。 通常就是该 URL 最后一个 / 之后的项目名称。如果你想要一个不一样的名字， 你可以在该命令后加上你想要的名称。

例如，以下实例拷贝远程 git 项目，本地项目名为 **another-runoob-name**：

> **git clone** https:**//**github.com**/**tianqixin**/**runoob-git-test another-runoob-name

### git stash

`git stash`会把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录。

#### stash当前修改

需要说明一点，stash是本地的，不会通过`git push`命令上传到git server上。
实际应用中推荐给每个stash加一个message，用于记录版本，使用`git stash save`取代`git stash`命令。示例如下：

```cmake
$ git stash save "test-cmd-stash"
Saved working directory and index state On autoswitch: test-cmd-stash
HEAD 现在位于 296e8d4 remove unnecessary postion reset in onResume function
$ git stash list
stash@{0}: On autoswitch: test-cmd-stash
```

#### 重新应用缓存的stash

可以通过`git stash pop`命令恢复之前缓存的工作目录

> 这个指令将缓存堆栈中的第一个stash删除，并将对应修改应用到当前的工作目录下。

你也可以使用`git stash apply`命令，将缓存堆栈中的stash多次应用到工作目录中，但并不删除stash拷贝。

> 在使用`git stash apply`命令时可以通过名字指定使用哪个stash，默认使用最近的stash（即stash@{0}）

#### 查看现有stash

可以使用`git stash list`命令，一个典型的输出如下：

```perl
$ git stash list
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log
```

### git cherry-pick

git cherry-pick 命令用于将指定的提交（commit）应用于其他分支。

对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。

这时分两种情况。一种情况是，你需要另一个分支的所有代码变动，那么就采用合并（git merge）。另一种情况是，你只需要部分代码变动（某几个提交），这时可以采用 git cherry-pick。

基本语法：

> ```
> git cherry-pick <commitHash>
> ```

举例来说，代码仓库有 master 和 feature 两个分支。

```
a - b - c - d   Master
        \
        e - f - g Feature
```

现在将提交 f 应用到 master 分支。

```
# 切换到 master 分支
$ git checkout master

# Cherry pick 操作
$ git cherry-pick f
```

上面的操作完成以后，代码库就变成了下面的样子。

```
a - b - c - d - f   Master
        \
        e - f - g Feature
```

从上面可以看到，master 分支的末尾增加了一个提交 f。

git cherry-pick 命令的参数，不一定是提交的哈希值，分支名也是可以的，表示转移该分支的最新提交。

```
$ git cherry-pick feature
```

上面代码表示将feature分支的最近一次提交，转移到当前分支。

### git pull

**git pull** 命令用于从远程获取代码并合并本地的版本。

**git pull** 其实就是 **git fetch** 和 **git merge FETCH_HEAD** 的简写。

命令格式如下：

```
git pull <远程主机名> <远程分支名>:<本地分支名>
```

实例

更新操作：

```
$ git pull
$ git pull origin
```

将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并。

```
git pull origin master:brantest
```

如果远程分支是与当前分支合并，则冒号后面的部分可以省略。

```
git pull origin master
```

## git标签

如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 git tag 给它打上标签。

> 注意：标签总是和某个commit挂钩。如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上都可以看到这个标签。

#### 新标签

```
git tag <name>
```

#### 查看所有标签

```
git tag
```

#### 创建带注解的标签

用`-a`指定标签名，`-m`指定说明文字

```
$ git tag -a v0.1 -m "version 0.1 released" 1094adb
```

#### 查看标签信息

```
git show <tagname>
```

#### 追加标签

默认标签是打在最新提交的commit上的

假设我们发布了提交 85fc7e7(上面实例最后一行)，但是那时候忘了给它打标签。 我们现在也可以：

```
$ git tag -a v0.9 85fc7e7
$ git log --oneline --decorate --graph
*   d5e9fc2 (HEAD -> master) Merge branch 'change_site'
|\  
| * 7774248 (change_site) changed the runoob.php
* | c68142b 修改代码
|/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 add test.txt
* 3b58100 (tag: v0.9) 第一次版本提交
```

#### 删除标签

```
git tag -d v0.1
```

因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。

如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：

```
$ git tag -d v0.9
Deleted tag 'v0.9' (was f52c633)
```

然后，从远程删除。删除命令也是push，但是格式如下：

```
$ git push origin :refs/tags/v0.9
To github.com:michaelliao/learngit.git
 - [deleted]         v0.9
```

要看看是否真的从远程库删除了标签，可以登陆GitHub查看。

#### 推送标签

```
git push origin <tagname>
```

eg:

```
$ git push origin v1.0
Total 0 (delta 0), reused 0 (delta 0)
To github.com:michaelliao/learngit.git
 * [new tag]         v1.0 -> v1.0
```

或者，一次性推送全部尚未推送到远程的本地标签：

```
$ git push origin --tags
Total 0 (delta 0), reused 0 (delta 0)
To github.com:michaelliao/learngit.git
 * [new tag]         v0.9 -> v0.9
```

## git分支管理

创建分支命令：

```
git branch (branchname)
```

切换分支命令:

```
git checkout (branchname)
```

当你切换分支的时候，Git 会用该分支的最后提交的快照替换你的工作目录的内容， 所以多个分支不需要多个目录。

合并分支命令:

```
git merge 
```

你可以多次合并到统一分支， 也可以选择在合并之后直接删除被并入的分支。

### 列出分支

```
git branch
```

没有参数时，**git branch** 会列出你在本地的分支。

```
$ git branch
* master
```

此例的意思就是，我们有一个叫做 **master** 的分支，并且该分支是当前分支。

当你执行 **git init** 的时候，默认情况下 Git 就会为你创建 **master** 分支。

### 创建分支

1. **git branch (branchname)**  

> 仅创建分支

2. **git checkout -b (branchname)**

> 创建并切换分支

3. **git switch -c  (branchname)**

### 切换分支

```
git checkout (branch) 
```

> $ git branch testing
> $ git branch
>
> * master
>   testing
>
> $ git checkout testing
>
> Switched to branch 'testing'

```
git switch (branch)
```



### 删除分支

删除分支命令：

```
git branch -d (branchname)
```

例如我们要删除 testing 分支：

```
$ git branch
* master
  testing
$ git branch -d testing
Deleted branch testing (was 85fc7e7).
$ git branch
* master
```

### 分支合并

```
git merge
```

`git merge`命令用于合并指定分支到当前分支。

## 添加远程仓库

> 要关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git`；
>
> 关联一个远程库时必须给远程库指定一个名字，`origin`是默认习惯命名；
>
> 关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容；
>
> 此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；

### git remote

**git remote** 命令用于用于管理 Git 仓库中的远程仓库。

**git remote** 命令提供了一些用于查看、添加、重命名和删除远程仓库的功能。

以下是 git remote 命令的常见用法：

- `git remote`：列出当前仓库中已配置的远程仓库。
- `git remote -v`：列出当前仓库中已配置的远程仓库，并显示它们的 URL。
- `git remote add <remote_name> <remote_url>`：添加一个新的远程仓库。指定一个远程仓库的名称和 URL，将其添加到当前仓库中。
- `git remote rename <old_name> <new_name>`：将已配置的远程仓库重命名。
- `git remote remove <remote_name>`：从当前仓库中删除指定的远程仓库。
- `git remote set-url <remote_name> <new_url>`：修改指定远程仓库的 URL。
- `git remote show <remote_name>`：显示指定远程仓库的详细信息，包括 URL 和跟踪分支。

显示某个远程仓库的信息：

```
git remote show [remote]
```

例如：

```
$ git remote show https://github.com/tianqixin/runoob-git-test
* remote https://github.com/tianqixin/runoob-git-test
  Fetch URL: https://github.com/tianqixin/runoob-git-test
  Push  URL: https://github.com/tianqixin/runoob-git-test
  HEAD branch: master
  Local ref configured for 'git push':
    master pushes to master (local out of date)
```

添加远程版本库：

```
git remote add <remote_name> <remote_url>
```

- `<remote_name>`：要添加的远程仓库的名称。通常，远程仓库的名称为 `origin`，但你也可以自定义一个名称。
- `<remote_url>`：远程仓库的 URL。它可以是一个指向远程 Git 仓库的 HTTPS、SSH 或 Git 协议链接。

以下命令将向当前 Git 仓库添加一个名为 origin 的远程仓库，它的 URL 是 https://github.com/user/repo.git。

```
git remote add origin https://github.com/user/repo.git
```



## git 查看提交历史

### git log

查看历史提交记录。

- 在使用 Git 提交了若干更新之后，又或者克隆了某个项目，想回顾下提交历史，我们可以使用 **git log** 命令查看。

- **git log** 命令用于查看 Git 仓库中提交历史记录。

- **git log** 显示了从最新提交到最早提交的所有提交信息，包括提交的哈希值、作者、提交日期和提交消息等。

- **git log** 命令的基本语法：

- > git log [选项] [分支名/提交哈希]

- 常用的选项包括：

- - `-p`：显示提交的补丁（具体更改内容）。
  - `--oneline`：以简洁的一行格式显示提交信息。
  - `--graph`：以图形化方式显示分支和合并历史。
  - `--decorate`：显示分支和标签指向的提交。
  - `--author=<作者>`：只显示特定作者的提交。
  - `--since=<时间>`：只显示指定时间之后的提交。
  - `--until=<时间>`：只显示指定时间之前的提交。
  - `--grep=<模式>`：只显示包含指定模式的提交消息。
  - `--no-merges`：不显示合并提交。
  - `--stat`：显示简略统计信息，包括修改的文件和行数。
  - `--abbrev-commit`：使用短提交哈希值。
  - `--pretty=<格式>`：使用自定义的提交信息显示格式。

可以用--oneline选项来查看历史记录的简洁版本

> git log --oneline

也可以用--reverse参数来逆向显示所有日志

> git log --reverse



## 撤销修改

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- file`。

> > `git checkout`其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”

> 命令`git checkout -- readme.txt`意思就是，把`readme.txt`文件在工作区的修改全部撤销，这里有两种情况：
>
> 一种是`readme.txt`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
>
> 一种是`readme.txt`已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
>
> 总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD <file>`，就回到了场景1，第二步按场景1操作。

## 零碎知识

1. 在Git中，用`HEAD`表示当前版本，也就是最新的提交的版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。****

2. Git支持多种协议，包括`https`，但`ssh`协议速度最快。即，GitHub给出的地址不止一个，还可以用`https://github.com/michaelliao/gitskills.git`这样的地址。实际上，Git支持多种协议，默认的`git://`使用ssh，但也可以使用`https`等其他协议。

   使用`https`除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放http端口的公司内部就无法使用`ssh`协议而只能用`https`。

3. 开发一个新feature，最好新建一个分支；

   如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。

4. 修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；

   当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复bug，修复后，再`git stash pop`，回到工作现场；

   在master分支上修复的bug，想要合并到当前dev分支，可以用`git cherry-pick <commit>`命令，把bug提交的修改“复制”到当前分支，避免重复劳动。

5. 合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。

6. 查看分支：`git branch`

   创建分支：`git branch <name>`

   切换分支：`git checkout <name>`或者`git switch <name>`

   创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>`

   合并某分支到当前分支：`git merge <name>`

   删除分支：`git branch -d <name>`

7. 多人协作的工作模式通常是这样：

   1. 首先，可以试图用`git push origin <branch-name>`推送自己的修改；
   2. 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
   3. 如果合并有冲突，则解决冲突，并在本地提交；
   4. 没有冲突或者解决掉冲突后，再用`git push origin <branch-name>`推送就能成功！

   > 如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream-to <branch-name> origin/<branch-name>`。

8. 查看远程库信息，使用`git remote -v`；

   本地新建的分支如果不推送到远程，对其他人就是不可见的；

   从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；

   在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；

   建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；

   从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

9. rebase操作可以把本地未push的分叉提交历史整理成直线；rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比

10. 忽略某些文件时，需要编写`.gitignore`；

    `.gitignore`文件本身要放到版本库里，并且可以对`.gitignore`做版本管理！

11. 