# character-count-lp
Barebones character count extension.

This is a barebones implementation of a character counter that sacrifices feature-richness in favor of simplicity and hopefully better performance.

All it does is try to count the number of highlighted characters when you let go of a mouse button.

## Thoughts

In Chrome when you left-click on highlighted text, it deselects the texts, but window.getSelection() still returns the same selection object as before the click, after the click.

I haven't looked into why this is, or if there's a clever thing to work around it. So that means if you click on selected texts and it gets deselected, the little character count message in top right won't go away, and you'll have to click or select something again.