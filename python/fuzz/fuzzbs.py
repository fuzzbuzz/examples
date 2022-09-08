from bs4 import BeautifulSoup

def fuzz_bshtml(html_doc, text):
    soup = BeautifulSoup(html_doc, 'html.parser')
    soup.find(text=text)
