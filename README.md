# DECTalk_StreamElements
DECTalk TTS in your stream!

This is a completely uncontrolled/moderated DECTalk TTS custom widget for your StreamElements overlay for use in something like Twitch.

It requires a DECTalk_web instance running and exposed to the web.

For now, it can be used by anyone in your chat, and there is no way to 'stop' it other than muting the overlay in OBS or similar. Beware.

## Install:

Copy and paste the data in custom_widget.js in to the JS of your Custom Widget in the StreamElements overlay editor. 

Edit the ``ServiceURL`` and ``ServiceAPIKey`` to contain your DECTalk_web instance

Set ``IncludeDisplayName`` to true or false depending on how you want it set up.

The overlay doesnt need to contain anything else. 

Add the overlay to OBS or similar.

## Usage:

```!tts [DECTalk text here including phoneme data]```
