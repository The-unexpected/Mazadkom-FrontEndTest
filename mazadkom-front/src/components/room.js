import React, { Component } from 'react';

export class room extends Component {
  render() {
    return (
      <div>
        <div class="bubbleWrapper">
          <div class="inlineContainer">
            <img
              class="inlineIcon"
              src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
            />
            <div class="otherBubble other">No ninjas!</div>
          </div>
          <span class="other">08:41</span>
        </div>
        <div class="bubbleWrapper">
          <div class="inlineContainer own">
            <img
              class="inlineIcon"
              src="https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png"
            />
            <div class="ownBubble own">
              The first rule of being a ninja is, 'Do no harm.'
            </div>
          </div>
          <span class="own">08:55</span>
        </div>
        <div class="bubbleWrapper">
          <div class="inlineContainer">
            <img
              class="inlineIcon"
              src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
            />
            <div class="otherBubble other">
              Knowing when to leave requires training.
            </div>
          </div>
        </div>
        <span class="other">10:13</span>
        <div class="bubbleWrapper">
          <div class="inlineContainer own">
            <img
              class="inlineIcon"
              src="https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png"
            />
            <div class="ownBubble own">Stunned but impressed.</div>
          </div>
          <span class="own">11:07</span>
        </div>
        <div class="bubbleWrapper">
          <div class="inlineContainer">
            <img
              class="inlineIcon"
              src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
            />
            <div class="otherBubble other">How about throwing stars?</div>
          </div>
          <span class="other">11:11</span>
        </div>
      </div>
    );
  }
}

export default room;
