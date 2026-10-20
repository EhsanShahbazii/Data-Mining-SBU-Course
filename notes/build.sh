#!/bin/sh
set -eu
cd "$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
mkdir -p build
for pass in 1 2; do
  xelatex -no-shell-escape -interaction=nonstopmode -halt-on-error -output-directory=build main.tex
done
cp build/main.pdf "داده‌کاوی.pdf"
