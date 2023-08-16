---
id: "AllSystemCSSProperties"
title: "Boost"
sidebar_label: "AllSystemCSSProperties"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

Map of all available CSS properties (including aliases) and their raw value.
Only used internally to map CSS properties to input types (responsive value,
theme function or nested) in `SystemCssProperties`.

## Hierarchy

- `Omit`<[`StandardCSSProperties`](../modules.md#standardcssproperties), keyof [`OverwriteCSSProperties`](OverwriteCSSProperties.md)\>

- [`OverwriteCSSProperties`](OverwriteCSSProperties.md)

- [`AliasesCSSProperties`](AliasesCSSProperties.md)

  ↳ **`AllSystemCSSProperties`**

## Properties

### KhtmlBoxAlign

• `Optional` **KhtmlBoxAlign**: `BoxAlign` \| `NonNullable`<`undefined` \| `BoxAlign`\>[]

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`Deprecated`**

#### Inherited from

Omit.KhtmlBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:8084

___

### KhtmlBoxDirection

• `Optional` **KhtmlBoxDirection**: `BoxDirection` \| `NonNullable`<`undefined` \| `BoxDirection`\>[]

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`Deprecated`**

#### Inherited from

Omit.KhtmlBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:8094

___

### KhtmlBoxFlex

• `Optional` **KhtmlBoxFlex**: `BoxFlex` \| `NonNullable`<`undefined` \| `BoxFlex`\>[]

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.KhtmlBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:8104

___

### KhtmlBoxFlexGroup

• `Optional` **KhtmlBoxFlexGroup**: `BoxFlexGroup` \| `NonNullable`<`undefined` \| `BoxFlexGroup`\>[]

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.KhtmlBoxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:8114

___

### KhtmlBoxLines

• `Optional` **KhtmlBoxLines**: `BoxLines` \| `NonNullable`<`undefined` \| `BoxLines`\>[]

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`Deprecated`**

#### Inherited from

Omit.KhtmlBoxLines

#### Defined in

node_modules/csstype/index.d.ts:8124

___

### KhtmlBoxOrdinalGroup

• `Optional` **KhtmlBoxOrdinalGroup**: `BoxOrdinalGroup` \| `NonNullable`<`undefined` \| `BoxOrdinalGroup`\>[]

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.KhtmlBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8134

___

### KhtmlBoxOrient

• `Optional` **KhtmlBoxOrient**: `BoxOrient` \| `NonNullable`<`undefined` \| `BoxOrient`\>[]

The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`Deprecated`**

#### Inherited from

Omit.KhtmlBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8144

___

### KhtmlBoxPack

• `Optional` **KhtmlBoxPack**: `BoxPack` \| `NonNullable`<`undefined` \| `BoxPack`\>[]

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`Deprecated`**

#### Inherited from

Omit.KhtmlBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8154

___

### KhtmlLineBreak

• `Optional` **KhtmlLineBreak**: `LineBreak` \| `NonNullable`<`undefined` \| `LineBreak`\>[]

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.KhtmlLineBreak

#### Defined in

node_modules/csstype/index.d.ts:8164

___

### KhtmlOpacity

• `Optional` **KhtmlOpacity**: `Opacity` \| `NonNullable`<`undefined` \| `Opacity`\>[]

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.KhtmlOpacity

#### Defined in

node_modules/csstype/index.d.ts:8174

___

### KhtmlUserSelect

• `Optional` **KhtmlUserSelect**: `UserSelect` \| `NonNullable`<`undefined` \| `UserSelect`\>[]

The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.KhtmlUserSelect

#### Defined in

node_modules/csstype/index.d.ts:8184

___

### MozAnimation

• `Optional` **MozAnimation**: `Animation`<`string` & {}\> \| `NonNullable`<`undefined` \| `Animation`<`string` & {}\>\>[]

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

Omit.MozAnimation

#### Defined in

node_modules/csstype/index.d.ts:7671

___

### MozAnimationDelay

• `Optional` **MozAnimationDelay**: `string`[] \| `AnimationDelay`<`string` & {}\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.MozAnimationDelay

#### Defined in

node_modules/csstype/index.d.ts:5878

___

### MozAnimationDirection

• `Optional` **MozAnimationDirection**: `string`[] \| `AnimationDirection`

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

Omit.MozAnimationDirection

#### Defined in

node_modules/csstype/index.d.ts:5886

___

### MozAnimationDuration

• `Optional` **MozAnimationDuration**: `string`[] \| `AnimationDuration`<`string` & {}\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.MozAnimationDuration

#### Defined in

node_modules/csstype/index.d.ts:5894

___

### MozAnimationFillMode

• `Optional` **MozAnimationFillMode**: `string`[] \| `AnimationFillMode`

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

Omit.MozAnimationFillMode

#### Defined in

node_modules/csstype/index.d.ts:5902

___

### MozAnimationIterationCount

• `Optional` **MozAnimationIterationCount**: `AnimationIterationCount` \| `NonNullable`<`undefined` \| `AnimationIterationCount`\>[]

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

Omit.MozAnimationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:5910

___

### MozAnimationName

• `Optional` **MozAnimationName**: `string`[] \| `AnimationName`

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

Omit.MozAnimationName

#### Defined in

node_modules/csstype/index.d.ts:5918

___

### MozAnimationPlayState

• `Optional` **MozAnimationPlayState**: `string`[] \| `AnimationPlayState`

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

Omit.MozAnimationPlayState

#### Defined in

node_modules/csstype/index.d.ts:5926

___

### MozAnimationTimingFunction

• `Optional` **MozAnimationTimingFunction**: `string`[] \| `AnimationTimingFunction`

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

Omit.MozAnimationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:5934

___

### MozAppearance

• `Optional` **MozAppearance**: `MozAppearance` \| `NonNullable`<`undefined` \| `MozAppearance`\>[]

The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.

**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

Omit.MozAppearance

#### Defined in

node_modules/csstype/index.d.ts:5942

___

### MozBackfaceVisibility

• `Optional` **MozBackfaceVisibility**: `BackfaceVisibility` \| `NonNullable`<`undefined` \| `BackfaceVisibility`\>[]

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

Omit.MozBackfaceVisibility

#### Defined in

node_modules/csstype/index.d.ts:5950

___

### MozBackgroundClip

• `Optional` **MozBackgroundClip**: `string`[] \| `BackgroundClip`

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

**`Deprecated`**

#### Inherited from

Omit.MozBackgroundClip

#### Defined in

node_modules/csstype/index.d.ts:8194

___

### MozBackgroundInlinePolicy

• `Optional` **MozBackgroundInlinePolicy**: `BoxDecorationBreak` \| `NonNullable`<`undefined` \| `BoxDecorationBreak`\>[]

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

**`Deprecated`**

#### Inherited from

Omit.MozBackgroundInlinePolicy

#### Defined in

node_modules/csstype/index.d.ts:8204

___

### MozBackgroundOrigin

• `Optional` **MozBackgroundOrigin**: `string`[] \| `BackgroundOrigin`

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

**`Deprecated`**

#### Inherited from

Omit.MozBackgroundOrigin

#### Defined in

node_modules/csstype/index.d.ts:8214

___

### MozBackgroundSize

• `Optional` **MozBackgroundSize**: `BackgroundSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BackgroundSize`<`string` \| `number`\>\>[]

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

**`Deprecated`**

#### Inherited from

Omit.MozBackgroundSize

#### Defined in

node_modules/csstype/index.d.ts:8224

___

### MozBinding

• `Optional` **MozBinding**: `string`[] \| `MozBinding`

The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.

**Syntax**: `<url> | none`

**Initial value**: `none`

#### Inherited from

Omit.MozBinding

#### Defined in

node_modules/csstype/index.d.ts:5958

___

### MozBorderBottomColors

• `Optional` **MozBorderBottomColors**: `string`[] \| `MozBorderBottomColors`

In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

Omit.MozBorderBottomColors

#### Defined in

node_modules/csstype/index.d.ts:5966

___

### MozBorderEndColor

• `Optional` **MozBorderEndColor**: `string`[] \| `BorderInlineEndColor`

The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.MozBorderEndColor

#### Defined in

node_modules/csstype/index.d.ts:5974

___

### MozBorderEndStyle

• `Optional` **MozBorderEndStyle**: `BorderInlineEndStyle` \| `NonNullable`<`undefined` \| `BorderInlineEndStyle`\>[]

The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

Omit.MozBorderEndStyle

#### Defined in

node_modules/csstype/index.d.ts:5982

___

### MozBorderEndWidth

• `Optional` **MozBorderEndWidth**: `BorderInlineEndWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderInlineEndWidth`<`string` \| `number`\>\>[]

The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

#### Inherited from

Omit.MozBorderEndWidth

#### Defined in

node_modules/csstype/index.d.ts:5990

___

### MozBorderImage

• `Optional` **MozBorderImage**: `BorderImage` \| `NonNullable`<`undefined` \| `BorderImage`\>[]

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

Omit.MozBorderImage

#### Defined in

node_modules/csstype/index.d.ts:7677

___

### MozBorderLeftColors

• `Optional` **MozBorderLeftColors**: `string`[] \| `MozBorderLeftColors`

In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

Omit.MozBorderLeftColors

#### Defined in

node_modules/csstype/index.d.ts:5998

___

### MozBorderRadius

• `Optional` **MozBorderRadius**: `BorderRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderRadius`<`string` \| `number`\>\>[]

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

**`Deprecated`**

#### Inherited from

Omit.MozBorderRadius

#### Defined in

node_modules/csstype/index.d.ts:8232

___

### MozBorderRadiusBottomleft

• `Optional` **MozBorderRadiusBottomleft**: `BorderBottomLeftRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBottomLeftRadius`<`string` \| `number`\>\>[]

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozBorderRadiusBottomleft

#### Defined in

node_modules/csstype/index.d.ts:8242

___

### MozBorderRadiusBottomright

• `Optional` **MozBorderRadiusBottomright**: `BorderBottomRightRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBottomRightRadius`<`string` \| `number`\>\>[]

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozBorderRadiusBottomright

#### Defined in

node_modules/csstype/index.d.ts:8252

___

### MozBorderRadiusTopleft

• `Optional` **MozBorderRadiusTopleft**: `BorderTopLeftRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderTopLeftRadius`<`string` \| `number`\>\>[]

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozBorderRadiusTopleft

#### Defined in

node_modules/csstype/index.d.ts:8262

___

### MozBorderRadiusTopright

• `Optional` **MozBorderRadiusTopright**: `BorderTopRightRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderTopRightRadius`<`string` \| `number`\>\>[]

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozBorderRadiusTopright

#### Defined in

node_modules/csstype/index.d.ts:8272

___

### MozBorderRightColors

• `Optional` **MozBorderRightColors**: `string`[] \| `MozBorderRightColors`

In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

Omit.MozBorderRightColors

#### Defined in

node_modules/csstype/index.d.ts:6006

___

### MozBorderStartColor

• `Optional` **MozBorderStartColor**: `string`[] \| `BorderInlineStartColor`

The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.MozBorderStartColor

#### Defined in

node_modules/csstype/index.d.ts:6014

___

### MozBorderStartStyle

• `Optional` **MozBorderStartStyle**: `BorderInlineStartStyle` \| `NonNullable`<`undefined` \| `BorderInlineStartStyle`\>[]

The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

Omit.MozBorderStartStyle

#### Defined in

node_modules/csstype/index.d.ts:6022

___

### MozBorderTopColors

• `Optional` **MozBorderTopColors**: `string`[] \| `MozBorderTopColors`

In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

Omit.MozBorderTopColors

#### Defined in

node_modules/csstype/index.d.ts:6030

___

### MozBoxAlign

• `Optional` **MozBoxAlign**: `BoxAlign` \| `NonNullable`<`undefined` \| `BoxAlign`\>[]

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`Deprecated`**

#### Inherited from

Omit.MozBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:8282

___

### MozBoxDirection

• `Optional` **MozBoxDirection**: `BoxDirection` \| `NonNullable`<`undefined` \| `BoxDirection`\>[]

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`Deprecated`**

#### Inherited from

Omit.MozBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:8292

___

### MozBoxFlex

• `Optional` **MozBoxFlex**: `BoxFlex` \| `NonNullable`<`undefined` \| `BoxFlex`\>[]

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:8302

___

### MozBoxOrdinalGroup

• `Optional` **MozBoxOrdinalGroup**: `BoxOrdinalGroup` \| `NonNullable`<`undefined` \| `BoxOrdinalGroup`\>[]

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.MozBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8312

___

### MozBoxOrient

• `Optional` **MozBoxOrient**: `BoxOrient` \| `NonNullable`<`undefined` \| `BoxOrient`\>[]

The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`Deprecated`**

#### Inherited from

Omit.MozBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8322

___

### MozBoxPack

• `Optional` **MozBoxPack**: `BoxPack` \| `NonNullable`<`undefined` \| `BoxPack`\>[]

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`Deprecated`**

#### Inherited from

Omit.MozBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8332

___

### MozBoxShadow

• `Optional` **MozBoxShadow**: `string`[] \| `BoxShadow`

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.MozBoxShadow

#### Defined in

node_modules/csstype/index.d.ts:8342

___

### MozBoxSizing

• `Optional` **MozBoxSizing**: `BoxSizing` \| `NonNullable`<`undefined` \| `BoxSizing`\>[]

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

Omit.MozBoxSizing

#### Defined in

node_modules/csstype/index.d.ts:6038

___

### MozColumnCount

• `Optional` **MozColumnCount**: `ColumnCount` \| `NonNullable`<`undefined` \| `ColumnCount`\>[]

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

Omit.MozColumnCount

#### Defined in

node_modules/csstype/index.d.ts:6046

___

### MozColumnFill

• `Optional` **MozColumnFill**: `ColumnFill` \| `NonNullable`<`undefined` \| `ColumnFill`\>[]

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

Omit.MozColumnFill

#### Defined in

node_modules/csstype/index.d.ts:6054

___

### MozColumnRule

• `Optional` **MozColumnRule**: `ColumnRule`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnRule`<`string` \| `number`\>\>[]

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

Omit.MozColumnRule

#### Defined in

node_modules/csstype/index.d.ts:7683

___

### MozColumnRuleColor

• `Optional` **MozColumnRuleColor**: `string`[] \| `ColumnRuleColor`

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.MozColumnRuleColor

#### Defined in

node_modules/csstype/index.d.ts:6062

___

### MozColumnRuleStyle

• `Optional` **MozColumnRuleStyle**: `string`[] \| `ColumnRuleStyle`

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

Omit.MozColumnRuleStyle

#### Defined in

node_modules/csstype/index.d.ts:6070

___

### MozColumnRuleWidth

• `Optional` **MozColumnRuleWidth**: `ColumnRuleWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnRuleWidth`<`string` \| `number`\>\>[]

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

Omit.MozColumnRuleWidth

#### Defined in

node_modules/csstype/index.d.ts:6078

___

### MozColumnWidth

• `Optional` **MozColumnWidth**: `ColumnWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnWidth`<`string` \| `number`\>\>[]

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

Omit.MozColumnWidth

#### Defined in

node_modules/csstype/index.d.ts:6086

___

### MozColumns

• `Optional` **MozColumns**: `Columns`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Columns`<`string` \| `number`\>\>[]

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

Omit.MozColumns

#### Defined in

node_modules/csstype/index.d.ts:7689

___

### MozContextProperties

• `Optional` **MozContextProperties**: `string`[] \| `MozContextProperties`

The **`-moz-context-properties`** property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.

**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`

**Initial value**: `none`

#### Inherited from

Omit.MozContextProperties

#### Defined in

node_modules/csstype/index.d.ts:6094

___

### MozFloatEdge

• `Optional` **MozFloatEdge**: `MozFloatEdge` \| `NonNullable`<`undefined` \| `MozFloatEdge`\>[]

The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.

**Syntax**: `border-box | content-box | margin-box | padding-box`

**Initial value**: `content-box`

**`Deprecated`**

#### Inherited from

Omit.MozFloatEdge

#### Defined in

node_modules/csstype/index.d.ts:8352

___

### MozFontFeatureSettings

• `Optional` **MozFontFeatureSettings**: `string`[] \| `FontFeatureSettings`

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

Omit.MozFontFeatureSettings

#### Defined in

node_modules/csstype/index.d.ts:6102

___

### MozFontLanguageOverride

• `Optional` **MozFontLanguageOverride**: `string`[] \| `FontLanguageOverride`

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: `normal | <string>`

**Initial value**: `normal`

#### Inherited from

Omit.MozFontLanguageOverride

#### Defined in

node_modules/csstype/index.d.ts:6110

___

### MozForceBrokenImageIcon

• `Optional` **MozForceBrokenImageIcon**: `MozForceBrokenImageIcon` \| `NonNullable`<`undefined` \| `MozForceBrokenImageIcon`\>[]

The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.

**Syntax**: `0 | 1`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozForceBrokenImageIcon

#### Defined in

node_modules/csstype/index.d.ts:8362

___

### MozHyphens

• `Optional` **MozHyphens**: `Hyphens` \| `NonNullable`<`undefined` \| `Hyphens`\>[]

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

Omit.MozHyphens

#### Defined in

node_modules/csstype/index.d.ts:6118

___

### MozImageRegion

• `Optional` **MozImageRegion**: `string`[] \| `MozImageRegion`

For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.

**Syntax**: `<shape> | auto`

**Initial value**: `auto`

#### Inherited from

Omit.MozImageRegion

#### Defined in

node_modules/csstype/index.d.ts:6126

___

### MozMarginEnd

• `Optional` **MozMarginEnd**: `MarginInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginInlineEnd`<`string` \| `number`\>\>[]

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

Omit.MozMarginEnd

#### Defined in

node_modules/csstype/index.d.ts:6134

___

### MozMarginStart

• `Optional` **MozMarginStart**: `MarginInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginInlineStart`<`string` \| `number`\>\>[]

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

Omit.MozMarginStart

#### Defined in

node_modules/csstype/index.d.ts:6142

___

### MozOpacity

• `Optional` **MozOpacity**: `Opacity` \| `NonNullable`<`undefined` \| `Opacity`\>[]

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.MozOpacity

#### Defined in

node_modules/csstype/index.d.ts:8372

___

### MozOrient

• `Optional` **MozOrient**: `MozOrient` \| `NonNullable`<`undefined` \| `MozOrient`\>[]

The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.

**Syntax**: `inline | block | horizontal | vertical`

**Initial value**: `inline`

#### Inherited from

Omit.MozOrient

#### Defined in

node_modules/csstype/index.d.ts:6150

___

### MozOsxFontSmoothing

• `Optional` **MozOsxFontSmoothing**: `FontSmooth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `FontSmooth`<`string` \| `number`\>\>[]

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

Omit.MozOsxFontSmoothing

#### Defined in

node_modules/csstype/index.d.ts:6158

___

### MozOutline

• `Optional` **MozOutline**: `Outline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Outline`<`string` \| `number`\>\>[]

The **`outline`** CSS shorthand property sets most of the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

**`Deprecated`**

#### Inherited from

Omit.MozOutline

#### Defined in

node_modules/csstype/index.d.ts:8380

___

### MozOutlineColor

• `Optional` **MozOutlineColor**: `string`[] \| `OutlineColor`

The **`outline-color`** CSS property sets the color of an element's outline.

**Syntax**: `<color> | invert`

**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other

**`Deprecated`**

#### Inherited from

Omit.MozOutlineColor

#### Defined in

node_modules/csstype/index.d.ts:8390

___

### MozOutlineRadius

• `Optional` **MozOutlineRadius**: `MozOutlineRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MozOutlineRadius`<`string` \| `number`\>\>[]

In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.

**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`

**`Deprecated`**

#### Inherited from

Omit.MozOutlineRadius

#### Defined in

node_modules/csstype/index.d.ts:8398

___

### MozOutlineRadiusBottomleft

• `Optional` **MozOutlineRadiusBottomleft**: `MozOutlineRadiusBottomleft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MozOutlineRadiusBottomleft`<`string` \| `number`\>\>[]

In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozOutlineRadiusBottomleft

#### Defined in

node_modules/csstype/index.d.ts:8408

___

### MozOutlineRadiusBottomright

• `Optional` **MozOutlineRadiusBottomright**: `MozOutlineRadiusBottomright`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MozOutlineRadiusBottomright`<`string` \| `number`\>\>[]

In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozOutlineRadiusBottomright

#### Defined in

node_modules/csstype/index.d.ts:8418

___

### MozOutlineRadiusTopleft

• `Optional` **MozOutlineRadiusTopleft**: `MozOutlineRadiusTopleft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MozOutlineRadiusTopleft`<`string` \| `number`\>\>[]

In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozOutlineRadiusTopleft

#### Defined in

node_modules/csstype/index.d.ts:8428

___

### MozOutlineRadiusTopright

• `Optional` **MozOutlineRadiusTopright**: `MozOutlineRadiusTopright`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MozOutlineRadiusTopright`<`string` \| `number`\>\>[]

In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.MozOutlineRadiusTopright

#### Defined in

node_modules/csstype/index.d.ts:8438

___

### MozOutlineStyle

• `Optional` **MozOutlineStyle**: `string`[] \| `OutlineStyle`

The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `auto | <'border-style'>`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.MozOutlineStyle

#### Defined in

node_modules/csstype/index.d.ts:8448

___

### MozOutlineWidth

• `Optional` **MozOutlineWidth**: `OutlineWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `OutlineWidth`<`string` \| `number`\>\>[]

The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `<line-width>`

**Initial value**: `medium`

**`Deprecated`**

#### Inherited from

Omit.MozOutlineWidth

#### Defined in

node_modules/csstype/index.d.ts:8458

___

### MozPaddingEnd

• `Optional` **MozPaddingEnd**: `PaddingInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingInlineEnd`<`string` \| `number`\>\>[]

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

Omit.MozPaddingEnd

#### Defined in

node_modules/csstype/index.d.ts:6166

___

### MozPaddingStart

• `Optional` **MozPaddingStart**: `PaddingInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingInlineStart`<`string` \| `number`\>\>[]

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

Omit.MozPaddingStart

#### Defined in

node_modules/csstype/index.d.ts:6174

___

### MozPerspective

• `Optional` **MozPerspective**: `Perspective`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Perspective`<`string` \| `number`\>\>[]

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

Omit.MozPerspective

#### Defined in

node_modules/csstype/index.d.ts:6182

___

### MozPerspectiveOrigin

• `Optional` **MozPerspectiveOrigin**: `PerspectiveOrigin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PerspectiveOrigin`<`string` \| `number`\>\>[]

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

Omit.MozPerspectiveOrigin

#### Defined in

node_modules/csstype/index.d.ts:6190

___

### MozStackSizing

• `Optional` **MozStackSizing**: `MozStackSizing` \| `NonNullable`<`undefined` \| `MozStackSizing`\>[]

**`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.

**Syntax**: `ignore | stretch-to-fit`

**Initial value**: `stretch-to-fit`

#### Inherited from

Omit.MozStackSizing

#### Defined in

node_modules/csstype/index.d.ts:6198

___

### MozTabSize

• `Optional` **MozTabSize**: `TabSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TabSize`<`string` \| `number`\>\>[]

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

#### Inherited from

Omit.MozTabSize

#### Defined in

node_modules/csstype/index.d.ts:6206

___

### MozTextAlignLast

• `Optional` **MozTextAlignLast**: `TextAlignLast` \| `NonNullable`<`undefined` \| `TextAlignLast`\>[]

The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

**Syntax**: `auto | start | end | left | right | center | justify`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.MozTextAlignLast

#### Defined in

node_modules/csstype/index.d.ts:8468

___

### MozTextBlink

• `Optional` **MozTextBlink**: `MozTextBlink` \| `NonNullable`<`undefined` \| `MozTextBlink`\>[]

The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.

**Syntax**: `none | blink`

**Initial value**: `none`

#### Inherited from

Omit.MozTextBlink

#### Defined in

node_modules/csstype/index.d.ts:6214

___

### MozTextDecorationColor

• `Optional` **MozTextDecorationColor**: `string`[] \| `TextDecorationColor`

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

**`Deprecated`**

#### Inherited from

Omit.MozTextDecorationColor

#### Defined in

node_modules/csstype/index.d.ts:8478

___

### MozTextDecorationLine

• `Optional` **MozTextDecorationLine**: `string`[] \| `TextDecorationLine`

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.MozTextDecorationLine

#### Defined in

node_modules/csstype/index.d.ts:8488

___

### MozTextDecorationStyle

• `Optional` **MozTextDecorationStyle**: `TextDecorationStyle` \| `NonNullable`<`undefined` \| `TextDecorationStyle`\>[]

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

**`Deprecated`**

#### Inherited from

Omit.MozTextDecorationStyle

#### Defined in

node_modules/csstype/index.d.ts:8498

___

### MozTextSizeAdjust

• `Optional` **MozTextSizeAdjust**: `string`[] \| `TextSizeAdjust`

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

Omit.MozTextSizeAdjust

#### Defined in

node_modules/csstype/index.d.ts:6222

___

### MozTransformOrigin

• `Optional` **MozTransformOrigin**: `TransformOrigin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TransformOrigin`<`string` \| `number`\>\>[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

Omit.MozTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:6230

___

### MozTransformStyle

• `Optional` **MozTransformStyle**: `TransformStyle` \| `NonNullable`<`undefined` \| `TransformStyle`\>[]

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

Omit.MozTransformStyle

#### Defined in

node_modules/csstype/index.d.ts:6238

___

### MozTransition

• `Optional` **MozTransition**: `string`[] \| `Transition`<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

Omit.MozTransition

#### Defined in

node_modules/csstype/index.d.ts:7695

___

### MozTransitionDelay

• `Optional` **MozTransitionDelay**: `string`[] \| `TransitionDelay`<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.MozTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:6246

___

### MozTransitionDuration

• `Optional` **MozTransitionDuration**: `string`[] \| `TransitionDuration`<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.MozTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:6254

___

### MozTransitionProperty

• `Optional` **MozTransitionProperty**: `string`[] \| `TransitionProperty`

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

Omit.MozTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:6262

___

### MozTransitionTimingFunction

• `Optional` **MozTransitionTimingFunction**: `string`[] \| `TransitionTimingFunction`

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

Omit.MozTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:6270

___

### MozUserFocus

• `Optional` **MozUserFocus**: `MozUserFocus` \| `NonNullable`<`undefined` \| `MozUserFocus`\>[]

The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.

**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`

**Initial value**: `none`

#### Inherited from

Omit.MozUserFocus

#### Defined in

node_modules/csstype/index.d.ts:6278

___

### MozUserInput

• `Optional` **MozUserInput**: `MozUserInput` \| `NonNullable`<`undefined` \| `MozUserInput`\>[]

In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.

**Syntax**: `auto | none | enabled | disabled`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.MozUserInput

#### Defined in

node_modules/csstype/index.d.ts:8508

___

### MozUserModify

• `Optional` **MozUserModify**: `MozUserModify` \| `NonNullable`<`undefined` \| `MozUserModify`\>[]

The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.

**Syntax**: `read-only | read-write | write-only`

**Initial value**: `read-only`

#### Inherited from

Omit.MozUserModify

#### Defined in

node_modules/csstype/index.d.ts:6286

___

### MozUserSelect

• `Optional` **MozUserSelect**: `UserSelect` \| `NonNullable`<`undefined` \| `UserSelect`\>[]

The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

Omit.MozUserSelect

#### Defined in

node_modules/csstype/index.d.ts:6294

___

### MozWindowDragging

• `Optional` **MozWindowDragging**: `MozWindowDragging` \| `NonNullable`<`undefined` \| `MozWindowDragging`\>[]

The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.

**Syntax**: `drag | no-drag`

**Initial value**: `drag`

#### Inherited from

Omit.MozWindowDragging

#### Defined in

node_modules/csstype/index.d.ts:6302

___

### MozWindowShadow

• `Optional` **MozWindowShadow**: `MozWindowShadow` \| `NonNullable`<`undefined` \| `MozWindowShadow`\>[]

The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.

**Syntax**: `default | menu | tooltip | sheet | none`

**Initial value**: `default`

#### Inherited from

Omit.MozWindowShadow

#### Defined in

node_modules/csstype/index.d.ts:6310

___

### OAnimation

• `Optional` **OAnimation**: `Animation`<`string` & {}\> \| `NonNullable`<`undefined` \| `Animation`<`string` & {}\>\>[]

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

**`Deprecated`**

#### Inherited from

Omit.OAnimation

#### Defined in

node_modules/csstype/index.d.ts:8526

___

### OAnimationDelay

• `Optional` **OAnimationDelay**: `string`[] \| `AnimationDelay`<`string` & {}\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`Deprecated`**

#### Inherited from

Omit.OAnimationDelay

#### Defined in

node_modules/csstype/index.d.ts:8536

___

### OAnimationDirection

• `Optional` **OAnimationDirection**: `string`[] \| `AnimationDirection`

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

**`Deprecated`**

#### Inherited from

Omit.OAnimationDirection

#### Defined in

node_modules/csstype/index.d.ts:8546

___

### OAnimationDuration

• `Optional` **OAnimationDuration**: `string`[] \| `AnimationDuration`<`string` & {}\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`Deprecated`**

#### Inherited from

Omit.OAnimationDuration

#### Defined in

node_modules/csstype/index.d.ts:8556

___

### OAnimationFillMode

• `Optional` **OAnimationFillMode**: `string`[] \| `AnimationFillMode`

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.OAnimationFillMode

#### Defined in

node_modules/csstype/index.d.ts:8566

___

### OAnimationIterationCount

• `Optional` **OAnimationIterationCount**: `AnimationIterationCount` \| `NonNullable`<`undefined` \| `AnimationIterationCount`\>[]

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.OAnimationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:8576

___

### OAnimationName

• `Optional` **OAnimationName**: `string`[] \| `AnimationName`

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.OAnimationName

#### Defined in

node_modules/csstype/index.d.ts:8586

___

### OAnimationPlayState

• `Optional` **OAnimationPlayState**: `string`[] \| `AnimationPlayState`

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

**`Deprecated`**

#### Inherited from

Omit.OAnimationPlayState

#### Defined in

node_modules/csstype/index.d.ts:8596

___

### OAnimationTimingFunction

• `Optional` **OAnimationTimingFunction**: `string`[] \| `AnimationTimingFunction`

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

**`Deprecated`**

#### Inherited from

Omit.OAnimationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:8606

___

### OBackgroundSize

• `Optional` **OBackgroundSize**: `BackgroundSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BackgroundSize`<`string` \| `number`\>\>[]

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

**`Deprecated`**

#### Inherited from

Omit.OBackgroundSize

#### Defined in

node_modules/csstype/index.d.ts:8616

___

### OBorderImage

• `Optional` **OBorderImage**: `BorderImage` \| `NonNullable`<`undefined` \| `BorderImage`\>[]

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

**`Deprecated`**

#### Inherited from

Omit.OBorderImage

#### Defined in

node_modules/csstype/index.d.ts:8624

___

### OObjectFit

• `Optional` **OObjectFit**: `ObjectFit` \| `NonNullable`<`undefined` \| `ObjectFit`\>[]

The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

**Syntax**: `fill | contain | cover | none | scale-down`

**Initial value**: `fill`

**`Deprecated`**

#### Inherited from

Omit.OObjectFit

#### Defined in

node_modules/csstype/index.d.ts:8634

___

### OObjectPosition

• `Optional` **OObjectPosition**: `ObjectPosition`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ObjectPosition`<`string` \| `number`\>\>[]

The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

**`Deprecated`**

#### Inherited from

Omit.OObjectPosition

#### Defined in

node_modules/csstype/index.d.ts:8644

___

### OTabSize

• `Optional` **OTabSize**: `TabSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TabSize`<`string` \| `number`\>\>[]

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

**`Deprecated`**

#### Inherited from

Omit.OTabSize

#### Defined in

node_modules/csstype/index.d.ts:8654

___

### OTextOverflow

• `Optional` **OTextOverflow**: `string`[] \| `TextOverflow`

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

**`Deprecated`**

#### Inherited from

Omit.OTextOverflow

#### Defined in

node_modules/csstype/index.d.ts:8664

___

### OTransform

• `Optional` **OTransform**: `string`[] \| `Transform`

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.OTransform

#### Defined in

node_modules/csstype/index.d.ts:8674

___

### OTransformOrigin

• `Optional` **OTransformOrigin**: `TransformOrigin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TransformOrigin`<`string` \| `number`\>\>[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

**`Deprecated`**

#### Inherited from

Omit.OTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:8684

___

### OTransition

• `Optional` **OTransition**: `string`[] \| `Transition`<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

**`Deprecated`**

#### Inherited from

Omit.OTransition

#### Defined in

node_modules/csstype/index.d.ts:8692

___

### OTransitionDelay

• `Optional` **OTransitionDelay**: `string`[] \| `TransitionDelay`<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`Deprecated`**

#### Inherited from

Omit.OTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:8702

___

### OTransitionDuration

• `Optional` **OTransitionDuration**: `string`[] \| `TransitionDuration`<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`Deprecated`**

#### Inherited from

Omit.OTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:8712

___

### OTransitionProperty

• `Optional` **OTransitionProperty**: `string`[] \| `TransitionProperty`

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

**`Deprecated`**

#### Inherited from

Omit.OTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:8722

___

### OTransitionTimingFunction

• `Optional` **OTransitionTimingFunction**: `string`[] \| `TransitionTimingFunction`

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

**`Deprecated`**

#### Inherited from

Omit.OTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:8732

___

### WebkitAlignContent

• `Optional` **WebkitAlignContent**: `string`[] \| `AlignContent`

The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`

**Initial value**: `normal`

#### Inherited from

Omit.WebkitAlignContent

#### Defined in

node_modules/csstype/index.d.ts:6806

___

### WebkitAlignItems

• `Optional` **WebkitAlignItems**: `string`[] \| `AlignItems`

The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`

**Initial value**: `normal`

#### Inherited from

Omit.WebkitAlignItems

#### Defined in

node_modules/csstype/index.d.ts:6814

___

### WebkitAlignSelf

• `Optional` **WebkitAlignSelf**: `string`[] \| `AlignSelf`

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitAlignSelf

#### Defined in

node_modules/csstype/index.d.ts:6822

___

### WebkitAnimation

• `Optional` **WebkitAnimation**: `Animation`<`string` & {}\> \| `NonNullable`<`undefined` \| `Animation`<`string` & {}\>\>[]

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

Omit.WebkitAnimation

#### Defined in

node_modules/csstype/index.d.ts:7743

___

### WebkitAnimationDelay

• `Optional` **WebkitAnimationDelay**: `string`[] \| `AnimationDelay`<`string` & {}\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.WebkitAnimationDelay

#### Defined in

node_modules/csstype/index.d.ts:6830

___

### WebkitAnimationDirection

• `Optional` **WebkitAnimationDirection**: `string`[] \| `AnimationDirection`

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

Omit.WebkitAnimationDirection

#### Defined in

node_modules/csstype/index.d.ts:6838

___

### WebkitAnimationDuration

• `Optional` **WebkitAnimationDuration**: `string`[] \| `AnimationDuration`<`string` & {}\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.WebkitAnimationDuration

#### Defined in

node_modules/csstype/index.d.ts:6846

___

### WebkitAnimationFillMode

• `Optional` **WebkitAnimationFillMode**: `string`[] \| `AnimationFillMode`

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

Omit.WebkitAnimationFillMode

#### Defined in

node_modules/csstype/index.d.ts:6854

___

### WebkitAnimationIterationCount

• `Optional` **WebkitAnimationIterationCount**: `AnimationIterationCount` \| `NonNullable`<`undefined` \| `AnimationIterationCount`\>[]

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

Omit.WebkitAnimationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:6862

___

### WebkitAnimationName

• `Optional` **WebkitAnimationName**: `string`[] \| `AnimationName`

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

Omit.WebkitAnimationName

#### Defined in

node_modules/csstype/index.d.ts:6870

___

### WebkitAnimationPlayState

• `Optional` **WebkitAnimationPlayState**: `string`[] \| `AnimationPlayState`

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

Omit.WebkitAnimationPlayState

#### Defined in

node_modules/csstype/index.d.ts:6878

___

### WebkitAnimationTimingFunction

• `Optional` **WebkitAnimationTimingFunction**: `string`[] \| `AnimationTimingFunction`

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

Omit.WebkitAnimationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:6886

___

### WebkitAppearance

• `Optional` **WebkitAppearance**: `WebkitAppearance` \| `NonNullable`<`undefined` \| `WebkitAppearance`\>[]

The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.

**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

Omit.WebkitAppearance

#### Defined in

node_modules/csstype/index.d.ts:6894

___

### WebkitBackdropFilter

• `Optional` **WebkitBackdropFilter**: `string`[] \| `BackdropFilter`

The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitBackdropFilter

#### Defined in

node_modules/csstype/index.d.ts:6902

___

### WebkitBackfaceVisibility

• `Optional` **WebkitBackfaceVisibility**: `BackfaceVisibility` \| `NonNullable`<`undefined` \| `BackfaceVisibility`\>[]

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

Omit.WebkitBackfaceVisibility

#### Defined in

node_modules/csstype/index.d.ts:6910

___

### WebkitBackgroundClip

• `Optional` **WebkitBackgroundClip**: `string`[] \| `BackgroundClip`

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

#### Inherited from

Omit.WebkitBackgroundClip

#### Defined in

node_modules/csstype/index.d.ts:6918

___

### WebkitBackgroundOrigin

• `Optional` **WebkitBackgroundOrigin**: `string`[] \| `BackgroundOrigin`

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

#### Inherited from

Omit.WebkitBackgroundOrigin

#### Defined in

node_modules/csstype/index.d.ts:6926

___

### WebkitBackgroundSize

• `Optional` **WebkitBackgroundSize**: `BackgroundSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BackgroundSize`<`string` \| `number`\>\>[]

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

Omit.WebkitBackgroundSize

#### Defined in

node_modules/csstype/index.d.ts:6934

___

### WebkitBorderBefore

• `Optional` **WebkitBorderBefore**: `WebkitBorderBefore`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitBorderBefore`<`string` \| `number`\>\>[]

The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

**Syntax**: `<'border-width'> || <'border-style'> || <color>`

#### Inherited from

Omit.WebkitBorderBefore

#### Defined in

node_modules/csstype/index.d.ts:7749

___

### WebkitBorderBeforeColor

• `Optional` **WebkitBorderBeforeColor**: `string`[] \| `WebkitBorderBeforeColor`

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.WebkitBorderBeforeColor

#### Defined in

node_modules/csstype/index.d.ts:6940

___

### WebkitBorderBeforeStyle

• `Optional` **WebkitBorderBeforeStyle**: `string`[] \| `WebkitBorderBeforeStyle`

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitBorderBeforeStyle

#### Defined in

node_modules/csstype/index.d.ts:6946

___

### WebkitBorderBeforeWidth

• `Optional` **WebkitBorderBeforeWidth**: `WebkitBorderBeforeWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitBorderBeforeWidth`<`string` \| `number`\>\>[]

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

Omit.WebkitBorderBeforeWidth

#### Defined in

node_modules/csstype/index.d.ts:6952

___

### WebkitBorderBottomLeftRadius

• `Optional` **WebkitBorderBottomLeftRadius**: `BorderBottomLeftRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBottomLeftRadius`<`string` \| `number`\>\>[]

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

Omit.WebkitBorderBottomLeftRadius

#### Defined in

node_modules/csstype/index.d.ts:6960

___

### WebkitBorderBottomRightRadius

• `Optional` **WebkitBorderBottomRightRadius**: `BorderBottomRightRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBottomRightRadius`<`string` \| `number`\>\>[]

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

Omit.WebkitBorderBottomRightRadius

#### Defined in

node_modules/csstype/index.d.ts:6968

___

### WebkitBorderImage

• `Optional` **WebkitBorderImage**: `BorderImage` \| `NonNullable`<`undefined` \| `BorderImage`\>[]

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

Omit.WebkitBorderImage

#### Defined in

node_modules/csstype/index.d.ts:7755

___

### WebkitBorderImageSlice

• `Optional` **WebkitBorderImageSlice**: `BorderImageSlice` \| `NonNullable`<`undefined` \| `BorderImageSlice`\>[]

The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.

**Syntax**: `<number-percentage>{1,4} && fill?`

**Initial value**: `100%`

#### Inherited from

Omit.WebkitBorderImageSlice

#### Defined in

node_modules/csstype/index.d.ts:6976

___

### WebkitBorderRadius

• `Optional` **WebkitBorderRadius**: `BorderRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderRadius`<`string` \| `number`\>\>[]

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

#### Inherited from

Omit.WebkitBorderRadius

#### Defined in

node_modules/csstype/index.d.ts:7761

___

### WebkitBorderTopLeftRadius

• `Optional` **WebkitBorderTopLeftRadius**: `BorderTopLeftRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderTopLeftRadius`<`string` \| `number`\>\>[]

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

Omit.WebkitBorderTopLeftRadius

#### Defined in

node_modules/csstype/index.d.ts:6984

___

### WebkitBorderTopRightRadius

• `Optional` **WebkitBorderTopRightRadius**: `BorderTopRightRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderTopRightRadius`<`string` \| `number`\>\>[]

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

Omit.WebkitBorderTopRightRadius

#### Defined in

node_modules/csstype/index.d.ts:6992

___

### WebkitBoxAlign

• `Optional` **WebkitBoxAlign**: `BoxAlign` \| `NonNullable`<`undefined` \| `BoxAlign`\>[]

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`Deprecated`**

#### Inherited from

Omit.WebkitBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:8742

___

### WebkitBoxDecorationBreak

• `Optional` **WebkitBoxDecorationBreak**: `BoxDecorationBreak` \| `NonNullable`<`undefined` \| `BoxDecorationBreak`\>[]

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

#### Inherited from

Omit.WebkitBoxDecorationBreak

#### Defined in

node_modules/csstype/index.d.ts:7000

___

### WebkitBoxDirection

• `Optional` **WebkitBoxDirection**: `BoxDirection` \| `NonNullable`<`undefined` \| `BoxDirection`\>[]

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`Deprecated`**

#### Inherited from

Omit.WebkitBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:8752

___

### WebkitBoxFlex

• `Optional` **WebkitBoxFlex**: `BoxFlex` \| `NonNullable`<`undefined` \| `BoxFlex`\>[]

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.WebkitBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:8762

___

### WebkitBoxFlexGroup

• `Optional` **WebkitBoxFlexGroup**: `BoxFlexGroup` \| `NonNullable`<`undefined` \| `BoxFlexGroup`\>[]

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.WebkitBoxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:8772

___

### WebkitBoxLines

• `Optional` **WebkitBoxLines**: `BoxLines` \| `NonNullable`<`undefined` \| `BoxLines`\>[]

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`Deprecated`**

#### Inherited from

Omit.WebkitBoxLines

#### Defined in

node_modules/csstype/index.d.ts:8782

___

### WebkitBoxOrdinalGroup

• `Optional` **WebkitBoxOrdinalGroup**: `BoxOrdinalGroup` \| `NonNullable`<`undefined` \| `BoxOrdinalGroup`\>[]

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.WebkitBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8792

___

### WebkitBoxOrient

• `Optional` **WebkitBoxOrient**: `BoxOrient` \| `NonNullable`<`undefined` \| `BoxOrient`\>[]

The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`Deprecated`**

#### Inherited from

Omit.WebkitBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8802

___

### WebkitBoxPack

• `Optional` **WebkitBoxPack**: `BoxPack` \| `NonNullable`<`undefined` \| `BoxPack`\>[]

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`Deprecated`**

#### Inherited from

Omit.WebkitBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8812

___

### WebkitBoxReflect

• `Optional` **WebkitBoxReflect**: `WebkitBoxReflect`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitBoxReflect`<`string` \| `number`\>\>[]

The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.

**Syntax**: `[ above | below | right | left ]? <length>? <image>?`

**Initial value**: `none`

#### Inherited from

Omit.WebkitBoxReflect

#### Defined in

node_modules/csstype/index.d.ts:7008

___

### WebkitBoxShadow

• `Optional` **WebkitBoxShadow**: `string`[] \| `BoxShadow`

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

#### Inherited from

Omit.WebkitBoxShadow

#### Defined in

node_modules/csstype/index.d.ts:7016

___

### WebkitBoxSizing

• `Optional` **WebkitBoxSizing**: `BoxSizing` \| `NonNullable`<`undefined` \| `BoxSizing`\>[]

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

Omit.WebkitBoxSizing

#### Defined in

node_modules/csstype/index.d.ts:7024

___

### WebkitClipPath

• `Optional` **WebkitClipPath**: `string`[] \| `ClipPath`

The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`

**Initial value**: `none`

#### Inherited from

Omit.WebkitClipPath

#### Defined in

node_modules/csstype/index.d.ts:7032

___

### WebkitColumnCount

• `Optional` **WebkitColumnCount**: `ColumnCount` \| `NonNullable`<`undefined` \| `ColumnCount`\>[]

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitColumnCount

#### Defined in

node_modules/csstype/index.d.ts:7040

___

### WebkitColumnFill

• `Optional` **WebkitColumnFill**: `ColumnFill` \| `NonNullable`<`undefined` \| `ColumnFill`\>[]

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

Omit.WebkitColumnFill

#### Defined in

node_modules/csstype/index.d.ts:7048

___

### WebkitColumnRule

• `Optional` **WebkitColumnRule**: `ColumnRule`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnRule`<`string` \| `number`\>\>[]

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

Omit.WebkitColumnRule

#### Defined in

node_modules/csstype/index.d.ts:7767

___

### WebkitColumnRuleColor

• `Optional` **WebkitColumnRuleColor**: `string`[] \| `ColumnRuleColor`

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.WebkitColumnRuleColor

#### Defined in

node_modules/csstype/index.d.ts:7056

___

### WebkitColumnRuleStyle

• `Optional` **WebkitColumnRuleStyle**: `string`[] \| `ColumnRuleStyle`

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitColumnRuleStyle

#### Defined in

node_modules/csstype/index.d.ts:7064

___

### WebkitColumnRuleWidth

• `Optional` **WebkitColumnRuleWidth**: `ColumnRuleWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnRuleWidth`<`string` \| `number`\>\>[]

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

Omit.WebkitColumnRuleWidth

#### Defined in

node_modules/csstype/index.d.ts:7072

___

### WebkitColumnSpan

• `Optional` **WebkitColumnSpan**: `ColumnSpan` \| `NonNullable`<`undefined` \| `ColumnSpan`\>[]

The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.

**Syntax**: `none | all`

**Initial value**: `none`

#### Inherited from

Omit.WebkitColumnSpan

#### Defined in

node_modules/csstype/index.d.ts:7080

___

### WebkitColumnWidth

• `Optional` **WebkitColumnWidth**: `ColumnWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnWidth`<`string` \| `number`\>\>[]

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitColumnWidth

#### Defined in

node_modules/csstype/index.d.ts:7088

___

### WebkitColumns

• `Optional` **WebkitColumns**: `Columns`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Columns`<`string` \| `number`\>\>[]

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

Omit.WebkitColumns

#### Defined in

node_modules/csstype/index.d.ts:7773

___

### WebkitFilter

• `Optional` **WebkitFilter**: `string`[] \| `Filter`

The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitFilter

#### Defined in

node_modules/csstype/index.d.ts:7096

___

### WebkitFlex

• `Optional` **WebkitFlex**: `Flex`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Flex`<`string` \| `number`\>\>[]

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

Omit.WebkitFlex

#### Defined in

node_modules/csstype/index.d.ts:7779

___

### WebkitFlexBasis

• `Optional` **WebkitFlexBasis**: `FlexBasis`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `FlexBasis`<`string` \| `number`\>\>[]

The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

**Syntax**: `content | <'width'>`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitFlexBasis

#### Defined in

node_modules/csstype/index.d.ts:7104

___

### WebkitFlexDirection

• `Optional` **WebkitFlexDirection**: `FlexDirection` \| `NonNullable`<`undefined` \| `FlexDirection`\>[]

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

Omit.WebkitFlexDirection

#### Defined in

node_modules/csstype/index.d.ts:7112

___

### WebkitFlexFlow

• `Optional` **WebkitFlexFlow**: `string`[] \| `FlexFlow`

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

#### Inherited from

Omit.WebkitFlexFlow

#### Defined in

node_modules/csstype/index.d.ts:7785

___

### WebkitFlexGrow

• `Optional` **WebkitFlexGrow**: `FlexGrow` \| `NonNullable`<`undefined` \| `FlexGrow`\>[]

The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

Omit.WebkitFlexGrow

#### Defined in

node_modules/csstype/index.d.ts:7120

___

### WebkitFlexShrink

• `Optional` **WebkitFlexShrink**: `FlexShrink` \| `NonNullable`<`undefined` \| `FlexShrink`\>[]

The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

**Syntax**: `<number>`

**Initial value**: `1`

#### Inherited from

Omit.WebkitFlexShrink

#### Defined in

node_modules/csstype/index.d.ts:7128

___

### WebkitFlexWrap

• `Optional` **WebkitFlexWrap**: `FlexWrap` \| `NonNullable`<`undefined` \| `FlexWrap`\>[]

The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: `nowrap | wrap | wrap-reverse`

**Initial value**: `nowrap`

#### Inherited from

Omit.WebkitFlexWrap

#### Defined in

node_modules/csstype/index.d.ts:7136

___

### WebkitFontFeatureSettings

• `Optional` **WebkitFontFeatureSettings**: `string`[] \| `FontFeatureSettings`

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

Omit.WebkitFontFeatureSettings

#### Defined in

node_modules/csstype/index.d.ts:7144

___

### WebkitFontKerning

• `Optional` **WebkitFontKerning**: `FontKerning` \| `NonNullable`<`undefined` \| `FontKerning`\>[]

The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: `auto | normal | none`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitFontKerning

#### Defined in

node_modules/csstype/index.d.ts:7152

___

### WebkitFontSmoothing

• `Optional` **WebkitFontSmoothing**: `FontSmooth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `FontSmooth`<`string` \| `number`\>\>[]

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitFontSmoothing

#### Defined in

node_modules/csstype/index.d.ts:7160

___

### WebkitFontVariantLigatures

• `Optional` **WebkitFontVariantLigatures**: `string`[] \| `FontVariantLigatures`

The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`

**Initial value**: `normal`

#### Inherited from

Omit.WebkitFontVariantLigatures

#### Defined in

node_modules/csstype/index.d.ts:7168

___

### WebkitHyphenateCharacter

• `Optional` **WebkitHyphenateCharacter**: `string`[] \| `HyphenateCharacter`

The **`hyphenate-character`** CSS property sets the character (or string) used at the end of a line before a hyphenation break.

**Syntax**: `auto | <string>`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitHyphenateCharacter

#### Defined in

node_modules/csstype/index.d.ts:7176

___

### WebkitHyphens

• `Optional` **WebkitHyphens**: `Hyphens` \| `NonNullable`<`undefined` \| `Hyphens`\>[]

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

Omit.WebkitHyphens

#### Defined in

node_modules/csstype/index.d.ts:7184

___

### WebkitInitialLetter

• `Optional` **WebkitInitialLetter**: `InitialLetter` \| `NonNullable`<`undefined` \| `InitialLetter`\>[]

The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.

**Syntax**: `normal | [ <number> <integer>? ]`

**Initial value**: `normal`

#### Inherited from

Omit.WebkitInitialLetter

#### Defined in

node_modules/csstype/index.d.ts:7192

___

### WebkitJustifyContent

• `Optional` **WebkitJustifyContent**: `string`[] \| `JustifyContent`

The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`

**Initial value**: `normal`

#### Inherited from

Omit.WebkitJustifyContent

#### Defined in

node_modules/csstype/index.d.ts:7200

___

### WebkitLineBreak

• `Optional` **WebkitLineBreak**: `LineBreak` \| `NonNullable`<`undefined` \| `LineBreak`\>[]

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitLineBreak

#### Defined in

node_modules/csstype/index.d.ts:7208

___

### WebkitLineClamp

• `Optional` **WebkitLineClamp**: `WebkitLineClamp` \| `NonNullable`<`undefined` \| `WebkitLineClamp`\>[]

The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block to the specified number of lines.

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitLineClamp

#### Defined in

node_modules/csstype/index.d.ts:7216

___

### WebkitMarginEnd

• `Optional` **WebkitMarginEnd**: `MarginInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginInlineEnd`<`string` \| `number`\>\>[]

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

Omit.WebkitMarginEnd

#### Defined in

node_modules/csstype/index.d.ts:7224

___

### WebkitMarginStart

• `Optional` **WebkitMarginStart**: `MarginInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginInlineStart`<`string` \| `number`\>\>[]

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

Omit.WebkitMarginStart

#### Defined in

node_modules/csstype/index.d.ts:7232

___

### WebkitMask

• `Optional` **WebkitMask**: `WebkitMask`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitMask`<`string` \| `number`\>\>[]

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`

#### Inherited from

Omit.WebkitMask

#### Defined in

node_modules/csstype/index.d.ts:7791

___

### WebkitMaskAttachment

• `Optional` **WebkitMaskAttachment**: `string`[] \| `WebkitMaskAttachment`

If a `mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.

**Syntax**: `<attachment>#`

**Initial value**: `scroll`

#### Inherited from

Omit.WebkitMaskAttachment

#### Defined in

node_modules/csstype/index.d.ts:7240

___

### WebkitMaskBoxImage

• `Optional` **WebkitMaskBoxImage**: `MaskBorder` \| `NonNullable`<`undefined` \| `MaskBorder`\>[]

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

#### Inherited from

Omit.WebkitMaskBoxImage

#### Defined in

node_modules/csstype/index.d.ts:7797

___

### WebkitMaskBoxImageOutset

• `Optional` **WebkitMaskBoxImageOutset**: `MaskBorderOutset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaskBorderOutset`<`string` \| `number`\>\>[]

The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

#### Inherited from

Omit.WebkitMaskBoxImageOutset

#### Defined in

node_modules/csstype/index.d.ts:7248

___

### WebkitMaskBoxImageRepeat

• `Optional` **WebkitMaskBoxImageRepeat**: `string`[] \| `MaskBorderRepeat`

The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

#### Inherited from

Omit.WebkitMaskBoxImageRepeat

#### Defined in

node_modules/csstype/index.d.ts:7256

___

### WebkitMaskBoxImageSlice

• `Optional` **WebkitMaskBoxImageSlice**: `MaskBorderSlice` \| `NonNullable`<`undefined` \| `MaskBorderSlice`\>[]

The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.

**Syntax**: `<number-percentage>{1,4} fill?`

**Initial value**: `0`

#### Inherited from

Omit.WebkitMaskBoxImageSlice

#### Defined in

node_modules/csstype/index.d.ts:7264

___

### WebkitMaskBoxImageSource

• `Optional` **WebkitMaskBoxImageSource**: `string`[] \| `MaskBorderSource`

The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.

**Syntax**: `none | <image>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitMaskBoxImageSource

#### Defined in

node_modules/csstype/index.d.ts:7272

___

### WebkitMaskBoxImageWidth

• `Optional` **WebkitMaskBoxImageWidth**: `MaskBorderWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaskBorderWidth`<`string` \| `number`\>\>[]

The **`mask-border-width`** CSS property sets the width of an element's mask border.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitMaskBoxImageWidth

#### Defined in

node_modules/csstype/index.d.ts:7280

___

### WebkitMaskClip

• `Optional` **WebkitMaskClip**: `string`[] \| `WebkitMaskClip`

The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: `[ <box> | border | padding | content | text ]#`

**Initial value**: `border`

#### Inherited from

Omit.WebkitMaskClip

#### Defined in

node_modules/csstype/index.d.ts:7288

___

### WebkitMaskComposite

• `Optional` **WebkitMaskComposite**: `string`[] \| `WebkitMaskComposite`

The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.

**Syntax**: `<composite-style>#`

**Initial value**: `source-over`

#### Inherited from

Omit.WebkitMaskComposite

#### Defined in

node_modules/csstype/index.d.ts:7296

___

### WebkitMaskImage

• `Optional` **WebkitMaskImage**: `string`[] \| `WebkitMaskImage`

The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` property.

**Syntax**: `<mask-reference>#`

**Initial value**: `none`

#### Inherited from

Omit.WebkitMaskImage

#### Defined in

node_modules/csstype/index.d.ts:7304

___

### WebkitMaskOrigin

• `Optional` **WebkitMaskOrigin**: `string`[] \| `WebkitMaskOrigin`

The **`mask-origin`** CSS property sets the origin of a mask.

**Syntax**: `[ <box> | border | padding | content ]#`

**Initial value**: `padding`

#### Inherited from

Omit.WebkitMaskOrigin

#### Defined in

node_modules/csstype/index.d.ts:7312

___

### WebkitMaskPosition

• `Optional` **WebkitMaskPosition**: `WebkitMaskPosition`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitMaskPosition`<`string` \| `number`\>\>[]

The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.

**Syntax**: `<position>#`

**Initial value**: `0% 0%`

#### Inherited from

Omit.WebkitMaskPosition

#### Defined in

node_modules/csstype/index.d.ts:7320

___

### WebkitMaskPositionX

• `Optional` **WebkitMaskPositionX**: `WebkitMaskPositionX`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitMaskPositionX`<`string` \| `number`\>\>[]

The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.

**Syntax**: `[ <length-percentage> | left | center | right ]#`

**Initial value**: `0%`

#### Inherited from

Omit.WebkitMaskPositionX

#### Defined in

node_modules/csstype/index.d.ts:7328

___

### WebkitMaskPositionY

• `Optional` **WebkitMaskPositionY**: `WebkitMaskPositionY`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitMaskPositionY`<`string` \| `number`\>\>[]

The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.

**Syntax**: `[ <length-percentage> | top | center | bottom ]#`

**Initial value**: `0%`

#### Inherited from

Omit.WebkitMaskPositionY

#### Defined in

node_modules/csstype/index.d.ts:7336

___

### WebkitMaskRepeat

• `Optional` **WebkitMaskRepeat**: `string`[] \| `WebkitMaskRepeat`

The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

#### Inherited from

Omit.WebkitMaskRepeat

#### Defined in

node_modules/csstype/index.d.ts:7344

___

### WebkitMaskRepeatX

• `Optional` **WebkitMaskRepeatX**: `WebkitMaskRepeatX` \| `NonNullable`<`undefined` \| `WebkitMaskRepeatX`\>[]

The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

Omit.WebkitMaskRepeatX

#### Defined in

node_modules/csstype/index.d.ts:7352

___

### WebkitMaskRepeatY

• `Optional` **WebkitMaskRepeatY**: `WebkitMaskRepeatY` \| `NonNullable`<`undefined` \| `WebkitMaskRepeatY`\>[]

The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

Omit.WebkitMaskRepeatY

#### Defined in

node_modules/csstype/index.d.ts:7360

___

### WebkitMaskSize

• `Optional` **WebkitMaskSize**: `WebkitMaskSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitMaskSize`<`string` \| `number`\>\>[]

The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

Omit.WebkitMaskSize

#### Defined in

node_modules/csstype/index.d.ts:7368

___

### WebkitMaxInlineSize

• `Optional` **WebkitMaxInlineSize**: `MaxInlineSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaxInlineSize`<`string` \| `number`\>\>[]

The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'max-width'>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitMaxInlineSize

#### Defined in

node_modules/csstype/index.d.ts:7376

___

### WebkitOrder

• `Optional` **WebkitOrder**: `Order` \| `NonNullable`<`undefined` \| `Order`\>[]

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

Omit.WebkitOrder

#### Defined in

node_modules/csstype/index.d.ts:7384

___

### WebkitOverflowScrolling

• `Optional` **WebkitOverflowScrolling**: `WebkitOverflowScrolling` \| `NonNullable`<`undefined` \| `WebkitOverflowScrolling`\>[]

The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.

**Syntax**: `auto | touch`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitOverflowScrolling

#### Defined in

node_modules/csstype/index.d.ts:7392

___

### WebkitPaddingEnd

• `Optional` **WebkitPaddingEnd**: `PaddingInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingInlineEnd`<`string` \| `number`\>\>[]

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

Omit.WebkitPaddingEnd

#### Defined in

node_modules/csstype/index.d.ts:7400

___

### WebkitPaddingStart

• `Optional` **WebkitPaddingStart**: `PaddingInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingInlineStart`<`string` \| `number`\>\>[]

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

Omit.WebkitPaddingStart

#### Defined in

node_modules/csstype/index.d.ts:7408

___

### WebkitPerspective

• `Optional` **WebkitPerspective**: `Perspective`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Perspective`<`string` \| `number`\>\>[]

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitPerspective

#### Defined in

node_modules/csstype/index.d.ts:7416

___

### WebkitPerspectiveOrigin

• `Optional` **WebkitPerspectiveOrigin**: `PerspectiveOrigin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PerspectiveOrigin`<`string` \| `number`\>\>[]

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

Omit.WebkitPerspectiveOrigin

#### Defined in

node_modules/csstype/index.d.ts:7424

___

### WebkitPrintColorAdjust

• `Optional` **WebkitPrintColorAdjust**: `PrintColorAdjust` \| `NonNullable`<`undefined` \| `PrintColorAdjust`\>[]

The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

#### Inherited from

Omit.WebkitPrintColorAdjust

#### Defined in

node_modules/csstype/index.d.ts:7432

___

### WebkitRubyPosition

• `Optional` **WebkitRubyPosition**: `string`[] \| `RubyPosition`

The **`ruby-position`** CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (`over`), under it (`under`), or between the characters on their right side (`inter-character`).

**Syntax**: `[ alternate || [ over | under ] ] | inter-character`

**Initial value**: `alternate`

#### Inherited from

Omit.WebkitRubyPosition

#### Defined in

node_modules/csstype/index.d.ts:7440

___

### WebkitScrollSnapPointsX

• `Optional` **WebkitScrollSnapPointsX**: `string`[] \| `ScrollSnapPointsX`

The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.WebkitScrollSnapPointsX

#### Defined in

node_modules/csstype/index.d.ts:8822

___

### WebkitScrollSnapPointsY

• `Optional` **WebkitScrollSnapPointsY**: `string`[] \| `ScrollSnapPointsY`

The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.WebkitScrollSnapPointsY

#### Defined in

node_modules/csstype/index.d.ts:8832

___

### WebkitScrollSnapType

• `Optional` **WebkitScrollSnapType**: `string`[] \| `ScrollSnapType`

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`

**Initial value**: `none`

#### Inherited from

Omit.WebkitScrollSnapType

#### Defined in

node_modules/csstype/index.d.ts:7448

___

### WebkitShapeMargin

• `Optional` **WebkitShapeMargin**: `ShapeMargin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ShapeMargin`<`string` \| `number`\>\>[]

The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

#### Inherited from

Omit.WebkitShapeMargin

#### Defined in

node_modules/csstype/index.d.ts:7456

___

### WebkitTapHighlightColor

• `Optional` **WebkitTapHighlightColor**: `string`[] \| `WebkitTapHighlightColor`

**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.

**Syntax**: `<color>`

**Initial value**: `black`

#### Inherited from

Omit.WebkitTapHighlightColor

#### Defined in

node_modules/csstype/index.d.ts:7464

___

### WebkitTextCombine

• `Optional` **WebkitTextCombine**: `string`[] \| `TextCombineUpright`

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

Omit.WebkitTextCombine

#### Defined in

node_modules/csstype/index.d.ts:7472

___

### WebkitTextDecorationColor

• `Optional` **WebkitTextDecorationColor**: `string`[] \| `TextDecorationColor`

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.WebkitTextDecorationColor

#### Defined in

node_modules/csstype/index.d.ts:7480

___

### WebkitTextDecorationLine

• `Optional` **WebkitTextDecorationLine**: `string`[] \| `TextDecorationLine`

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

#### Inherited from

Omit.WebkitTextDecorationLine

#### Defined in

node_modules/csstype/index.d.ts:7488

___

### WebkitTextDecorationSkip

• `Optional` **WebkitTextDecorationSkip**: `string`[] \| `TextDecorationSkip`

The **`text-decoration-skip`** CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`

**Initial value**: `objects`

#### Inherited from

Omit.WebkitTextDecorationSkip

#### Defined in

node_modules/csstype/index.d.ts:7496

___

### WebkitTextDecorationStyle

• `Optional` **WebkitTextDecorationStyle**: `TextDecorationStyle` \| `NonNullable`<`undefined` \| `TextDecorationStyle`\>[]

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

#### Inherited from

Omit.WebkitTextDecorationStyle

#### Defined in

node_modules/csstype/index.d.ts:7504

___

### WebkitTextEmphasis

• `Optional` **WebkitTextEmphasis**: `string`[] \| `TextEmphasis`

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

#### Inherited from

Omit.WebkitTextEmphasis

#### Defined in

node_modules/csstype/index.d.ts:7803

___

### WebkitTextEmphasisColor

• `Optional` **WebkitTextEmphasisColor**: `string`[] \| `TextEmphasisColor`

The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.WebkitTextEmphasisColor

#### Defined in

node_modules/csstype/index.d.ts:7512

___

### WebkitTextEmphasisPosition

• `Optional` **WebkitTextEmphasisPosition**: `string`[] \| `TextEmphasisPosition`

The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: `[ over | under ] && [ right | left ]`

**Initial value**: `over right`

#### Inherited from

Omit.WebkitTextEmphasisPosition

#### Defined in

node_modules/csstype/index.d.ts:7520

___

### WebkitTextEmphasisStyle

• `Optional` **WebkitTextEmphasisStyle**: `string`[] \| `TextEmphasisStyle`

The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.

**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitTextEmphasisStyle

#### Defined in

node_modules/csstype/index.d.ts:7528

___

### WebkitTextFillColor

• `Optional` **WebkitTextFillColor**: `string`[] \| `WebkitTextFillColor`

The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.WebkitTextFillColor

#### Defined in

node_modules/csstype/index.d.ts:7536

___

### WebkitTextOrientation

• `Optional` **WebkitTextOrientation**: `TextOrientation` \| `NonNullable`<`undefined` \| `TextOrientation`\>[]

The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

**Syntax**: `mixed | upright | sideways`

**Initial value**: `mixed`

#### Inherited from

Omit.WebkitTextOrientation

#### Defined in

node_modules/csstype/index.d.ts:7544

___

### WebkitTextSizeAdjust

• `Optional` **WebkitTextSizeAdjust**: `string`[] \| `TextSizeAdjust`

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

Omit.WebkitTextSizeAdjust

#### Defined in

node_modules/csstype/index.d.ts:7552

___

### WebkitTextStroke

• `Optional` **WebkitTextStroke**: `WebkitTextStroke`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitTextStroke`<`string` \| `number`\>\>[]

The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.

**Syntax**: `<length> || <color>`

#### Inherited from

Omit.WebkitTextStroke

#### Defined in

node_modules/csstype/index.d.ts:7809

___

### WebkitTextStrokeColor

• `Optional` **WebkitTextStrokeColor**: `string`[] \| `WebkitTextStrokeColor`

The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

Omit.WebkitTextStrokeColor

#### Defined in

node_modules/csstype/index.d.ts:7560

___

### WebkitTextStrokeWidth

• `Optional` **WebkitTextStrokeWidth**: `WebkitTextStrokeWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WebkitTextStrokeWidth`<`string` \| `number`\>\>[]

The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

Omit.WebkitTextStrokeWidth

#### Defined in

node_modules/csstype/index.d.ts:7568

___

### WebkitTextUnderlinePosition

• `Optional` **WebkitTextUnderlinePosition**: `string`[] \| `TextUnderlinePosition`

The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.

**Syntax**: `auto | from-font | [ under || [ left | right ] ]`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitTextUnderlinePosition

#### Defined in

node_modules/csstype/index.d.ts:7576

___

### WebkitTouchCallout

• `Optional` **WebkitTouchCallout**: `WebkitTouchCallout` \| `NonNullable`<`undefined` \| `WebkitTouchCallout`\>[]

The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.

**Syntax**: `default | none`

**Initial value**: `default`

#### Inherited from

Omit.WebkitTouchCallout

#### Defined in

node_modules/csstype/index.d.ts:7584

___

### WebkitTransform

• `Optional` **WebkitTransform**: `string`[] \| `Transform`

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

Omit.WebkitTransform

#### Defined in

node_modules/csstype/index.d.ts:7592

___

### WebkitTransformOrigin

• `Optional` **WebkitTransformOrigin**: `TransformOrigin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TransformOrigin`<`string` \| `number`\>\>[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

Omit.WebkitTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:7600

___

### WebkitTransformStyle

• `Optional` **WebkitTransformStyle**: `TransformStyle` \| `NonNullable`<`undefined` \| `TransformStyle`\>[]

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

Omit.WebkitTransformStyle

#### Defined in

node_modules/csstype/index.d.ts:7608

___

### WebkitTransition

• `Optional` **WebkitTransition**: `string`[] \| `Transition`<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

Omit.WebkitTransition

#### Defined in

node_modules/csstype/index.d.ts:7815

___

### WebkitTransitionDelay

• `Optional` **WebkitTransitionDelay**: `string`[] \| `TransitionDelay`<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.WebkitTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:7616

___

### WebkitTransitionDuration

• `Optional` **WebkitTransitionDuration**: `string`[] \| `TransitionDuration`<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.WebkitTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:7624

___

### WebkitTransitionProperty

• `Optional` **WebkitTransitionProperty**: `string`[] \| `TransitionProperty`

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

Omit.WebkitTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:7632

___

### WebkitTransitionTimingFunction

• `Optional` **WebkitTransitionTimingFunction**: `string`[] \| `TransitionTimingFunction`

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

Omit.WebkitTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:7640

___

### WebkitUserModify

• `Optional` **WebkitUserModify**: `WebkitUserModify` \| `NonNullable`<`undefined` \| `WebkitUserModify`\>[]

**Syntax**: `read-only | read-write | read-write-plaintext-only`

**Initial value**: `read-only`

#### Inherited from

Omit.WebkitUserModify

#### Defined in

node_modules/csstype/index.d.ts:7646

___

### WebkitUserSelect

• `Optional` **WebkitUserSelect**: `UserSelect` \| `NonNullable`<`undefined` \| `UserSelect`\>[]

The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

Omit.WebkitUserSelect

#### Defined in

node_modules/csstype/index.d.ts:7654

___

### WebkitWritingMode

• `Optional` **WebkitWritingMode**: `WritingMode` \| `NonNullable`<`undefined` \| `WritingMode`\>[]

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

Omit.WebkitWritingMode

#### Defined in

node_modules/csstype/index.d.ts:7662

___

### accentColor

• `Optional` **accentColor**: `string`[] \| `AccentColor`

The **`accent-color`** CSS property sets the accent color for user-interface controls generated by some elements.

**Syntax**: `auto | <color>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **93** | **92**  | **15.4** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/accent-color

#### Inherited from

Omit.accentColor

#### Defined in

node_modules/csstype/index.d.ts:25

___

### alignContent

• `Optional` **alignContent**: `string`[] \| `AlignContent`

The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`

**Initial value**: `normal`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/align-content

#### Inherited from

Omit.alignContent

#### Defined in

node_modules/csstype/index.d.ts:40

___

### alignItems

• `Optional` **alignItems**: `string`[] \| `AlignItems`

The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`

**Initial value**: `normal`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **20**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/align-items

#### Inherited from

Omit.alignItems

#### Defined in

node_modules/csstype/index.d.ts:55

___

### alignSelf

• `Optional` **alignSelf**: `string`[] \| `AlignSelf`

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **20**  |  **9**  | **12** | **10** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/align-self

#### Inherited from

Omit.alignSelf

#### Defined in

node_modules/csstype/index.d.ts:70

___

### alignTracks

• `Optional` **alignTracks**: `string`[] \| `AlignTracks`

The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.

**Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/align-tracks

#### Inherited from

Omit.alignTracks

#### Defined in

node_modules/csstype/index.d.ts:84

___

### alignmentBaseline

• `Optional` **alignmentBaseline**: `AlignmentBaseline` \| `NonNullable`<`undefined` \| `AlignmentBaseline`\>[]

#### Inherited from

Omit.alignmentBaseline

#### Defined in

node_modules/csstype/index.d.ts:8836

___

### all

• `Optional` **all**: `Globals` \| `NonNullable`<`undefined` \| `Globals`\>[]

The **`all`** shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another cascade layer or stylesheet origin.

**Syntax**: `initial | inherit | unset | revert | revert-layer`

**Initial value**: There is no practical initial value for it.

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
| **37** | **27**  | **9.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/all

#### Inherited from

Omit.all

#### Defined in

node_modules/csstype/index.d.ts:5080

___

### animation

• `Optional` **animation**: `Animation`<`string` & {}\> \| `NonNullable`<`undefined` \| `Animation`<`string` & {}\>\>[]

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation

#### Inherited from

Omit.animation

#### Defined in

node_modules/csstype/index.d.ts:5093

___

### animationComposition

• `Optional` **animationComposition**: `string`[] \| `AnimationComposition`

The **`animation-composition`** CSS property specifies the composite operation to use when multiple animations affect the same property simultaneously.

**Syntax**: `<single-animation-composition>#`

**Initial value**: `replace`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **112** |   n/a   | **16** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-composition

#### Inherited from

Omit.animationComposition

#### Defined in

node_modules/csstype/index.d.ts:98

___

### animationDelay

• `Optional` **animationDelay**: `string`[] \| `AnimationDelay`<`string` & {}\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-delay

#### Inherited from

Omit.animationDelay

#### Defined in

node_modules/csstype/index.d.ts:113

___

### animationDirection

• `Optional` **animationDirection**: `string`[] \| `AnimationDirection`

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-direction

#### Inherited from

Omit.animationDirection

#### Defined in

node_modules/csstype/index.d.ts:128

___

### animationDuration

• `Optional` **animationDuration**: `string`[] \| `AnimationDuration`<`string` & {}\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-duration

#### Inherited from

Omit.animationDuration

#### Defined in

node_modules/csstype/index.d.ts:143

___

### animationFillMode

• `Optional` **animationFillMode**: `string`[] \| `AnimationFillMode`

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode

#### Inherited from

Omit.animationFillMode

#### Defined in

node_modules/csstype/index.d.ts:158

___

### animationIterationCount

• `Optional` **animationIterationCount**: `AnimationIterationCount` \| `NonNullable`<`undefined` \| `AnimationIterationCount`\>[]

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count

#### Inherited from

Omit.animationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:173

___

### animationName

• `Optional` **animationName**: `string`[] \| `AnimationName`

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-name

#### Inherited from

Omit.animationName

#### Defined in

node_modules/csstype/index.d.ts:188

___

### animationPlayState

• `Optional` **animationPlayState**: `string`[] \| `AnimationPlayState`

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-play-state

#### Inherited from

Omit.animationPlayState

#### Defined in

node_modules/csstype/index.d.ts:203

___

### animationTimeline

• `Optional` **animationTimeline**: `string`[] \| `AnimationTimeline`

The **`animation-timeline`** CSS property specifies the timeline that is used to control the progress of an animation.

**Syntax**: `<single-animation-timeline>#`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-timeline

#### Inherited from

Omit.animationTimeline

#### Defined in

node_modules/csstype/index.d.ts:217

___

### animationTimingFunction

• `Optional` **animationTimingFunction**: `string`[] \| `AnimationTimingFunction`

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation-timing-function

#### Inherited from

Omit.animationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:232

___

### appearance

• `Optional` **appearance**: `Appearance` \| `NonNullable`<`undefined` \| `Appearance`\>[]

The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.

**Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`

**Initial value**: `none`

| Chrome  | Firefox |  Safari  |   Edge   | IE  |
| :-----: | :-----: | :------: | :------: | :-: |
| **84**  | **80**  | **15.4** |  **84**  | No  |
| 1 _-x-_ | 1 _-x-_ | 3 _-x-_  | 12 _-x-_ |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/appearance

#### Inherited from

Omit.appearance

#### Defined in

node_modules/csstype/index.d.ts:247

___

### aspectRatio

• `Optional` **aspectRatio**: `AspectRatio` \| `NonNullable`<`undefined` \| `AspectRatio`\>[]

The **`aspect-ratio`** CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.

**Syntax**: `auto | <ratio>`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **88** | **89**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/aspect-ratio

#### Inherited from

Omit.aspectRatio

#### Defined in

node_modules/csstype/index.d.ts:261

___

### azimuth

• `Optional` **azimuth**: `string`[] \| `Azimuth`

In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.

**Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`

**Initial value**: `center`

**`Deprecated`**

#### Inherited from

Omit.azimuth

#### Defined in

node_modules/csstype/index.d.ts:7830

___

### backdropFilter

• `Optional` **backdropFilter**: `string`[] \| `BackdropFilter`

The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

| Chrome | Firefox |   Safari    |  Edge  | IE  |
| :----: | :-----: | :---------: | :----: | :-: |
| **76** | **103** | **9** _-x-_ | **17** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/backdrop-filter

#### Inherited from

Omit.backdropFilter

#### Defined in

node_modules/csstype/index.d.ts:275

___

### backfaceVisibility

• `Optional` **backfaceVisibility**: `BackfaceVisibility` \| `NonNullable`<`undefined` \| `BackfaceVisibility`\>[]

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

|  Chrome  | Firefox  |  Safari   |  Edge  |   IE   |
| :------: | :------: | :-------: | :----: | :----: |
|  **36**  |  **16**  | **15.4**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 5.1 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/backface-visibility

#### Inherited from

Omit.backfaceVisibility

#### Defined in

node_modules/csstype/index.d.ts:290

___

### background

• `Optional` **background**: `Background`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Background`<`string` \| `number`\>\>[]

The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background

#### Inherited from

Omit.background

#### Defined in

node_modules/csstype/index.d.ts:5105

___

### backgroundAttachment

• `Optional` **backgroundAttachment**: `string`[] \| `BackgroundAttachment`

The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.

**Syntax**: `<attachment>#`

**Initial value**: `scroll`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-attachment

#### Inherited from

Omit.backgroundAttachment

#### Defined in

node_modules/csstype/index.d.ts:304

___

### backgroundBlendMode

• `Optional` **backgroundBlendMode**: `string`[] \| `BackgroundBlendMode`

The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.

**Syntax**: `<blend-mode>#`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **35** | **30**  | **8**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-blend-mode

#### Inherited from

Omit.backgroundBlendMode

#### Defined in

node_modules/csstype/index.d.ts:318

___

### backgroundClip

• `Optional` **backgroundClip**: `string`[] \| `BackgroundClip`

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **4**  | **14**  | **12** | **9** |
|        |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-clip

#### Inherited from

Omit.backgroundClip

#### Defined in

node_modules/csstype/index.d.ts:333

___

### backgroundColor

• `Optional` **backgroundColor**: [`SimplifiedPaletteVars`](../modules.md#simplifiedpalettevars) \| `BackgroundColor`

#### Inherited from

[OverwriteCSSProperties](OverwriteCSSProperties.md).[backgroundColor](OverwriteCSSProperties.md#backgroundcolor)

#### Defined in

[src/styleTypes.ts:298](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L298)

___

### backgroundImage

• `Optional` **backgroundImage**: `string`[] \| `BackgroundImage`

The **`background-image`** CSS property sets one or more background images on an element.

**Syntax**: `<bg-image>#`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-image

#### Inherited from

Omit.backgroundImage

#### Defined in

node_modules/csstype/index.d.ts:361

___

### backgroundOrigin

• `Optional` **backgroundOrigin**: `string`[] \| `BackgroundOrigin`

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **4**  | **3**  | **12** | **9** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-origin

#### Inherited from

Omit.backgroundOrigin

#### Defined in

node_modules/csstype/index.d.ts:375

___

### backgroundPosition

• `Optional` **backgroundPosition**: `BackgroundPosition`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BackgroundPosition`<`string` \| `number`\>\>[]

The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `<bg-position>#`

**Initial value**: `0% 0%`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-position

#### Inherited from

Omit.backgroundPosition

#### Defined in

node_modules/csstype/index.d.ts:5119

___

### backgroundPositionX

• `Optional` **backgroundPositionX**: `BackgroundPositionX`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BackgroundPositionX`<`string` \| `number`\>\>[]

The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`

**Initial value**: `0%`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **49**  | **1**  | **12** | **6** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-position-x

#### Inherited from

Omit.backgroundPositionX

#### Defined in

node_modules/csstype/index.d.ts:389

___

### backgroundPositionY

• `Optional` **backgroundPositionY**: `BackgroundPositionY`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BackgroundPositionY`<`string` \| `number`\>\>[]

The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`

**Initial value**: `0%`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **49**  | **1**  | **12** | **6** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-position-y

#### Inherited from

Omit.backgroundPositionY

#### Defined in

node_modules/csstype/index.d.ts:403

___

### backgroundRepeat

• `Optional` **backgroundRepeat**: `string`[] \| `BackgroundRepeat`

The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-repeat

#### Inherited from

Omit.backgroundRepeat

#### Defined in

node_modules/csstype/index.d.ts:417

___

### backgroundSize

• `Optional` **backgroundSize**: `BackgroundSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BackgroundSize`<`string` \| `number`\>\>[]

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **3**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-size

#### Inherited from

Omit.backgroundSize

#### Defined in

node_modules/csstype/index.d.ts:432

___

### baselineShift

• `Optional` **baselineShift**: `BaselineShift`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BaselineShift`<`string` \| `number`\>\>[]

#### Inherited from

Omit.baselineShift

#### Defined in

node_modules/csstype/index.d.ts:8837

___

### bgcolor

• `Optional` **bgcolor**: `string`[] \| [`SimplifiedPaletteVars`](../modules.md#simplifiedpalettevars) \| `BackgroundColor`

The **`background-color`** CSS property sets the background color of an element.

**Initial value**: `transparent`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-color

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[bgcolor](AliasesCSSProperties.md#bgcolor)

#### Defined in

[src/styleTypes.ts:28](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L28)

___

### blockOverflow

• `Optional` **blockOverflow**: `string`[] \| `BlockOverflow`

**Syntax**: `clip | ellipsis | <string>`

**Initial value**: `clip`

#### Inherited from

Omit.blockOverflow

#### Defined in

node_modules/csstype/index.d.ts:438

___

### blockSize

• `Optional` **blockSize**: `BlockSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BlockSize`<`string` \| `number`\>\>[]

The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.

**Syntax**: `<'width'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/block-size

#### Inherited from

Omit.blockSize

#### Defined in

node_modules/csstype/index.d.ts:452

___

### border

• `Optional` **border**: `number` \| ``"hidden"`` \| ``"ActiveBorder"`` \| ``"solid"`` \| ``"white"`` \| ``"black"`` \| `string` & {} \| ``"inset"`` \| ``"-moz-initial"`` \| ``"inherit"`` \| ``"initial"`` \| ``"revert"`` \| ``"revert-layer"`` \| ``"unset"`` \| ``"aliceblue"`` \| ``"antiquewhite"`` \| ``"aqua"`` \| ``"aquamarine"`` \| ``"azure"`` \| ``"beige"`` \| ``"bisque"`` \| ``"blanchedalmond"`` \| ``"blue"`` \| ``"blueviolet"`` \| ``"brown"`` \| ``"burlywood"`` \| ``"cadetblue"`` \| ``"chartreuse"`` \| ``"chocolate"`` \| ``"coral"`` \| ``"cornflowerblue"`` \| ``"cornsilk"`` \| ``"crimson"`` \| ``"cyan"`` \| ``"darkblue"`` \| ``"darkcyan"`` \| ``"darkgoldenrod"`` \| ``"darkgray"`` \| ``"darkgreen"`` \| ``"darkgrey"`` \| ``"darkkhaki"`` \| ``"darkmagenta"`` \| ``"darkolivegreen"`` \| ``"darkorange"`` \| ``"darkorchid"`` \| ``"darkred"`` \| ``"darksalmon"`` \| ``"darkseagreen"`` \| ``"darkslateblue"`` \| ``"darkslategray"`` \| ``"darkslategrey"`` \| ``"darkturquoise"`` \| ``"darkviolet"`` \| ``"deeppink"`` \| ``"deepskyblue"`` \| ``"dimgray"`` \| ``"dimgrey"`` \| ``"dodgerblue"`` \| ``"firebrick"`` \| ``"floralwhite"`` \| ``"forestgreen"`` \| ``"fuchsia"`` \| ``"gainsboro"`` \| ``"ghostwhite"`` \| ``"gold"`` \| ``"goldenrod"`` \| ``"gray"`` \| ``"green"`` \| ``"greenyellow"`` \| ``"grey"`` \| ``"honeydew"`` \| ``"hotpink"`` \| ``"indianred"`` \| ``"indigo"`` \| ``"ivory"`` \| ``"khaki"`` \| ``"lavender"`` \| ``"lavenderblush"`` \| ``"lawngreen"`` \| ``"lemonchiffon"`` \| ``"lightblue"`` \| ``"lightcoral"`` \| ``"lightcyan"`` \| ``"lightgoldenrodyellow"`` \| ``"lightgray"`` \| ``"lightgreen"`` \| ``"lightgrey"`` \| ``"lightpink"`` \| ``"lightsalmon"`` \| ``"lightseagreen"`` \| ``"lightskyblue"`` \| ``"lightslategray"`` \| ``"lightslategrey"`` \| ``"lightsteelblue"`` \| ``"lightyellow"`` \| ``"lime"`` \| ``"limegreen"`` \| ``"linen"`` \| ``"magenta"`` \| ``"maroon"`` \| ``"mediumaquamarine"`` \| ``"mediumblue"`` \| ``"mediumorchid"`` \| ``"mediumpurple"`` \| ``"mediumseagreen"`` \| ``"mediumslateblue"`` \| ``"mediumspringgreen"`` \| ``"mediumturquoise"`` \| ``"mediumvioletred"`` \| ``"midnightblue"`` \| ``"mintcream"`` \| ``"mistyrose"`` \| ``"moccasin"`` \| ``"navajowhite"`` \| ``"navy"`` \| ``"oldlace"`` \| ``"olive"`` \| ``"olivedrab"`` \| ``"orange"`` \| ``"orangered"`` \| ``"orchid"`` \| ``"palegoldenrod"`` \| ``"palegreen"`` \| ``"paleturquoise"`` \| ``"palevioletred"`` \| ``"papayawhip"`` \| ``"peachpuff"`` \| ``"peru"`` \| ``"pink"`` \| ``"plum"`` \| ``"powderblue"`` \| ``"purple"`` \| ``"rebeccapurple"`` \| ``"red"`` \| ``"rosybrown"`` \| ``"royalblue"`` \| ``"saddlebrown"`` \| ``"salmon"`` \| ``"sandybrown"`` \| ``"seagreen"`` \| ``"seashell"`` \| ``"sienna"`` \| ``"silver"`` \| ``"skyblue"`` \| ``"slateblue"`` \| ``"slategray"`` \| ``"slategrey"`` \| ``"snow"`` \| ``"springgreen"`` \| ``"steelblue"`` \| ``"tan"`` \| ``"teal"`` \| ``"thistle"`` \| ``"tomato"`` \| ``"transparent"`` \| ``"turquoise"`` \| ``"violet"`` \| ``"wheat"`` \| ``"whitesmoke"`` \| ``"yellow"`` \| ``"yellowgreen"`` \| ``"ActiveCaption"`` \| ``"AppWorkspace"`` \| ``"Background"`` \| ``"ButtonFace"`` \| ``"ButtonHighlight"`` \| ``"ButtonShadow"`` \| ``"ButtonText"`` \| ``"CaptionText"`` \| ``"GrayText"`` \| ``"Highlight"`` \| ``"HighlightText"`` \| ``"InactiveBorder"`` \| ``"InactiveCaption"`` \| ``"InactiveCaptionText"`` \| ``"InfoBackground"`` \| ``"InfoText"`` \| ``"Menu"`` \| ``"MenuText"`` \| ``"Scrollbar"`` \| ``"ThreeDDarkShadow"`` \| ``"ThreeDFace"`` \| ``"ThreeDHighlight"`` \| ``"ThreeDLightShadow"`` \| ``"ThreeDShadow"`` \| ``"Window"`` \| ``"WindowFrame"`` \| ``"WindowText"`` \| ``"currentcolor"`` \| ``"none"`` \| ``"medium"`` \| ``"thick"`` \| ``"thin"`` \| ``"dashed"`` \| ``"dotted"`` \| ``"double"`` \| ``"groove"`` \| ``"outset"`` \| ``"ridge"``

The **`border`** CSS property is shorthand for the CSS properties **`border-width`**, **`border-style`**, and **`border-color`**. It sets an element's border.

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border

#### Inherited from

[OverwriteCSSProperties](OverwriteCSSProperties.md).[border](OverwriteCSSProperties.md#border)

#### Defined in

[src/styleTypes.ts:310](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L310)

___

### borderBlock

• `Optional` **borderBlock**: `BorderBlock`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBlock`<`string` \| `number`\>\>[]

The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block

#### Inherited from

Omit.borderBlock

#### Defined in

node_modules/csstype/index.d.ts:5143

___

### borderBlockColor

• `Optional` **borderBlockColor**: `string`[] \| `BorderBlockColor`

The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>{1,2}`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-color

#### Inherited from

Omit.borderBlockColor

#### Defined in

node_modules/csstype/index.d.ts:466

___

### borderBlockEnd

• `Optional` **borderBlockEnd**: `BorderBlockEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBlockEnd`<`string` \| `number`\>\>[]

The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-end

#### Inherited from

Omit.borderBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:5155

___

### borderBlockEndColor

• `Optional` **borderBlockEndColor**: `string`[] \| `BorderBlockEndColor`

The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-end-color

#### Inherited from

Omit.borderBlockEndColor

#### Defined in

node_modules/csstype/index.d.ts:480

___

### borderBlockEndStyle

• `Optional` **borderBlockEndStyle**: `BorderBlockEndStyle` \| `NonNullable`<`undefined` \| `BorderBlockEndStyle`\>[]

The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-end-style

#### Inherited from

Omit.borderBlockEndStyle

#### Defined in

node_modules/csstype/index.d.ts:494

___

### borderBlockEndWidth

• `Optional` **borderBlockEndWidth**: `BorderBlockEndWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBlockEndWidth`<`string` \| `number`\>\>[]

The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-end-width

#### Inherited from

Omit.borderBlockEndWidth

#### Defined in

node_modules/csstype/index.d.ts:508

___

### borderBlockStart

• `Optional` **borderBlockStart**: `BorderBlockStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBlockStart`<`string` \| `number`\>\>[]

The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-start

#### Inherited from

Omit.borderBlockStart

#### Defined in

node_modules/csstype/index.d.ts:5167

___

### borderBlockStartColor

• `Optional` **borderBlockStartColor**: `string`[] \| `BorderBlockStartColor`

The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-start-color

#### Inherited from

Omit.borderBlockStartColor

#### Defined in

node_modules/csstype/index.d.ts:522

___

### borderBlockStartStyle

• `Optional` **borderBlockStartStyle**: `BorderBlockStartStyle` \| `NonNullable`<`undefined` \| `BorderBlockStartStyle`\>[]

The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-start-style

#### Inherited from

Omit.borderBlockStartStyle

#### Defined in

node_modules/csstype/index.d.ts:536

___

### borderBlockStartWidth

• `Optional` **borderBlockStartWidth**: `BorderBlockStartWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBlockStartWidth`<`string` \| `number`\>\>[]

The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-start-width

#### Inherited from

Omit.borderBlockStartWidth

#### Defined in

node_modules/csstype/index.d.ts:550

___

### borderBlockStyle

• `Optional` **borderBlockStyle**: `BorderBlockStyle` \| `NonNullable`<`undefined` \| `BorderBlockStyle`\>[]

The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-style

#### Inherited from

Omit.borderBlockStyle

#### Defined in

node_modules/csstype/index.d.ts:564

___

### borderBlockWidth

• `Optional` **borderBlockWidth**: `BorderBlockWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBlockWidth`<`string` \| `number`\>\>[]

The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-width

#### Inherited from

Omit.borderBlockWidth

#### Defined in

node_modules/csstype/index.d.ts:578

___

### borderBottom

• `Optional` **borderBottom**: `BorderBottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBottom`<`string` \| `number`\>\>[]

The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-bottom

#### Inherited from

Omit.borderBottom

#### Defined in

node_modules/csstype/index.d.ts:5179

___

### borderBottomColor

• `Optional` **borderBottomColor**: `string`[] \| `BorderBottomColor`

The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-bottom-color

#### Inherited from

Omit.borderBottomColor

#### Defined in

node_modules/csstype/index.d.ts:592

___

### borderBottomLeftRadius

• `Optional` **borderBottomLeftRadius**: `BorderBottomLeftRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBottomLeftRadius`<`string` \| `number`\>\>[]

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius

#### Inherited from

Omit.borderBottomLeftRadius

#### Defined in

node_modules/csstype/index.d.ts:607

___

### borderBottomRightRadius

• `Optional` **borderBottomRightRadius**: `BorderBottomRightRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBottomRightRadius`<`string` \| `number`\>\>[]

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius

#### Inherited from

Omit.borderBottomRightRadius

#### Defined in

node_modules/csstype/index.d.ts:622

___

### borderBottomStyle

• `Optional` **borderBottomStyle**: `BorderBottomStyle` \| `NonNullable`<`undefined` \| `BorderBottomStyle`\>[]

The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-bottom-style

#### Inherited from

Omit.borderBottomStyle

#### Defined in

node_modules/csstype/index.d.ts:636

___

### borderBottomWidth

• `Optional` **borderBottomWidth**: `BorderBottomWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderBottomWidth`<`string` \| `number`\>\>[]

The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-bottom-width

#### Inherited from

Omit.borderBottomWidth

#### Defined in

node_modules/csstype/index.d.ts:650

___

### borderCollapse

• `Optional` **borderCollapse**: `BorderCollapse` \| `NonNullable`<`undefined` \| `BorderCollapse`\>[]

The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.

**Syntax**: `collapse | separate`

**Initial value**: `separate`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-collapse

#### Inherited from

Omit.borderCollapse

#### Defined in

node_modules/csstype/index.d.ts:664

___

### borderColor

• `Optional` **borderColor**: [`SimplifiedPaletteVars`](../modules.md#simplifiedpalettevars) \| `Color`

#### Inherited from

[OverwriteCSSProperties](OverwriteCSSProperties.md).[borderColor](OverwriteCSSProperties.md#bordercolor)

#### Defined in

[src/styleTypes.ts:297](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L297)

___

### borderEndEndRadius

• `Optional` **borderEndEndRadius**: `BorderEndEndRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderEndEndRadius`<`string` \| `number`\>\>[]

The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **89** | **66**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius

#### Inherited from

Omit.borderEndEndRadius

#### Defined in

node_modules/csstype/index.d.ts:678

___

### borderEndStartRadius

• `Optional` **borderEndStartRadius**: `BorderEndStartRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderEndStartRadius`<`string` \| `number`\>\>[]

The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **89** | **66**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius

#### Inherited from

Omit.borderEndStartRadius

#### Defined in

node_modules/csstype/index.d.ts:692

___

### borderImage

• `Optional` **borderImage**: `BorderImage` \| `NonNullable`<`undefined` \| `BorderImage`\>[]

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
| :-----: | :-------: | :-----: | :----: | :----: |
| **16**  |  **15**   |  **6**  | **12** | **11** |
| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-image

#### Inherited from

Omit.borderImage

#### Defined in

node_modules/csstype/index.d.ts:5204

___

### borderImageOutset

• `Optional` **borderImageOutset**: `BorderImageOutset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderImageOutset`<`string` \| `number`\>\>[]

The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-image-outset

#### Inherited from

Omit.borderImageOutset

#### Defined in

node_modules/csstype/index.d.ts:706

___

### borderImageRepeat

• `Optional` **borderImageRepeat**: `string`[] \| `BorderImageRepeat`

The **`border-image-repeat`** CSS property defines how the edge regions and middle region of a source image are adjusted to fit the dimensions of an element's border image. The middle region can be displayed by using the keyword "fill" in the border-image-slice property.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-image-repeat

#### Inherited from

Omit.borderImageRepeat

#### Defined in

node_modules/csstype/index.d.ts:720

___

### borderImageSlice

• `Optional` **borderImageSlice**: `BorderImageSlice` \| `NonNullable`<`undefined` \| `BorderImageSlice`\>[]

The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.

**Syntax**: `<number-percentage>{1,4} && fill?`

**Initial value**: `100%`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-image-slice

#### Inherited from

Omit.borderImageSlice

#### Defined in

node_modules/csstype/index.d.ts:734

___

### borderImageSource

• `Optional` **borderImageSource**: `string`[] \| `BorderImageSource`

The **`border-image-source`** CSS property sets the source image used to create an element's border image.

**Syntax**: `none | <image>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-image-source

#### Inherited from

Omit.borderImageSource

#### Defined in

node_modules/csstype/index.d.ts:748

___

### borderImageWidth

• `Optional` **borderImageWidth**: `BorderImageWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderImageWidth`<`string` \| `number`\>\>[]

The **`border-image-width`** CSS property sets the width of an element's border image.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `1`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **13**  | **6**  | **12** | **11** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-image-width

#### Inherited from

Omit.borderImageWidth

#### Defined in

node_modules/csstype/index.d.ts:762

___

### borderInline

• `Optional` **borderInline**: `BorderInline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderInline`<`string` \| `number`\>\>[]

The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline

#### Inherited from

Omit.borderInline

#### Defined in

node_modules/csstype/index.d.ts:5216

___

### borderInlineColor

• `Optional` **borderInlineColor**: `string`[] \| `BorderInlineColor`

The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>{1,2}`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-color

#### Inherited from

Omit.borderInlineColor

#### Defined in

node_modules/csstype/index.d.ts:776

___

### borderInlineEnd

• `Optional` **borderInlineEnd**: `BorderInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderInlineEnd`<`string` \| `number`\>\>[]

The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-end

#### Inherited from

Omit.borderInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:5228

___

### borderInlineEndColor

• `Optional` **borderInlineEndColor**: `string`[] \| `BorderInlineEndColor`

The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome |           Firefox           |  Safari  | Edge | IE  |
| :----: | :-------------------------: | :------: | :--: | :-: |
| **69** |           **41**            | **12.1** | n/a  | No  |
|        | 3 _(-moz-border-end-color)_ |          |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color

#### Inherited from

Omit.borderInlineEndColor

#### Defined in

node_modules/csstype/index.d.ts:791

___

### borderInlineEndStyle

• `Optional` **borderInlineEndStyle**: `BorderInlineEndStyle` \| `NonNullable`<`undefined` \| `BorderInlineEndStyle`\>[]

The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome |           Firefox           |  Safari  | Edge | IE  |
| :----: | :-------------------------: | :------: | :--: | :-: |
| **69** |           **41**            | **12.1** | n/a  | No  |
|        | 3 _(-moz-border-end-style)_ |          |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style

#### Inherited from

Omit.borderInlineEndStyle

#### Defined in

node_modules/csstype/index.d.ts:806

___

### borderInlineEndWidth

• `Optional` **borderInlineEndWidth**: `BorderInlineEndWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderInlineEndWidth`<`string` \| `number`\>\>[]

The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome |           Firefox           |  Safari  | Edge | IE  |
| :----: | :-------------------------: | :------: | :--: | :-: |
| **69** |           **41**            | **12.1** | n/a  | No  |
|        | 3 _(-moz-border-end-width)_ |          |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width

#### Inherited from

Omit.borderInlineEndWidth

#### Defined in

node_modules/csstype/index.d.ts:821

___

### borderInlineStart

• `Optional` **borderInlineStart**: `BorderInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderInlineStart`<`string` \| `number`\>\>[]

The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-start

#### Inherited from

Omit.borderInlineStart

#### Defined in

node_modules/csstype/index.d.ts:5240

___

### borderInlineStartColor

• `Optional` **borderInlineStartColor**: `string`[] \| `BorderInlineStartColor`

The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome |            Firefox            |  Safari  | Edge | IE  |
| :----: | :---------------------------: | :------: | :--: | :-: |
| **69** |            **41**             | **12.1** | n/a  | No  |
|        | 3 _(-moz-border-start-color)_ |          |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color

#### Inherited from

Omit.borderInlineStartColor

#### Defined in

node_modules/csstype/index.d.ts:836

___

### borderInlineStartStyle

• `Optional` **borderInlineStartStyle**: `BorderInlineStartStyle` \| `NonNullable`<`undefined` \| `BorderInlineStartStyle`\>[]

The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome |            Firefox            |  Safari  | Edge | IE  |
| :----: | :---------------------------: | :------: | :--: | :-: |
| **69** |            **41**             | **12.1** | n/a  | No  |
|        | 3 _(-moz-border-start-style)_ |          |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style

#### Inherited from

Omit.borderInlineStartStyle

#### Defined in

node_modules/csstype/index.d.ts:851

___

### borderInlineStartWidth

• `Optional` **borderInlineStartWidth**: `BorderInlineStartWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderInlineStartWidth`<`string` \| `number`\>\>[]

The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width

#### Inherited from

Omit.borderInlineStartWidth

#### Defined in

node_modules/csstype/index.d.ts:865

___

### borderInlineStyle

• `Optional` **borderInlineStyle**: `BorderInlineStyle` \| `NonNullable`<`undefined` \| `BorderInlineStyle`\>[]

The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-style

#### Inherited from

Omit.borderInlineStyle

#### Defined in

node_modules/csstype/index.d.ts:879

___

### borderInlineWidth

• `Optional` **borderInlineWidth**: `BorderInlineWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderInlineWidth`<`string` \| `number`\>\>[]

The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-width

#### Inherited from

Omit.borderInlineWidth

#### Defined in

node_modules/csstype/index.d.ts:893

___

### borderLeft

• `Optional` **borderLeft**: `BorderLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderLeft`<`string` \| `number`\>\>[]

The **`border-left`** shorthand CSS property sets all the properties of an element's left border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-left

#### Inherited from

Omit.borderLeft

#### Defined in

node_modules/csstype/index.d.ts:5252

___

### borderLeftColor

• `Optional` **borderLeftColor**: `string`[] \| `BorderLeftColor`

The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-left-color

#### Inherited from

Omit.borderLeftColor

#### Defined in

node_modules/csstype/index.d.ts:907

___

### borderLeftStyle

• `Optional` **borderLeftStyle**: `BorderLeftStyle` \| `NonNullable`<`undefined` \| `BorderLeftStyle`\>[]

The **`border-left-style`** CSS property sets the line style of an element's left `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-left-style

#### Inherited from

Omit.borderLeftStyle

#### Defined in

node_modules/csstype/index.d.ts:921

___

### borderLeftWidth

• `Optional` **borderLeftWidth**: `BorderLeftWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderLeftWidth`<`string` \| `number`\>\>[]

The **`border-left-width`** CSS property sets the width of the left border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-left-width

#### Inherited from

Omit.borderLeftWidth

#### Defined in

node_modules/csstype/index.d.ts:935

___

### borderRadius

• `Optional` **borderRadius**: `BorderRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderRadius`<`string` \| `number`\>\>[]

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-radius

#### Inherited from

Omit.borderRadius

#### Defined in

node_modules/csstype/index.d.ts:5265

___

### borderRight

• `Optional` **borderRight**: `BorderRight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderRight`<`string` \| `number`\>\>[]

The **`border-right`** shorthand CSS property sets all the properties of an element's right border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-right

#### Inherited from

Omit.borderRight

#### Defined in

node_modules/csstype/index.d.ts:5277

___

### borderRightColor

• `Optional` **borderRightColor**: `string`[] \| `BorderRightColor`

The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-right-color

#### Inherited from

Omit.borderRightColor

#### Defined in

node_modules/csstype/index.d.ts:949

___

### borderRightStyle

• `Optional` **borderRightStyle**: `BorderRightStyle` \| `NonNullable`<`undefined` \| `BorderRightStyle`\>[]

The **`border-right-style`** CSS property sets the line style of an element's right `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-right-style

#### Inherited from

Omit.borderRightStyle

#### Defined in

node_modules/csstype/index.d.ts:963

___

### borderRightWidth

• `Optional` **borderRightWidth**: `BorderRightWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderRightWidth`<`string` \| `number`\>\>[]

The **`border-right-width`** CSS property sets the width of the right border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-right-width

#### Inherited from

Omit.borderRightWidth

#### Defined in

node_modules/csstype/index.d.ts:977

___

### borderSpacing

• `Optional` **borderSpacing**: `BorderSpacing`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderSpacing`<`string` \| `number`\>\>[]

The **`border-spacing`** CSS property sets the distance between the borders of adjacent cells in a `<table>`. This property applies only when `border-collapse` is `separate`.

**Syntax**: `<length> <length>?`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-spacing

#### Inherited from

Omit.borderSpacing

#### Defined in

node_modules/csstype/index.d.ts:991

___

### borderStartEndRadius

• `Optional` **borderStartEndRadius**: `BorderStartEndRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderStartEndRadius`<`string` \| `number`\>\>[]

The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **89** | **66**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius

#### Inherited from

Omit.borderStartEndRadius

#### Defined in

node_modules/csstype/index.d.ts:1005

___

### borderStartStartRadius

• `Optional` **borderStartStartRadius**: `BorderStartStartRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderStartStartRadius`<`string` \| `number`\>\>[]

The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **89** | **66**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius

#### Inherited from

Omit.borderStartStartRadius

#### Defined in

node_modules/csstype/index.d.ts:1019

___

### borderStyle

• `Optional` **borderStyle**: `string`[] \| `BorderStyle`

The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.

**Syntax**: `<line-style>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-style

#### Inherited from

Omit.borderStyle

#### Defined in

node_modules/csstype/index.d.ts:5289

___

### borderTop

• `Optional` **borderTop**: `BorderTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderTop`<`string` \| `number`\>\>[]

The **`border-top`** shorthand CSS property sets all the properties of an element's top border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-top

#### Inherited from

Omit.borderTop

#### Defined in

node_modules/csstype/index.d.ts:5301

___

### borderTopColor

• `Optional` **borderTopColor**: `string`[] \| `BorderTopColor`

The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-top-color

#### Inherited from

Omit.borderTopColor

#### Defined in

node_modules/csstype/index.d.ts:1033

___

### borderTopLeftRadius

• `Optional` **borderTopLeftRadius**: `BorderTopLeftRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderTopLeftRadius`<`string` \| `number`\>\>[]

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius

#### Inherited from

Omit.borderTopLeftRadius

#### Defined in

node_modules/csstype/index.d.ts:1048

___

### borderTopRightRadius

• `Optional` **borderTopRightRadius**: `BorderTopRightRadius`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderTopRightRadius`<`string` \| `number`\>\>[]

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius

#### Inherited from

Omit.borderTopRightRadius

#### Defined in

node_modules/csstype/index.d.ts:1063

___

### borderTopStyle

• `Optional` **borderTopStyle**: `BorderTopStyle` \| `NonNullable`<`undefined` \| `BorderTopStyle`\>[]

The **`border-top-style`** CSS property sets the line style of an element's top `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-top-style

#### Inherited from

Omit.borderTopStyle

#### Defined in

node_modules/csstype/index.d.ts:1077

___

### borderTopWidth

• `Optional` **borderTopWidth**: `BorderTopWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderTopWidth`<`string` \| `number`\>\>[]

The **`border-top-width`** CSS property sets the width of the top border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-top-width

#### Inherited from

Omit.borderTopWidth

#### Defined in

node_modules/csstype/index.d.ts:1091

___

### borderWidth

• `Optional` **borderWidth**: `BorderWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `BorderWidth`<`string` \| `number`\>\>[]

The **`border-width`** shorthand CSS property sets the width of an element's border.

**Syntax**: `<line-width>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-width

#### Inherited from

Omit.borderWidth

#### Defined in

node_modules/csstype/index.d.ts:5313

___

### bottom

• `Optional` **bottom**: `Bottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Bottom`<`string` \| `number`\>\>[]

The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/bottom

#### Inherited from

Omit.bottom

#### Defined in

node_modules/csstype/index.d.ts:1105

___

### boxAlign

• `Optional` **boxAlign**: `BoxAlign` \| `NonNullable`<`undefined` \| `BoxAlign`\>[]

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`Deprecated`**

#### Inherited from

Omit.boxAlign

#### Defined in

node_modules/csstype/index.d.ts:7840

___

### boxDecorationBreak

• `Optional` **boxDecorationBreak**: `BoxDecorationBreak` \| `NonNullable`<`undefined` \| `BoxDecorationBreak`\>[]

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

|    Chrome    | Firefox |   Safari    | Edge | IE  |
| :----------: | :-----: | :---------: | :--: | :-: |
| **22** _-x-_ | **32**  | **7** _-x-_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/box-decoration-break

#### Inherited from

Omit.boxDecorationBreak

#### Defined in

node_modules/csstype/index.d.ts:1119

___

### boxDirection

• `Optional` **boxDirection**: `BoxDirection` \| `NonNullable`<`undefined` \| `BoxDirection`\>[]

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`Deprecated`**

#### Inherited from

Omit.boxDirection

#### Defined in

node_modules/csstype/index.d.ts:7850

___

### boxFlex

• `Optional` **boxFlex**: `BoxFlex` \| `NonNullable`<`undefined` \| `BoxFlex`\>[]

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.boxFlex

#### Defined in

node_modules/csstype/index.d.ts:7860

___

### boxFlexGroup

• `Optional` **boxFlexGroup**: `BoxFlexGroup` \| `NonNullable`<`undefined` \| `BoxFlexGroup`\>[]

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.boxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:7870

___

### boxLines

• `Optional` **boxLines**: `BoxLines` \| `NonNullable`<`undefined` \| `BoxLines`\>[]

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`Deprecated`**

#### Inherited from

Omit.boxLines

#### Defined in

node_modules/csstype/index.d.ts:7880

___

### boxOrdinalGroup

• `Optional` **boxOrdinalGroup**: `BoxOrdinalGroup` \| `NonNullable`<`undefined` \| `BoxOrdinalGroup`\>[]

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`Deprecated`**

#### Inherited from

Omit.boxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:7890

___

### boxOrient

• `Optional` **boxOrient**: `BoxOrient` \| `NonNullable`<`undefined` \| `BoxOrient`\>[]

The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`Deprecated`**

#### Inherited from

Omit.boxOrient

#### Defined in

node_modules/csstype/index.d.ts:7900

___

### boxPack

• `Optional` **boxPack**: `BoxPack` \| `NonNullable`<`undefined` \| `BoxPack`\>[]

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`Deprecated`**

#### Inherited from

Omit.boxPack

#### Defined in

node_modules/csstype/index.d.ts:7910

___

### boxShadow

• `Optional` **boxShadow**: `BoxShadow` \| keyof `Shadow`

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the
element for blur and spread radii, and by its color.

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
| **10**  |  **4**  | **5.1** | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/box-shadow

#### Inherited from

[OverwriteCSSProperties](OverwriteCSSProperties.md).[boxShadow](OverwriteCSSProperties.md#boxshadow)

#### Defined in

[src/styleTypes.ts:324](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L324)

___

### boxSizing

• `Optional` **boxSizing**: `BoxSizing` \| `NonNullable`<`undefined` \| `BoxSizing`\>[]

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
| **10**  | **29**  | **5.1** | **12** | **8** |
| 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/box-sizing

#### Inherited from

Omit.boxSizing

#### Defined in

node_modules/csstype/index.d.ts:1149

___

### breakAfter

• `Optional` **breakAfter**: `BreakAfter` \| `NonNullable`<`undefined` \| `BreakAfter`\>[]

The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.

**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/break-after

#### Inherited from

Omit.breakAfter

#### Defined in

node_modules/csstype/index.d.ts:1163

___

### breakBefore

• `Optional` **breakBefore**: `BreakBefore` \| `NonNullable`<`undefined` \| `BreakBefore`\>[]

The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.

**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/break-before

#### Inherited from

Omit.breakBefore

#### Defined in

node_modules/csstype/index.d.ts:1177

___

### breakInside

• `Optional` **breakInside**: `BreakInside` \| `NonNullable`<`undefined` \| `BreakInside`\>[]

The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.

**Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/break-inside

#### Inherited from

Omit.breakInside

#### Defined in

node_modules/csstype/index.d.ts:1191

___

### captionSide

• `Optional` **captionSide**: `CaptionSide` \| `NonNullable`<`undefined` \| `CaptionSide`\>[]

The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.

**Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`

**Initial value**: `top`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/caption-side

#### Inherited from

Omit.captionSide

#### Defined in

node_modules/csstype/index.d.ts:1205

___

### caret

• `Optional` **caret**: `string`[] \| `Caret`

**Syntax**: `<'caret-color'> || <'caret-shape'>`

#### Inherited from

Omit.caret

#### Defined in

node_modules/csstype/index.d.ts:5315

___

### caretColor

• `Optional` **caretColor**: `string`[] \| `CaretColor`

The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.

**Syntax**: `auto | <color>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **53**  | **11.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/caret-color

#### Inherited from

Omit.caretColor

#### Defined in

node_modules/csstype/index.d.ts:1219

___

### caretShape

• `Optional` **caretShape**: `CaretShape` \| `NonNullable`<`undefined` \| `CaretShape`\>[]

**Syntax**: `auto | bar | block | underscore`

**Initial value**: `auto`

#### Inherited from

Omit.caretShape

#### Defined in

node_modules/csstype/index.d.ts:1225

___

### clear

• `Optional` **clear**: `Clear` \| `NonNullable`<`undefined` \| `Clear`\>[]

The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.

**Syntax**: `none | left | right | both | inline-start | inline-end`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/clear

#### Inherited from

Omit.clear

#### Defined in

node_modules/csstype/index.d.ts:1239

___

### clip

• `Optional` **clip**: `string`[] \| `Clip`

The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.

**Syntax**: `<shape> | auto`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.clip

#### Defined in

node_modules/csstype/index.d.ts:7920

___

### clipPath

• `Optional` **clipPath**: `string`[] \| `ClipPath`

The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`

**Initial value**: `none`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **55**  | **3.5** | **9.1** | **79** | **10** |
| 23 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/clip-path

#### Inherited from

Omit.clipPath

#### Defined in

node_modules/csstype/index.d.ts:1254

___

### clipRule

• `Optional` **clipRule**: `ClipRule` \| `NonNullable`<`undefined` \| `ClipRule`\>[]

#### Inherited from

Omit.clipRule

#### Defined in

node_modules/csstype/index.d.ts:8840

___

### color

• `Optional` **color**: [`SimplifiedPaletteVars`](../modules.md#simplifiedpalettevars) \| `Color`

#### Inherited from

[OverwriteCSSProperties](OverwriteCSSProperties.md).[color](OverwriteCSSProperties.md#color)

#### Defined in

[src/styleTypes.ts:296](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L296)

___

### colorAdjust

• `Optional` **colorAdjust**: `PrintColorAdjust` \| `NonNullable`<`undefined` \| `PrintColorAdjust`\>[]

The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

|    Chrome    |       Firefox       |  Safari  |     Edge     | IE  |
| :----------: | :-----------------: | :------: | :----------: | :-: |
| **17** _-x-_ |       **97**        | **15.4** | **79** _-x-_ | No  |
|              | 48 _(color-adjust)_ | 6 _-x-_  |              |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/print-color-adjust

#### Inherited from

Omit.colorAdjust

#### Defined in

node_modules/csstype/index.d.ts:1283

___

### colorInterpolation

• `Optional` **colorInterpolation**: `ColorInterpolation` \| `NonNullable`<`undefined` \| `ColorInterpolation`\>[]

#### Inherited from

Omit.colorInterpolation

#### Defined in

node_modules/csstype/index.d.ts:8842

___

### colorRendering

• `Optional` **colorRendering**: `ColorRendering` \| `NonNullable`<`undefined` \| `ColorRendering`\>[]

#### Inherited from

Omit.colorRendering

#### Defined in

node_modules/csstype/index.d.ts:8843

___

### colorScheme

• `Optional` **colorScheme**: `string`[] \| `ColorScheme`

The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.

**Syntax**: `normal | [ light | dark | <custom-ident> ]+ && only?`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **81** | **96**  | **13** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/color-scheme

#### Inherited from

Omit.colorScheme

#### Defined in

node_modules/csstype/index.d.ts:1297

___

### columnCount

• `Optional` **columnCount**: `ColumnCount` \| `NonNullable`<`undefined` \| `ColumnCount`\>[]

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-count

#### Inherited from

Omit.columnCount

#### Defined in

node_modules/csstype/index.d.ts:1312

___

### columnFill

• `Optional` **columnFill**: `ColumnFill` \| `NonNullable`<`undefined` \| `ColumnFill`\>[]

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 8 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-fill

#### Inherited from

Omit.columnFill

#### Defined in

node_modules/csstype/index.d.ts:1327

___

### columnGap

• `Optional` **columnGap**: `ColumnGap`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnGap`<`string` \| `number`\>\>[]

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **1**  | **1.5** | **3**  | **12** | **10** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-gap

#### Inherited from

Omit.columnGap

#### Defined in

node_modules/csstype/index.d.ts:1341

___

### columnRule

• `Optional` **columnRule**: `ColumnRule`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnRule`<`string` \| `number`\>\>[]

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-rule

#### Inherited from

Omit.columnRule

#### Defined in

node_modules/csstype/index.d.ts:5328

___

### columnRuleColor

• `Optional` **columnRuleColor**: `string`[] \| `ColumnRuleColor`

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-rule-color

#### Inherited from

Omit.columnRuleColor

#### Defined in

node_modules/csstype/index.d.ts:1356

___

### columnRuleStyle

• `Optional` **columnRuleStyle**: `string`[] \| `ColumnRuleStyle`

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-rule-style

#### Inherited from

Omit.columnRuleStyle

#### Defined in

node_modules/csstype/index.d.ts:1371

___

### columnRuleWidth

• `Optional` **columnRuleWidth**: `ColumnRuleWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnRuleWidth`<`string` \| `number`\>\>[]

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-rule-width

#### Inherited from

Omit.columnRuleWidth

#### Defined in

node_modules/csstype/index.d.ts:1386

___

### columnSpan

• `Optional` **columnSpan**: `ColumnSpan` \| `NonNullable`<`undefined` \| `ColumnSpan`\>[]

The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.

**Syntax**: `none | all`

**Initial value**: `none`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **50**  | **71**  |   **9**   | **12** | **10** |
| 6 _-x-_ |         | 5.1 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-span

#### Inherited from

Omit.columnSpan

#### Defined in

node_modules/csstype/index.d.ts:1401

___

### columnWidth

• `Optional` **columnWidth**: `ColumnWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ColumnWidth`<`string` \| `number`\>\>[]

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **50**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-width

#### Inherited from

Omit.columnWidth

#### Defined in

node_modules/csstype/index.d.ts:1416

___

### columns

• `Optional` **columns**: `Columns`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Columns`<`string` \| `number`\>\>[]

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/columns

#### Inherited from

Omit.columns

#### Defined in

node_modules/csstype/index.d.ts:5341

___

### contain

• `Optional` **contain**: `string`[] \| `Contain`

The **`contain`** CSS property indicates that an element and its contents are, as much as possible, independent from the rest of the document tree. Containment enables isolating a subsection of the DOM, providing performance benefits by limiting calculations of layout, style, paint, size, or any combination to a DOM subtree rather than the entire page. Containment can also be used to scope CSS counters and quotes.

**Syntax**: `none | strict | content | [ [ size || inline-size ] || layout || style || paint ]`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **52** | **69**  | **15.4** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/contain

#### Inherited from

Omit.contain

#### Defined in

node_modules/csstype/index.d.ts:1430

___

### containIntrinsicBlockSize

• `Optional` **containIntrinsicBlockSize**: `ContainIntrinsicBlockSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ContainIntrinsicBlockSize`<`string` \| `number`\>\>[]

The **`contain-intrinsic-block-size`** CSS logical property defines the block size of an element that a browser can use for layout when the element is subject to size containment.

**Syntax**: `none | <length> | auto <length>`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **95** | **107** |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-block-size

#### Inherited from

Omit.containIntrinsicBlockSize

#### Defined in

node_modules/csstype/index.d.ts:1444

___

### containIntrinsicHeight

• `Optional` **containIntrinsicHeight**: `ContainIntrinsicHeight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ContainIntrinsicHeight`<`string` \| `number`\>\>[]

The **`contain-intrinsic-length`** CSS property sets the height of an element that a browser can use for layout when the element is subject to size containment.

**Syntax**: `none | <length> | auto <length>`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **83** | **107** |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height

#### Inherited from

Omit.containIntrinsicHeight

#### Defined in

node_modules/csstype/index.d.ts:1458

___

### containIntrinsicInlineSize

• `Optional` **containIntrinsicInlineSize**: `ContainIntrinsicInlineSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ContainIntrinsicInlineSize`<`string` \| `number`\>\>[]

The **`contain-intrinsic-inline-size`** CSS logical property defines the inline-size of an element that a browser can use for layout when the element is subject to size containment.

**Syntax**: `none | <length> | auto <length>`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **95** | **107** |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-inline-size

#### Inherited from

Omit.containIntrinsicInlineSize

#### Defined in

node_modules/csstype/index.d.ts:1472

___

### containIntrinsicSize

• `Optional` **containIntrinsicSize**: `ContainIntrinsicSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ContainIntrinsicSize`<`string` \| `number`\>\>[]

The **`contain-intrinsic-size`** CSS shorthand property sets the size of an element that a browser will use for layout when the element is subject to size containment.

**Syntax**: `[ none | <length> | auto <length> ]{1,2}`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **83** | **107** |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size

#### Inherited from

Omit.containIntrinsicSize

#### Defined in

node_modules/csstype/index.d.ts:5353

___

### containIntrinsicWidth

• `Optional` **containIntrinsicWidth**: `ContainIntrinsicWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ContainIntrinsicWidth`<`string` \| `number`\>\>[]

The **`contain-intrinsic-width`** CSS property sets the width of an element that a browser will use for layout when the element is subject to size containment.

**Syntax**: `none | <length> | auto <length>`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **83** | **107** |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width

#### Inherited from

Omit.containIntrinsicWidth

#### Defined in

node_modules/csstype/index.d.ts:1486

___

### container

• `Optional` **container**: `string`[] \| `Container`

The **container** shorthand CSS property establishes the element as a query container and specifies the name or name for the containment context used in a container query.

**Syntax**: `<'container-name'> [ / <'container-type'> ]?`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **105** | **110** | **16** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/container

#### Inherited from

Omit.container

#### Defined in

node_modules/csstype/index.d.ts:5365

___

### containerName

• `Optional` **containerName**: `string`[] \| `ContainerName`

The **container-name** CSS property specifies a list of query container names used by the

**`Container`**

at-rule in a container query. A container query will apply styles to elements based on the size of the nearest ancestor with a containment context. When a containment context is given a name, it can be specifically targeted using the `@container` at-rule instead of the nearest ancestor with containment.

**Syntax**: `none | <custom-ident>+`

**Initial value**: `none`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **105** | **110** | **16** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/container-name

#### Inherited from

Omit.containerName

#### Defined in

node_modules/csstype/index.d.ts:1500

___

### containerType

• `Optional` **containerType**: `ContainerType` \| `NonNullable`<`undefined` \| `ContainerType`\>[]

The **container-type** CSS property is used to define the type of containment used in a container query.

**Syntax**: `normal | size | inline-size`

**Initial value**: `normal`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **105** | **110** | **16** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/container-type

#### Inherited from

Omit.containerType

#### Defined in

node_modules/csstype/index.d.ts:1514

___

### content

• `Optional` **content**: `string`[] \| `Content`

The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**.

**Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> ]+ ]?`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/content

#### Inherited from

Omit.content

#### Defined in

node_modules/csstype/index.d.ts:1528

___

### contentVisibility

• `Optional` **contentVisibility**: `ContentVisibility` \| `NonNullable`<`undefined` \| `ContentVisibility`\>[]

The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. It enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.

**Syntax**: `visible | auto | hidden`

**Initial value**: `visible`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **85** |   n/a   |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/content-visibility

#### Inherited from

Omit.contentVisibility

#### Defined in

node_modules/csstype/index.d.ts:1542

___

### counterIncrement

• `Optional` **counterIncrement**: `string`[] \| `CounterIncrement`

The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.

**Syntax**: `[ <counter-name> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **3**  | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/counter-increment

#### Inherited from

Omit.counterIncrement

#### Defined in

node_modules/csstype/index.d.ts:1556

___

### counterReset

• `Optional` **counterReset**: `string`[] \| `CounterReset`

The **`counter-reset`** CSS property resets a CSS counter to a given value. This property will create a new counter or reversed counter with the given name on the specified element.

**Syntax**: `[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **3**  | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/counter-reset

#### Inherited from

Omit.counterReset

#### Defined in

node_modules/csstype/index.d.ts:1570

___

### counterSet

• `Optional` **counterSet**: `string`[] \| `CounterSet`

The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.

**Syntax**: `[ <counter-name> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **85** | **68**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/counter-set

#### Inherited from

Omit.counterSet

#### Defined in

node_modules/csstype/index.d.ts:1584

___

### cursor

• `Optional` **cursor**: `string`[] \| `Cursor`

The **`cursor`** CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.

**Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/cursor

#### Inherited from

Omit.cursor

#### Defined in

node_modules/csstype/index.d.ts:1598

___

### direction

• `Optional` **direction**: `Direction` \| `NonNullable`<`undefined` \| `Direction`\>[]

The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).

**Syntax**: `ltr | rtl`

**Initial value**: `ltr`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **2**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/direction

#### Inherited from

Omit.direction

#### Defined in

node_modules/csstype/index.d.ts:1612

___

### display

• `Optional` **display**: `string`[] \| `Display`

The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

**Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`

**Initial value**: `inline`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/display

#### Inherited from

Omit.display

#### Defined in

node_modules/csstype/index.d.ts:1626

___

### displayPrint

• `Optional` **displayPrint**: `string`[] \| `Display`

The **`displayPrint`** property sets the display value for the element when the page is printed.

**Initial value**: `inline`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/display

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[displayPrint](AliasesCSSProperties.md#displayprint)

#### Defined in

[src/styleTypes.ts:282](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L282)

___

### dominantBaseline

• `Optional` **dominantBaseline**: `DominantBaseline` \| `NonNullable`<`undefined` \| `DominantBaseline`\>[]

#### Inherited from

Omit.dominantBaseline

#### Defined in

node_modules/csstype/index.d.ts:8847

___

### emptyCells

• `Optional` **emptyCells**: `EmptyCells` \| `NonNullable`<`undefined` \| `EmptyCells`\>[]

The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.

**Syntax**: `show | hide`

**Initial value**: `show`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/empty-cells

#### Inherited from

Omit.emptyCells

#### Defined in

node_modules/csstype/index.d.ts:1640

___

### fill

• `Optional` **fill**: `string`[] \| `Fill`

#### Inherited from

Omit.fill

#### Defined in

node_modules/csstype/index.d.ts:8848

___

### fillOpacity

• `Optional` **fillOpacity**: `FillOpacity` \| `NonNullable`<`undefined` \| `FillOpacity`\>[]

#### Inherited from

Omit.fillOpacity

#### Defined in

node_modules/csstype/index.d.ts:8849

___

### fillRule

• `Optional` **fillRule**: `FillRule` \| `NonNullable`<`undefined` \| `FillRule`\>[]

#### Inherited from

Omit.fillRule

#### Defined in

node_modules/csstype/index.d.ts:8850

___

### filter

• `Optional` **filter**: `string`[] \| `Filter`

The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

|  Chrome  | Firefox | Safari  |  Edge  | IE  |
| :------: | :-----: | :-----: | :----: | :-: |
|  **53**  | **35**  | **9.1** | **12** | No  |
| 18 _-x-_ |         | 6 _-x-_ |        |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/filter

#### Inherited from

Omit.filter

#### Defined in

node_modules/csstype/index.d.ts:1655

___

### flex

• `Optional` **flex**: `Flex`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Flex`<`string` \| `number`\>\>[]

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex

#### Inherited from

Omit.flex

#### Defined in

node_modules/csstype/index.d.ts:5378

___

### flexBasis

• `Optional` **flexBasis**: `FlexBasis`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `FlexBasis`<`string` \| `number`\>\>[]

The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

**Syntax**: `content | <'width'>`

**Initial value**: `auto`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **22**  |  **9**  | **12** | **11** |
| 22 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex-basis

#### Inherited from

Omit.flexBasis

#### Defined in

node_modules/csstype/index.d.ts:1670

___

### flexDirection

• `Optional` **flexDirection**: `FlexDirection` \| `NonNullable`<`undefined` \| `FlexDirection`\>[]

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

|  Chrome  | Firefox  | Safari  |  Edge  |    IE    |
| :------: | :------: | :-----: | :----: | :------: |
|  **29**  |  **81**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ | 49 _-x-_ | 7 _-x-_ |        | 10 _-x-_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex-direction

#### Inherited from

Omit.flexDirection

#### Defined in

node_modules/csstype/index.d.ts:1685

___

### flexFlow

• `Optional` **flexFlow**: `string`[] \| `FlexFlow`

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex-flow

#### Inherited from

Omit.flexFlow

#### Defined in

node_modules/csstype/index.d.ts:5391

___

### flexGrow

• `Optional` **flexGrow**: `FlexGrow` \| `NonNullable`<`undefined` \| `FlexGrow`\>[]

The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.

**Syntax**: `<number>`

**Initial value**: `0`

|  Chrome  | Firefox | Safari  |  Edge  |            IE            |
| :------: | :-----: | :-----: | :----: | :----------------------: |
|  **29**  | **20**  |  **9**  | **12** |          **11**          |
| 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex-grow

#### Inherited from

Omit.flexGrow

#### Defined in

node_modules/csstype/index.d.ts:1700

___

### flexShrink

• `Optional` **flexShrink**: `FlexShrink` \| `NonNullable`<`undefined` \| `FlexShrink`\>[]

The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

**Syntax**: `<number>`

**Initial value**: `1`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **20**  |  **9**  | **12** | **10** |
| 22 _-x-_ |         | 8 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex-shrink

#### Inherited from

Omit.flexShrink

#### Defined in

node_modules/csstype/index.d.ts:1715

___

### flexWrap

• `Optional` **flexWrap**: `FlexWrap` \| `NonNullable`<`undefined` \| `FlexWrap`\>[]

The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: `nowrap | wrap | wrap-reverse`

**Initial value**: `nowrap`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex-wrap

#### Inherited from

Omit.flexWrap

#### Defined in

node_modules/csstype/index.d.ts:1730

___

### float

• `Optional` **float**: `Float` \| `NonNullable`<`undefined` \| `Float`\>[]

The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

**Syntax**: `left | right | none | inline-start | inline-end`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/float

#### Inherited from

Omit.float

#### Defined in

node_modules/csstype/index.d.ts:1744

___

### floodColor

• `Optional` **floodColor**: `string`[] \| `FloodColor`

#### Inherited from

Omit.floodColor

#### Defined in

node_modules/csstype/index.d.ts:8852

___

### floodOpacity

• `Optional` **floodOpacity**: `FloodOpacity` \| `NonNullable`<`undefined` \| `FloodOpacity`\>[]

#### Inherited from

Omit.floodOpacity

#### Defined in

node_modules/csstype/index.d.ts:8853

___

### font

• `Optional` **font**: `string`[] \| `Font`

The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font

#### Inherited from

Omit.font

#### Defined in

node_modules/csstype/index.d.ts:5403

___

### fontFamily

• `Optional` **fontFamily**: `string`[] \| `FontFamily`

The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

**Syntax**: `[ <family-name> | <generic-family> ]#`

**Initial value**: depends on user agent

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-family

#### Inherited from

Omit.fontFamily

#### Defined in

node_modules/csstype/index.d.ts:1758

___

### fontFeatureSettings

• `Optional` **fontFeatureSettings**: `string`[] \| `FontFeatureSettings`

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **48**  |  **34**  | **9.1** | **15** | **10** |
| 16 _-x-_ | 15 _-x-_ |         |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-feature-settings

#### Inherited from

Omit.fontFeatureSettings

#### Defined in

node_modules/csstype/index.d.ts:1773

___

### fontKerning

• `Optional` **fontKerning**: `FontKerning` \| `NonNullable`<`undefined` \| `FontKerning`\>[]

The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: `auto | normal | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
| **33** | **32**  |  **9**  | n/a  | No  |
|        |         | 6 _-x-_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-kerning

#### Inherited from

Omit.fontKerning

#### Defined in

node_modules/csstype/index.d.ts:1788

___

### fontLanguageOverride

• `Optional` **fontLanguageOverride**: `string`[] \| `FontLanguageOverride`

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: `normal | <string>`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **34**  |   No   | n/a  | No  |
|        | 4 _-x-_ |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-language-override

#### Inherited from

Omit.fontLanguageOverride

#### Defined in

node_modules/csstype/index.d.ts:1803

___

### fontOpticalSizing

• `Optional` **fontOpticalSizing**: `FontOpticalSizing` \| `NonNullable`<`undefined` \| `FontOpticalSizing`\>[]

The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **79** | **62**  | **11** | **17** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing

#### Inherited from

Omit.fontOpticalSizing

#### Defined in

node_modules/csstype/index.d.ts:1817

___

### fontPalette

• `Optional` **fontPalette**: `string`[] \| `FontPalette`

**Syntax**: `normal | light | dark | <palette-identifier>`

**Initial value**: `normal`

| Chrome  | Firefox |  Safari  | Edge | IE  |
| :-----: | :-----: | :------: | :--: | :-: |
| **101** | **107** | **15.4** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-palette

#### Inherited from

Omit.fontPalette

#### Defined in

node_modules/csstype/index.d.ts:1829

___

### fontSize

• `Optional` **fontSize**: `FontSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `FontSize`<`string` \| `number`\>\>[]

The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.

**Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-size

#### Inherited from

Omit.fontSize

#### Defined in

node_modules/csstype/index.d.ts:1843

___

### fontSizeAdjust

• `Optional` **fontSizeAdjust**: `FontSizeAdjust` \| `NonNullable`<`undefined` \| `FontSizeAdjust`\>[]

The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).

**Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   |  **3**  | **16.4** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-size-adjust

#### Inherited from

Omit.fontSizeAdjust

#### Defined in

node_modules/csstype/index.d.ts:1857

___

### fontSmooth

• `Optional` **fontSmooth**: `FontSmooth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `FontSmooth`<`string` \| `number`\>\>[]

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

|              Chrome              |              Firefox               |              Safari              | Edge | IE  |
| :------------------------------: | :--------------------------------: | :------------------------------: | :--: | :-: |
| **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-smooth

#### Inherited from

Omit.fontSmooth

#### Defined in

node_modules/csstype/index.d.ts:1871

___

### fontStretch

• `Optional` **fontStretch**: `string`[] \| `FontStretch`

The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.

**Syntax**: `<font-stretch-absolute>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **60** |  **9**  | **11** | **12** | **9** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-stretch

#### Inherited from

Omit.fontStretch

#### Defined in

node_modules/csstype/index.d.ts:1885

___

### fontStyle

• `Optional` **fontStyle**: `string`[] \| `FontStyle`

The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.

**Syntax**: `normal | italic | oblique <angle>?`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-style

#### Inherited from

Omit.fontStyle

#### Defined in

node_modules/csstype/index.d.ts:1899

___

### fontSynthesis

• `Optional` **fontSynthesis**: `string`[] \| `FontSynthesis`

The **`font-synthesis`** CSS property controls which missing typefaces, bold, italic, or small-caps, may be synthesized by the browser.

**Syntax**: `none | [ weight || style || small-caps ]`

**Initial value**: `weight style`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **97** | **34**  | **9**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-synthesis

#### Inherited from

Omit.fontSynthesis

#### Defined in

node_modules/csstype/index.d.ts:1913

___

### fontVariant

• `Optional` **fontVariant**: `string`[] \| `FontVariant`

The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variant

#### Inherited from

Omit.fontVariant

#### Defined in

node_modules/csstype/index.d.ts:1927

___

### fontVariantAlternates

• `Optional` **fontVariantAlternates**: `string`[] \| `FontVariantAlternates`

The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.

**Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
|   No   | **34**  | **9.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates

#### Inherited from

Omit.fontVariantAlternates

#### Defined in

node_modules/csstype/index.d.ts:1941

___

### fontVariantCaps

• `Optional` **fontVariantCaps**: `FontVariantCaps` \| `NonNullable`<`undefined` \| `FontVariantCaps`\>[]

The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.

**Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`

**Initial value**: `normal`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
| **52** | **34**  | **9.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variant-caps

#### Inherited from

Omit.fontVariantCaps

#### Defined in

node_modules/csstype/index.d.ts:1955

___

### fontVariantEastAsian

• `Optional` **fontVariantEastAsian**: `string`[] \| `FontVariantEastAsian`

The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.

**Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
| **63** | **34**  | **9.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian

#### Inherited from

Omit.fontVariantEastAsian

#### Defined in

node_modules/csstype/index.d.ts:1969

___

### fontVariantEmoji

• `Optional` **fontVariantEmoji**: `FontVariantEmoji` \| `NonNullable`<`undefined` \| `FontVariantEmoji`\>[]

**Syntax**: `normal | text | emoji | unicode`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **108** |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variant-emoji

#### Inherited from

Omit.fontVariantEmoji

#### Defined in

node_modules/csstype/index.d.ts:1981

___

### fontVariantLigatures

• `Optional` **fontVariantLigatures**: `string`[] \| `FontVariantLigatures`

The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`

**Initial value**: `normal`

|  Chrome  | Firefox | Safari  | Edge | IE  |
| :------: | :-----: | :-----: | :--: | :-: |
|  **34**  | **34**  | **9.1** | n/a  | No  |
| 31 _-x-_ |         | 7 _-x-_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures

#### Inherited from

Omit.fontVariantLigatures

#### Defined in

node_modules/csstype/index.d.ts:1996

___

### fontVariantNumeric

• `Optional` **fontVariantNumeric**: `string`[] \| `FontVariantNumeric`

The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.

**Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
| **52** | **34**  | **9.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric

#### Inherited from

Omit.fontVariantNumeric

#### Defined in

node_modules/csstype/index.d.ts:2010

___

### fontVariantPosition

• `Optional` **fontVariantPosition**: `FontVariantPosition` \| `NonNullable`<`undefined` \| `FontVariantPosition`\>[]

The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.

**Syntax**: `normal | sub | super`

**Initial value**: `normal`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
|   No   | **34**  | **9.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variant-position

#### Inherited from

Omit.fontVariantPosition

#### Defined in

node_modules/csstype/index.d.ts:2024

___

### fontVariationSettings

• `Optional` **fontVariationSettings**: `string`[] \| `FontVariationSettings`

The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.

**Syntax**: `normal | [ <string> <number> ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **62** | **62**  | **11** | **17** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-variation-settings

#### Inherited from

Omit.fontVariationSettings

#### Defined in

node_modules/csstype/index.d.ts:2038

___

### fontWeight

• `Optional` **fontWeight**: `FontWeight` \| keyof `FontWeight`

The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only
available in `normal` and `bold`.

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font-weight

#### Inherited from

[OverwriteCSSProperties](OverwriteCSSProperties.md).[fontWeight](OverwriteCSSProperties.md#fontweight)

#### Defined in

[src/styleTypes.ts:337](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L337)

___

### forcedColorAdjust

• `Optional` **forcedColorAdjust**: `ForcedColorAdjust` \| `NonNullable`<`undefined` \| `ForcedColorAdjust`\>[]

The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |              Edge               |                 IE                  |
| :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: |
| **89** |   No    |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ |
|        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust

#### Inherited from

Omit.forcedColorAdjust

#### Defined in

node_modules/csstype/index.d.ts:2067

___

### gap

• `Optional` **gap**: `Gap`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Gap`<`string` \| `number`\>\>[]

The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

**Syntax**: `<'row-gap'> <'column-gap'>?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/gap

#### Inherited from

Omit.gap

#### Defined in

node_modules/csstype/index.d.ts:5415

___

### glyphOrientationVertical

• `Optional` **glyphOrientationVertical**: `GlyphOrientationVertical` \| `NonNullable`<`undefined` \| `GlyphOrientationVertical`\>[]

#### Inherited from

Omit.glyphOrientationVertical

#### Defined in

node_modules/csstype/index.d.ts:8862

___

### grid

• `Optional` **grid**: `string`[] \| `Grid`

The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid

#### Inherited from

Omit.grid

#### Defined in

node_modules/csstype/index.d.ts:5427

___

### gridArea

• `Optional` **gridArea**: `GridArea` \| `NonNullable`<`undefined` \| `GridArea`\>[]

The **`grid-area`** CSS shorthand property specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-area

#### Inherited from

Omit.gridArea

#### Defined in

node_modules/csstype/index.d.ts:5439

___

### gridAutoColumns

• `Optional` **gridAutoColumns**: `GridAutoColumns`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `GridAutoColumns`<`string` \| `number`\>\>[]

The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.

**Syntax**: `<track-size>+`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |             IE              |
| :----: | :-----: | :------: | :----: | :-------------------------: |
| **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns

#### Inherited from

Omit.gridAutoColumns

#### Defined in

node_modules/csstype/index.d.ts:2081

___

### gridAutoFlow

• `Optional` **gridAutoFlow**: `string`[] \| `GridAutoFlow`

The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

**Syntax**: `[ row | column ] || dense`

**Initial value**: `row`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow

#### Inherited from

Omit.gridAutoFlow

#### Defined in

node_modules/csstype/index.d.ts:2095

___

### gridAutoRows

• `Optional` **gridAutoRows**: `GridAutoRows`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `GridAutoRows`<`string` \| `number`\>\>[]

The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.

**Syntax**: `<track-size>+`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |            IE            |
| :----: | :-----: | :------: | :----: | :----------------------: |
| **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows

#### Inherited from

Omit.gridAutoRows

#### Defined in

node_modules/csstype/index.d.ts:2109

___

### gridColumn

• `Optional` **gridColumn**: `GridColumn` \| `NonNullable`<`undefined` \| `GridColumn`\>[]

The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-column

#### Inherited from

Omit.gridColumn

#### Defined in

node_modules/csstype/index.d.ts:5451

___

### gridColumnEnd

• `Optional` **gridColumnEnd**: `GridColumnEnd` \| `NonNullable`<`undefined` \| `GridColumnEnd`\>[]

The **`grid-column-end`** CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-column-end

#### Inherited from

Omit.gridColumnEnd

#### Defined in

node_modules/csstype/index.d.ts:2123

___

### gridColumnGap

• `Optional` **gridColumnGap**: `GridColumnGap`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `GridColumnGap`<`string` \| `number`\>\>[]

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.gridColumnGap

#### Defined in

node_modules/csstype/index.d.ts:7930

___

### gridColumnSpan

• `Optional` **gridColumnSpan**: ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12`` \| ``"full"``

Makes the element span n-columns wide. It has no effect if its parent is not a grid container.
"full" will take the full width of the grid container.

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[gridColumnSpan](AliasesCSSProperties.md#gridcolumnspan)

#### Defined in

[src/styleTypes.ts:287](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L287)

___

### gridColumnStart

• `Optional` **gridColumnStart**: `GridColumnStart` \| `NonNullable`<`undefined` \| `GridColumnStart`\>[]

The **`grid-column-start`** CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-column-start

#### Inherited from

Omit.gridColumnStart

#### Defined in

node_modules/csstype/index.d.ts:2137

___

### gridGap

• `Optional` **gridGap**: `GridGap`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `GridGap`<`string` \| `number`\>\>[]

The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

**Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`

**`Deprecated`**

#### Inherited from

Omit.gridGap

#### Defined in

node_modules/csstype/index.d.ts:7938

___

### gridRow

• `Optional` **gridRow**: `GridRow` \| `NonNullable`<`undefined` \| `GridRow`\>[]

The **`grid-row`** CSS shorthand property specifies a grid item's size and location within a grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-row

#### Inherited from

Omit.gridRow

#### Defined in

node_modules/csstype/index.d.ts:5463

___

### gridRowEnd

• `Optional` **gridRowEnd**: `GridRowEnd` \| `NonNullable`<`undefined` \| `GridRowEnd`\>[]

The **`grid-row-end`** CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-row-end

#### Inherited from

Omit.gridRowEnd

#### Defined in

node_modules/csstype/index.d.ts:2151

___

### gridRowGap

• `Optional` **gridRowGap**: `GridRowGap`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `GridRowGap`<`string` \| `number`\>\>[]

The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

**`Deprecated`**

#### Inherited from

Omit.gridRowGap

#### Defined in

node_modules/csstype/index.d.ts:7948

___

### gridRowSpan

• `Optional` **gridRowSpan**: `number` \| ``"full"``

Makes the element span n-rows high. It has no effect if its parent is not a grid container.
"full" will take the full height of the grid container.

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[gridRowSpan](AliasesCSSProperties.md#gridrowspan)

#### Defined in

[src/styleTypes.ts:292](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L292)

___

### gridRowStart

• `Optional` **gridRowStart**: `GridRowStart` \| `NonNullable`<`undefined` \| `GridRowStart`\>[]

The **`grid-row-start`** CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-row-start

#### Inherited from

Omit.gridRowStart

#### Defined in

node_modules/csstype/index.d.ts:2165

___

### gridTemplate

• `Optional` **gridTemplate**: `string`[] \| `GridTemplate`

The **`grid-template`** CSS property is a shorthand property for defining grid columns, grid rows, and grid areas.

**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-template

#### Inherited from

Omit.gridTemplate

#### Defined in

node_modules/csstype/index.d.ts:5475

___

### gridTemplateAreas

• `Optional` **gridTemplateAreas**: `string`[] \| `GridTemplateAreas`

The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.

**Syntax**: `none | <string>+`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-template-areas

#### Inherited from

Omit.gridTemplateAreas

#### Defined in

node_modules/csstype/index.d.ts:2179

___

### gridTemplateColumns

• `Optional` **gridTemplateColumns**: `GridTemplateColumns`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `GridTemplateColumns`<`string` \| `number`\>\>[]

The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  |             IE              |
| :----: | :-----: | :------: | :----: | :-------------------------: |
| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-template-columns

#### Inherited from

Omit.gridTemplateColumns

#### Defined in

node_modules/csstype/index.d.ts:2193

___

### gridTemplateRows

• `Optional` **gridTemplateRows**: `GridTemplateRows`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `GridTemplateRows`<`string` \| `number`\>\>[]

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  |            IE            |
| :----: | :-----: | :------: | :----: | :----------------------: |
| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-template-rows

#### Inherited from

Omit.gridTemplateRows

#### Defined in

node_modules/csstype/index.d.ts:2207

___

### hangingPunctuation

• `Optional` **hangingPunctuation**: `string`[] \| `HangingPunctuation`

The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.

**Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   No    | **10** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation

#### Inherited from

Omit.hangingPunctuation

#### Defined in

node_modules/csstype/index.d.ts:2221

___

### height

• `Optional` **height**: `Height`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Height`<`string` \| `number`\>\>[]

The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/height

#### Inherited from

Omit.height

#### Defined in

node_modules/csstype/index.d.ts:2235

___

### hyphenateCharacter

• `Optional` **hyphenateCharacter**: `string`[] \| `HyphenateCharacter`

The **`hyphenate-character`** CSS property sets the character (or string) used at the end of a line before a hyphenation break.

**Syntax**: `auto | <string>`

**Initial value**: `auto`

| Chrome  | Firefox |    Safari     | Edge | IE  |
| :-----: | :-----: | :-----------: | :--: | :-: |
| **106** | **98**  | **5.1** _-x-_ | n/a  | No  |
| 6 _-x-_ |         |               |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/hyphenate-character

#### Inherited from

Omit.hyphenateCharacter

#### Defined in

node_modules/csstype/index.d.ts:2250

___

### hyphenateLimitChars

• `Optional` **hyphenateLimitChars**: `HyphenateLimitChars` \| `NonNullable`<`undefined` \| `HyphenateLimitChars`\>[]

The **`hyphenate-limit-chars`** CSS property specifies the minimum word length to allow hyphenation of words as well as the the minimum number of characters before and after the hyphen.

**Syntax**: `[ auto | <integer> ]{1,3}`

**Initial value**: `auto`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **109** |   No    |   No   | n/a  | No  |

#### Inherited from

Omit.hyphenateLimitChars

#### Defined in

node_modules/csstype/index.d.ts:2262

___

### hyphens

• `Optional` **hyphens**: `Hyphens` \| `NonNullable`<`undefined` \| `Hyphens`\>[]

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

|  Chrome  | Firefox |    Safari     |  Edge  |      IE      |
| :------: | :-----: | :-----------: | :----: | :----------: |
|  **55**  | **43**  | **5.1** _-x-_ | **79** | **10** _-x-_ |
| 13 _-x-_ | 6 _-x-_ |               |        |              |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/hyphens

#### Inherited from

Omit.hyphens

#### Defined in

node_modules/csstype/index.d.ts:2277

___

### imageOrientation

• `Optional` **imageOrientation**: `string`[] \| `ImageOrientation`

The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image.

**Syntax**: `from-image | <angle> | [ <angle>? flip ]`

**Initial value**: `from-image`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **81** | **26**  | **13.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/image-orientation

#### Inherited from

Omit.imageOrientation

#### Defined in

node_modules/csstype/index.d.ts:2291

___

### imageRendering

• `Optional` **imageRendering**: `ImageRendering` \| `NonNullable`<`undefined` \| `ImageRendering`\>[]

The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.

**Syntax**: `auto | crisp-edges | pixelated`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **13** | **3.6** | **6**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/image-rendering

#### Inherited from

Omit.imageRendering

#### Defined in

node_modules/csstype/index.d.ts:2305

___

### imageResolution

• `Optional` **imageResolution**: `string`[] \| `ImageResolution`

**Syntax**: `[ from-image || <resolution> ] && snap?`

**Initial value**: `1dppx`

#### Inherited from

Omit.imageResolution

#### Defined in

node_modules/csstype/index.d.ts:2311

___

### imeMode

• `Optional` **imeMode**: `ImeMode` \| `NonNullable`<`undefined` \| `ImeMode`\>[]

The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.

**Syntax**: `auto | normal | active | inactive | disabled`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.imeMode

#### Defined in

node_modules/csstype/index.d.ts:7958

___

### initialLetter

• `Optional` **initialLetter**: `InitialLetter` \| `NonNullable`<`undefined` \| `InitialLetter`\>[]

The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.

**Syntax**: `normal | [ <number> <integer>? ]`

**Initial value**: `normal`

| Chrome  | Firefox |   Safari    | Edge | IE  |
| :-----: | :-----: | :---------: | :--: | :-: |
| **110** |   No    | **9** _-x-_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/initial-letter

#### Inherited from

Omit.initialLetter

#### Defined in

node_modules/csstype/index.d.ts:2325

___

### inlineSize

• `Optional` **inlineSize**: `InlineSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InlineSize`<`string` \| `number`\>\>[]

The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.

**Syntax**: `<'width'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/inline-size

#### Inherited from

Omit.inlineSize

#### Defined in

node_modules/csstype/index.d.ts:2339

___

### inputSecurity

• `Optional` **inputSecurity**: `InputSecurity` \| `NonNullable`<`undefined` \| `InputSecurity`\>[]

**Syntax**: `auto | none`

**Initial value**: `auto`

#### Inherited from

Omit.inputSecurity

#### Defined in

node_modules/csstype/index.d.ts:2345

___

### inset

• `Optional` **inset**: `Inset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Inset`<`string` \| `number`\>\>[]

The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.

**Syntax**: `<'top'>{1,4}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/inset

#### Inherited from

Omit.inset

#### Defined in

node_modules/csstype/index.d.ts:5487

___

### insetBlock

• `Optional` **insetBlock**: `InsetBlock`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetBlock`<`string` \| `number`\>\>[]

The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **63**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/inset-block

#### Inherited from

Omit.insetBlock

#### Defined in

node_modules/csstype/index.d.ts:5499

___

### insetBlockEnd

• `Optional` **insetBlockEnd**: `InsetBlockEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetBlockEnd`<`string` \| `number`\>\>[]

The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **63**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/inset-block-end

#### Inherited from

Omit.insetBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:2359

___

### insetBlockStart

• `Optional` **insetBlockStart**: `InsetBlockStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetBlockStart`<`string` \| `number`\>\>[]

The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **63**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/inset-block-start

#### Inherited from

Omit.insetBlockStart

#### Defined in

node_modules/csstype/index.d.ts:2373

___

### insetInline

• `Optional` **insetInline**: `InsetInline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetInline`<`string` \| `number`\>\>[]

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **63**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/inset-inline

#### Inherited from

Omit.insetInline

#### Defined in

node_modules/csstype/index.d.ts:5511

___

### insetInlineEnd

• `Optional` **insetInlineEnd**: `InsetInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetInlineEnd`<`string` \| `number`\>\>[]

The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **63**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/inset-inline-end

#### Inherited from

Omit.insetInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:2387

___

### insetInlineStart

• `Optional` **insetInlineStart**: `InsetInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetInlineStart`<`string` \| `number`\>\>[]

The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **63**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/inset-inline-start

#### Inherited from

Omit.insetInlineStart

#### Defined in

node_modules/csstype/index.d.ts:2401

___

### isolation

• `Optional` **isolation**: `Isolation` \| `NonNullable`<`undefined` \| `Isolation`\>[]

The **`isolation`** CSS property determines whether an element must create a new stacking context.

**Syntax**: `auto | isolate`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **41** | **36**  | **8**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/isolation

#### Inherited from

Omit.isolation

#### Defined in

node_modules/csstype/index.d.ts:2415

___

### justifyContent

• `Optional` **justifyContent**: `string`[] \| `JustifyContent`

The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`

**Initial value**: `normal`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **20**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/justify-content

#### Inherited from

Omit.justifyContent

#### Defined in

node_modules/csstype/index.d.ts:2430

___

### justifyItems

• `Optional` **justifyItems**: `string`[] \| `JustifyItems`

The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.

**Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`

**Initial value**: `legacy`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **52** | **20**  | **9**  | **12** | **11** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/justify-items

#### Inherited from

Omit.justifyItems

#### Defined in

node_modules/csstype/index.d.ts:2444

___

### justifySelf

• `Optional` **justifySelf**: `string`[] \| `JustifySelf`

The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |   IE   |
| :----: | :-----: | :------: | :----: | :----: |
| **57** | **45**  | **10.1** | **16** | **10** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/justify-self

#### Inherited from

Omit.justifySelf

#### Defined in

node_modules/csstype/index.d.ts:2458

___

### justifyTracks

• `Optional` **justifyTracks**: `string`[] \| `JustifyTracks`

The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.

**Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/justify-tracks

#### Inherited from

Omit.justifyTracks

#### Defined in

node_modules/csstype/index.d.ts:2472

___

### left

• `Optional` **left**: `Left`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Left`<`string` \| `number`\>\>[]

The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/left

#### Inherited from

Omit.left

#### Defined in

node_modules/csstype/index.d.ts:2486

___

### letterSpacing

• `Optional` **letterSpacing**: `LetterSpacing`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `LetterSpacing`<`string` \| `number`\>\>[]

The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.

**Syntax**: `normal | <length>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/letter-spacing

#### Inherited from

Omit.letterSpacing

#### Defined in

node_modules/csstype/index.d.ts:2500

___

### lightingColor

• `Optional` **lightingColor**: `string`[] \| `LightingColor`

#### Inherited from

Omit.lightingColor

#### Defined in

node_modules/csstype/index.d.ts:8865

___

### lineBreak

• `Optional` **lineBreak**: `LineBreak` \| `NonNullable`<`undefined` \| `LineBreak`\>[]

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE    |
| :-----: | :-----: | :-----: | :----: | :-----: |
| **58**  | **69**  | **11**  | **14** | **5.5** |
| 1 _-x-_ |         | 3 _-x-_ |        |         |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/line-break

#### Inherited from

Omit.lineBreak

#### Defined in

node_modules/csstype/index.d.ts:2515

___

### lineClamp

• `Optional` **lineClamp**: `LineClamp` \| `NonNullable`<`undefined` \| `LineClamp`\>[]

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

Omit.lineClamp

#### Defined in

node_modules/csstype/index.d.ts:5517

___

### lineHeight

• `Optional` **lineHeight**: `LineHeight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `LineHeight`<`string` \| `number`\>\>[]

The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.

**Syntax**: `normal | <number> | <length> | <percentage>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/line-height

#### Inherited from

Omit.lineHeight

#### Defined in

node_modules/csstype/index.d.ts:2529

___

### lineHeightStep

• `Optional` **lineHeightStep**: `LineHeightStep`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `LineHeightStep`<`string` \| `number`\>\>[]

The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |   No    |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/line-height-step

#### Inherited from

Omit.lineHeightStep

#### Defined in

node_modules/csstype/index.d.ts:2543

___

### listStyle

• `Optional` **listStyle**: `string`[] \| `ListStyle`

The **`list-style`** CSS shorthand property allows you to set all the list style properties at once.

**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/list-style

#### Inherited from

Omit.listStyle

#### Defined in

node_modules/csstype/index.d.ts:5529

___

### listStyleImage

• `Optional` **listStyleImage**: `string`[] \| `ListStyleImage`

The **`list-style-image`** CSS property sets an image to be used as the list item marker.

**Syntax**: `<image> | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/list-style-image

#### Inherited from

Omit.listStyleImage

#### Defined in

node_modules/csstype/index.d.ts:2557

___

### listStylePosition

• `Optional` **listStylePosition**: `ListStylePosition` \| `NonNullable`<`undefined` \| `ListStylePosition`\>[]

The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.

**Syntax**: `inside | outside`

**Initial value**: `outside`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/list-style-position

#### Inherited from

Omit.listStylePosition

#### Defined in

node_modules/csstype/index.d.ts:2571

___

### listStyleType

• `Optional` **listStyleType**: `string`[] \| `ListStyleType`

The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.

**Syntax**: `<counter-style> | <string> | none`

**Initial value**: `disc`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/list-style-type

#### Inherited from

Omit.listStyleType

#### Defined in

node_modules/csstype/index.d.ts:2585

___

### m

• `Optional` **m**: `Margin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Margin`<`string` \| `number`\>\>[]

The **`margin`** CSS property sets the margin on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[m](AliasesCSSProperties.md#m)

#### Defined in

[src/styleTypes.ts:38](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L38)

___

### margin

• `Optional` **margin**: `Margin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Margin`<`string` \| `number`\>\>[]

The **`margin`** CSS shorthand property sets the margin area on all four sides of an element.

**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin

#### Inherited from

Omit.margin

#### Defined in

node_modules/csstype/index.d.ts:5541

___

### marginBlock

• `Optional` **marginBlock**: `MarginBlock`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginBlock`<`string` \| `number`\>\>[]

The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-block

#### Inherited from

Omit.marginBlock

#### Defined in

node_modules/csstype/index.d.ts:5553

___

### marginBlockEnd

• `Optional` **marginBlockEnd**: `MarginBlockEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginBlockEnd`<`string` \| `number`\>\>[]

The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-block-end

#### Inherited from

Omit.marginBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:2599

___

### marginBlockStart

• `Optional` **marginBlockStart**: `MarginBlockStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginBlockStart`<`string` \| `number`\>\>[]

The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-block-start

#### Inherited from

Omit.marginBlockStart

#### Defined in

node_modules/csstype/index.d.ts:2613

___

### marginBottom

• `Optional` **marginBottom**: `MarginBottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginBottom`<`string` \| `number`\>\>[]

The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-bottom

#### Inherited from

Omit.marginBottom

#### Defined in

node_modules/csstype/index.d.ts:2627

___

### marginInline

• `Optional` **marginInline**: `MarginInline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginInline`<`string` \| `number`\>\>[]

The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-inline

#### Inherited from

Omit.marginInline

#### Defined in

node_modules/csstype/index.d.ts:5565

___

### marginInlineEnd

• `Optional` **marginInlineEnd**: `MarginInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginInlineEnd`<`string` \| `number`\>\>[]

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

|          Chrome          |        Firefox        |          Safari          | Edge | IE  |
| :----------------------: | :-------------------: | :----------------------: | :--: | :-: |
|          **87**          |        **41**         |         **12.1**         | n/a  | No  |
| 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-inline-end

#### Inherited from

Omit.marginInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:2642

___

### marginInlineStart

• `Optional` **marginInlineStart**: `MarginInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginInlineStart`<`string` \| `number`\>\>[]

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

|           Chrome           |         Firefox         |           Safari           | Edge | IE  |
| :------------------------: | :---------------------: | :------------------------: | :--: | :-: |
|           **87**           |         **41**          |          **12.1**          | n/a  | No  |
| 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-inline-start

#### Inherited from

Omit.marginInlineStart

#### Defined in

node_modules/csstype/index.d.ts:2657

___

### marginLeft

• `Optional` **marginLeft**: `MarginLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginLeft`<`string` \| `number`\>\>[]

The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-left

#### Inherited from

Omit.marginLeft

#### Defined in

node_modules/csstype/index.d.ts:2671

___

### marginRight

• `Optional` **marginRight**: `MarginRight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginRight`<`string` \| `number`\>\>[]

The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-right

#### Inherited from

Omit.marginRight

#### Defined in

node_modules/csstype/index.d.ts:2685

___

### marginTop

• `Optional` **marginTop**: `MarginTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginTop`<`string` \| `number`\>\>[]

The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-top

#### Inherited from

Omit.marginTop

#### Defined in

node_modules/csstype/index.d.ts:2699

___

### marginTrim

• `Optional` **marginTrim**: `MarginTrim` \| `NonNullable`<`undefined` \| `MarginTrim`\>[]

The `margin-trim` property allows the container to trim the margins of its children where they adjoin the container's edges.

**Syntax**: `none | in-flow | all`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   |   No    | **16.4** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-trim

#### Inherited from

Omit.marginTrim

#### Defined in

node_modules/csstype/index.d.ts:2713

___

### marginX

• `Optional` **marginX**: `MarginLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginLeft`<`string` \| `number`\>\>[]

The **`marginX`** property is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin on the left and right side of an element. A positive value
places it farther from its neighbors, while a negative value places it closer.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/margin-left
 - https://developer.mozilla.org/docs/Web/CSS/margin-right

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[marginX](AliasesCSSProperties.md#marginx)

#### Defined in

[src/styleTypes.ts:114](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L114)

___

### marginY

• `Optional` **marginY**: `MarginTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginTop`<`string` \| `number`\>\>[]

The **`marginY`** property is shorthand for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin on the top and bottom of an element. A positive value places
it farther from its neighbors, while a negative value places it closer.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/margin-top
 - https://developer.mozilla.org/docs/Web/CSS/margin-bottom

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[marginY](AliasesCSSProperties.md#marginy)

#### Defined in

[src/styleTypes.ts:142](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L142)

___

### marker

• `Optional` **marker**: `string`[] \| `Marker`

#### Inherited from

Omit.marker

#### Defined in

node_modules/csstype/index.d.ts:8867

___

### markerEnd

• `Optional` **markerEnd**: `string`[] \| `MarkerEnd`

#### Inherited from

Omit.markerEnd

#### Defined in

node_modules/csstype/index.d.ts:8868

___

### markerMid

• `Optional` **markerMid**: `string`[] \| `MarkerMid`

#### Inherited from

Omit.markerMid

#### Defined in

node_modules/csstype/index.d.ts:8869

___

### markerStart

• `Optional` **markerStart**: `string`[] \| `MarkerStart`

#### Inherited from

Omit.markerStart

#### Defined in

node_modules/csstype/index.d.ts:8870

___

### mask

• `Optional` **mask**: `Mask`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Mask`<`string` \| `number`\>\>[]

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `<mask-layer>#`

| Chrome | Firefox | Safari  | Edge  | IE  |
| :----: | :-----: | :-----: | :---: | :-: |
| **1**  |  **2**  | **3.1** | 12-79 | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask

#### Inherited from

Omit.mask

#### Defined in

node_modules/csstype/index.d.ts:5577

___

### maskBorder

• `Optional` **maskBorder**: `MaskBorder` \| `NonNullable`<`undefined` \| `MaskBorder`\>[]

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

|              Chrome              | Firefox |               Safari               | Edge | IE  |
| :------------------------------: | :-----: | :--------------------------------: | :--: | :-: |
| **1** _(-webkit-mask-box-image)_ |   No    | **3.1** _(-webkit-mask-box-image)_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-border

#### Inherited from

Omit.maskBorder

#### Defined in

node_modules/csstype/index.d.ts:5589

___

### maskBorderMode

• `Optional` **maskBorderMode**: `MaskBorderMode` \| `NonNullable`<`undefined` \| `MaskBorderMode`\>[]

The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.

**Syntax**: `luminance | alpha`

**Initial value**: `alpha`

#### Inherited from

Omit.maskBorderMode

#### Defined in

node_modules/csstype/index.d.ts:2721

___

### maskBorderOutset

• `Optional` **maskBorderOutset**: `MaskBorderOutset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaskBorderOutset`<`string` \| `number`\>\>[]

The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

|                 Chrome                  | Firefox |                  Safari                   | Edge | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--: | :-: |
| **1** _(-webkit-mask-box-image-outset)_ |   No    | **3.1** _(-webkit-mask-box-image-outset)_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-border-outset

#### Inherited from

Omit.maskBorderOutset

#### Defined in

node_modules/csstype/index.d.ts:2735

___

### maskBorderRepeat

• `Optional` **maskBorderRepeat**: `string`[] \| `MaskBorderRepeat`

The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

|                 Chrome                  | Firefox |                  Safari                   | Edge | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--: | :-: |
| **1** _(-webkit-mask-box-image-repeat)_ |   No    | **3.1** _(-webkit-mask-box-image-repeat)_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat

#### Inherited from

Omit.maskBorderRepeat

#### Defined in

node_modules/csstype/index.d.ts:2749

___

### maskBorderSlice

• `Optional` **maskBorderSlice**: `MaskBorderSlice` \| `NonNullable`<`undefined` \| `MaskBorderSlice`\>[]

The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.

**Syntax**: `<number-percentage>{1,4} fill?`

**Initial value**: `0`

|                 Chrome                 | Firefox |                  Safari                  | Edge | IE  |
| :------------------------------------: | :-----: | :--------------------------------------: | :--: | :-: |
| **1** _(-webkit-mask-box-image-slice)_ |   No    | **3.1** _(-webkit-mask-box-image-slice)_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-border-slice

#### Inherited from

Omit.maskBorderSlice

#### Defined in

node_modules/csstype/index.d.ts:2763

___

### maskBorderSource

• `Optional` **maskBorderSource**: `string`[] \| `MaskBorderSource`

The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.

**Syntax**: `none | <image>`

**Initial value**: `none`

|                 Chrome                  | Firefox |                  Safari                   | Edge | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--: | :-: |
| **1** _(-webkit-mask-box-image-source)_ |   No    | **3.1** _(-webkit-mask-box-image-source)_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-border-source

#### Inherited from

Omit.maskBorderSource

#### Defined in

node_modules/csstype/index.d.ts:2777

___

### maskBorderWidth

• `Optional` **maskBorderWidth**: `MaskBorderWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaskBorderWidth`<`string` \| `number`\>\>[]

The **`mask-border-width`** CSS property sets the width of an element's mask border.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `auto`

|                 Chrome                 | Firefox |                  Safari                  | Edge | IE  |
| :------------------------------------: | :-----: | :--------------------------------------: | :--: | :-: |
| **1** _(-webkit-mask-box-image-width)_ |   No    | **3.1** _(-webkit-mask-box-image-width)_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-border-width

#### Inherited from

Omit.maskBorderWidth

#### Defined in

node_modules/csstype/index.d.ts:2791

___

### maskClip

• `Optional` **maskClip**: `string`[] \| `MaskClip`

The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: `[ <geometry-box> | no-clip ]#`

**Initial value**: `border-box`

|   Chrome    | Firefox |  Safari  | Edge | IE  |
| :---------: | :-----: | :------: | :--: | :-: |
| **1** _-x-_ | **53**  | **15.4** | n/a  | No  |
|             |         | 4 _-x-_  |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-clip

#### Inherited from

Omit.maskClip

#### Defined in

node_modules/csstype/index.d.ts:2806

___

### maskComposite

• `Optional` **maskComposite**: `string`[] \| `MaskComposite`

The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.

**Syntax**: `<compositing-operator>#`

**Initial value**: `add`

| Chrome | Firefox |  Safari  | Edge  | IE  |
| :----: | :-----: | :------: | :---: | :-: |
|   No   | **53**  | **15.4** | 18-79 | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-composite

#### Inherited from

Omit.maskComposite

#### Defined in

node_modules/csstype/index.d.ts:2820

___

### maskImage

• `Optional` **maskImage**: `string`[] \| `MaskImage`

The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` property.

**Syntax**: `<mask-reference>#`

**Initial value**: `none`

|   Chrome    | Firefox |  Safari  | Edge  | IE  |
| :---------: | :-----: | :------: | :---: | :-: |
| **1** _-x-_ | **53**  | **15.4** | 16-79 | No  |
|             |         | 4 _-x-_  |       |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-image

#### Inherited from

Omit.maskImage

#### Defined in

node_modules/csstype/index.d.ts:2835

___

### maskMode

• `Optional` **maskMode**: `string`[] \| `MaskMode`

The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.

**Syntax**: `<masking-mode>#`

**Initial value**: `match-source`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **53**  | **15.4** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-mode

#### Inherited from

Omit.maskMode

#### Defined in

node_modules/csstype/index.d.ts:2849

___

### maskOrigin

• `Optional` **maskOrigin**: `string`[] \| `MaskOrigin`

The **`mask-origin`** CSS property sets the origin of a mask.

**Syntax**: `<geometry-box>#`

**Initial value**: `border-box`

|   Chrome    | Firefox |  Safari  | Edge | IE  |
| :---------: | :-----: | :------: | :--: | :-: |
| **1** _-x-_ | **53**  | **15.4** | n/a  | No  |
|             |         | 4 _-x-_  |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-origin

#### Inherited from

Omit.maskOrigin

#### Defined in

node_modules/csstype/index.d.ts:2864

___

### maskPosition

• `Optional` **maskPosition**: `MaskPosition`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaskPosition`<`string` \| `number`\>\>[]

The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.

**Syntax**: `<position>#`

**Initial value**: `center`

|   Chrome    | Firefox |  Safari   | Edge  | IE  |
| :---------: | :-----: | :-------: | :---: | :-: |
| **1** _-x-_ | **53**  | **15.4**  | 18-79 | No  |
|             |         | 3.1 _-x-_ |       |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-position

#### Inherited from

Omit.maskPosition

#### Defined in

node_modules/csstype/index.d.ts:2879

___

### maskRepeat

• `Optional` **maskRepeat**: `string`[] \| `MaskRepeat`

The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

|   Chrome    | Firefox |  Safari   | Edge  | IE  |
| :---------: | :-----: | :-------: | :---: | :-: |
| **1** _-x-_ | **53**  | **15.4**  | 18-79 | No  |
|             |         | 3.1 _-x-_ |       |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-repeat

#### Inherited from

Omit.maskRepeat

#### Defined in

node_modules/csstype/index.d.ts:2894

___

### maskSize

• `Optional` **maskSize**: `MaskSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaskSize`<`string` \| `number`\>\>[]

The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: `<bg-size>#`

**Initial value**: `auto`

|   Chrome    | Firefox |  Safari  | Edge  | IE  |
| :---------: | :-----: | :------: | :---: | :-: |
| **4** _-x-_ | **53**  | **15.4** | 18-79 | No  |
|             |         | 4 _-x-_  |       |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-size

#### Inherited from

Omit.maskSize

#### Defined in

node_modules/csstype/index.d.ts:2909

___

### maskType

• `Optional` **maskType**: `MaskType` \| `NonNullable`<`undefined` \| `MaskType`\>[]

The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.

**Syntax**: `luminance | alpha`

**Initial value**: `luminance`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **24** | **35**  | **7**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-type

#### Inherited from

Omit.maskType

#### Defined in

node_modules/csstype/index.d.ts:2923

___

### mathDepth

• `Optional` **mathDepth**: `MathDepth` \| `NonNullable`<`undefined` \| `MathDepth`\>[]

The **`math-depth`** property describes a notion of _depth_ for each element of a mathematical formula, with respect to the top-level container of that formula. Concretely, this is used to determine the computed value of the font-size property when its specified value is `math`.

**Syntax**: `auto-add | add(<integer>) | <integer>`

**Initial value**: `0`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **109** |   n/a   |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/math-depth

#### Inherited from

Omit.mathDepth

#### Defined in

node_modules/csstype/index.d.ts:2937

___

### mathShift

• `Optional` **mathShift**: `MathShift` \| `NonNullable`<`undefined` \| `MathShift`\>[]

The `math-shift` property indicates whether superscripts inside MathML formulas should be raised by a normal or compact shift.

**Syntax**: `normal | compact`

**Initial value**: `normal`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **109** |   No    |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/math-shift

#### Inherited from

Omit.mathShift

#### Defined in

node_modules/csstype/index.d.ts:2951

___

### mathStyle

• `Optional` **mathStyle**: `MathStyle` \| `NonNullable`<`undefined` \| `MathStyle`\>[]

The `math-style` property indicates whether MathML equations should render with normal or compact height.

**Syntax**: `normal | compact`

**Initial value**: `normal`

| Chrome  | Firefox |  Safari  | Edge | IE  |
| :-----: | :-----: | :------: | :--: | :-: |
| **109** |   n/a   | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/math-style

#### Inherited from

Omit.mathStyle

#### Defined in

node_modules/csstype/index.d.ts:2965

___

### maxBlockSize

• `Optional` **maxBlockSize**: `MaxBlockSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaxBlockSize`<`string` \| `number`\>\>[]

The **`max-block-size`** CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.

**Syntax**: `<'max-width'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/max-block-size

#### Inherited from

Omit.maxBlockSize

#### Defined in

node_modules/csstype/index.d.ts:2979

___

### maxHeight

• `Optional` **maxHeight**: `MaxHeight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaxHeight`<`string` \| `number`\>\>[]

The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.

**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **18** |  **1**  | **1.3** | **12** | **7** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/max-height

#### Inherited from

Omit.maxHeight

#### Defined in

node_modules/csstype/index.d.ts:2993

___

### maxInlineSize

• `Optional` **maxInlineSize**: `MaxInlineSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaxInlineSize`<`string` \| `number`\>\>[]

The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'max-width'>`

**Initial value**: `none`

| Chrome | Firefox |   Safari   | Edge | IE  |
| :----: | :-----: | :--------: | :--: | :-: |
| **57** | **41**  |  **12.1**  | n/a  | No  |
|        |         | 10.1 _-x-_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/max-inline-size

#### Inherited from

Omit.maxInlineSize

#### Defined in

node_modules/csstype/index.d.ts:3008

___

### maxLines

• `Optional` **maxLines**: `MaxLines` \| `NonNullable`<`undefined` \| `MaxLines`\>[]

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

Omit.maxLines

#### Defined in

node_modules/csstype/index.d.ts:3014

___

### maxWidth

• `Optional` **maxWidth**: `MaxWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MaxWidth`<`string` \| `number`\>\>[]

The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.

**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **7** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/max-width

#### Inherited from

Omit.maxWidth

#### Defined in

node_modules/csstype/index.d.ts:3028

___

### mb

• `Optional` **mb**: `MarginBottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginBottom`<`string` \| `number`\>\>[]

The **`margin-bottom`** CSS property sets the margin on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-bottom

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[mb](AliasesCSSProperties.md#mb)

#### Defined in

[src/styleTypes.ts:74](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L74)

___

### minBlockSize

• `Optional` **minBlockSize**: `MinBlockSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MinBlockSize`<`string` \| `number`\>\>[]

The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'min-width'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/min-block-size

#### Inherited from

Omit.minBlockSize

#### Defined in

node_modules/csstype/index.d.ts:3042

___

### minHeight

• `Optional` **minHeight**: `MinHeight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MinHeight`<`string` \| `number`\>\>[]

The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **3**  | **1.3** | **12** | **7** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/min-height

#### Inherited from

Omit.minHeight

#### Defined in

node_modules/csstype/index.d.ts:3056

___

### minInlineSize

• `Optional` **minInlineSize**: `MinInlineSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MinInlineSize`<`string` \| `number`\>\>[]

The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'min-width'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/min-inline-size

#### Inherited from

Omit.minInlineSize

#### Defined in

node_modules/csstype/index.d.ts:3070

___

### minWidth

• `Optional` **minWidth**: `MinWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MinWidth`<`string` \| `number`\>\>[]

The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **7** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/min-width

#### Inherited from

Omit.minWidth

#### Defined in

node_modules/csstype/index.d.ts:3084

___

### mixBlendMode

• `Optional` **mixBlendMode**: `MixBlendMode` \| `NonNullable`<`undefined` \| `MixBlendMode`\>[]

The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.

**Syntax**: `<blend-mode> | plus-lighter`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **41** | **32**  | **8**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode

#### Inherited from

Omit.mixBlendMode

#### Defined in

node_modules/csstype/index.d.ts:3098

___

### ml

• `Optional` **ml**: `MarginLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginLeft`<`string` \| `number`\>\>[]

The **`margin-left`** CSS property sets the margin on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-left

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[ml](AliasesCSSProperties.md#ml)

#### Defined in

[src/styleTypes.ts:86](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L86)

___

### motion

• `Optional` **motion**: `Offset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Offset`<`string` \| `number`\>\>[]

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari | Edge | IE  |
| :-----------: | :-----: | :----: | :--: | :-: |
|    **55**     | **72**  | **16** | n/a  | No  |
| 46 _(motion)_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset

#### Inherited from

Omit.motion

#### Defined in

node_modules/csstype/index.d.ts:5602

___

### motionDistance

• `Optional` **motionDistance**: `OffsetDistance`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `OffsetDistance`<`string` \| `number`\>\>[]

The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

|         Chrome         | Firefox |   Safari    | Edge | IE  |
| :--------------------: | :-----: | :---------: | :--: | :-: |
|         **55**         | **72**  | **preview** | n/a  | No  |
| 46 _(motion-distance)_ |         |             |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-distance

#### Inherited from

Omit.motionDistance

#### Defined in

node_modules/csstype/index.d.ts:3113

___

### motionPath

• `Optional` **motionPath**: `string`[] \| `OffsetPath`

The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`

**Initial value**: `none`

|       Chrome       | Firefox |  Safari  | Edge | IE  |
| :----------------: | :-----: | :------: | :--: | :-: |
|       **55**       | **72**  | **15.4** | n/a  | No  |
| 46 _(motion-path)_ |         |          |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-path

#### Inherited from

Omit.motionPath

#### Defined in

node_modules/csstype/index.d.ts:3128

___

### motionRotation

• `Optional` **motionRotation**: `string`[] \| `OffsetRotate`

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox |   Safari    | Edge | IE  |
| :--------------------: | :-----: | :---------: | :--: | :-: |
|         **56**         | **72**  | **preview** | n/a  | No  |
| 46 _(motion-rotation)_ |         |             |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

Omit.motionRotation

#### Defined in

node_modules/csstype/index.d.ts:3143

___

### mr

• `Optional` **mr**: `MarginRight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginRight`<`string` \| `number`\>\>[]

The **`margin-right`** CSS property sets the margin on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-right

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[mr](AliasesCSSProperties.md#mr)

#### Defined in

[src/styleTypes.ts:62](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L62)

___

### msAccelerator

• `Optional` **msAccelerator**: `MsAccelerator` \| `NonNullable`<`undefined` \| `MsAccelerator`\>[]

The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.

**Syntax**: `false | true`

**Initial value**: `false`

#### Inherited from

Omit.msAccelerator

#### Defined in

node_modules/csstype/index.d.ts:6318

___

### msBlockProgression

• `Optional` **msBlockProgression**: `MsBlockProgression` \| `NonNullable`<`undefined` \| `MsBlockProgression`\>[]

The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.

**Syntax**: `tb | rl | bt | lr`

**Initial value**: `tb`

#### Inherited from

Omit.msBlockProgression

#### Defined in

node_modules/csstype/index.d.ts:6326

___

### msContentZoomChaining

• `Optional` **msContentZoomChaining**: `MsContentZoomChaining` \| `NonNullable`<`undefined` \| `MsContentZoomChaining`\>[]

The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.

**Syntax**: `none | chained`

**Initial value**: `none`

#### Inherited from

Omit.msContentZoomChaining

#### Defined in

node_modules/csstype/index.d.ts:6334

___

### msContentZoomLimit

• `Optional` **msContentZoomLimit**: `string`[] \| `MsContentZoomLimit`

The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.

**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`

#### Inherited from

Omit.msContentZoomLimit

#### Defined in

node_modules/csstype/index.d.ts:7701

___

### msContentZoomLimitMax

• `Optional` **msContentZoomLimitMax**: `string`[] \| `MsContentZoomLimitMax`

The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `400%`

#### Inherited from

Omit.msContentZoomLimitMax

#### Defined in

node_modules/csstype/index.d.ts:6342

___

### msContentZoomLimitMin

• `Optional` **msContentZoomLimitMin**: `string`[] \| `MsContentZoomLimitMin`

The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `100%`

#### Inherited from

Omit.msContentZoomLimitMin

#### Defined in

node_modules/csstype/index.d.ts:6350

___

### msContentZoomSnap

• `Optional` **msContentZoomSnap**: `string`[] \| `MsContentZoomSnap`

The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.

**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`

#### Inherited from

Omit.msContentZoomSnap

#### Defined in

node_modules/csstype/index.d.ts:7707

___

### msContentZoomSnapPoints

• `Optional` **msContentZoomSnapPoints**: `string`[] \| `MsContentZoomSnapPoints`

The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.

**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`

**Initial value**: `snapInterval(0%, 100%)`

#### Inherited from

Omit.msContentZoomSnapPoints

#### Defined in

node_modules/csstype/index.d.ts:6358

___

### msContentZoomSnapType

• `Optional` **msContentZoomSnapType**: `MsContentZoomSnapType` \| `NonNullable`<`undefined` \| `MsContentZoomSnapType`\>[]

The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

Omit.msContentZoomSnapType

#### Defined in

node_modules/csstype/index.d.ts:6366

___

### msContentZooming

• `Optional` **msContentZooming**: `MsContentZooming` \| `NonNullable`<`undefined` \| `MsContentZooming`\>[]

The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.

**Syntax**: `none | zoom`

**Initial value**: zoom for the top level element, none for all other elements

#### Inherited from

Omit.msContentZooming

#### Defined in

node_modules/csstype/index.d.ts:6374

___

### msFilter

• `Optional` **msFilter**: `string`[] \| `MsFilter`

The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.

**Syntax**: `<string>`

**Initial value**: "" (the empty string)

#### Inherited from

Omit.msFilter

#### Defined in

node_modules/csstype/index.d.ts:6382

___

### msFlex

• `Optional` **msFlex**: `Flex`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Flex`<`string` \| `number`\>\>[]

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

Omit.msFlex

#### Defined in

node_modules/csstype/index.d.ts:7713

___

### msFlexDirection

• `Optional` **msFlexDirection**: `FlexDirection` \| `NonNullable`<`undefined` \| `FlexDirection`\>[]

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

Omit.msFlexDirection

#### Defined in

node_modules/csstype/index.d.ts:6390

___

### msFlexPositive

• `Optional` **msFlexPositive**: `FlexGrow` \| `NonNullable`<`undefined` \| `FlexGrow`\>[]

The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

Omit.msFlexPositive

#### Defined in

node_modules/csstype/index.d.ts:6398

___

### msFlowFrom

• `Optional` **msFlowFrom**: `string`[] \| `MsFlowFrom`

The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

Omit.msFlowFrom

#### Defined in

node_modules/csstype/index.d.ts:6406

___

### msFlowInto

• `Optional` **msFlowInto**: `string`[] \| `MsFlowInto`

The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

Omit.msFlowInto

#### Defined in

node_modules/csstype/index.d.ts:6414

___

### msGridColumns

• `Optional` **msGridColumns**: `MsGridColumns`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MsGridColumns`<`string` \| `number`\>\>[]

The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

Omit.msGridColumns

#### Defined in

node_modules/csstype/index.d.ts:6422

___

### msGridRows

• `Optional` **msGridRows**: `MsGridRows`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MsGridRows`<`string` \| `number`\>\>[]

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

Omit.msGridRows

#### Defined in

node_modules/csstype/index.d.ts:6430

___

### msHighContrastAdjust

• `Optional` **msHighContrastAdjust**: `MsHighContrastAdjust` \| `NonNullable`<`undefined` \| `MsHighContrastAdjust`\>[]

The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.

**Syntax**: `auto | none`

**Initial value**: `auto`

#### Inherited from

Omit.msHighContrastAdjust

#### Defined in

node_modules/csstype/index.d.ts:6438

___

### msHyphenateLimitChars

• `Optional` **msHyphenateLimitChars**: `MsHyphenateLimitChars` \| `NonNullable`<`undefined` \| `MsHyphenateLimitChars`\>[]

The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.

**Syntax**: `auto | <integer>{1,3}`

**Initial value**: `auto`

#### Inherited from

Omit.msHyphenateLimitChars

#### Defined in

node_modules/csstype/index.d.ts:6446

___

### msHyphenateLimitLines

• `Optional` **msHyphenateLimitLines**: `MsHyphenateLimitLines` \| `NonNullable`<`undefined` \| `MsHyphenateLimitLines`\>[]

The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.

**Syntax**: `no-limit | <integer>`

**Initial value**: `no-limit`

#### Inherited from

Omit.msHyphenateLimitLines

#### Defined in

node_modules/csstype/index.d.ts:6454

___

### msHyphenateLimitZone

• `Optional` **msHyphenateLimitZone**: `MsHyphenateLimitZone`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MsHyphenateLimitZone`<`string` \| `number`\>\>[]

The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.

**Syntax**: `<percentage> | <length>`

**Initial value**: `0`

#### Inherited from

Omit.msHyphenateLimitZone

#### Defined in

node_modules/csstype/index.d.ts:6462

___

### msHyphens

• `Optional` **msHyphens**: `Hyphens` \| `NonNullable`<`undefined` \| `Hyphens`\>[]

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

Omit.msHyphens

#### Defined in

node_modules/csstype/index.d.ts:6470

___

### msImeAlign

• `Optional` **msImeAlign**: `MsImeAlign` \| `NonNullable`<`undefined` \| `MsImeAlign`\>[]

The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.

**Syntax**: `auto | after`

**Initial value**: `auto`

#### Inherited from

Omit.msImeAlign

#### Defined in

node_modules/csstype/index.d.ts:6478

___

### msImeMode

• `Optional` **msImeMode**: `ImeMode` \| `NonNullable`<`undefined` \| `ImeMode`\>[]

The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.

**Syntax**: `auto | normal | active | inactive | disabled`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.msImeMode

#### Defined in

node_modules/csstype/index.d.ts:8518

___

### msLineBreak

• `Optional` **msLineBreak**: `LineBreak` \| `NonNullable`<`undefined` \| `LineBreak`\>[]

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

Omit.msLineBreak

#### Defined in

node_modules/csstype/index.d.ts:6486

___

### msOrder

• `Optional` **msOrder**: `Order` \| `NonNullable`<`undefined` \| `Order`\>[]

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

Omit.msOrder

#### Defined in

node_modules/csstype/index.d.ts:6494

___

### msOverflowStyle

• `Optional` **msOverflowStyle**: `MsOverflowStyle` \| `NonNullable`<`undefined` \| `MsOverflowStyle`\>[]

The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.

**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`

**Initial value**: `auto`

#### Inherited from

Omit.msOverflowStyle

#### Defined in

node_modules/csstype/index.d.ts:6502

___

### msOverflowX

• `Optional` **msOverflowX**: `OverflowX` \| `NonNullable`<`undefined` \| `OverflowX`\>[]

The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

Omit.msOverflowX

#### Defined in

node_modules/csstype/index.d.ts:6510

___

### msOverflowY

• `Optional` **msOverflowY**: `OverflowY` \| `NonNullable`<`undefined` \| `OverflowY`\>[]

The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

Omit.msOverflowY

#### Defined in

node_modules/csstype/index.d.ts:6518

___

### msScrollChaining

• `Optional` **msScrollChaining**: `MsScrollChaining` \| `NonNullable`<`undefined` \| `MsScrollChaining`\>[]

The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.

**Syntax**: `chained | none`

**Initial value**: `chained`

#### Inherited from

Omit.msScrollChaining

#### Defined in

node_modules/csstype/index.d.ts:6526

___

### msScrollLimit

• `Optional` **msScrollLimit**: `string`[] \| `MsScrollLimit`

The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.

**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`

#### Inherited from

Omit.msScrollLimit

#### Defined in

node_modules/csstype/index.d.ts:7719

___

### msScrollLimitXMax

• `Optional` **msScrollLimitXMax**: `MsScrollLimitXMax`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MsScrollLimitXMax`<`string` \| `number`\>\>[]

The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

Omit.msScrollLimitXMax

#### Defined in

node_modules/csstype/index.d.ts:6534

___

### msScrollLimitXMin

• `Optional` **msScrollLimitXMin**: `MsScrollLimitXMin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MsScrollLimitXMin`<`string` \| `number`\>\>[]

The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

Omit.msScrollLimitXMin

#### Defined in

node_modules/csstype/index.d.ts:6542

___

### msScrollLimitYMax

• `Optional` **msScrollLimitYMax**: `MsScrollLimitYMax`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MsScrollLimitYMax`<`string` \| `number`\>\>[]

The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

Omit.msScrollLimitYMax

#### Defined in

node_modules/csstype/index.d.ts:6550

___

### msScrollLimitYMin

• `Optional` **msScrollLimitYMin**: `MsScrollLimitYMin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MsScrollLimitYMin`<`string` \| `number`\>\>[]

The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

Omit.msScrollLimitYMin

#### Defined in

node_modules/csstype/index.d.ts:6558

___

### msScrollRails

• `Optional` **msScrollRails**: `MsScrollRails` \| `NonNullable`<`undefined` \| `MsScrollRails`\>[]

The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.

**Syntax**: `none | railed`

**Initial value**: `railed`

#### Inherited from

Omit.msScrollRails

#### Defined in

node_modules/csstype/index.d.ts:6566

___

### msScrollSnapPointsX

• `Optional` **msScrollSnapPointsX**: `string`[] \| `MsScrollSnapPointsX`

The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

Omit.msScrollSnapPointsX

#### Defined in

node_modules/csstype/index.d.ts:6574

___

### msScrollSnapPointsY

• `Optional` **msScrollSnapPointsY**: `string`[] \| `MsScrollSnapPointsY`

The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

Omit.msScrollSnapPointsY

#### Defined in

node_modules/csstype/index.d.ts:6582

___

### msScrollSnapType

• `Optional` **msScrollSnapType**: `MsScrollSnapType` \| `NonNullable`<`undefined` \| `MsScrollSnapType`\>[]

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

Omit.msScrollSnapType

#### Defined in

node_modules/csstype/index.d.ts:6590

___

### msScrollSnapX

• `Optional` **msScrollSnapX**: `string`[] \| `MsScrollSnapX`

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`

#### Inherited from

Omit.msScrollSnapX

#### Defined in

node_modules/csstype/index.d.ts:7725

___

### msScrollSnapY

• `Optional` **msScrollSnapY**: `string`[] \| `MsScrollSnapY`

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`

#### Inherited from

Omit.msScrollSnapY

#### Defined in

node_modules/csstype/index.d.ts:7731

___

### msScrollTranslation

• `Optional` **msScrollTranslation**: `MsScrollTranslation` \| `NonNullable`<`undefined` \| `MsScrollTranslation`\>[]

The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.

**Syntax**: `none | vertical-to-horizontal`

**Initial value**: `none`

#### Inherited from

Omit.msScrollTranslation

#### Defined in

node_modules/csstype/index.d.ts:6598

___

### msScrollbar3dlightColor

• `Optional` **msScrollbar3dlightColor**: `string`[] \| `MsScrollbar3dlightColor`

The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

Omit.msScrollbar3dlightColor

#### Defined in

node_modules/csstype/index.d.ts:6606

___

### msScrollbarArrowColor

• `Optional` **msScrollbarArrowColor**: `string`[] \| `MsScrollbarArrowColor`

The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.

**Syntax**: `<color>`

**Initial value**: `ButtonText`

#### Inherited from

Omit.msScrollbarArrowColor

#### Defined in

node_modules/csstype/index.d.ts:6614

___

### msScrollbarBaseColor

• `Optional` **msScrollbarBaseColor**: `string`[] \| `MsScrollbarBaseColor`

The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

Omit.msScrollbarBaseColor

#### Defined in

node_modules/csstype/index.d.ts:6622

___

### msScrollbarDarkshadowColor

• `Optional` **msScrollbarDarkshadowColor**: `string`[] \| `MsScrollbarDarkshadowColor`

The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

Omit.msScrollbarDarkshadowColor

#### Defined in

node_modules/csstype/index.d.ts:6630

___

### msScrollbarFaceColor

• `Optional` **msScrollbarFaceColor**: `string`[] \| `MsScrollbarFaceColor`

The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDFace`

#### Inherited from

Omit.msScrollbarFaceColor

#### Defined in

node_modules/csstype/index.d.ts:6638

___

### msScrollbarHighlightColor

• `Optional` **msScrollbarHighlightColor**: `string`[] \| `MsScrollbarHighlightColor`

The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDHighlight`

#### Inherited from

Omit.msScrollbarHighlightColor

#### Defined in

node_modules/csstype/index.d.ts:6646

___

### msScrollbarShadowColor

• `Optional` **msScrollbarShadowColor**: `string`[] \| `MsScrollbarShadowColor`

The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

Omit.msScrollbarShadowColor

#### Defined in

node_modules/csstype/index.d.ts:6654

___

### msScrollbarTrackColor

• `Optional` **msScrollbarTrackColor**: `string`[] \| `MsScrollbarTrackColor`

The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.

**Syntax**: `<color>`

**Initial value**: `Scrollbar`

#### Inherited from

Omit.msScrollbarTrackColor

#### Defined in

node_modules/csstype/index.d.ts:6662

___

### msTextAutospace

• `Optional` **msTextAutospace**: `MsTextAutospace` \| `NonNullable`<`undefined` \| `MsTextAutospace`\>[]

The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.

**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`

**Initial value**: `none`

#### Inherited from

Omit.msTextAutospace

#### Defined in

node_modules/csstype/index.d.ts:6670

___

### msTextCombineHorizontal

• `Optional` **msTextCombineHorizontal**: `string`[] \| `TextCombineUpright`

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

Omit.msTextCombineHorizontal

#### Defined in

node_modules/csstype/index.d.ts:6678

___

### msTextOverflow

• `Optional` **msTextOverflow**: `string`[] \| `TextOverflow`

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

#### Inherited from

Omit.msTextOverflow

#### Defined in

node_modules/csstype/index.d.ts:6686

___

### msTouchAction

• `Optional` **msTouchAction**: `string`[] \| `TouchAction`

The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`

**Initial value**: `auto`

#### Inherited from

Omit.msTouchAction

#### Defined in

node_modules/csstype/index.d.ts:6694

___

### msTouchSelect

• `Optional` **msTouchSelect**: `MsTouchSelect` \| `NonNullable`<`undefined` \| `MsTouchSelect`\>[]

The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.

**Syntax**: `grippers | none`

**Initial value**: `grippers`

#### Inherited from

Omit.msTouchSelect

#### Defined in

node_modules/csstype/index.d.ts:6702

___

### msTransform

• `Optional` **msTransform**: `string`[] \| `Transform`

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

Omit.msTransform

#### Defined in

node_modules/csstype/index.d.ts:6710

___

### msTransformOrigin

• `Optional` **msTransformOrigin**: `TransformOrigin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TransformOrigin`<`string` \| `number`\>\>[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

Omit.msTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:6718

___

### msTransition

• `Optional` **msTransition**: `string`[] \| `Transition`<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

Omit.msTransition

#### Defined in

node_modules/csstype/index.d.ts:7737

___

### msTransitionDelay

• `Optional` **msTransitionDelay**: `string`[] \| `TransitionDelay`<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.msTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:6726

___

### msTransitionDuration

• `Optional` **msTransitionDuration**: `string`[] \| `TransitionDuration`<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

Omit.msTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:6734

___

### msTransitionProperty

• `Optional` **msTransitionProperty**: `string`[] \| `TransitionProperty`

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

Omit.msTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:6742

___

### msTransitionTimingFunction

• `Optional` **msTransitionTimingFunction**: `string`[] \| `TransitionTimingFunction`

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

Omit.msTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:6750

___

### msUserSelect

• `Optional` **msUserSelect**: `MsUserSelect` \| `NonNullable`<`undefined` \| `MsUserSelect`\>[]

The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

**Syntax**: `none | element | text`

**Initial value**: `text`

#### Inherited from

Omit.msUserSelect

#### Defined in

node_modules/csstype/index.d.ts:6758

___

### msWordBreak

• `Optional` **msWordBreak**: `WordBreak` \| `NonNullable`<`undefined` \| `WordBreak`\>[]

The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: `normal | break-all | keep-all | break-word`

**Initial value**: `normal`

#### Inherited from

Omit.msWordBreak

#### Defined in

node_modules/csstype/index.d.ts:6766

___

### msWrapFlow

• `Optional` **msWrapFlow**: `MsWrapFlow` \| `NonNullable`<`undefined` \| `MsWrapFlow`\>[]

The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.

**Syntax**: `auto | both | start | end | maximum | clear`

**Initial value**: `auto`

#### Inherited from

Omit.msWrapFlow

#### Defined in

node_modules/csstype/index.d.ts:6774

___

### msWrapMargin

• `Optional` **msWrapMargin**: `MsWrapMargin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MsWrapMargin`<`string` \| `number`\>\>[]

The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

Omit.msWrapMargin

#### Defined in

node_modules/csstype/index.d.ts:6782

___

### msWrapThrough

• `Optional` **msWrapThrough**: `MsWrapThrough` \| `NonNullable`<`undefined` \| `MsWrapThrough`\>[]

The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.

**Syntax**: `wrap | none`

**Initial value**: `wrap`

#### Inherited from

Omit.msWrapThrough

#### Defined in

node_modules/csstype/index.d.ts:6790

___

### msWritingMode

• `Optional` **msWritingMode**: `WritingMode` \| `NonNullable`<`undefined` \| `WritingMode`\>[]

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

Omit.msWritingMode

#### Defined in

node_modules/csstype/index.d.ts:6798

___

### mt

• `Optional` **mt**: `MarginTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginTop`<`string` \| `number`\>\>[]

The **`margin-top`** CSS property sets the margin on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin-top

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[mt](AliasesCSSProperties.md#mt)

#### Defined in

[src/styleTypes.ts:50](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L50)

___

### mx

• `Optional` **mx**: `MarginLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginLeft`<`string` \| `number`\>\>[]

The **`mx`** property is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin on the left and right side of an element. A positive value places it
farther from its neighbors, while a negative value places it closer.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/margin-left
 - https://developer.mozilla.org/docs/Web/CSS/margin-right

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[mx](AliasesCSSProperties.md#mx)

#### Defined in

[src/styleTypes.ts:100](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L100)

___

### my

• `Optional` **my**: `MarginTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `MarginTop`<`string` \| `number`\>\>[]

The **`my`** property is shorthand for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin on the top and bottom of an element. A positive value places it
farther from its neighbors, while a negative value places it closer.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/margin-top
 - https://developer.mozilla.org/docs/Web/CSS/margin-bottom

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[my](AliasesCSSProperties.md#my)

#### Defined in

[src/styleTypes.ts:128](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L128)

___

### objectFit

• `Optional` **objectFit**: `ObjectFit` \| `NonNullable`<`undefined` \| `ObjectFit`\>[]

The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

**Syntax**: `fill | contain | cover | none | scale-down`

**Initial value**: `fill`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **32** | **36**  | **10** | **79** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/object-fit

#### Inherited from

Omit.objectFit

#### Defined in

node_modules/csstype/index.d.ts:3157

___

### objectPosition

• `Optional` **objectPosition**: `ObjectPosition`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ObjectPosition`<`string` \| `number`\>\>[]

The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **32** | **36**  | **10** | **79** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/object-position

#### Inherited from

Omit.objectPosition

#### Defined in

node_modules/csstype/index.d.ts:3171

___

### offset

• `Optional` **offset**: `Offset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Offset`<`string` \| `number`\>\>[]

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari | Edge | IE  |
| :-----------: | :-----: | :----: | :--: | :-: |
|    **55**     | **72**  | **16** | n/a  | No  |
| 46 _(motion)_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset

#### Inherited from

Omit.offset

#### Defined in

node_modules/csstype/index.d.ts:5615

___

### offsetAnchor

• `Optional` **offsetAnchor**: `OffsetAnchor`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `OffsetAnchor`<`string` \| `number`\>\>[]

**Syntax**: `auto | <position>`

**Initial value**: `auto`

| Chrome | Firefox |   Safari    | Edge | IE  |
| :----: | :-----: | :---------: | :--: | :-: |
|   No   | **72**  | **preview** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-anchor

#### Inherited from

Omit.offsetAnchor

#### Defined in

node_modules/csstype/index.d.ts:3183

___

### offsetBlock

• `Optional` **offsetBlock**: `InsetBlock`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetBlock`<`string` \| `number`\>\>[]

The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**`Deprecated`**

#### Inherited from

Omit.offsetBlock

#### Defined in

node_modules/csstype/index.d.ts:7966

___

### offsetBlockEnd

• `Optional` **offsetBlockEnd**: `InsetBlockEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetBlockEnd`<`string` \| `number`\>\>[]

The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.offsetBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:7976

___

### offsetBlockStart

• `Optional` **offsetBlockStart**: `InsetBlockStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetBlockStart`<`string` \| `number`\>\>[]

The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.offsetBlockStart

#### Defined in

node_modules/csstype/index.d.ts:7986

___

### offsetDistance

• `Optional` **offsetDistance**: `OffsetDistance`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `OffsetDistance`<`string` \| `number`\>\>[]

The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

|         Chrome         | Firefox |   Safari    | Edge | IE  |
| :--------------------: | :-----: | :---------: | :--: | :-: |
|         **55**         | **72**  | **preview** | n/a  | No  |
| 46 _(motion-distance)_ |         |             |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-distance

#### Inherited from

Omit.offsetDistance

#### Defined in

node_modules/csstype/index.d.ts:3198

___

### offsetInline

• `Optional` **offsetInline**: `InsetInline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetInline`<`string` \| `number`\>\>[]

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**`Deprecated`**

#### Inherited from

Omit.offsetInline

#### Defined in

node_modules/csstype/index.d.ts:7994

___

### offsetInlineEnd

• `Optional` **offsetInlineEnd**: `InsetInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetInlineEnd`<`string` \| `number`\>\>[]

The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.offsetInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:8004

___

### offsetInlineStart

• `Optional` **offsetInlineStart**: `InsetInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `InsetInlineStart`<`string` \| `number`\>\>[]

The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`Deprecated`**

#### Inherited from

Omit.offsetInlineStart

#### Defined in

node_modules/csstype/index.d.ts:8014

___

### offsetPath

• `Optional` **offsetPath**: `string`[] \| `OffsetPath`

The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`

**Initial value**: `none`

|       Chrome       | Firefox |  Safari  | Edge | IE  |
| :----------------: | :-----: | :------: | :--: | :-: |
|       **55**       | **72**  | **15.4** | n/a  | No  |
| 46 _(motion-path)_ |         |          |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-path

#### Inherited from

Omit.offsetPath

#### Defined in

node_modules/csstype/index.d.ts:3213

___

### offsetPosition

• `Optional` **offsetPosition**: `OffsetPosition`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `OffsetPosition`<`string` \| `number`\>\>[]

**Syntax**: `auto | <position>`

**Initial value**: `auto`

| Chrome | Firefox |   Safari    | Edge | IE  |
| :----: | :-----: | :---------: | :--: | :-: |
|   No   |   No    | **preview** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-position

#### Inherited from

Omit.offsetPosition

#### Defined in

node_modules/csstype/index.d.ts:3225

___

### offsetRotate

• `Optional` **offsetRotate**: `string`[] \| `OffsetRotate`

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox |   Safari    | Edge | IE  |
| :--------------------: | :-----: | :---------: | :--: | :-: |
|         **56**         | **72**  | **preview** | n/a  | No  |
| 46 _(motion-rotation)_ |         |             |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

Omit.offsetRotate

#### Defined in

node_modules/csstype/index.d.ts:3240

___

### offsetRotation

• `Optional` **offsetRotation**: `string`[] \| `OffsetRotate`

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox |   Safari    | Edge | IE  |
| :--------------------: | :-----: | :---------: | :--: | :-: |
|         **56**         | **72**  | **preview** | n/a  | No  |
| 46 _(motion-rotation)_ |         |             |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

Omit.offsetRotation

#### Defined in

node_modules/csstype/index.d.ts:3255

___

### opacity

• `Optional` **opacity**: `Opacity` \| `NonNullable`<`undefined` \| `Opacity`\>[]

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **2**  | **12** | **9** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/opacity

#### Inherited from

Omit.opacity

#### Defined in

node_modules/csstype/index.d.ts:3269

___

### order

• `Optional` **order**: `Order` \| `NonNullable`<`undefined` \| `Order`\>[]

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/order

#### Inherited from

Omit.order

#### Defined in

node_modules/csstype/index.d.ts:3284

___

### orphans

• `Optional` **orphans**: `Orphans` \| `NonNullable`<`undefined` \| `Orphans`\>[]

The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.

**Syntax**: `<integer>`

**Initial value**: `2`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **25** |   No    | **1.3** | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/orphans

#### Inherited from

Omit.orphans

#### Defined in

node_modules/csstype/index.d.ts:3298

___

### outline

• `Optional` **outline**: `Outline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Outline`<`string` \| `number`\>\>[]

The **`outline`** CSS shorthand property sets most of the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **94** | **88**  | **1.2** | **94** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/outline

#### Inherited from

Omit.outline

#### Defined in

node_modules/csstype/index.d.ts:5627

___

### outlineColor

• `Optional` **outlineColor**: `string`[] \| `OutlineColor`

The **`outline-color`** CSS property sets the color of an element's outline.

**Syntax**: `<color> | invert`

**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/outline-color

#### Inherited from

Omit.outlineColor

#### Defined in

node_modules/csstype/index.d.ts:3312

___

### outlineOffset

• `Optional` **outlineOffset**: `OutlineOffset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `OutlineOffset`<`string` \| `number`\>\>[]

The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **1**  | **1.5** | **1.2** | **15** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/outline-offset

#### Inherited from

Omit.outlineOffset

#### Defined in

node_modules/csstype/index.d.ts:3326

___

### outlineStyle

• `Optional` **outlineStyle**: `string`[] \| `OutlineStyle`

The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `auto | <'border-style'>`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/outline-style

#### Inherited from

Omit.outlineStyle

#### Defined in

node_modules/csstype/index.d.ts:3340

___

### outlineWidth

• `Optional` **outlineWidth**: `OutlineWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `OutlineWidth`<`string` \| `number`\>\>[]

The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/outline-width

#### Inherited from

Omit.outlineWidth

#### Defined in

node_modules/csstype/index.d.ts:3354

___

### overflow

• `Optional` **overflow**: `string`[] \| `Overflow`

The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow

#### Inherited from

Omit.overflow

#### Defined in

node_modules/csstype/index.d.ts:5641

___

### overflowAnchor

• `Optional` **overflowAnchor**: `OverflowAnchor` \| `NonNullable`<`undefined` \| `OverflowAnchor`\>[]

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **56** | **66**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow-anchor

#### Inherited from

Omit.overflowAnchor

#### Defined in

node_modules/csstype/index.d.ts:3366

___

### overflowBlock

• `Optional` **overflowBlock**: `OverflowBlock` \| `NonNullable`<`undefined` \| `OverflowBlock`\>[]

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **69**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow-block

#### Inherited from

Omit.overflowBlock

#### Defined in

node_modules/csstype/index.d.ts:3378

___

### overflowClipBox

• `Optional` **overflowClipBox**: `OverflowClipBox` \| `NonNullable`<`undefined` \| `OverflowClipBox`\>[]

The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.

**Syntax**: `padding-box | content-box`

**Initial value**: `padding-box`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **29**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Mozilla/Gecko/Chrome/CSS/overflow-clip-box

#### Inherited from

Omit.overflowClipBox

#### Defined in

node_modules/csstype/index.d.ts:3392

___

### overflowClipMargin

• `Optional` **overflowClipMargin**: `OverflowClipMargin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `OverflowClipMargin`<`string` \| `number`\>\>[]

**Syntax**: `<visual-box> || <length [0,∞]>`

**Initial value**: `0px`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **90** | **102** |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin

#### Inherited from

Omit.overflowClipMargin

#### Defined in

node_modules/csstype/index.d.ts:3404

___

### overflowInline

• `Optional` **overflowInline**: `OverflowInline` \| `NonNullable`<`undefined` \| `OverflowInline`\>[]

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **69**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow-inline

#### Inherited from

Omit.overflowInline

#### Defined in

node_modules/csstype/index.d.ts:3416

___

### overflowWrap

• `Optional` **overflowWrap**: `OverflowWrap` \| `NonNullable`<`undefined` \| `OverflowWrap`\>[]

The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

**Syntax**: `normal | break-word | anywhere`

**Initial value**: `normal`

|     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
| :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
|     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ |
| 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow-wrap

#### Inherited from

Omit.overflowWrap

#### Defined in

node_modules/csstype/index.d.ts:3431

___

### overflowX

• `Optional` **overflowX**: `OverflowX` \| `NonNullable`<`undefined` \| `OverflowX`\>[]

The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **3.5** | **3**  | **12** | **5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow-x

#### Inherited from

Omit.overflowX

#### Defined in

node_modules/csstype/index.d.ts:3445

___

### overflowY

• `Optional` **overflowY**: `OverflowY` \| `NonNullable`<`undefined` \| `OverflowY`\>[]

The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **3.5** | **3**  | **12** | **5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow-y

#### Inherited from

Omit.overflowY

#### Defined in

node_modules/csstype/index.d.ts:3459

___

### overscrollBehavior

• `Optional` **overscrollBehavior**: `string`[] \| `OverscrollBehavior`

The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.

**Syntax**: `[ contain | none | auto ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  | **16** | **18** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior

#### Inherited from

Omit.overscrollBehavior

#### Defined in

node_modules/csstype/index.d.ts:5655

___

### overscrollBehaviorBlock

• `Optional` **overscrollBehaviorBlock**: `OverscrollBehaviorBlock` \| `NonNullable`<`undefined` \| `OverscrollBehaviorBlock`\>[]

The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **77** | **73**  | **16** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block

#### Inherited from

Omit.overscrollBehaviorBlock

#### Defined in

node_modules/csstype/index.d.ts:3473

___

### overscrollBehaviorInline

• `Optional` **overscrollBehaviorInline**: `OverscrollBehaviorInline` \| `NonNullable`<`undefined` \| `OverscrollBehaviorInline`\>[]

The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **77** | **73**  | **16** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline

#### Inherited from

Omit.overscrollBehaviorInline

#### Defined in

node_modules/csstype/index.d.ts:3487

___

### overscrollBehaviorX

• `Optional` **overscrollBehaviorX**: `OverscrollBehaviorX` \| `NonNullable`<`undefined` \| `OverscrollBehaviorX`\>[]

The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  | **16** | **18** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x

#### Inherited from

Omit.overscrollBehaviorX

#### Defined in

node_modules/csstype/index.d.ts:3501

___

### overscrollBehaviorY

• `Optional` **overscrollBehaviorY**: `OverscrollBehaviorY` \| `NonNullable`<`undefined` \| `OverscrollBehaviorY`\>[]

The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  | **16** | **18** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y

#### Inherited from

Omit.overscrollBehaviorY

#### Defined in

node_modules/csstype/index.d.ts:3515

___

### p

• `Optional` **p**: `Padding`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Padding`<`string` \| `number`\>\>[]

The **`padding`** CSS property sets the padding on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[p](AliasesCSSProperties.md#p)

#### Defined in

[src/styleTypes.ts:152](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L152)

___

### padding

• `Optional` **padding**: `Padding`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Padding`<`string` \| `number`\>\>[]

The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.

**Syntax**: `[ <length> | <percentage> ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding

#### Inherited from

Omit.padding

#### Defined in

node_modules/csstype/index.d.ts:5667

___

### paddingBlock

• `Optional` **paddingBlock**: `PaddingBlock`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingBlock`<`string` \| `number`\>\>[]

The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-block

#### Inherited from

Omit.paddingBlock

#### Defined in

node_modules/csstype/index.d.ts:5679

___

### paddingBlockEnd

• `Optional` **paddingBlockEnd**: `PaddingBlockEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingBlockEnd`<`string` \| `number`\>\>[]

The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-block-end

#### Inherited from

Omit.paddingBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:3529

___

### paddingBlockStart

• `Optional` **paddingBlockStart**: `PaddingBlockStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingBlockStart`<`string` \| `number`\>\>[]

The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-block-start

#### Inherited from

Omit.paddingBlockStart

#### Defined in

node_modules/csstype/index.d.ts:3543

___

### paddingBottom

• `Optional` **paddingBottom**: `PaddingBottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingBottom`<`string` \| `number`\>\>[]

The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-bottom

#### Inherited from

Omit.paddingBottom

#### Defined in

node_modules/csstype/index.d.ts:3557

___

### paddingInline

• `Optional` **paddingInline**: `PaddingInline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingInline`<`string` \| `number`\>\>[]

The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-inline

#### Inherited from

Omit.paddingInline

#### Defined in

node_modules/csstype/index.d.ts:5691

___

### paddingInlineEnd

• `Optional` **paddingInlineEnd**: `PaddingInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingInlineEnd`<`string` \| `number`\>\>[]

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

|          Chrome           |        Firefox         |          Safari           | Edge | IE  |
| :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: |
|          **87**           |         **41**         |         **12.1**          | n/a  | No  |
| 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-inline-end

#### Inherited from

Omit.paddingInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:3572

___

### paddingInlineStart

• `Optional` **paddingInlineStart**: `PaddingInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingInlineStart`<`string` \| `number`\>\>[]

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

|           Chrome            |         Firefox          |           Safari            | Edge | IE  |
| :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: |
|           **87**            |          **41**          |          **12.1**           | n/a  | No  |
| 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-inline-start

#### Inherited from

Omit.paddingInlineStart

#### Defined in

node_modules/csstype/index.d.ts:3587

___

### paddingLeft

• `Optional` **paddingLeft**: `PaddingLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingLeft`<`string` \| `number`\>\>[]

The **`padding-left`** CSS property sets the width of the padding area to the left of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-left

#### Inherited from

Omit.paddingLeft

#### Defined in

node_modules/csstype/index.d.ts:3601

___

### paddingRight

• `Optional` **paddingRight**: `PaddingRight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingRight`<`string` \| `number`\>\>[]

The **`padding-right`** CSS property sets the width of the padding area on the right of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-right

#### Inherited from

Omit.paddingRight

#### Defined in

node_modules/csstype/index.d.ts:3615

___

### paddingTop

• `Optional` **paddingTop**: `PaddingTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingTop`<`string` \| `number`\>\>[]

The **`padding-top`** CSS property sets the height of the padding area on the top of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-top

#### Inherited from

Omit.paddingTop

#### Defined in

node_modules/csstype/index.d.ts:3629

___

### paddingX

• `Optional` **paddingX**: `PaddingLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingLeft`<`string` \| `number`\>\>[]

The **`paddingX`** property is shorthand for the CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding at the left and right sides of an element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/padding-left
 - https://developer.mozilla.org/docs/Web/CSS/padding-right

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[paddingX](AliasesCSSProperties.md#paddingx)

#### Defined in

[src/styleTypes.ts:226](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L226)

___

### paddingY

• `Optional` **paddingY**: `PaddingTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingTop`<`string` \| `number`\>\>[]

The **`paddingY`** property is shorthand for the CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding at the top and bottom of an element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/padding-top
 - https://developer.mozilla.org/docs/Web/CSS/padding-bottom

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[paddingY](AliasesCSSProperties.md#paddingy)

#### Defined in

[src/styleTypes.ts:252](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L252)

___

### page

• `Optional` **page**: `string`[] \| `Page`

The **`page`** CSS property is used to specify the named page, a specific type of page defined by the `@page` at-rule.

**Syntax**: `auto | <custom-ident>`

**Initial value**: `auto`

| Chrome | Firefox |   Safari    | Edge | IE  |
| :----: | :-----: | :---------: | :--: | :-: |
| **85** | **110** | **preview** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/page

#### Inherited from

Omit.page

#### Defined in

node_modules/csstype/index.d.ts:3643

___

### pageBreakAfter

• `Optional` **pageBreakAfter**: `PageBreakAfter` \| `NonNullable`<`undefined` \| `PageBreakAfter`\>[]

The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.

**Syntax**: `auto | always | avoid | left | right | recto | verso`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/page-break-after

#### Inherited from

Omit.pageBreakAfter

#### Defined in

node_modules/csstype/index.d.ts:3657

___

### pageBreakBefore

• `Optional` **pageBreakBefore**: `PageBreakBefore` \| `NonNullable`<`undefined` \| `PageBreakBefore`\>[]

The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.

**Syntax**: `auto | always | avoid | left | right | recto | verso`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/page-break-before

#### Inherited from

Omit.pageBreakBefore

#### Defined in

node_modules/csstype/index.d.ts:3671

___

### pageBreakInside

• `Optional` **pageBreakInside**: `PageBreakInside` \| `NonNullable`<`undefined` \| `PageBreakInside`\>[]

The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.

**Syntax**: `auto | avoid`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **19**  | **1.3** | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/page-break-inside

#### Inherited from

Omit.pageBreakInside

#### Defined in

node_modules/csstype/index.d.ts:3685

___

### paintOrder

• `Optional` **paintOrder**: `string`[] \| `PaintOrder`

The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.

**Syntax**: `normal | [ fill || stroke || markers ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **35** | **60**  | **8**  | **17** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/paint-order

#### Inherited from

Omit.paintOrder

#### Defined in

node_modules/csstype/index.d.ts:3699

___

### pb

• `Optional` **pb**: `PaddingBottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingBottom`<`string` \| `number`\>\>[]

The **`padding-bottom`** CSS property sets the height of the padding on the bottom of an element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-bottom

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[pb](AliasesCSSProperties.md#pb)

#### Defined in

[src/styleTypes.ts:188](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L188)

___

### perspective

• `Optional` **perspective**: `Perspective`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Perspective`<`string` \| `number`\>\>[]

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **36**  |  **16**  |  **9**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/perspective

#### Inherited from

Omit.perspective

#### Defined in

node_modules/csstype/index.d.ts:3714

___

### perspectiveOrigin

• `Optional` **perspectiveOrigin**: `PerspectiveOrigin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PerspectiveOrigin`<`string` \| `number`\>\>[]

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **36**  |  **16**  |  **9**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/perspective-origin

#### Inherited from

Omit.perspectiveOrigin

#### Defined in

node_modules/csstype/index.d.ts:3729

___

### pl

• `Optional` **pl**: `PaddingLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingLeft`<`string` \| `number`\>\>[]

The **`padding-left`** CSS property sets the width of the padding at the left side of an element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-left

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[pl](AliasesCSSProperties.md#pl)

#### Defined in

[src/styleTypes.ts:200](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L200)

___

### placeContent

• `Optional` **placeContent**: `string`[] \| `PlaceContent`

The **`place-content`** CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.

**Syntax**: `<'align-content'> <'justify-content'>?`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **59** | **45**  | **9**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/place-content

#### Inherited from

Omit.placeContent

#### Defined in

node_modules/csstype/index.d.ts:5703

___

### placeItems

• `Optional` **placeItems**: `string`[] \| `PlaceItems`

The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

**Syntax**: `<'align-items'> <'justify-items'>?`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **59** | **45**  | **11** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/place-items

#### Inherited from

Omit.placeItems

#### Defined in

node_modules/csstype/index.d.ts:5715

___

### placeSelf

• `Optional` **placeSelf**: `string`[] \| `PlaceSelf`

The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.

**Syntax**: `<'align-self'> <'justify-self'>?`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **59** | **45**  | **11** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/place-self

#### Inherited from

Omit.placeSelf

#### Defined in

node_modules/csstype/index.d.ts:5727

___

### pointerEvents

• `Optional` **pointerEvents**: `PointerEvents` \| `NonNullable`<`undefined` \| `PointerEvents`\>[]

The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.

**Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **1**  | **1.5** | **4**  | **12** | **11** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/pointer-events

#### Inherited from

Omit.pointerEvents

#### Defined in

node_modules/csstype/index.d.ts:3743

___

### position

• `Optional` **position**: `Position` \| `NonNullable`<`undefined` \| `Position`\>[]

The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.

**Syntax**: `static | relative | absolute | sticky | fixed`

**Initial value**: `static`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/position

#### Inherited from

Omit.position

#### Defined in

node_modules/csstype/index.d.ts:3757

___

### pr

• `Optional` **pr**: `PaddingRight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingRight`<`string` \| `number`\>\>[]

The **`padding-right`** CSS property sets the width of the padding at the right side of an element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-right

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[pr](AliasesCSSProperties.md#pr)

#### Defined in

[src/styleTypes.ts:176](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L176)

___

### printColorAdjust

• `Optional` **printColorAdjust**: `PrintColorAdjust` \| `NonNullable`<`undefined` \| `PrintColorAdjust`\>[]

The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

|    Chrome    |       Firefox       |  Safari  |     Edge     | IE  |
| :----------: | :-----------------: | :------: | :----------: | :-: |
| **17** _-x-_ |       **97**        | **15.4** | **79** _-x-_ | No  |
|              | 48 _(color-adjust)_ | 6 _-x-_  |              |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/print-color-adjust

#### Inherited from

Omit.printColorAdjust

#### Defined in

node_modules/csstype/index.d.ts:3772

___

### pt

• `Optional` **pt**: `PaddingTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingTop`<`string` \| `number`\>\>[]

The **`padding-top`** CSS property sets the height of the padding at the top of an element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding-top

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[pt](AliasesCSSProperties.md#pt)

#### Defined in

[src/styleTypes.ts:164](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L164)

___

### px

• `Optional` **px**: `PaddingLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingLeft`<`string` \| `number`\>\>[]

The **`px`** property is shorthand for the CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding at the left and right side of an element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/padding-left
 - https://developer.mozilla.org/docs/Web/CSS/padding-right

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[px](AliasesCSSProperties.md#px)

#### Defined in

[src/styleTypes.ts:213](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L213)

___

### py

• `Optional` **py**: `PaddingTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `PaddingTop`<`string` \| `number`\>\>[]

The **`py`** property is shorthand for the CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding at the top and bottom of an element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/padding-top
 - https://developer.mozilla.org/docs/Web/CSS/padding-bottom

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[py](AliasesCSSProperties.md#py)

#### Defined in

[src/styleTypes.ts:239](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L239)

___

### quotes

• `Optional` **quotes**: `string`[] \| `Quotes`

The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.

**Syntax**: `none | auto | [ <string> <string> ]+`

**Initial value**: depends on user agent

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **11** | **1.5** | **9**  | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/quotes

#### Inherited from

Omit.quotes

#### Defined in

node_modules/csstype/index.d.ts:3786

___

### resize

• `Optional` **resize**: `Resize` \| `NonNullable`<`undefined` \| `Resize`\>[]

The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.

**Syntax**: `none | both | horizontal | vertical | block | inline`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **1**  |  **4**  | **3**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/resize

#### Inherited from

Omit.resize

#### Defined in

node_modules/csstype/index.d.ts:3800

___

### right

• `Optional` **right**: `Right`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Right`<`string` \| `number`\>\>[]

The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/right

#### Inherited from

Omit.right

#### Defined in

node_modules/csstype/index.d.ts:3814

___

### rotate

• `Optional` **rotate**: `string`[] \| `Rotate`

The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.

**Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`

**Initial value**: `none`

| Chrome  | Firefox |  Safari  | Edge | IE  |
| :-----: | :-----: | :------: | :--: | :-: |
| **104** | **72**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/rotate

#### Inherited from

Omit.rotate

#### Defined in

node_modules/csstype/index.d.ts:3828

___

### rowGap

• `Optional` **rowGap**: `RowGap`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `RowGap`<`string` \| `number`\>\>[]

The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **47** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/row-gap

#### Inherited from

Omit.rowGap

#### Defined in

node_modules/csstype/index.d.ts:3842

___

### rubyAlign

• `Optional` **rubyAlign**: `RubyAlign` \| `NonNullable`<`undefined` \| `RubyAlign`\>[]

The **`ruby-align`** CSS property defines the distribution of the different ruby elements over the base.

**Syntax**: `start | center | space-between | space-around`

**Initial value**: `space-around`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **38**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/ruby-align

#### Inherited from

Omit.rubyAlign

#### Defined in

node_modules/csstype/index.d.ts:3856

___

### rubyMerge

• `Optional` **rubyMerge**: `RubyMerge` \| `NonNullable`<`undefined` \| `RubyMerge`\>[]

**Syntax**: `separate | collapse | auto`

**Initial value**: `separate`

#### Inherited from

Omit.rubyMerge

#### Defined in

node_modules/csstype/index.d.ts:3862

___

### rubyPosition

• `Optional` **rubyPosition**: `string`[] \| `RubyPosition`

The **`ruby-position`** CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (`over`), under it (`under`), or between the characters on their right side (`inter-character`).

**Syntax**: `[ alternate || [ over | under ] ] | inter-character`

**Initial value**: `alternate`

| Chrome  | Firefox |   Safari    | Edge  | IE  |
| :-----: | :-----: | :---------: | :---: | :-: |
| **84**  | **38**  | **7** _-x-_ | 12-79 | No  |
| 1 _-x-_ |         |             |       |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/ruby-position

#### Inherited from

Omit.rubyPosition

#### Defined in

node_modules/csstype/index.d.ts:3877

___

### scale

• `Optional` **scale**: `Scale` \| `NonNullable`<`undefined` \| `Scale`\>[]

The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

**Syntax**: `none | <number>{1,3}`

**Initial value**: `none`

| Chrome  | Firefox |  Safari  | Edge | IE  |
| :-----: | :-----: | :------: | :--: | :-: |
| **104** | **72**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scale

#### Inherited from

Omit.scale

#### Defined in

node_modules/csstype/index.d.ts:3891

___

### scrollBehavior

• `Optional` **scrollBehavior**: `ScrollBehavior` \| `NonNullable`<`undefined` \| `ScrollBehavior`\>[]

The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.

**Syntax**: `auto | smooth`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **61** | **36**  | **15.4** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-behavior

#### Inherited from

Omit.scrollBehavior

#### Defined in

node_modules/csstype/index.d.ts:3905

___

### scrollMargin

• `Optional` **scrollMargin**: `ScrollMargin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMargin`<`string` \| `number`\>\>[]

The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.

**Syntax**: `<length>{1,4}`

| Chrome | Firefox |          Safari           | Edge | IE  |
| :----: | :-----: | :-----------------------: | :--: | :-: |
| **69** | **90**  |         **14.1**          | n/a  | No  |
|        |         | 11 _(scroll-snap-margin)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin

#### Inherited from

Omit.scrollMargin

#### Defined in

node_modules/csstype/index.d.ts:5740

___

### scrollMarginBlock

• `Optional` **scrollMarginBlock**: `ScrollMarginBlock`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginBlock`<`string` \| `number`\>\>[]

The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.

**Syntax**: `<length>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block

#### Inherited from

Omit.scrollMarginBlock

#### Defined in

node_modules/csstype/index.d.ts:5752

___

### scrollMarginBlockEnd

• `Optional` **scrollMarginBlockEnd**: `ScrollMarginBlockEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginBlockEnd`<`string` \| `number`\>\>[]

The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end

#### Inherited from

Omit.scrollMarginBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:3919

___

### scrollMarginBlockStart

• `Optional` **scrollMarginBlockStart**: `ScrollMarginBlockStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginBlockStart`<`string` \| `number`\>\>[]

The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start

#### Inherited from

Omit.scrollMarginBlockStart

#### Defined in

node_modules/csstype/index.d.ts:3933

___

### scrollMarginBottom

• `Optional` **scrollMarginBottom**: `ScrollMarginBottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginBottom`<`string` \| `number`\>\>[]

The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |              Safari              | Edge | IE  |
| :----: | :-----: | :------------------------------: | :--: | :-: |
| **69** | **68**  |             **14.1**             | n/a  | No  |
|        |         | 11 _(scroll-snap-margin-bottom)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom

#### Inherited from

Omit.scrollMarginBottom

#### Defined in

node_modules/csstype/index.d.ts:3948

___

### scrollMarginInline

• `Optional` **scrollMarginInline**: `ScrollMarginInline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginInline`<`string` \| `number`\>\>[]

The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.

**Syntax**: `<length>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline

#### Inherited from

Omit.scrollMarginInline

#### Defined in

node_modules/csstype/index.d.ts:5764

___

### scrollMarginInlineEnd

• `Optional` **scrollMarginInlineEnd**: `ScrollMarginInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginInlineEnd`<`string` \| `number`\>\>[]

The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end

#### Inherited from

Omit.scrollMarginInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:3962

___

### scrollMarginInlineStart

• `Optional` **scrollMarginInlineStart**: `ScrollMarginInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginInlineStart`<`string` \| `number`\>\>[]

The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start

#### Inherited from

Omit.scrollMarginInlineStart

#### Defined in

node_modules/csstype/index.d.ts:3976

___

### scrollMarginLeft

• `Optional` **scrollMarginLeft**: `ScrollMarginLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginLeft`<`string` \| `number`\>\>[]

The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari             | Edge | IE  |
| :----: | :-----: | :----------------------------: | :--: | :-: |
| **69** | **68**  |            **14.1**            | n/a  | No  |
|        |         | 11 _(scroll-snap-margin-left)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left

#### Inherited from

Omit.scrollMarginLeft

#### Defined in

node_modules/csstype/index.d.ts:3991

___

### scrollMarginRight

• `Optional` **scrollMarginRight**: `ScrollMarginRight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginRight`<`string` \| `number`\>\>[]

The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari              | Edge | IE  |
| :----: | :-----: | :-----------------------------: | :--: | :-: |
| **69** | **68**  |            **14.1**             | n/a  | No  |
|        |         | 11 _(scroll-snap-margin-right)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right

#### Inherited from

Omit.scrollMarginRight

#### Defined in

node_modules/csstype/index.d.ts:4006

___

### scrollMarginTop

• `Optional` **scrollMarginTop**: `ScrollMarginTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginTop`<`string` \| `number`\>\>[]

The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |            Safari             | Edge | IE  |
| :----: | :-----: | :---------------------------: | :--: | :-: |
| **69** | **68**  |           **14.1**            | n/a  | No  |
|        |         | 11 _(scroll-snap-margin-top)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top

#### Inherited from

Omit.scrollMarginTop

#### Defined in

node_modules/csstype/index.d.ts:4021

___

### scrollPadding

• `Optional` **scrollPadding**: `ScrollPadding`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPadding`<`string` \| `number`\>\>[]

The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.

**Syntax**: `[ auto | <length-percentage> ]{1,4}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding

#### Inherited from

Omit.scrollPadding

#### Defined in

node_modules/csstype/index.d.ts:5776

___

### scrollPaddingBlock

• `Optional` **scrollPaddingBlock**: `ScrollPaddingBlock`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingBlock`<`string` \| `number`\>\>[]

The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.

**Syntax**: `[ auto | <length-percentage> ]{1,2}`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block

#### Inherited from

Omit.scrollPaddingBlock

#### Defined in

node_modules/csstype/index.d.ts:5788

___

### scrollPaddingBlockEnd

• `Optional` **scrollPaddingBlockEnd**: `ScrollPaddingBlockEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingBlockEnd`<`string` \| `number`\>\>[]

The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end

#### Inherited from

Omit.scrollPaddingBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:4035

___

### scrollPaddingBlockStart

• `Optional` **scrollPaddingBlockStart**: `ScrollPaddingBlockStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingBlockStart`<`string` \| `number`\>\>[]

The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start

#### Inherited from

Omit.scrollPaddingBlockStart

#### Defined in

node_modules/csstype/index.d.ts:4049

___

### scrollPaddingBottom

• `Optional` **scrollPaddingBottom**: `ScrollPaddingBottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingBottom`<`string` \| `number`\>\>[]

The `scroll-padding-bottom` property defines offsets for the bottom of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom

#### Inherited from

Omit.scrollPaddingBottom

#### Defined in

node_modules/csstype/index.d.ts:4063

___

### scrollPaddingInline

• `Optional` **scrollPaddingInline**: `ScrollPaddingInline`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingInline`<`string` \| `number`\>\>[]

The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.

**Syntax**: `[ auto | <length-percentage> ]{1,2}`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline

#### Inherited from

Omit.scrollPaddingInline

#### Defined in

node_modules/csstype/index.d.ts:5800

___

### scrollPaddingInlineEnd

• `Optional` **scrollPaddingInlineEnd**: `ScrollPaddingInlineEnd`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingInlineEnd`<`string` \| `number`\>\>[]

The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end

#### Inherited from

Omit.scrollPaddingInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:4077

___

### scrollPaddingInlineStart

• `Optional` **scrollPaddingInlineStart**: `ScrollPaddingInlineStart`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingInlineStart`<`string` \| `number`\>\>[]

The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start

#### Inherited from

Omit.scrollPaddingInlineStart

#### Defined in

node_modules/csstype/index.d.ts:4091

___

### scrollPaddingLeft

• `Optional` **scrollPaddingLeft**: `ScrollPaddingLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingLeft`<`string` \| `number`\>\>[]

The `scroll-padding-left` property defines offsets for the left of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left

#### Inherited from

Omit.scrollPaddingLeft

#### Defined in

node_modules/csstype/index.d.ts:4105

___

### scrollPaddingRight

• `Optional` **scrollPaddingRight**: `ScrollPaddingRight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingRight`<`string` \| `number`\>\>[]

The `scroll-padding-right` property defines offsets for the right of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right

#### Inherited from

Omit.scrollPaddingRight

#### Defined in

node_modules/csstype/index.d.ts:4119

___

### scrollPaddingTop

• `Optional` **scrollPaddingTop**: `ScrollPaddingTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollPaddingTop`<`string` \| `number`\>\>[]

The **`scroll-padding-top`** property defines offsets for the top of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top

#### Inherited from

Omit.scrollPaddingTop

#### Defined in

node_modules/csstype/index.d.ts:4133

___

### scrollSnapAlign

• `Optional` **scrollSnapAlign**: `string`[] \| `ScrollSnapAlign`

The `scroll-snap-align` property specifies the box's snap position as an alignment of its snap area (as the alignment subject) within its snap container's snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.

**Syntax**: `[ none | start | end | center ]{1,2}`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **11** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align

#### Inherited from

Omit.scrollSnapAlign

#### Defined in

node_modules/csstype/index.d.ts:4147

___

### scrollSnapCoordinate

• `Optional` **scrollSnapCoordinate**: `ScrollSnapCoordinate`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollSnapCoordinate`<`string` \| `number`\>\>[]

The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.

**Syntax**: `none | <position>#`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.scrollSnapCoordinate

#### Defined in

node_modules/csstype/index.d.ts:8024

___

### scrollSnapDestination

• `Optional` **scrollSnapDestination**: `ScrollSnapDestination`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollSnapDestination`<`string` \| `number`\>\>[]

The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.

**Syntax**: `<position>`

**Initial value**: `0px 0px`

**`Deprecated`**

#### Inherited from

Omit.scrollSnapDestination

#### Defined in

node_modules/csstype/index.d.ts:8034

___

### scrollSnapMargin

• `Optional` **scrollSnapMargin**: `ScrollMargin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMargin`<`string` \| `number`\>\>[]

The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.

**Syntax**: `<length>{1,4}`

| Chrome | Firefox |          Safari           | Edge | IE  |
| :----: | :-----: | :-----------------------: | :--: | :-: |
| **69** |  68-90  |         **14.1**          | n/a  | No  |
|        |         | 11 _(scroll-snap-margin)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin

#### Inherited from

Omit.scrollSnapMargin

#### Defined in

node_modules/csstype/index.d.ts:5813

___

### scrollSnapMarginBottom

• `Optional` **scrollSnapMarginBottom**: `ScrollMarginBottom`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginBottom`<`string` \| `number`\>\>[]

The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |              Safari              | Edge | IE  |
| :----: | :-----: | :------------------------------: | :--: | :-: |
| **69** | **68**  |             **14.1**             | n/a  | No  |
|        |         | 11 _(scroll-snap-margin-bottom)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom

#### Inherited from

Omit.scrollSnapMarginBottom

#### Defined in

node_modules/csstype/index.d.ts:4162

___

### scrollSnapMarginLeft

• `Optional` **scrollSnapMarginLeft**: `ScrollMarginLeft`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginLeft`<`string` \| `number`\>\>[]

The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari             | Edge | IE  |
| :----: | :-----: | :----------------------------: | :--: | :-: |
| **69** | **68**  |            **14.1**            | n/a  | No  |
|        |         | 11 _(scroll-snap-margin-left)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left

#### Inherited from

Omit.scrollSnapMarginLeft

#### Defined in

node_modules/csstype/index.d.ts:4177

___

### scrollSnapMarginRight

• `Optional` **scrollSnapMarginRight**: `ScrollMarginRight`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginRight`<`string` \| `number`\>\>[]

The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari              | Edge | IE  |
| :----: | :-----: | :-----------------------------: | :--: | :-: |
| **69** | **68**  |            **14.1**             | n/a  | No  |
|        |         | 11 _(scroll-snap-margin-right)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right

#### Inherited from

Omit.scrollSnapMarginRight

#### Defined in

node_modules/csstype/index.d.ts:4192

___

### scrollSnapMarginTop

• `Optional` **scrollSnapMarginTop**: `ScrollMarginTop`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ScrollMarginTop`<`string` \| `number`\>\>[]

The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |            Safari             | Edge | IE  |
| :----: | :-----: | :---------------------------: | :--: | :-: |
| **69** | **68**  |           **14.1**            | n/a  | No  |
|        |         | 11 _(scroll-snap-margin-top)_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top

#### Inherited from

Omit.scrollSnapMarginTop

#### Defined in

node_modules/csstype/index.d.ts:4207

___

### scrollSnapPointsX

• `Optional` **scrollSnapPointsX**: `string`[] \| `ScrollSnapPointsX`

The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.scrollSnapPointsX

#### Defined in

node_modules/csstype/index.d.ts:8044

___

### scrollSnapPointsY

• `Optional` **scrollSnapPointsY**: `string`[] \| `ScrollSnapPointsY`

The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.scrollSnapPointsY

#### Defined in

node_modules/csstype/index.d.ts:8054

___

### scrollSnapStop

• `Optional` **scrollSnapStop**: `ScrollSnapStop` \| `NonNullable`<`undefined` \| `ScrollSnapStop`\>[]

The **`scroll-snap-stop`** CSS property defines whether or not the scroll container is allowed to "pass over" possible snap positions.

**Syntax**: `normal | always`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **75** | **103** | **15** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop

#### Inherited from

Omit.scrollSnapStop

#### Defined in

node_modules/csstype/index.d.ts:4221

___

### scrollSnapType

• `Optional` **scrollSnapType**: `string`[] \| `ScrollSnapType`

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |      IE      |
| :----: | :-----: | :-----: | :----: | :----------: |
| **69** |  39-68  | **11**  | **79** | **10** _-x-_ |
|        |         | 9 _-x-_ |        |              |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type

#### Inherited from

Omit.scrollSnapType

#### Defined in

node_modules/csstype/index.d.ts:4236

___

### scrollSnapTypeX

• `Optional` **scrollSnapTypeX**: `ScrollSnapTypeX` \| `NonNullable`<`undefined` \| `ScrollSnapTypeX`\>[]

The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.

**Syntax**: `none | mandatory | proximity`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.scrollSnapTypeX

#### Defined in

node_modules/csstype/index.d.ts:8064

___

### scrollSnapTypeY

• `Optional` **scrollSnapTypeY**: `ScrollSnapTypeY` \| `NonNullable`<`undefined` \| `ScrollSnapTypeY`\>[]

The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.

**Syntax**: `none | mandatory | proximity`

**Initial value**: `none`

**`Deprecated`**

#### Inherited from

Omit.scrollSnapTypeY

#### Defined in

node_modules/csstype/index.d.ts:8074

___

### scrollTimeline

• `Optional` **scrollTimeline**: `string`[] \| `ScrollTimeline`

The **`scroll-timeline`** CSS shorthand property defines a name that can be used to identify the source element of a scroll timeline, along with the scrollbar axis that should provide the timeline.

**Syntax**: `[<'scroll-timeline-name'> <'scroll-timeline-axis'>?]#`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-timeline

#### Inherited from

Omit.scrollTimeline

#### Defined in

node_modules/csstype/index.d.ts:5825

___

### scrollTimelineAxis

• `Optional` **scrollTimelineAxis**: `string`[] \| `ScrollTimelineAxis`

The **`scroll-timeline-axis`** CSS property can be used to specify the scrollbar that will be used to provide the timeline for a scroll-timeline animation.

**Syntax**: `[ block | inline | vertical | horizontal ]#`

**Initial value**: `block`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-axis

#### Inherited from

Omit.scrollTimelineAxis

#### Defined in

node_modules/csstype/index.d.ts:4250

___

### scrollTimelineName

• `Optional` **scrollTimelineName**: `string`[] \| `ScrollTimelineName`

The **`scroll-timeline-name`** CSS property defines a name that can be used to identify an element as the source of a scroll timeline for an animation.

**Syntax**: `none | <custom-ident>#`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scroll-timeline-name

#### Inherited from

Omit.scrollTimelineName

#### Defined in

node_modules/csstype/index.d.ts:4264

___

### scrollbarColor

• `Optional` **scrollbarColor**: `string`[] \| `ScrollbarColor`

The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.

**Syntax**: `auto | <color>{2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **64**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scrollbar-color

#### Inherited from

Omit.scrollbarColor

#### Defined in

node_modules/csstype/index.d.ts:4278

___

### scrollbarGutter

• `Optional` **scrollbarGutter**: `string`[] \| `ScrollbarGutter`

The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.

**Syntax**: `auto | stable && both-edges?`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **94** | **97**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter

#### Inherited from

Omit.scrollbarGutter

#### Defined in

node_modules/csstype/index.d.ts:4292

___

### scrollbarWidth

• `Optional` **scrollbarWidth**: `ScrollbarWidth` \| `NonNullable`<`undefined` \| `ScrollbarWidth`\>[]

The **`scrollbar-width`** property allows the author to set the maximum thickness of an element's scrollbars when they are shown.

**Syntax**: `auto | thin | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **64**  |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/scrollbar-width

#### Inherited from

Omit.scrollbarWidth

#### Defined in

node_modules/csstype/index.d.ts:4306

___

### shapeImageThreshold

• `Optional` **shapeImageThreshold**: `ShapeImageThreshold` \| `NonNullable`<`undefined` \| `ShapeImageThreshold`\>[]

The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.

**Syntax**: `<alpha-value>`

**Initial value**: `0.0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **37** | **62**  | **10.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold

#### Inherited from

Omit.shapeImageThreshold

#### Defined in

node_modules/csstype/index.d.ts:4320

___

### shapeMargin

• `Optional` **shapeMargin**: `ShapeMargin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `ShapeMargin`<`string` \| `number`\>\>[]

The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **37** | **62**  | **10.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/shape-margin

#### Inherited from

Omit.shapeMargin

#### Defined in

node_modules/csstype/index.d.ts:4334

___

### shapeOutside

• `Optional` **shapeOutside**: `string`[] \| `ShapeOutside`

The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.

**Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **37** | **62**  | **10.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/shape-outside

#### Inherited from

Omit.shapeOutside

#### Defined in

node_modules/csstype/index.d.ts:4348

___

### shapeRendering

• `Optional` **shapeRendering**: `ShapeRendering` \| `NonNullable`<`undefined` \| `ShapeRendering`\>[]

#### Inherited from

Omit.shapeRendering

#### Defined in

node_modules/csstype/index.d.ts:8876

___

### stopColor

• `Optional` **stopColor**: `string`[] \| `StopColor`

#### Inherited from

Omit.stopColor

#### Defined in

node_modules/csstype/index.d.ts:8877

___

### stopOpacity

• `Optional` **stopOpacity**: `StopOpacity` \| `NonNullable`<`undefined` \| `StopOpacity`\>[]

#### Inherited from

Omit.stopOpacity

#### Defined in

node_modules/csstype/index.d.ts:8878

___

### stroke

• `Optional` **stroke**: `string`[] \| `Stroke`

#### Inherited from

Omit.stroke

#### Defined in

node_modules/csstype/index.d.ts:8879

___

### strokeDasharray

• `Optional` **strokeDasharray**: `StrokeDasharray`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `StrokeDasharray`<`string` \| `number`\>\>[]

#### Inherited from

Omit.strokeDasharray

#### Defined in

node_modules/csstype/index.d.ts:8880

___

### strokeDashoffset

• `Optional` **strokeDashoffset**: `StrokeDashoffset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `StrokeDashoffset`<`string` \| `number`\>\>[]

#### Inherited from

Omit.strokeDashoffset

#### Defined in

node_modules/csstype/index.d.ts:8881

___

### strokeLinecap

• `Optional` **strokeLinecap**: `StrokeLinecap` \| `NonNullable`<`undefined` \| `StrokeLinecap`\>[]

#### Inherited from

Omit.strokeLinecap

#### Defined in

node_modules/csstype/index.d.ts:8882

___

### strokeLinejoin

• `Optional` **strokeLinejoin**: `StrokeLinejoin` \| `NonNullable`<`undefined` \| `StrokeLinejoin`\>[]

#### Inherited from

Omit.strokeLinejoin

#### Defined in

node_modules/csstype/index.d.ts:8883

___

### strokeMiterlimit

• `Optional` **strokeMiterlimit**: `StrokeMiterlimit` \| `NonNullable`<`undefined` \| `StrokeMiterlimit`\>[]

#### Inherited from

Omit.strokeMiterlimit

#### Defined in

node_modules/csstype/index.d.ts:8884

___

### strokeOpacity

• `Optional` **strokeOpacity**: `StrokeOpacity` \| `NonNullable`<`undefined` \| `StrokeOpacity`\>[]

#### Inherited from

Omit.strokeOpacity

#### Defined in

node_modules/csstype/index.d.ts:8885

___

### strokeWidth

• `Optional` **strokeWidth**: `StrokeWidth`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `StrokeWidth`<`string` \| `number`\>\>[]

#### Inherited from

Omit.strokeWidth

#### Defined in

node_modules/csstype/index.d.ts:8886

___

### tabSize

• `Optional` **tabSize**: `TabSize`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TabSize`<`string` \| `number`\>\>[]

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **21** | **91**  | **7**  | n/a  | No  |
|        | 4 _-x-_ |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/tab-size

#### Inherited from

Omit.tabSize

#### Defined in

node_modules/csstype/index.d.ts:4363

___

### tableLayout

• `Optional` **tableLayout**: `TableLayout` \| `NonNullable`<`undefined` \| `TableLayout`\>[]

The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.

**Syntax**: `auto | fixed`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **14** |  **1**  | **1**  | **12** | **5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/table-layout

#### Inherited from

Omit.tableLayout

#### Defined in

node_modules/csstype/index.d.ts:4377

___

### textAlign

• `Optional` **textAlign**: `TextAlign` \| `NonNullable`<`undefined` \| `TextAlign`\>[]

The **`text-align`** CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.

**Syntax**: `start | end | left | right | center | justify | match-parent`

**Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-align

#### Inherited from

Omit.textAlign

#### Defined in

node_modules/csstype/index.d.ts:4391

___

### textAlignLast

• `Optional` **textAlignLast**: `TextAlignLast` \| `NonNullable`<`undefined` \| `TextAlignLast`\>[]

The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

**Syntax**: `auto | start | end | left | right | center | justify`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **47** | **49**  | **16** | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-align-last

#### Inherited from

Omit.textAlignLast

#### Defined in

node_modules/csstype/index.d.ts:4405

___

### textAnchor

• `Optional` **textAnchor**: `TextAnchor` \| `NonNullable`<`undefined` \| `TextAnchor`\>[]

#### Inherited from

Omit.textAnchor

#### Defined in

node_modules/csstype/index.d.ts:8887

___

### textCombineUpright

• `Optional` **textCombineUpright**: `string`[] \| `TextCombineUpright`

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

|           Chrome           | Firefox |            Safari            | Edge  |                   IE                   |
| :------------------------: | :-----: | :--------------------------: | :---: | :------------------------------------: |
|           **48**           | **48**  |         **preview**          | 15-79 | **11** _(-ms-text-combine-horizontal)_ |
| 9 _(-webkit-text-combine)_ |         | 5.1 _(-webkit-text-combine)_ |       |                                        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-combine-upright

#### Inherited from

Omit.textCombineUpright

#### Defined in

node_modules/csstype/index.d.ts:4420

___

### textDecoration

• `Optional` **textDecoration**: `TextDecoration`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TextDecoration`<`string` \| `number`\>\>[]

The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.

**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-decoration

#### Inherited from

Omit.textDecoration

#### Defined in

node_modules/csstype/index.d.ts:5837

___

### textDecorationColor

• `Optional` **textDecorationColor**: `string`[] \| `TextDecorationColor`

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **36**  | **12.1** | n/a  | No  |
|        |         | 8 _-x-_  |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-decoration-color

#### Inherited from

Omit.textDecorationColor

#### Defined in

node_modules/csstype/index.d.ts:4435

___

### textDecorationLine

• `Optional` **textDecorationLine**: `string`[] \| `TextDecorationLine`

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **36**  | **12.1** | n/a  | No  |
|        |         | 8 _-x-_  |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-decoration-line

#### Inherited from

Omit.textDecorationLine

#### Defined in

node_modules/csstype/index.d.ts:4450

___

### textDecorationSkip

• `Optional` **textDecorationSkip**: `string`[] \| `TextDecorationSkip`

The **`text-decoration-skip`** CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`

**Initial value**: `objects`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| 57-64  |   No    | **12.1** | n/a  | No  |
|        |         | 7 _-x-_  |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip

#### Inherited from

Omit.textDecorationSkip

#### Defined in

node_modules/csstype/index.d.ts:4465

___

### textDecorationSkipInk

• `Optional` **textDecorationSkipInk**: `TextDecorationSkipInk` \| `NonNullable`<`undefined` \| `TextDecorationSkipInk`\>[]

The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.

**Syntax**: `auto | all | none`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **64** | **70**  | **15.4** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink

#### Inherited from

Omit.textDecorationSkipInk

#### Defined in

node_modules/csstype/index.d.ts:4479

___

### textDecorationStyle

• `Optional` **textDecorationStyle**: `TextDecorationStyle` \| `NonNullable`<`undefined` \| `TextDecorationStyle`\>[]

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **57** | **36**  | **12.1** | n/a  | No  |
|        |         | 8 _-x-_  |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-decoration-style

#### Inherited from

Omit.textDecorationStyle

#### Defined in

node_modules/csstype/index.d.ts:4494

___

### textDecorationThickness

• `Optional` **textDecorationThickness**: `TextDecorationThickness`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TextDecorationThickness`<`string` \| `number`\>\>[]

The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

**Syntax**: `auto | from-font | <length> | <percentage> `

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **89** | **70**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness

#### Inherited from

Omit.textDecorationThickness

#### Defined in

node_modules/csstype/index.d.ts:4508

___

### textEmphasis

• `Optional` **textEmphasis**: `string`[] \| `TextEmphasis`

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

|  Chrome  | Firefox | Safari | Edge | IE  |
| :------: | :-----: | :----: | :--: | :-: |
|  **99**  | **46**  | **7**  | n/a  | No  |
| 25 _-x-_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-emphasis

#### Inherited from

Omit.textEmphasis

#### Defined in

node_modules/csstype/index.d.ts:5850

___

### textEmphasisColor

• `Optional` **textEmphasisColor**: `string`[] \| `TextEmphasisColor`

The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

|  Chrome  | Firefox | Safari | Edge | IE  |
| :------: | :-----: | :----: | :--: | :-: |
|  **99**  | **46**  | **7**  | n/a  | No  |
| 25 _-x-_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color

#### Inherited from

Omit.textEmphasisColor

#### Defined in

node_modules/csstype/index.d.ts:4523

___

### textEmphasisPosition

• `Optional` **textEmphasisPosition**: `string`[] \| `TextEmphasisPosition`

The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: `[ over | under ] && [ right | left ]`

**Initial value**: `over right`

|  Chrome  | Firefox | Safari | Edge | IE  |
| :------: | :-----: | :----: | :--: | :-: |
|  **99**  | **46**  | **7**  | n/a  | No  |
| 25 _-x-_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position

#### Inherited from

Omit.textEmphasisPosition

#### Defined in

node_modules/csstype/index.d.ts:4538

___

### textEmphasisStyle

• `Optional` **textEmphasisStyle**: `string`[] \| `TextEmphasisStyle`

The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.

**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`

**Initial value**: `none`

|  Chrome  | Firefox | Safari | Edge | IE  |
| :------: | :-----: | :----: | :--: | :-: |
|  **99**  | **46**  | **7**  | n/a  | No  |
| 25 _-x-_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style

#### Inherited from

Omit.textEmphasisStyle

#### Defined in

node_modules/csstype/index.d.ts:4553

___

### textIndent

• `Optional` **textIndent**: `TextIndent`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TextIndent`<`string` \| `number`\>\>[]

The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.

**Syntax**: `<length-percentage> && hanging? && each-line?`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-indent

#### Inherited from

Omit.textIndent

#### Defined in

node_modules/csstype/index.d.ts:4567

___

### textJustify

• `Optional` **textJustify**: `TextJustify` \| `NonNullable`<`undefined` \| `TextJustify`\>[]

The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.

**Syntax**: `auto | inter-character | inter-word | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
|  n/a   | **55**  |   No   | **12** | **11** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-justify

#### Inherited from

Omit.textJustify

#### Defined in

node_modules/csstype/index.d.ts:4581

___

### textOrientation

• `Optional` **textOrientation**: `TextOrientation` \| `NonNullable`<`undefined` \| `TextOrientation`\>[]

The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

**Syntax**: `mixed | upright | sideways`

**Initial value**: `mixed`

|  Chrome  | Firefox |  Safari   | Edge | IE  |
| :------: | :-----: | :-------: | :--: | :-: |
|  **48**  | **41**  |  **14**   | n/a  | No  |
| 11 _-x-_ |         | 5.1 _-x-_ |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-orientation

#### Inherited from

Omit.textOrientation

#### Defined in

node_modules/csstype/index.d.ts:4596

___

### textOverflow

• `Optional` **textOverflow**: `string`[] \| `TextOverflow`

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **7**  | **1.3** | **12** | **6** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-overflow

#### Inherited from

Omit.textOverflow

#### Defined in

node_modules/csstype/index.d.ts:4610

___

### textRendering

• `Optional` **textRendering**: `TextRendering` \| `NonNullable`<`undefined` \| `TextRendering`\>[]

The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.

**Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **4**  |  **1**  | **5**  | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-rendering

#### Inherited from

Omit.textRendering

#### Defined in

node_modules/csstype/index.d.ts:4624

___

### textShadow

• `Optional` **textShadow**: `string`[] \| `TextShadow`

The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.

**Syntax**: `none | <shadow-t>#`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **2**  | **3.5** | **1.1** | **12** | **10** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-shadow

#### Inherited from

Omit.textShadow

#### Defined in

node_modules/csstype/index.d.ts:4638

___

### textSizeAdjust

• `Optional` **textSizeAdjust**: `string`[] \| `TextSizeAdjust`

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **54** |   No    |   No   | **79** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-size-adjust

#### Inherited from

Omit.textSizeAdjust

#### Defined in

node_modules/csstype/index.d.ts:4652

___

### textTransform

• `Optional` **textTransform**: `TextTransform` \| `NonNullable`<`undefined` \| `TextTransform`\>[]

The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

**Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-transform

#### Inherited from

Omit.textTransform

#### Defined in

node_modules/csstype/index.d.ts:4666

___

### textUnderlineOffset

• `Optional` **textUnderlineOffset**: `TextUnderlineOffset`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TextUnderlineOffset`<`string` \| `number`\>\>[]

The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.

**Syntax**: `auto | <length> | <percentage> `

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **70**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-underline-offset

#### Inherited from

Omit.textUnderlineOffset

#### Defined in

node_modules/csstype/index.d.ts:4680

___

### textUnderlinePosition

• `Optional` **textUnderlinePosition**: `string`[] \| `TextUnderlinePosition`

The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.

**Syntax**: `auto | from-font | [ under || [ left | right ] ]`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |  IE   |
| :----: | :-----: | :------: | :----: | :---: |
| **33** | **74**  | **12.1** | **12** | **6** |
|        |         | 9 _-x-_  |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-underline-position

#### Inherited from

Omit.textUnderlinePosition

#### Defined in

node_modules/csstype/index.d.ts:4695

___

### top

• `Optional` **top**: `Top`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Top`<`string` \| `number`\>\>[]

The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/top

#### Inherited from

Omit.top

#### Defined in

node_modules/csstype/index.d.ts:4709

___

### touchAction

• `Optional` **touchAction**: `string`[] \| `TouchAction`

The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |    IE    |
| :----: | :-----: | :----: | :----: | :------: |
| **36** | **52**  | **13** | **12** |  **11**  |
|        |         |        |        | 10 _-x-_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/touch-action

#### Inherited from

Omit.touchAction

#### Defined in

node_modules/csstype/index.d.ts:4724

___

### transform

• `Optional` **transform**: `string`[] \| `Transform`

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

| Chrome  | Firefox |  Safari   |  Edge  |   IE    |
| :-----: | :-----: | :-------: | :----: | :-----: |
| **36**  | **16**  |   **9**   | **12** | **10**  |
| 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transform

#### Inherited from

Omit.transform

#### Defined in

node_modules/csstype/index.d.ts:4739

___

### transformBox

• `Optional` **transformBox**: `TransformBox` \| `NonNullable`<`undefined` \| `TransformBox`\>[]

The **`transform-box`** CSS property defines the layout box to which the `transform`, individual transform properties `translate`,`scale`, and `rotate`, and `transform-origin` properties relate.

**Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`

**Initial value**: `view-box`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **64** | **55**  | **11** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transform-box

#### Inherited from

Omit.transformBox

#### Defined in

node_modules/csstype/index.d.ts:4753

___

### transformOrigin

• `Optional` **transformOrigin**: `TransformOrigin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `TransformOrigin`<`string` \| `number`\>\>[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
| :-----: | :-------: | :-----: | :----: | :-----: |
| **36**  |  **16**   |  **9**  | **12** | **10**  |
| 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transform-origin

#### Inherited from

Omit.transformOrigin

#### Defined in

node_modules/csstype/index.d.ts:4768

___

### transformStyle

• `Optional` **transformStyle**: `TransformStyle` \| `NonNullable`<`undefined` \| `TransformStyle`\>[]

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

|  Chrome  | Firefox  | Safari  |  Edge  | IE  |
| :------: | :------: | :-----: | :----: | :-: |
|  **36**  |  **16**  |  **9**  | **12** | No  |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transform-style

#### Inherited from

Omit.transformStyle

#### Defined in

node_modules/csstype/index.d.ts:4783

___

### transition

• `Optional` **transition**: `string`[] \| `Transition`<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transition

#### Inherited from

Omit.transition

#### Defined in

node_modules/csstype/index.d.ts:5863

___

### transitionDelay

• `Optional` **transitionDelay**: `string`[] \| `TransitionDelay`<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **26**  | **16**  |  **9**  | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transition-delay

#### Inherited from

Omit.transitionDelay

#### Defined in

node_modules/csstype/index.d.ts:4798

___

### transitionDuration

• `Optional` **transitionDuration**: `string`[] \| `TransitionDuration`<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transition-duration

#### Inherited from

Omit.transitionDuration

#### Defined in

node_modules/csstype/index.d.ts:4813

___

### transitionProperty

• `Optional` **transitionProperty**: `string`[] \| `TransitionProperty`

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transition-property

#### Inherited from

Omit.transitionProperty

#### Defined in

node_modules/csstype/index.d.ts:4828

___

### transitionTimingFunction

• `Optional` **transitionTimingFunction**: `string`[] \| `TransitionTimingFunction`

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transition-timing-function

#### Inherited from

Omit.transitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:4843

___

### translate

• `Optional` **translate**: `Translate`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Translate`<`string` \| `number`\>\>[]

The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

**Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`

**Initial value**: `none`

| Chrome  | Firefox |  Safari  | Edge | IE  |
| :-----: | :-----: | :------: | :--: | :-: |
| **104** | **72**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/translate

#### Inherited from

Omit.translate

#### Defined in

node_modules/csstype/index.d.ts:4857

___

### typography

• `Optional` **typography**: `TypographyKeys`

The **`typography`** property  is shorthand for the CSS properties **`font-family`**, **`font-weight`**, **`font-size`**, **`line-height`**, **`letter-spacing`** and **`text-transform``**.
It takes the values defined under `theme.typography` and spreads them on the element.

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

 - https://developer.mozilla.org/docs/Web/CSS/font-family
 - https://developer.mozilla.org/docs/Web/CSS/font-weight
 - https://developer.mozilla.org/docs/Web/CSS/font-size
 - https://developer.mozilla.org/docs/Web/CSS/line-height
 - https://developer.mozilla.org/docs/Web/CSS/letter-spacing
 - https://developer.mozilla.org/docs/Web/CSS/text-transform

#### Inherited from

[AliasesCSSProperties](AliasesCSSProperties.md).[typography](AliasesCSSProperties.md#typography)

#### Defined in

[src/styleTypes.ts:270](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L270)

___

### unicodeBidi

• `Optional` **unicodeBidi**: `UnicodeBidi` \| `NonNullable`<`undefined` \| `UnicodeBidi`\>[]

The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.

**Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  |   IE    |
| :----: | :-----: | :-----: | :----: | :-----: |
| **2**  |  **1**  | **1.3** | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/unicode-bidi

#### Inherited from

Omit.unicodeBidi

#### Defined in

node_modules/csstype/index.d.ts:4871

___

### userSelect

• `Optional` **userSelect**: `UserSelect` \| `NonNullable`<`undefined` \| `UserSelect`\>[]

The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

| Chrome  | Firefox |   Safari    |   Edge   |      IE      |
| :-----: | :-----: | :---------: | :------: | :----------: |
| **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ |
| 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/user-select

#### Inherited from

Omit.userSelect

#### Defined in

node_modules/csstype/index.d.ts:4886

___

### vectorEffect

• `Optional` **vectorEffect**: `VectorEffect` \| `NonNullable`<`undefined` \| `VectorEffect`\>[]

#### Inherited from

Omit.vectorEffect

#### Defined in

node_modules/csstype/index.d.ts:8891

___

### verticalAlign

• `Optional` **verticalAlign**: `VerticalAlign`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `VerticalAlign`<`string` \| `number`\>\>[]

The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.

**Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`

**Initial value**: `baseline`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/vertical-align

#### Inherited from

Omit.verticalAlign

#### Defined in

node_modules/csstype/index.d.ts:4900

___

### viewTransitionName

• `Optional` **viewTransitionName**: `string`[] \| `ViewTransitionName`

The **`view-transition-name`** CSS property provides the selected element with a distinct identifying name (a `<custom-ident>`) and causes it to participate in a separate view transition from the root view transition — or no view transition if the `none` value is specified.

**Syntax**: `none | <custom-ident>`

**Initial value**: `none`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **111** |   No    |   No   | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/view-transition-name

#### Inherited from

Omit.viewTransitionName

#### Defined in

node_modules/csstype/index.d.ts:4914

___

### visibility

• `Optional` **visibility**: `Visibility` \| `NonNullable`<`undefined` \| `Visibility`\>[]

The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.

**Syntax**: `visible | hidden | collapse`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/visibility

#### Inherited from

Omit.visibility

#### Defined in

node_modules/csstype/index.d.ts:4928

___

### whiteSpace

• `Optional` **whiteSpace**: `WhiteSpace` \| `NonNullable`<`undefined` \| `WhiteSpace`\>[]

The **`white-space`** CSS property sets how white space inside an element is handled.

**Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/white-space

#### Inherited from

Omit.whiteSpace

#### Defined in

node_modules/csstype/index.d.ts:4942

___

### widows

• `Optional` **widows**: `Widows` \| `NonNullable`<`undefined` \| `Widows`\>[]

The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.

**Syntax**: `<integer>`

**Initial value**: `2`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **25** |   No    | **1.3** | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/widows

#### Inherited from

Omit.widows

#### Defined in

node_modules/csstype/index.d.ts:4956

___

### width

• `Optional` **width**: `Width`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Width`<`string` \| `number`\>\>[]

The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/width

#### Inherited from

Omit.width

#### Defined in

node_modules/csstype/index.d.ts:4970

___

### willChange

• `Optional` **willChange**: `string`[] \| `WillChange`

The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.

**Syntax**: `auto | <animateable-feature>#`

**Initial value**: `auto`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
| **36** | **36**  | **9.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/will-change

#### Inherited from

Omit.willChange

#### Defined in

node_modules/csstype/index.d.ts:4984

___

### wordBreak

• `Optional` **wordBreak**: `WordBreak` \| `NonNullable`<`undefined` \| `WordBreak`\>[]

The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: `normal | break-all | keep-all | break-word`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  | **15**  | **3**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/word-break

#### Inherited from

Omit.wordBreak

#### Defined in

node_modules/csstype/index.d.ts:4998

___

### wordSpacing

• `Optional` **wordSpacing**: `WordSpacing`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `WordSpacing`<`string` \| `number`\>\>[]

The **`word-spacing`** CSS property sets the length of space between words and between tags.

**Syntax**: `normal | <length>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **6** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/word-spacing

#### Inherited from

Omit.wordSpacing

#### Defined in

node_modules/csstype/index.d.ts:5012

___

### wordWrap

• `Optional` **wordWrap**: `WordWrap` \| `NonNullable`<`undefined` \| `WordWrap`\>[]

The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

**Syntax**: `normal | break-word`

**Initial value**: `normal`

#### Inherited from

Omit.wordWrap

#### Defined in

node_modules/csstype/index.d.ts:5020

___

### writingMode

• `Optional` **writingMode**: `WritingMode` \| `NonNullable`<`undefined` \| `WritingMode`\>[]

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

| Chrome  | Firefox |  Safari   |  Edge  |  IE   |
| :-----: | :-----: | :-------: | :----: | :---: |
| **48**  | **41**  | **10.1**  | **12** | **9** |
| 8 _-x-_ |         | 5.1 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/writing-mode

#### Inherited from

Omit.writingMode

#### Defined in

node_modules/csstype/index.d.ts:5035

___

### zIndex

• `Optional` **zIndex**: `string` \| `string` & {} \| `number` & {}

The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a higher z-index cover those with a lower one.

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/z-index

#### Inherited from

[OverwriteCSSProperties](OverwriteCSSProperties.md).[zIndex](OverwriteCSSProperties.md#zindex)

#### Defined in

[src/styleTypes.ts:349](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L349)

___

### zoom

• `Optional` **zoom**: `Zoom` \| `NonNullable`<`undefined` \| `Zoom`\>[]

The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.

**Syntax**: `normal | reset | <number> | <percentage>`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  |   IE    |
| :----: | :-----: | :-----: | :----: | :-----: |
| **1**  |   No    | **3.1** | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/zoom

#### Inherited from

Omit.zoom

#### Defined in

node_modules/csstype/index.d.ts:5063
