### How to use `pyiplocation` to geolocate IPs - 5th Aug 2023

<u>[pyiplocation](https://pypi.org/project/pyiplocation)</u> is a simple python package created by me. This package allows you to geolocate IPs without the need for a paid or limited API.<br>
To get started, you first need to install it :<br>`pip install pyiplocation`<br>
Once installed, create a new python file containing this code snippet :<br>

<code class="codeblock">
import pyiplocation

ip_info = pyiplocation.geolocate("12.34.87.45")
</code>

the `ip_info` variable will contain a dictionary containing everything you need about an IP:<br>

- The Hostname
- The Continent Name
- The Country Code
- The Country Name
- The Country Capital
- The State/Province
- The District/County
- The City
- The Zip Code
- The City's Latitude
- The City's Longitude
- The Country's Currency (name, code, symbol)
- The Timezone (name, offset, current time etc..)
- The Calling Code

#### And more!

If you wanna know everything that the `geolocate()` function returns or perhaps see the package's code, I recommend checking out the project on <u>[GitHub](https://github.com/gugu256/pyiplocation)</u> and <u>[pypi](https://pypi.org/project/pyiplocation)</u>.



### Shitter.ch Updates - 1st Aug 2023

Me and the rest of the Shitter Team are adding a lot of new updates to the website. So go check it out : <u>[shitter.ch](https://shitter.ch)</u>

### Welcome to my blog! - 31st Jul 2023

This is the place where I write updates about my projects and other stuff.