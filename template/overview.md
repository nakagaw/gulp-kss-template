# Style guide overview

<p class="kss-section__description">This documentation is style guide for `example.com`.</p>

## Usage
Here's an example KSS comment:
<div class="kss-block">
    <div class="kss-block__markup">
<pre class="prettyprint"><code>// Button
// Buttons
//
//--primary - primary button
//--normal  - normal buttons
//
// Markup:
// <a href="#" class="button {$modifiers}">{$modifiers}</a>
// {$modifiers} で templateの {{modifierMarkup}} において自動的にclassを付与してくれる
// Styleguide 1.1

// Normal buttons
//
//.button.--normal
//
// Markup:
// <a href="#" class="button --normal">Button</a>
//
// Styleguide 1.2

.button {
    ...
    &.--primary {
        ...
    }
    &.--normal {
        ...
    }
}</code></pre>
    </div>
</div>

## My Notes

階層に番号をつけてくれる {{reference}} はわかりやすいが、あとからメニューの順番を入れ替えるときなど、かなりめんどくさいことになるので、template側で消してしまって、5刻みとかにしておくと良い。

## Reference
- [kss-node](https://github.com/kss-node/kss-node)
- [Using custom templates · kss-node/kss-node Wiki](https://github.com/kss-node/kss-node/wiki/Using-custom-templates)
- [kss-node/helpers.js at master · kss-node/kss-node](https://github.com/kss-node/kss-node/blob/master/generator/handlebars/helpers.js)