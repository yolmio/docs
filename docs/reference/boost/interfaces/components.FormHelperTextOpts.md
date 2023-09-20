---
id: "components.FormHelperTextOpts"
title: "Boost"
sidebar_label: "FormHelperTextOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[components](../namespaces/components.md).FormHelperTextOpts

## Hierarchy

- `SingleElementComponentOpts`

  ↳ **`FormHelperTextOpts`**

## Properties

### children

• **children**: [`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/formHelperText.d.ts:4

___

### dynamicClasses

• `Optional` **dynamicClasses**: [`DynamicClass`](yom.DynamicClass.md)[]

#### Inherited from

SingleElementComponentOpts.dynamicClasses

#### Defined in

@yolm/boost/dist/components/utils.d.ts:17

___

### floating

• `Optional` **floating**: [`FloatingOpts`](yom.FloatingOpts.md)

#### Inherited from

SingleElementComponentOpts.floating

#### Defined in

@yolm/boost/dist/components/utils.d.ts:18

___

### focusLock

• `Optional` **focusLock**: `Object`

#### Inherited from

SingleElementComponentOpts.focusLock

#### Defined in

@yolm/boost/dist/components/utils.d.ts:19

___

### on

• `Optional` **on**: `Partial`<`Record`<[`EventHandlerName`](../namespaces/yom.md#eventhandlername), `HelperEventHandler`\>\>

#### Inherited from

SingleElementComponentOpts.on

#### Defined in

@yolm/boost/dist/components/utils.d.ts:21

___

### props

• `Optional` **props**: `Partial`<`Record`<``"string"`` \| ``"path"`` \| ``"style"`` \| ``"low"`` \| ``"high"`` \| ``"cite"`` \| ``"data"`` \| ``"form"`` \| ``"label"`` \| ``"slot"`` \| ``"span"`` \| ``"summary"`` \| ``"title"`` \| ``"clipPath"`` \| ``"filter"`` \| ``"mask"`` \| ``"pattern"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"color"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"yolmFocusKey"`` \| ``"accept"`` \| ``"acceptCharset"`` \| ``"action"`` \| ``"allowFullScreen"`` \| ``"allowTransparency"`` \| ``"alt"`` \| ``"as"`` \| ``"async"`` \| ``"autoComplete"`` \| ``"autoFocus"`` \| ``"autoPlay"`` \| ``"capture"`` \| ``"cellPadding"`` \| ``"cellSpacing"`` \| ``"charSet"`` \| ``"challenge"`` \| ``"checked"`` \| ``"classID"`` \| ``"cols"`` \| ``"colSpan"`` \| ``"content"`` \| ``"controls"`` \| ``"coords"`` \| ``"crossOrigin"`` \| ``"dateTime"`` \| ``"default"`` \| ``"defer"`` \| ``"disabled"`` \| ``"download"`` \| ``"encType"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"frameBorder"`` \| ``"headers"`` \| ``"height"`` \| ``"href"`` \| ``"hrefLang"`` \| ``"htmlFor"`` \| ``"httpEquiv"`` \| ``"indeterminate"`` \| ``"integrity"`` \| ``"keyParams"`` \| ``"keyType"`` \| ``"kind"`` \| ``"list"`` \| ``"loop"`` \| ``"manifest"`` \| ``"marginHeight"`` \| ``"marginWidth"`` \| ``"max"`` \| ``"maxLength"`` \| ``"media"`` \| ``"mediaGroup"`` \| ``"method"`` \| ``"min"`` \| ``"minLength"`` \| ``"multiple"`` \| ``"muted"`` \| ``"name"`` \| ``"nonce"`` \| ``"noValidate"`` \| ``"open"`` \| ``"optimum"`` \| ``"playsInline"`` \| ``"poster"`` \| ``"preload"`` \| ``"readOnly"`` \| ``"rel"`` \| ``"required"`` \| ``"reversed"`` \| ``"rows"`` \| ``"rowSpan"`` \| ``"sandbox"`` \| ``"scope"`` \| ``"scoped"`` \| ``"scrolling"`` \| ``"seamless"`` \| ``"selected"`` \| ``"shape"`` \| ``"size"`` \| ``"sizes"`` \| ``"src"`` \| ``"srcDoc"`` \| ``"srcLang"`` \| ``"srcSet"`` \| ``"start"`` \| ``"step"`` \| ``"target"`` \| ``"type"`` \| ``"useMap"`` \| ``"value"`` \| ``"width"`` \| ``"wmode"`` \| ``"wrap"`` \| ``"accentHeight"`` \| ``"accumulate"`` \| ``"additive"`` \| ``"alignmentBaseline"`` \| ``"text-after-edge"`` \| ``"allowReorder"`` \| ``"alphabetic"`` \| ``"amplitude"`` \| ``"arabicForm"`` \| ``"ascent"`` \| ``"attributeName"`` \| ``"attributeType"`` \| ``"autoReverse"`` \| ``"azimuth"`` \| ``"baseFrequency"`` \| ``"baselineShift"`` \| ``"baseProfile"`` \| ``"bbox"`` \| ``"begin"`` \| ``"bias"`` \| ``"by"`` \| ``"calcMode"`` \| ``"capHeight"`` \| ``"clip"`` \| ``"clipPathUnits"`` \| ``"clipRule"`` \| ``"colorInterpolation"`` \| ``"colorInterpolationFilters"`` \| ``"colorProfile"`` \| ``"colorRendering"`` \| ``"contentScriptType"`` \| ``"contentStyleType"`` \| ``"cursor"`` \| ``"cx"`` \| ``"cy"`` \| ``"d"`` \| ``"decelerate"`` \| ``"descent"`` \| ``"diffuseConstant"`` \| ``"direction"`` \| ``"display"`` \| ``"divisor"`` \| ``"dominantBaseline"`` \| ``"dur"`` \| ``"dx"`` \| ``"dy"`` \| ``"edgeMode"`` \| ``"elevation"`` \| ``"enableBackground"`` \| ``"end"`` \| ``"exponent"`` \| ``"externalResourcesRequired"`` \| ``"fill"`` \| ``"fillOpacity"`` \| ``"fillRule"`` \| ``"filterRes"`` \| ``"filterUnits"`` \| ``"floodColor"`` \| ``"floodOpacity"`` \| ``"focusable"`` \| ``"fontFamily"`` \| ``"fontSize"`` \| ``"fontSizeAdjust"`` \| ``"fontStretch"`` \| ``"fontStyle"`` \| ``"fontVariant"`` \| ``"fontWeight"`` \| ``"format"`` \| ``"from"`` \| ``"fx"`` \| ``"fy"`` \| ``"g1"`` \| ``"g2"`` \| ``"glyphName"`` \| ``"glyphOrientationHorizontal"`` \| ``"glyphOrientationVertical"`` \| ``"glyphRef"`` \| ``"gradientTransform"`` \| ``"gradientUnits"`` \| ``"hanging"`` \| ``"horizAdvX"`` \| ``"horizOriginX"`` \| ``"ideographic"`` \| ``"imageRendering"`` \| ``"in2"`` \| ``"in"`` \| ``"intercept"`` \| ``"k1"`` \| ``"k2"`` \| ``"k3"`` \| ``"k4"`` \| ``"k"`` \| ``"kernelMatrix"`` \| ``"kernelUnitLength"`` \| ``"kerning"`` \| ``"keyPoints"`` \| ``"keySplines"`` \| ``"keyTimes"`` \| ``"lengthAdjust"`` \| ``"letterSpacing"`` \| ``"lightingColor"`` \| ``"limitingConeAngle"`` \| ``"local"`` \| ``"markerEnd"`` \| ``"markerHeight"`` \| ``"markerMid"`` \| ``"markerStart"`` \| ``"markerUnits"`` \| ``"markerWidth"`` \| ``"maskContentUnits"`` \| ``"maskUnits"`` \| ``"mathematical"`` \| ``"mode"`` \| ``"numOctaves"`` \| ``"offset"`` \| ``"opacity"`` \| ``"operator"`` \| ``"order"`` \| ``"orient"`` \| ``"orientation"`` \| ``"origin"`` \| ``"overflow"`` \| ``"overlinePosition"`` \| ``"overlineThickness"`` \| ``"paintOrder"`` \| ``"panose1"`` \| ``"pathLength"`` \| ``"patternContentUnits"`` \| ``"patternTransform"`` \| ``"patternUnits"`` \| ``"pointerEvents"`` \| ``"points"`` \| ``"pointsAtX"`` \| ``"pointsAtY"`` \| ``"pointsAtZ"`` \| ``"preserveAlpha"`` \| ``"preserveAspectRatio"`` \| ``"primitiveUnits"`` \| ``"r"`` \| ``"radius"`` \| ``"refX"`` \| ``"refY"`` \| ``"renderingIntent"`` \| ``"repeatCount"`` \| ``"repeatDur"`` \| ``"requiredExtensions"`` \| ``"requiredFeatures"`` \| ``"restart"`` \| ``"result"`` \| ``"rotate"`` \| ``"rx"`` \| ``"ry"`` \| ``"scale"`` \| ``"seed"`` \| ``"shapeRendering"`` \| ``"slope"`` \| ``"spacing"`` \| ``"specularConstant"`` \| ``"specularExponent"`` \| ``"speed"`` \| ``"spreadMethod"`` \| ``"startOffset"`` \| ``"stdDeviation"`` \| ``"stemh"`` \| ``"stemv"`` \| ``"stitchTiles"`` \| ``"stopColor"`` \| ``"stopOpacity"`` \| ``"strikethroughPosition"`` \| ``"strikethroughThickness"`` \| ``"stroke"`` \| ``"strokeDasharray"`` \| ``"strokeDashoffset"`` \| ``"strokeLinecap"`` \| ``"strokeLinejoin"`` \| ``"strokeMiterlimit"`` \| ``"strokeOpacity"`` \| ``"strokeWidth"`` \| ``"surfaceScale"`` \| ``"systemLanguage"`` \| ``"tableValues"`` \| ``"targetX"`` \| ``"targetY"`` \| ``"textAnchor"`` \| ``"textDecoration"`` \| ``"textLength"`` \| ``"textRendering"`` \| ``"to"`` \| ``"transform"`` \| ``"u1"`` \| ``"u2"`` \| ``"underlinePosition"`` \| ``"underlineThickness"`` \| ``"unicode"`` \| ``"unicodeBidi"`` \| ``"unicodeRange"`` \| ``"unitsPerEm"`` \| ``"vAlphabetic"`` \| ``"values"`` \| ``"vectorEffect"`` \| ``"version"`` \| ``"vertAdvY"`` \| ``"vertOriginX"`` \| ``"vertOriginY"`` \| ``"vHanging"`` \| ``"vIdeographic"`` \| ``"viewBox"`` \| ``"viewTarget"`` \| ``"visibility"`` \| ``"vMathematical"`` \| ``"widths"`` \| ``"wordSpacing"`` \| ``"writingMode"`` \| ``"x1"`` \| ``"x2"`` \| ``"x"`` \| ``"xChannelSelector"`` \| ``"xHeight"`` \| ``"xlinkActuate"`` \| ``"xlinkArcrole"`` \| ``"xlinkHref"`` \| ``"xlinkRole"`` \| ``"xlinkShow"`` \| ``"xlinkTitle"`` \| ``"xlinkType"`` \| ``"xmlBase"`` \| ``"xmlLang"`` \| ``"xmlns"`` \| ``"xmlnsXlink"`` \| ``"xmlSpace"`` \| ``"y1"`` \| ``"y2"`` \| ``"y"`` \| ``"yChannelSelector"`` \| ``"z"`` \| ``"zoomAndPan"``, [`SqlExpression`](../namespaces/yom.md#sqlexpression)\>\>

#### Inherited from

SingleElementComponentOpts.props

#### Defined in

@yolm/boost/dist/components/utils.d.ts:14

___

### scrollLock

• `Optional` **scrollLock**: [`ScrollLockOpts`](yom.ScrollLockOpts.md)

#### Inherited from

SingleElementComponentOpts.scrollLock

#### Defined in

@yolm/boost/dist/components/utils.d.ts:20

___

### style

• `Optional` **style**: `Record`<`string`, `string`\>

#### Inherited from

SingleElementComponentOpts.style

#### Defined in

@yolm/boost/dist/components/utils.d.ts:22

___

### styles

• `Optional` **styles**: [`Style`](../modules.md#style)

#### Inherited from

SingleElementComponentOpts.styles

#### Defined in

@yolm/boost/dist/components/utils.d.ts:15

___

### tag

• `Optional` **tag**: [`AllHtmlTags`](../namespaces/yom.md#allhtmltags)

#### Inherited from

SingleElementComponentOpts.tag

#### Defined in

@yolm/boost/dist/components/utils.d.ts:13

___

### testId

• `Optional` **testId**: `string`

#### Inherited from

SingleElementComponentOpts.testId

#### Defined in

@yolm/boost/dist/components/utils.d.ts:16
