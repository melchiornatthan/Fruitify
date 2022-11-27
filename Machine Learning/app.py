import os
import sys
import numpy as np
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename

from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
from PIL import Image, ImageFile
import tf_model
from io import BytesIO
import matplotlib
matplotlib.use('Agg')
from matplotlib import pyplot as plt
import base64


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/predictionFruit', methods=['GET','POST'])
def predFruit():
    if request.method=='POST':
         file = request.files['file']
         org_img, img=tf_model.preprocess(file)

         print(img.shape)
         fruit_dict=tf_model.classify_fruit(img)
         rotten=tf_model.check_rotten(img)

         img_x=BytesIO()
         plt.imshow(org_img/255.0)
         plt.savefig(img_x,format='png')
         plt.close()
         img_x.seek(0)
         plot_url=base64.b64encode(img_x.getvalue()).decode('utf8')
        #  plt.use('Agg')

    return fruit_dict
@app.route('/predictionQuality', methods=['GET','POST'])
def predROtten():
    if request.method=='POST':
         file = request.files['file']
         org_img, img=tf_model.preprocess(file)

         print(img.shape)
         fruit_dict=tf_model.classify_fruit(img)
         rotten=tf_model.check_rotten(img)

         img_x=BytesIO()
         plt.imshow(org_img/255.0)
         plt.savefig(img_x,format='png')
         plt.close()
         img_x.seek(0)
         plot_url=base64.b64encode(img_x.getvalue()).decode('utf8')
        #  plt.use('Agg')

    return rotten
if __name__=='__main__':
    app.run(debug=True)