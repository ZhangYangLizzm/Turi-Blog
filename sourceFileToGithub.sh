#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'update version'

git push -f git@github.com:ZhangYangLizzm/blog.git master:main
