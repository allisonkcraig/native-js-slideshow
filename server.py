import random

from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

# -*- coding: UTF-8 -*-
import os
import hmac
from hashlib import sha256
from instagram import client
import jinja2
# import flickr



#configure the Instagram API
instaConfig = {
	'client_id':os.environ.get('INSTA_CLIENT_ID'),
	'client_secret':os.environ.get('INSTA_CLIENT_SECRET'),
	'redirect_uri':os.environ.get('REDIRECT_URI')	
}


igapi = client.InstagramAPI(**instaConfig)

#I get by with little help from my friend, Georgia:
# https://github.com/GstarGface/hide-and-cheek-design-lab/blob/master/design_lab.py




@app.route('/')
def index():
	"""Returns the index page with the cat slideshow"""
	tagged_media, next = igapi.tag_recent_media(count=60, tag_name='catsofinstagram')
	# print tagged_media
	for n in tagged_media:
		print n


	imageData = {
			'tagged' : tagged_media,
	}

	print imageData['tagged']
	return render_template("index.html", **imageData)

@app.route("/return-insta", methods=["POST"])
def delete_block_skirt():
    """Returns image from Instagram API call"""
    tagged_media, next = igapi.tag_recent_media(count=60, tag_name='catsofinstagram')
	# print tagged_media
    for n in tagged_media:
		print n


    imageData = {
			'tagged' : tagged_media,
	}

    print imageData['tagged']
    

    return render_template('lookbook.html', tagged=tagged_media, next=next )



if __name__ == "__main__":
    app.run(debug=True)