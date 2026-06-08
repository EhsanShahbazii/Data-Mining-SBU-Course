#!/bin/bash
# اسکریپت کامپایل سریع تمامی اسلایدهای ترجمه‌شده
set -e

CHAPTERS=(
  "01_introduction"
  "02_preprocessing"
  "03_classification_part1"
  "04_classification_part2"
  "05_regression"
  "06_clustering"
  "07_association_analysis"
)

for ch in "${CHAPTERS[@]}"; do
  echo "==> Compiling $ch..."
  cd "translations/$ch"
  xelatex -interaction=nonstopmode -output-directory=output main.tex > /dev/null
  xelatex -interaction=nonstopmode -output-directory=output main.tex > /dev/null
  cd ../..
done

echo "All chapters compiled successfully!"
