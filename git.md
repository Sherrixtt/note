1. `git clone xxx  [name]` 
    name:自定义本地仓库名字
2. `git log --pretty=oneline --author=tangxuewei`
    –pretty   可以指定使用不同于默认格式的方式展示提交历史
3. `git commit --amend` 撤消操作
    重新提交,覆盖之前提交信息
    > ##### Vim操作
    > i 切换到输入模式
    > : 切换到底线命令模式 (:wq保存退出  :q退出)
    > ​Esc退出输入模式,切换到命令模式
4. `git reset HEAD <file>` 取消暂存的文件
    取消暂存的文件,退到add的上一步