import os
import fitz

def check_slides():
    dest = 'Translated_Slides'
    if not os.path.exists(dest):
        return
    for f in sorted(os.listdir(dest)):
        if f.endswith('.pdf'):
            doc = fitz.open(os.path.join(dest, f))
            print(f'{f}: {len(doc)} slides')

if __name__ == '__main__':
    check_slides()
