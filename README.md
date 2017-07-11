# illustrator-fill-stroke-switch
Switch multiple Fill Colors to Stroke Colors in Adobe Illustrator

As it stands by default, if you select multiple filled items in Illustrator and try to switch the Fill Color to the Outline Color it won't work. The closest and fastest approximation is to select by Fill Color and swap all fills for outlines, but what if you have hundreds of colors that you want to do this for?

How to run
==========

If you're new to running scripts in Illustrator here's a rough approximation of how to do it:

If you want to run it through Illustrator:
====

Open Illustrator, make your design biz, then select the items you want to swap the fill color with the outline color. On Mac, press Command + F12. This will bring up a file browser where you can select the script file. Select the .jsx file, click "Open" and it'll swap your fills for outlines!

If you want to edit it or run it through ExtendScript Toolkit
====

Open ESTK, select "Open" from the navigation and select the .jsx file. From here you can edit it in the development environment, or you can run it directly into Illustrator by selecting the appropirate version of Illustrator from the drop-down in the top left (this has been most recently tested in Illustrator CC 19) then clicking the green play button. (tbh i don't recommend running this through ESTK b/c it's a bit antiquated. you can edit this script in any text editor and run it with the above mentioned key commands and it'll probably feel 99% more intuitive/faster. The only benefit of ESTK is the console readouts, which you shouldn't need if you've ungrouped and released all compound paths. (see below if that's confusing)

!!!!! IMPORTANT !!!!!
====

The items you select need to be ungrouped and you also need to release any compound paths that exist in the items you've selected for this to work. If you run the .jsx file as you've downloaded it and it doesn't work it's most likely because your objects are grouped or are a compound path. If you outline type you've written, you HAVE to ungroup and release compound path before this will work.
