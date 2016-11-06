# Fakeception

This is a tool to convert workflows saved in Fake.app into test instructions for tools like Codeception.

## Motivation

I think Fake.app is a great method to introduce GUI users to making website scenarios. I haven't yet seen another method which is as user-friendly for a user who could reproduce the steps in a browser, but would find expressing the same in code a challenge. This functionality has been requested a few times on the Fake google group, but not provided.

## TODO

* **Detect and convert binary `.fakeworkflow` files.** Fake.app can read .fakeworkflow as binary or xml, but always (?) saves as binary. plist can read xml only (?).
* **Iterate through the xml contents.** The layout of the XML file seems weird to me, but that may just be lack of OSX development nonce on my part.
* **Output a series of instructions.** I don't think the workflow has complex structures (I've not yet used branches, for example), so we can just spit out matching test instructions from a dictionary or something here.
* **Improve on that**. Ultimately it'd be more sensible to spit out Codeception or Selenium or other DOM-focussed tests. How to do this?
