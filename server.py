from flask import Flask, render_template

app = Flask(__name__)

import os
from instagram import client
import jinja2


#configure the Instagram API using environmental variables
instaConfig = {
	'client_id':os.environ.get('INSTA_CLIENT_ID'),
	'client_secret':os.environ.get('INSTA_CLIENT_SECRET'),
	'redirect_uri':os.environ.get('REDIRECT_URI')	
}

# Instantiate instagram
igapi = client.InstagramAPI(**instaConfig)


@app.route('/')
def index():
	"""Returns the index page with the cat slideshow"""

	# Below is a repo from a fellow Hackbrighter that I used as an example of how to use the python-instagram module.
	# https://github.com/GstarGface/hide-and-cheek-design-lab/blob/master/design_lab.py
	tagged_media, next = igapi.tag_recent_media(count=30, tag_name='catsofinstagram')


	# Store images and data in a dictionary to pass through Jinja
	imageData = {
			'tagged' : tagged_media,
	}


	return render_template("index.html", **imageData)


if __name__ == "__main__":
    app.run(debug=False)