from scrapy.linkextractors import LinkExtractor
from scrapy.http import TextResponse

def fuzz_linkextractor(body):
    # print(body)
    r = TextResponse("http://somewhere/", encoding="utf-8", body=bytes(body))
    le = LinkExtractor()
    links = le.extract_links(r)
