---
id: "yom.ElementNode"
title: "Boost"
sidebar_label: "ElementNode"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).ElementNode

Represents an html or svg element

## Properties

### children

• `Optional` **children**: [`Node`](../namespaces/yom.md#node)

#### Defined in

[src/yom.ts:2041](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2041)

___

### classes

• `Optional` **classes**: `string`

#### Defined in

[src/yom.ts:2035](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2035)

___

### dynamicClasses

• `Optional` **dynamicClasses**: [`DynamicClass`](yom.DynamicClass.md)[]

#### Defined in

[src/yom.ts:2036](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2036)

___

### floating

• `Optional` **floating**: [`FloatingOpts`](yom.FloatingOpts.md)

#### Defined in

[src/yom.ts:2033](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2033)

___

### focusLock

• `Optional` **focusLock**: `Object`

#### Defined in

[src/yom.ts:2032](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2032)

___

### on

• `Optional` **on**: `Partial`<`Record`<[`EventHandlerName`](../namespaces/yom.md#eventhandlername), [`EventHandler`](../namespaces/yom.md#eventhandler)\>\>

#### Defined in

[src/yom.ts:2040](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2040)

___

### props

• `Optional` **props**: `Partial`<`Record`<``"string"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"slot"`` \| ``"spellCheck"`` \| ``"style"`` \| ``"tabIndex"`` \| ``"title"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"color"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"yolmFocusKey"`` \| ``"accept"`` \| ``"acceptCharset"`` \| ``"action"`` \| ``"allowFullScreen"`` \| ``"allowTransparency"`` \| ``"alt"`` \| ``"as"`` \| ``"async"`` \| ``"autoComplete"`` \| ``"autoFocus"`` \| ``"autoPlay"`` \| ``"capture"`` \| ``"cellPadding"`` \| ``"cellSpacing"`` \| ``"charSet"`` \| ``"challenge"`` \| ``"checked"`` \| ``"cite"`` \| ``"classID"`` \| ``"cols"`` \| ``"colSpan"`` \| ``"content"`` \| ``"controls"`` \| ``"coords"`` \| ``"crossOrigin"`` \| ``"data"`` \| ``"dateTime"`` \| ``"default"`` \| ``"defer"`` \| ``"disabled"`` \| ``"download"`` \| ``"encType"`` \| ``"form"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"frameBorder"`` \| ``"headers"`` \| ``"height"`` \| ``"high"`` \| ``"href"`` \| ``"hrefLang"`` \| ``"htmlFor"`` \| ``"httpEquiv"`` \| ``"indeterminate"`` \| ``"integrity"`` \| ``"keyParams"`` \| ``"keyType"`` \| ``"kind"`` \| ``"label"`` \| ``"list"`` \| ``"loop"`` \| ``"low"`` \| ``"manifest"`` \| ``"marginHeight"`` \| ``"marginWidth"`` \| ``"max"`` \| ``"maxLength"`` \| ``"media"`` \| ``"mediaGroup"`` \| ``"method"`` \| ``"min"`` \| ``"minLength"`` \| ``"multiple"`` \| ``"muted"`` \| ``"name"`` \| ``"nonce"`` \| ``"noValidate"`` \| ``"open"`` \| ``"optimum"`` \| ``"pattern"`` \| ``"playsInline"`` \| ``"poster"`` \| ``"preload"`` \| ``"readOnly"`` \| ``"rel"`` \| ``"required"`` \| ``"reversed"`` \| ``"rows"`` \| ``"rowSpan"`` \| ``"sandbox"`` \| ``"scope"`` \| ``"scoped"`` \| ``"scrolling"`` \| ``"seamless"`` \| ``"selected"`` \| ``"shape"`` \| ``"size"`` \| ``"sizes"`` \| ``"span"`` \| ``"src"`` \| ``"srcDoc"`` \| ``"srcLang"`` \| ``"srcSet"`` \| ``"start"`` \| ``"step"`` \| ``"summary"`` \| ``"target"`` \| ``"type"`` \| ``"useMap"`` \| ``"value"`` \| ``"width"`` \| ``"wmode"`` \| ``"wrap"`` \| ``"accentHeight"`` \| ``"accumulate"`` \| ``"additive"`` \| ``"alignmentBaseline"`` \| ``"text-after-edge"`` \| ``"allowReorder"`` \| ``"alphabetic"`` \| ``"amplitude"`` \| ``"arabicForm"`` \| ``"ascent"`` \| ``"attributeName"`` \| ``"attributeType"`` \| ``"autoReverse"`` \| ``"azimuth"`` \| ``"baseFrequency"`` \| ``"baselineShift"`` \| ``"baseProfile"`` \| ``"bbox"`` \| ``"begin"`` \| ``"bias"`` \| ``"by"`` \| ``"calcMode"`` \| ``"capHeight"`` \| ``"clip"`` \| ``"clipPath"`` \| ``"clipPathUnits"`` \| ``"clipRule"`` \| ``"colorInterpolation"`` \| ``"colorInterpolationFilters"`` \| ``"colorProfile"`` \| ``"colorRendering"`` \| ``"contentScriptType"`` \| ``"contentStyleType"`` \| ``"cursor"`` \| ``"cx"`` \| ``"cy"`` \| ``"d"`` \| ``"decelerate"`` \| ``"descent"`` \| ``"diffuseConstant"`` \| ``"direction"`` \| ``"display"`` \| ``"divisor"`` \| ``"dominantBaseline"`` \| ``"dur"`` \| ``"dx"`` \| ``"dy"`` \| ``"edgeMode"`` \| ``"elevation"`` \| ``"enableBackground"`` \| ``"end"`` \| ``"exponent"`` \| ``"externalResourcesRequired"`` \| ``"fill"`` \| ``"fillOpacity"`` \| ``"fillRule"`` \| ``"filter"`` \| ``"filterRes"`` \| ``"filterUnits"`` \| ``"floodColor"`` \| ``"floodOpacity"`` \| ``"focusable"`` \| ``"fontFamily"`` \| ``"fontSize"`` \| ``"fontSizeAdjust"`` \| ``"fontStretch"`` \| ``"fontStyle"`` \| ``"fontVariant"`` \| ``"fontWeight"`` \| ``"format"`` \| ``"from"`` \| ``"fx"`` \| ``"fy"`` \| ``"g1"`` \| ``"g2"`` \| ``"glyphName"`` \| ``"glyphOrientationHorizontal"`` \| ``"glyphOrientationVertical"`` \| ``"glyphRef"`` \| ``"gradientTransform"`` \| ``"gradientUnits"`` \| ``"hanging"`` \| ``"horizAdvX"`` \| ``"horizOriginX"`` \| ``"ideographic"`` \| ``"imageRendering"`` \| ``"in2"`` \| ``"in"`` \| ``"intercept"`` \| ``"k1"`` \| ``"k2"`` \| ``"k3"`` \| ``"k4"`` \| ``"k"`` \| ``"kernelMatrix"`` \| ``"kernelUnitLength"`` \| ``"kerning"`` \| ``"keyPoints"`` \| ``"keySplines"`` \| ``"keyTimes"`` \| ``"lengthAdjust"`` \| ``"letterSpacing"`` \| ``"lightingColor"`` \| ``"limitingConeAngle"`` \| ``"local"`` \| ``"markerEnd"`` \| ``"markerHeight"`` \| ``"markerMid"`` \| ``"markerStart"`` \| ``"markerUnits"`` \| ``"markerWidth"`` \| ``"mask"`` \| ``"maskContentUnits"`` \| ``"maskUnits"`` \| ``"mathematical"`` \| ``"mode"`` \| ``"numOctaves"`` \| ``"offset"`` \| ``"opacity"`` \| ``"operator"`` \| ``"order"`` \| ``"orient"`` \| ``"orientation"`` \| ``"origin"`` \| ``"overflow"`` \| ``"overlinePosition"`` \| ``"overlineThickness"`` \| ``"paintOrder"`` \| ``"panose1"`` \| ``"path"`` \| ``"pathLength"`` \| ``"patternContentUnits"`` \| ``"patternTransform"`` \| ``"patternUnits"`` \| ``"pointerEvents"`` \| ``"points"`` \| ``"pointsAtX"`` \| ``"pointsAtY"`` \| ``"pointsAtZ"`` \| ``"preserveAlpha"`` \| ``"preserveAspectRatio"`` \| ``"primitiveUnits"`` \| ``"r"`` \| ``"radius"`` \| ``"refX"`` \| ``"refY"`` \| ``"renderingIntent"`` \| ``"repeatCount"`` \| ``"repeatDur"`` \| ``"requiredExtensions"`` \| ``"requiredFeatures"`` \| ``"restart"`` \| ``"result"`` \| ``"rotate"`` \| ``"rx"`` \| ``"ry"`` \| ``"scale"`` \| ``"seed"`` \| ``"shapeRendering"`` \| ``"slope"`` \| ``"spacing"`` \| ``"specularConstant"`` \| ``"specularExponent"`` \| ``"speed"`` \| ``"spreadMethod"`` \| ``"startOffset"`` \| ``"stdDeviation"`` \| ``"stemh"`` \| ``"stemv"`` \| ``"stitchTiles"`` \| ``"stopColor"`` \| ``"stopOpacity"`` \| ``"strikethroughPosition"`` \| ``"strikethroughThickness"`` \| ``"stroke"`` \| ``"strokeDasharray"`` \| ``"strokeDashoffset"`` \| ``"strokeLinecap"`` \| ``"strokeLinejoin"`` \| ``"strokeMiterlimit"`` \| ``"strokeOpacity"`` \| ``"strokeWidth"`` \| ``"surfaceScale"`` \| ``"systemLanguage"`` \| ``"tableValues"`` \| ``"targetX"`` \| ``"targetY"`` \| ``"textAnchor"`` \| ``"textDecoration"`` \| ``"textLength"`` \| ``"textRendering"`` \| ``"to"`` \| ``"transform"`` \| ``"u1"`` \| ``"u2"`` \| ``"underlinePosition"`` \| ``"underlineThickness"`` \| ``"unicode"`` \| ``"unicodeBidi"`` \| ``"unicodeRange"`` \| ``"unitsPerEm"`` \| ``"vAlphabetic"`` \| ``"values"`` \| ``"vectorEffect"`` \| ``"version"`` \| ``"vertAdvY"`` \| ``"vertOriginX"`` \| ``"vertOriginY"`` \| ``"vHanging"`` \| ``"vIdeographic"`` \| ``"viewBox"`` \| ``"viewTarget"`` \| ``"visibility"`` \| ``"vMathematical"`` \| ``"widths"`` \| ``"wordSpacing"`` \| ``"writingMode"`` \| ``"x1"`` \| ``"x2"`` \| ``"x"`` \| ``"xChannelSelector"`` \| ``"xHeight"`` \| ``"xlinkActuate"`` \| ``"xlinkArcrole"`` \| ``"xlinkHref"`` \| ``"xlinkRole"`` \| ``"xlinkShow"`` \| ``"xlinkTitle"`` \| ``"xlinkType"`` \| ``"xmlBase"`` \| ``"xmlLang"`` \| ``"xmlns"`` \| ``"xmlnsXlink"`` \| ``"xmlSpace"`` \| ``"y1"`` \| ``"y2"`` \| ``"y"`` \| ``"yChannelSelector"`` \| ``"z"`` \| ``"zoomAndPan"``, [`SqlExpression`](../namespaces/yom.md#sqlexpression)\>\>

#### Defined in

[src/yom.ts:2039](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2039)

___

### scrollLock

• `Optional` **scrollLock**: [`ScrollLockOpts`](yom.ScrollLockOpts.md)

#### Defined in

[src/yom.ts:2034](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2034)

___

### style

• `Optional` **style**: `Record`<`string`, [`SqlExpression`](../namespaces/yom.md#sqlexpression)\>

#### Defined in

[src/yom.ts:2037](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2037)

___

### t

• **t**: ``"Element"``

#### Defined in

[src/yom.ts:2030](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2030)

___

### tag

• **tag**: [`AllHtmlTags`](../namespaces/yom.md#allhtmltags)

#### Defined in

[src/yom.ts:2031](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2031)

___

### testId

• `Optional` **testId**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/yom.ts:2038](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2038)
