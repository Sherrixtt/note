#### 1. clone
    git clone xxx  [name]
    name:自定义本地仓库名字
#### 2. Log
    git log --pretty=oneline --author=tangxuewei
    –pretty   可以指定使用不同于默认格式的方式展示提交历史
#### 3.Commit 
  `git commit --amend` 撤消操作
    重新提交,覆盖之前提交信息
> ##### Vim操作
> i 切换到输入模式
> : 切换到底线命令模式 (:wq保存退出  :q退出)
> ​Esc退出输入模式,切换到命令模式
#### 4. 取消暂存的文件
`git reset HEAD <file>` 取消暂存的文件
取消暂存的文件,退到add的上一步
#### 5. Tag
    git tag 打标签
    git tag -a v1.4 -m 'my version 1.4'
    后期打标签:
    git tag -a v1.2 9fceb02
默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上
* `git push origin [tagname]` 上传一个tag至远程仓库
* `git push origin --tags` 把所有标签上传到远程仓库 
#### 6. 常用分支
  * feature 新功能
  * hotfix- 热修复:生成环境验证缺陷必须马上修复
  * release
