---
id: "AliasesCSSProperties"
title: "Boost"
sidebar_label: "AliasesCSSProperties"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- **`AliasesCSSProperties`**

  ↳ [`AllSystemCSSProperties`](AllSystemCSSProperties.md)

## Properties

### bgcolor

• `Optional` **bgcolor**: `string`[] \| [`SimplifiedPaletteVars`](../modules.md#simplifiedpalettevars) \| `BackgroundColor`

The **`background-color`** CSS property sets the background color of an element.

**Initial value**: `transparent`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-color

#### Defined in

[src/styleTypes.ts:28](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L28)

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

#### Defined in

[src/styleTypes.ts:282](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L282)

___

### gridColumnSpan

• `Optional` **gridColumnSpan**: ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12`` \| ``"full"``

Makes the element span n-columns wide. It has no effect if its parent is not a grid container.
"full" will take the full width of the grid container.

#### Defined in

[src/styleTypes.ts:287](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L287)

___

### gridRowSpan

• `Optional` **gridRowSpan**: `number` \| ``"full"``

Makes the element span n-rows high. It has no effect if its parent is not a grid container.
"full" will take the full height of the grid container.

#### Defined in

[src/styleTypes.ts:292](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L292)

___

### m

• `Optional` **m**: `Margin`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Margin`<`string` \| `number`\>\>[]

The **`margin`** CSS property sets the margin on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin

#### Defined in

[src/styleTypes.ts:38](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L38)

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

#### Defined in

[src/styleTypes.ts:142](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L142)

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

#### Defined in

[src/styleTypes.ts:74](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L74)

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

#### Defined in

[src/styleTypes.ts:86](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L86)

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

#### Defined in

[src/styleTypes.ts:62](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L62)

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

#### Defined in

[src/styleTypes.ts:128](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L128)

___

### p

• `Optional` **p**: `Padding`<`string` \| `number`\> \| `NonNullable`<`undefined` \| `Padding`<`string` \| `number`\>\>[]

The **`padding`** CSS property sets the padding on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding

#### Defined in

[src/styleTypes.ts:152](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L152)

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

#### Defined in

[src/styleTypes.ts:252](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L252)

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

#### Defined in

[src/styleTypes.ts:188](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L188)

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

#### Defined in

[src/styleTypes.ts:200](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L200)

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

#### Defined in

[src/styleTypes.ts:176](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L176)

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

#### Defined in

[src/styleTypes.ts:239](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L239)

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

#### Defined in

[src/styleTypes.ts:270](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L270)
