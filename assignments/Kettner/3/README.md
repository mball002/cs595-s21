For this assignment, I used the curl -ILsk command to get the terminating status codes and cookie
information for each website. Then, I made a file with the filtered data to put into a code that will
display the data into an organized table.

[curl.sh](curl.sh) - The program for the curl command.
[table.py](table.py) - The program for creating the table.

Min = 0
Max = 10
Mean = 1.7
Median = 3


|          Site           | TerminatingStatus | Cookies | HTTPOnly | Secure |    SameSite    | Path |
| ----------------------- | ----------------- | ------- | -------- | ------ | -------------- | ---- |
| abc.es                  | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| abcnews.go.com          | HTTP/1.1 200      | 2       | 0        | 0      | 0              | /    |
| about.me                | HTTP/1.1 200      | 5       | 1        | 1      | Lax            | /    |
| abril.com.br            | HTTP/1.1 301      | 1       | 1        | 1      | 0              | /    |
| alibaba.com             | HTTP/1.1 200      | 1       | 0        | 0      | 0              | /    |
| ap.org                  | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| biblegateway.com        | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| booking.com             | HTTP/1.1 200      | 3       | 1        | 1      | None           | /    |
| bp1.blogger.com         | HTTP/1.1 400      | 0       | 0        | 0      | 0              | 0    |
| bp2.blogger.com         | HTTP/1.1 400      | 0       | 0        | 0      | 0              | 0    |
| brandbucket.com         | HTTP/1.1 200      | 2       | 0        | 0      | 0              | /    |
| businessinsider.com     | HTTP/1.1 200      | 1       | 1        | 0      | Lax            | /    |
| cbc.ca                  | HTTP/1.1 200      | 2       | 0        | 1      | None           | /    |
| cloudflare.com          | HTTP/1.1 200      | 3       | 2        | 2      | Lax(2)None(1)  | /    |
| code.google.com         | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| com.com                 | HTTP/1.1 200      | 2       | 1        | 0      | 0              | /    |
| detik.com               | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| digg.com                | HTTP/1.1 200      | 3       | 3        | 1      | Lax            | /    |
| docs.google.com         | HTTP/1.1 200      | 3       | 3        | 1      | 0              | /    |
| e-recht24.de            | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| ea.com                  | HTTP/1.1 200      | 3       | 0        | 3      | 0              | /    |
| elmundo.es              | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| en.wikipedia.org        | HTTP/1.1 200      | 8       | 5        | 8      | 0              | /    |
| fb.com                  | HTTP/1.1 200      | 2       | 2        | 2      | 0              | /    |
| feedburner.google.com   | HTTP/1.1 200      | 2       | 2        | 1      | 0              | /    |
| forbes.com              | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| geocities.com           | HTTP/1.1 200      | 2       | 2        | 0      | 0              | /    |
| gizmodo.com             | HTTP/1.1 200      | 3       | 0        | 2      | None(2)        | /    |
| godaddy.com             | HTTP/1.1 200      | 7       | 0        | 1      | 0              | /    |
| icann.org               | HTTP/1.1 301      | 0       | 0        | 0      | 0              | 0    |
| ieee.org                | HTTP/1.1 200      | 3       | 0        | 1      | None           | /    |
| ikea.com                | HTTP/1.1 200      | 4       | 2        | 1      | 0              | /    |
| imageshack.us           | HTTP/1.1 204      | 0       | 0        | 0      | 0              | 0    |
| istockphoto.com         | HTTP/1.1 301      | 0       | 0        | 0      | 0              | 0    |
| it.wikipedia.org        | HTTP/1.1 200      | 8       | 5        | 8      | 0              | /    |
| iubenda.com             | HTTP/1.1 200      | 4       | 2        | 2      | 0              | /    |
| jimdofree.com           | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| jstor.org               | HTTP/1.1 200      | 6       | 0        | 6      | Lax(5)None(1)  | /    |
| latimes.com             | HTTP/1.1 301      | 0       | 0        | 0      | 0              | 0    |
| lifehacker.com          | HTTP/1.1 200      | 4       | 0        | 2      | None(2)        | /    |
| liveinternet.ru         | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| m.wikipedia.org         | HTTP/1.1 200      | 8       | 6        | 8      | 0              | /    |
| microsoft.com           | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| mixcloud.com            | HTTP/1.1 301      | 0       | 0        | 0      | 0              | 0    |
| msn.com                 | HTTP/1.1 200      | 7       | 6        | 3      | None           | /    |
| myspace.com             | HTTP/1.1 200      | 4       | 2        | 0      | 0              | /    |
| mysql.com               | HTTP/1.1 200      | 4       | 2        | 0      | 0              | /    |
| mystrikingly.com        | HTTP/1.1 200      | 1       | 0        | 0      | 0              | /    |
| nature.com              | HTTP/1.1 200      | 3       | 3        | 1      | 0              | /    |
| netvibes.com            | HTTP/1.1 200      | 1       | 0        | 1      | None           | /    |
| nginx.com               | HTTP/1.1 200      | 2       | 1        | 0      | Lax            | /    |
| nhk.or.jp               | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| nih.gov                 | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| ok.ru                   | HTTP/1.1 200      | 2       | 2        | 2      | 0              | /    |
| orange.fr               | HTTP/1.1 200      | 2       | 2        | 1      | None           | /    |
| oreilly.com             | HTTP/1.1 200      | 2       | 2        | 1      | None           | /    |
| ox.au.uk                | HTTP/1.1 200      | 1       | 0        | 0      | 0              | 0    |
| photobucket.com         | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| pinterest.com           | HTTP/1.1 200      | 4       | 3        | 3      | None           | /    |
| plos.org                | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| prezi.com               | HTTP/1.1 406      | 0       | 0        | 0      | 0              | 0    |
| princeton.edu           | HTTP/1.1 200      | 1       | 1        | 0      | Lax            | /    |
| pt.wikipedia.org        | HTTP/1.1 200      | 8       | 6        | 8      | 0              | /    |
| qz.com                  | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| rapidshare.com          | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| researchgate.net        | HTTP/1.1 200      | 4       | 4        | 4      | Lax            | /    |
| reuters.com             | HTTP/1.1 200      | 1       | 1        | 0      | 0              | /    |
| ria.ru                  | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| samsung.com             | HTTP/1.1 200      | 7       | 0        | 1      | None           | /    |
| scoop.it                | HTTP/1.1 200      | 2       | 0        | 1      | None           | /    |
| secureserver.net        | HTTP/1.1 404      | 2       | 0        | 2      | None(2)        | /    |
| shutterstock.com        | HTTP/1.1 406      | 0       | 0        | 0      | 0              | 0    |
| sites.google.com        | HTTP/1.1 200      | 1       | 1        | 1      | 0              | /    |
| smh.com.au              | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| snapchat.com            | HTTP/1.1 405      | 0       | 0        | 0      | 0              | 0    |
| so-net.ne.jp            | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| steampowered.com        | HTTP/1.1 200      | 3       | 0        | 3      | None(3)        | /    |
| storage.googleapis.com  | HTTP/1.1 400      | 0       | 0        | 0      | 0              | 0    |
| terra.com.br            | HTTP/1.1 200      | 2       | 0        | 2      | 0              | /    |
| tools.google.com        | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| tripadvisor.com         | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| twitter.com             | HTTP/1.1 200      | 4       | 0        | 4      | None(4)        | /    |
| urbandictionary.com     | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| usatoday.com            | HTTP/1.1 200      | 4       | 0        | 4      | Lax(4)         | /    |
| usgs.gov                | HTTP/1.1 200      | 4       | 0        | 1      | None(2)        | /    |
| usnews.com              | -timed out-       | -       | -        | -      | -              | -    |
| utexas.edu              | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| viglink.com             | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| vk.com                  | HTTP/1.1 418      | 0       | 0        | 0      | 0              | 0    |
| w3.org                  | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| wikia.com               | HTTP/1.1 200      | 3       | 0        | 3      | None(3)        | /    |
| wn.com                  | HTTP/1.1 200      | 2       | 0        | 0      | 0              | /    |
| wp.com                  | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| www.blogger.com         | HTTP/1.1 200      | 3       | 3        | 3      | 0              | /    |
| www.canalblog.com       | HTTP/1.1 200      | 1       | 1        | 0      | 0              | /    |
| www.over-blog.com       | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
| xing.com                | HTTP/1.1 200      | 4       | 2        | 4      | Lax(3)         | /    |
| yandex.ru               | HTTP/1.1 200      | 10      | 1        | 2      | 0              | /    |
| ytimg.com               | HTTP/1.1 200      | 0       | 0        | 0      | 0              | 0    |
