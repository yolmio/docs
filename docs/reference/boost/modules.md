---
id: "modules"
title: "Boost"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Namespaces

- [colorUtils](namespaces/colorUtils.md)
- [components](namespaces/components.md)
- [formState](namespaces/formState.md)
- [inflectors](namespaces/inflectors.md)
- [sqlUtils](namespaces/sqlUtils.md)
- [statements](namespaces/statements.md)
- [styleUtils](namespaces/styleUtils.md)
- [yom](namespaces/yom.md)

## Classes

- [App](classes/App.md)
- [BigIntField](classes/BigIntField.md)
- [BigUintField](classes/BigUintField.md)
- [BoolField](classes/BoolField.md)
- [DateField](classes/DateField.md)
- [Db](classes/Db.md)
- [DbCatalog](classes/DbCatalog.md)
- [DecimalField](classes/DecimalField.md)
- [DeviceDb](classes/DeviceDb.md)
- [DoubleField](classes/DoubleField.md)
- [EnumField](classes/EnumField.md)
- [ForeignKeyField](classes/ForeignKeyField.md)
- [IntField](classes/IntField.md)
- [NuvaIdField](classes/NuvaIdField.md)
- [OrderingField](classes/OrderingField.md)
- [RealField](classes/RealField.md)
- [ScriptDbDefinition](classes/ScriptDbDefinition.md)
- [SmallIntField](classes/SmallIntField.md)
- [SmallUintField](classes/SmallUintField.md)
- [StringField](classes/StringField.md)
- [Table](classes/Table.md)
- [TableBuilder](classes/TableBuilder.md)
- [TableCatalog](classes/TableCatalog.md)
- [TimeField](classes/TimeField.md)
- [TimestampField](classes/TimestampField.md)
- [TinyIntField](classes/TinyIntField.md)
- [TinyUintField](classes/TinyUintField.md)
- [TxField](classes/TxField.md)
- [Ui](classes/Ui.md)
- [UintField](classes/UintField.md)
- [UuidField](classes/UuidField.md)

## Interfaces

- [AddressFieldGroup](interfaces/AddressFieldGroup.md)
- [AddressFieldGroupOpts](interfaces/AddressFieldGroupOpts.md)
- [AliasesCSSProperties](interfaces/AliasesCSSProperties.md)
- [AllSystemCSSProperties](interfaces/AllSystemCSSProperties.md)
- [BoolEnumLikeConfig](interfaces/BoolEnumLikeConfig.md)
- [CSSObject](interfaces/CSSObject.md)
- [CSSSelectorObject](interfaces/CSSSelectorObject.md)
- [CSSSelectorObjectOrCssVariables](interfaces/CSSSelectorObjectOrCssVariables.md)
- [Check](interfaces/Check.md)
- [DataGridColumn](interfaces/DataGridColumn.md)
- [DecisionTable](interfaces/DecisionTable.md)
- [DecisionTableOutput](interfaces/DecisionTableOutput.md)
- [DecisionTableVariable](interfaces/DecisionTableVariable.md)
- [DisplayNameConfig](interfaces/DisplayNameConfig.md)
- [DurationUsage](interfaces/DurationUsage.md)
- [Enum](interfaces/Enum.md)
- [EnumControlOpts](interfaces/EnumControlOpts.md)
- [EnumValue](interfaces/EnumValue.md)
- [FieldCheck](interfaces/FieldCheck.md)
- [HelperEnum](interfaces/HelperEnum.md)
- [ImageSetFieldGroup](interfaces/ImageSetFieldGroup.md)
- [ImageSetOpts](interfaces/ImageSetOpts.md)
- [ImageSetVariant](interfaces/ImageSetVariant.md)
- [MoneyUsage](interfaces/MoneyUsage.md)
- [OverwriteCSSProperties](interfaces/OverwriteCSSProperties.md)
- [Page](interfaces/Page.md)
- [Parameter](interfaces/Parameter.md)
- [Profile](interfaces/Profile.md)
- [RecordDisplayName](interfaces/RecordDisplayName.md)
- [RoutesNode](interfaces/RoutesNode.md)
- [ScalarFunction](interfaces/ScalarFunction.md)
- [ScriptDb](interfaces/ScriptDb.md)
- [ScriptDbMappingFileDefinition](interfaces/ScriptDbMappingFileDefinition.md)
- [ScriptDbModelDefinition](interfaces/ScriptDbModelDefinition.md)
- [SearchConfig](interfaces/SearchConfig.md)
- [SimpleDt](interfaces/SimpleDt.md)
- [SwitchNode](interfaces/SwitchNode.md)
- [SwitchNodeCase](interfaces/SwitchNodeCase.md)
- [TableControlOpts](interfaces/TableControlOpts.md)
- [TableFunction](interfaces/TableFunction.md)
- [VirtualField](interfaces/VirtualField.md)
- [VirtualFieldHelper](interfaces/VirtualFieldHelper.md)
- [WebAppConfig](interfaces/WebAppConfig.md)

## Type Aliases

### BarChartNode

Ƭ **BarChartNode**: `Omit`<[`BarChartNode`](interfaces/yom.BarChartNode.md), ``"classes"``\> & { `styles`: { [K in keyof BarChartClasses]: Style }  }

#### Defined in

[src/nodeTypes.ts:83](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L83)

___

### BoolDt

Ƭ **BoolDt**: { `name`: `string` ; `trues`: `string`[]  } \| { `falses`: `string`[] ; `name`: `string`  }

#### Defined in

[src/app.ts:2038](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L2038)

___

### CSSPseudoSelectorProps

Ƭ **CSSPseudoSelectorProps**: { [K in CSS.Pseudos \| "dark" \| "light" \| Breakpoint]?: Style }

Map of all CSS pseudo selectors (`:hover`, `:focus`, ...).

#### Defined in

[src/styleTypes.ts:355](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L355)

___

### Currency

Ƭ **Currency**: ``"USD"``

#### Defined in

[src/app.ts:625](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L625)

___

### CustomTableControl

Ƭ **CustomTableControl**: (`props`: [`TableControlOpts`](interfaces/TableControlOpts.md)) => [`Node`](modules.md#node)

#### Type declaration

▸ (`props`): [`Node`](modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TableControlOpts`](interfaces/TableControlOpts.md) |

##### Returns

[`Node`](modules.md#node)

#### Defined in

[src/app.ts:421](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L421)

___

### DataGridNode

Ƭ **DataGridNode**: `Omit`<[`DataGridNode`](interfaces/yom.DataGridNode.md), ``"columns"`` \| ``"classes"``\> & { `columns`: [`DataGridColumn`](interfaces/DataGridColumn.md)[] ; `styles`: [`DataGridStyles`](modules.md#datagridstyles)  }

#### Defined in

[src/nodeTypes.ts:59](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L59)

___

### DataGridStyles

Ƭ **DataGridStyles**: { [K in keyof DataGridNode["classes"]]?: Style }

#### Defined in

[src/nodeTypes.ts:55](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L55)

___

### DecimalUsage

Ƭ **DecimalUsage**: [`MoneyUsage`](interfaces/MoneyUsage.md) \| { `type`: ``"Percentage"``  }

#### Defined in

[src/app.ts:690](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L690)

___

### DurationSize

Ƭ **DurationSize**: ``"seconds"`` \| ``"minutes"`` \| ``"hours"``

#### Defined in

[src/app.ts:618](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L618)

___

### EachNode

Ƭ **EachNode**: `Omit`<[`EachNode`](interfaces/yom.EachNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

[src/nodeTypes.ts:24](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L24)

___

### ElementNode

Ƭ **ElementNode**: `Omit`<[`ElementNode`](interfaces/yom.ElementNode.md), ``"children"``\> & { `children?`: [`Node`](modules.md#node) ; `styles?`: [`Style`](modules.md#style)  }

#### Defined in

[src/nodeTypes.ts:72](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L72)

___

### EnumControl

Ƭ **EnumControl**: { `type`: ``"Select"``  } \| { `type`: ``"Combobox"``  } \| { `f`: (`props`: [`TableControlOpts`](interfaces/TableControlOpts.md)) => [`Node`](modules.md#node) ; `type`: ``"Custom"``  }

#### Defined in

[src/app.ts:1945](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1945)

___

### Field

Ƭ **Field**: [`StringField`](classes/StringField.md) \| [`NumericFields`](modules.md#numericfields) \| [`DateField`](classes/DateField.md) \| [`ForeignKeyField`](classes/ForeignKeyField.md) \| [`BoolField`](classes/BoolField.md) \| [`EnumField`](classes/EnumField.md) \| [`OrderingField`](classes/OrderingField.md) \| [`UuidField`](classes/UuidField.md) \| [`TimestampField`](classes/TimestampField.md) \| [`TimeField`](classes/TimeField.md) \| [`TxField`](classes/TxField.md)

#### Defined in

[src/app.ts:800](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L800)

___

### FieldGroup

Ƭ **FieldGroup**: [`AddressFieldGroup`](interfaces/AddressFieldGroup.md) \| [`ImageSetFieldGroup`](interfaces/ImageSetFieldGroup.md)

#### Defined in

[src/app.ts:475](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L475)

___

### IfNode

Ƭ **IfNode**: `Omit`<[`IfNode`](interfaces/yom.IfNode.md), ``"then"`` \| ``"else"``\> & { `else?`: [`Node`](modules.md#node) ; `then?`: [`Node`](modules.md#node)  }

#### Defined in

[src/nodeTypes.ts:32](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L32)

___

### ImageUsage

Ƭ **ImageUsage**: ``"dialog_full"`` \| ``"general_full"`` \| ``"square_thumbnail"`` \| ``"general_thumbnail"``

#### Defined in

[src/app.ts:457](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L457)

___

### IntegerField

Ƭ **IntegerField**: [`TinyUintField`](classes/TinyUintField.md) \| [`TinyIntField`](classes/TinyIntField.md) \| [`SmallUintField`](classes/SmallUintField.md) \| [`SmallIntField`](classes/SmallIntField.md) \| [`UintField`](classes/UintField.md) \| [`IntField`](classes/IntField.md) \| [`BigUintField`](classes/BigUintField.md) \| [`BigIntField`](classes/BigIntField.md)

#### Defined in

[src/app.ts:667](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L667)

___

### IntegerUsage

Ƭ **IntegerUsage**: [`DurationUsage`](interfaces/DurationUsage.md) \| [`MoneyUsage`](interfaces/MoneyUsage.md)

#### Defined in

[src/app.ts:632](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L632)

___

### LineChartNode

Ƭ **LineChartNode**: `Omit`<[`LineChartNode`](interfaces/yom.LineChartNode.md), ``"classes"``\> & { `styles`: { [K in keyof LineChartClasses]: Style }  }

#### Defined in

[src/nodeTypes.ts:79](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L79)

___

### ModeNode

Ƭ **ModeNode**: `Omit`<[`ModeNode`](interfaces/yom.ModeNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

[src/nodeTypes.ts:26](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L26)

___

### Node

Ƭ **Node**: `string` \| ([`Node`](modules.md#node) \| ``null`` \| `undefined`)[] \| [`EachNode`](modules.md#eachnode) \| [`IfNode`](modules.md#ifnode) \| [`SwitchNode`](interfaces/SwitchNode.md) \| [`StateNode`](modules.md#statenode) \| [`ModeNode`](modules.md#modenode) \| [`RouteNode`](modules.md#routenode) \| [`RoutesNode`](interfaces/RoutesNode.md) \| [`PortalNode`](modules.md#portalnode) \| [`ElementNode`](modules.md#elementnode) \| [`QueryParamsNode`](modules.md#queryparamsnode) \| [`LineChartNode`](modules.md#linechartnode) \| [`BarChartNode`](modules.md#barchartnode) \| [`PieChartNode`](modules.md#piechartnode) \| [`DataGridNode`](modules.md#datagridnode) \| [`SourceMapNode`](modules.md#sourcemapnode) \| [`EventHandlersNode`](interfaces/yom.EventHandlersNode.md)

#### Defined in

[src/nodeTypes.ts:4](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L4)

___

### NumericFields

Ƭ **NumericFields**: [`TinyUintField`](classes/TinyUintField.md) \| [`TinyIntField`](classes/TinyIntField.md) \| [`SmallUintField`](classes/SmallUintField.md) \| [`SmallIntField`](classes/SmallIntField.md) \| [`UintField`](classes/UintField.md) \| [`IntField`](classes/IntField.md) \| [`BigUintField`](classes/BigUintField.md) \| [`BigIntField`](classes/BigIntField.md) \| [`RealField`](classes/RealField.md) \| [`DoubleField`](classes/DoubleField.md) \| [`DecimalField`](classes/DecimalField.md)

#### Defined in

[src/app.ts:706](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L706)

___

### PartialElNode

Ƭ **PartialElNode**: `Partial`<[`ElementNode`](modules.md#elementnode)\>

#### Defined in

[src/nodeTypes.ts:77](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L77)

___

### PieChartNode

Ƭ **PieChartNode**: `Omit`<[`PieChartNode`](interfaces/yom.PieChartNode.md), ``"classes"``\> & { `styles`: { [K in keyof PieChartClasses]: Style }  }

#### Defined in

[src/nodeTypes.ts:87](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L87)

___

### PortalNode

Ƭ **PortalNode**: `Omit`<[`PortalNode`](interfaces/yom.PortalNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

[src/nodeTypes.ts:28](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L28)

___

### Profiles

Ƭ **Profiles**: { `default`: [`Profile`](interfaces/Profile.md)  } & `Record`<`string`, [`Profile`](interfaces/Profile.md)\>

#### Defined in

[src/profile.ts:7](https://github.com/yolmio/boost/blob/b239488/src/profile.ts#L7)

___

### QueryParamsNode

Ƭ **QueryParamsNode**: `Omit`<[`QueryParamsNode`](interfaces/yom.QueryParamsNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

[src/nodeTypes.ts:29](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L29)

___

### RouteNode

Ƭ **RouteNode**: `Omit`<[`RouteNode`](interfaces/yom.RouteNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

[src/nodeTypes.ts:27](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L27)

___

### SimplifiedPaletteVars

Ƭ **SimplifiedPaletteVars**: `SkipPalette`<`PaletteCssVars`\>

#### Defined in

[src/styleTypes.ts:12](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L12)

___

### SourceMapNode

Ƭ **SourceMapNode**: `Omit`<[`SourceMapNode`](interfaces/yom.SourceMapNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

[src/nodeTypes.ts:36](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L36)

___

### StandardCSSProperties

Ƭ **StandardCSSProperties**: `CSS.PropertiesFallback`<`number` \| `string`\>

#### Defined in

[src/styleTypes.ts:14](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L14)

___

### StateNode

Ƭ **StateNode**: `Omit`<[`StateNode`](interfaces/yom.StateNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

[src/nodeTypes.ts:25](https://github.com/yolmio/boost/blob/b239488/src/nodeTypes.ts#L25)

___

### StringUsage

Ƭ **StringUsage**: { `type`: ``"Email"``  } \| { `type`: ``"PhoneNumber"``  }

#### Defined in

[src/app.ts:593](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L593)

___

### Style

Ƭ **Style**: [`StyleObject`](modules.md#styleobject) \| ``null`` \| ``false`` \| `undefined` \| [`Style`](modules.md#style)[]

#### Defined in

[src/styleTypes.ts:394](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L394)

___

### StyleObject

Ƭ **StyleObject**: [`SystemCssProperties`](modules.md#systemcssproperties) \| [`CSSPseudoSelectorProps`](modules.md#csspseudoselectorprops) \| [`CSSSelectorObjectOrCssVariables`](interfaces/CSSSelectorObjectOrCssVariables.md)

#### Defined in

[src/styleTypes.ts:389](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L389)

___

### SystemCssProperties

Ƭ **SystemCssProperties**: { [K in keyof AllSystemCSSProperties]: AllSystemCSSProperties[K] \| Style }

#### Defined in

[src/styleTypes.ts:385](https://github.com/yolmio/boost/blob/b239488/src/styleTypes.ts#L385)

___

### TableControl

Ƭ **TableControl**: { `type`: ``"Select"``  } \| { `type`: ``"Combobox"``  } \| { `f`: [`CustomTableControl`](modules.md#customtablecontrol) ; `type`: ``"Custom"``  }

#### Defined in

[src/app.ts:423](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L423)

___

### VirtualType

Ƭ **VirtualType**: { `type`: [`SimpleScalarTypes`](namespaces/yom.md#simplescalartypes)  } \| { `type`: [`ScalarIntegerTypes`](namespaces/yom.md#scalarintegertypes) ; `usage?`: [`IntegerUsage`](modules.md#integerusage)  } \| { `precision`: `number` ; `scale`: `number` ; `type`: ``"Decimal"``  } \| { `table`: `string` ; `type`: ``"ForeignKey"``  } \| { `enum`: `string` ; `type`: ``"Enum"``  } \| { `type`: ``"String"``  }

#### Defined in

[src/app.ts:545](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L545)

## Variables

### app

• `Const` **app**: [`App`](classes/App.md)

The total model of the app, everything that is needed to generate the app is done through this single
variable.

#### Defined in

[src/app.ts:2133](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L2133)

___

### colors

• `Const` **colors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blue` | { `100`: `string` = "#DDF1FF"; `200`: `string` = "#ADDBFF"; `300`: `string` = "#6FB6FF"; `400`: `string` = "#3990FF"; `50`: `string` = "#F4FAFF"; `500`: `string` = "#096BDE"; `600`: `string` = "#054DA7"; `700`: `string` = "#02367D"; `800`: `string` = "#072859"; `900`: `string` = "#00153C" } |
| `blue.100` | `string` |
| `blue.200` | `string` |
| `blue.300` | `string` |
| `blue.400` | `string` |
| `blue.50` | `string` |
| `blue.500` | `string` |
| `blue.600` | `string` |
| `blue.700` | `string` |
| `blue.800` | `string` |
| `blue.900` | `string` |
| `green` | { `100`: `string` = "#D7F5DD"; `200`: `string` = "#77EC95"; `300`: `string` = "#4CC76E"; `400`: `string` = "#2CA24D"; `50`: `string` = "#F3FEF5"; `500`: `string` = "#1A7D36"; `600`: `string` = "#0F5D26"; `700`: `string` = "#034318"; `800`: `string` = "#002F0F"; `900`: `string` = "#001D09" } |
| `green.100` | `string` |
| `green.200` | `string` |
| `green.300` | `string` |
| `green.400` | `string` |
| `green.50` | `string` |
| `green.500` | `string` |
| `green.600` | `string` |
| `green.700` | `string` |
| `green.800` | `string` |
| `green.900` | `string` |
| `grey` | { `100`: `string` = "#EBEBEF"; `200`: `string` = "#D8D8DF"; `300`: `string` = "#B9B9C6"; `400`: `string` = "#8F8FA3"; `50`: `string` = "#F7F7F8"; `500`: `string` = "#73738C"; `600`: `string` = "#5A5A72"; `700`: `string` = "#434356"; `800`: `string` = "#25252D"; `900`: `string` = "#131318" } |
| `grey.100` | `string` |
| `grey.200` | `string` |
| `grey.300` | `string` |
| `grey.400` | `string` |
| `grey.50` | `string` |
| `grey.500` | `string` |
| `grey.600` | `string` |
| `grey.700` | `string` |
| `grey.800` | `string` |
| `grey.900` | `string` |
| `lime` | { `100`: `string` = "#ecfccb"; `200`: `string` = "#d9f99d"; `300`: `string` = "#bef264"; `400`: `string` = "#a3e635"; `50`: `string` = "#f7fee7"; `500`: `string` = "#84cc16"; `600`: `string` = "#65a30d"; `700`: `string` = "#4d7c0f"; `800`: `string` = "#3f6212"; `900`: `string` = "#365314" } |
| `lime.100` | `string` |
| `lime.200` | `string` |
| `lime.300` | `string` |
| `lime.400` | `string` |
| `lime.50` | `string` |
| `lime.500` | `string` |
| `lime.600` | `string` |
| `lime.700` | `string` |
| `lime.800` | `string` |
| `lime.900` | `string` |
| `neutral` | { `100`: `string` = "#f5f5f5"; `200`: `string` = "#e5e5e5"; `300`: `string` = "#d4d4d4"; `400`: `string` = "#a3a3a3"; `50`: `string` = "#fafafa"; `500`: `string` = "#737373"; `600`: `string` = "#525252"; `700`: `string` = "#404040"; `800`: `string` = "#262626"; `900`: `string` = "#171717"; `950`: `string` = "#0a0a0a" } |
| `neutral.100` | `string` |
| `neutral.200` | `string` |
| `neutral.300` | `string` |
| `neutral.400` | `string` |
| `neutral.50` | `string` |
| `neutral.500` | `string` |
| `neutral.600` | `string` |
| `neutral.700` | `string` |
| `neutral.800` | `string` |
| `neutral.900` | `string` |
| `neutral.950` | `string` |
| `purple` | { `100`: `string` = "#F4EAFF"; `200`: `string` = "#E1CBFF"; `300`: `string` = "#C69EFF"; `400`: `string` = "#A374F9"; `50`: `string` = "#FDF7FF"; `500`: `string` = "#814DDE"; `600`: `string` = "#5F35AE"; `700`: `string` = "#452382"; `800`: `string` = "#301761"; `900`: `string` = "#1D0A42" } |
| `purple.100` | `string` |
| `purple.200` | `string` |
| `purple.300` | `string` |
| `purple.400` | `string` |
| `purple.50` | `string` |
| `purple.500` | `string` |
| `purple.600` | `string` |
| `purple.700` | `string` |
| `purple.800` | `string` |
| `purple.900` | `string` |
| `red` | { `100`: `string` = "#FFE9E8"; `200`: `string` = "#FFC7C5"; `300`: `string` = "#FF9192"; `400`: `string` = "#FA5255"; `50`: `string` = "#FFF8F6"; `500`: `string` = "#D3232F"; `600`: `string` = "#A10E25"; `700`: `string` = "#77061B"; `800`: `string` = "#580013"; `900`: `string` = "#39000D" } |
| `red.100` | `string` |
| `red.200` | `string` |
| `red.300` | `string` |
| `red.400` | `string` |
| `red.50` | `string` |
| `red.500` | `string` |
| `red.600` | `string` |
| `red.700` | `string` |
| `red.800` | `string` |
| `red.900` | `string` |
| `slate` | { `100`: `string` = "#f1f5f9"; `200`: `string` = "#e2e8f0"; `300`: `string` = "#cbd5e1"; `400`: `string` = "#94a3b8"; `50`: `string` = "#f8fafc"; `500`: `string` = "#64748b"; `600`: `string` = "#475569"; `700`: `string` = "#334155"; `800`: `string` = "#1e293b"; `900`: `string` = "#0f172a" } |
| `slate.100` | `string` |
| `slate.200` | `string` |
| `slate.300` | `string` |
| `slate.400` | `string` |
| `slate.50` | `string` |
| `slate.500` | `string` |
| `slate.600` | `string` |
| `slate.700` | `string` |
| `slate.800` | `string` |
| `slate.900` | `string` |
| `stone` | { `100`: `string` = "#f5f5f4"; `200`: `string` = "#e7e5e4"; `300`: `string` = "#d6d3d1"; `400`: `string` = "#a8a29e"; `50`: `string` = "#fafaf9"; `500`: `string` = "#78716c"; `600`: `string` = "#57534e"; `700`: `string` = "#44403c"; `800`: `string` = "#292524"; `900`: `string` = "#1c1917"; `950`: `string` = "#0c0a09" } |
| `stone.100` | `string` |
| `stone.200` | `string` |
| `stone.300` | `string` |
| `stone.400` | `string` |
| `stone.50` | `string` |
| `stone.500` | `string` |
| `stone.600` | `string` |
| `stone.700` | `string` |
| `stone.800` | `string` |
| `stone.900` | `string` |
| `stone.950` | `string` |
| `yellow` | { `100`: `string` = "#FAE17D"; `200`: `string` = "#EAC54F"; `300`: `string` = "#D4A72C"; `400`: `string` = "#BF8700"; `50`: `string` = "#FFF8C5"; `500`: `string` = "#9A6700"; `600`: `string` = "#7D4E00"; `700`: `string` = "#633C01"; `800`: `string` = "#4D2D00"; `900`: `string` = "#3B2300" } |
| `yellow.100` | `string` |
| `yellow.200` | `string` |
| `yellow.300` | `string` |
| `yellow.400` | `string` |
| `yellow.50` | `string` |
| `yellow.500` | `string` |
| `yellow.600` | `string` |
| `yellow.700` | `string` |
| `yellow.800` | `string` |
| `yellow.900` | `string` |
| `zinc` | { `100`: `string` = "#f4f4f5"; `200`: `string` = "#e4e4e7"; `300`: `string` = "#d4d4d8"; `400`: `string` = "#a1a1aa"; `50`: `string` = "#fafafa"; `500`: `string` = "#71717a"; `600`: `string` = "#52525b"; `700`: `string` = "#3f3f46"; `800`: `string` = "#27272a"; `900`: `string` = "#18181b"; `950`: `string` = "#09090b" } |
| `zinc.100` | `string` |
| `zinc.200` | `string` |
| `zinc.300` | `string` |
| `zinc.400` | `string` |
| `zinc.50` | `string` |
| `zinc.500` | `string` |
| `zinc.600` | `string` |
| `zinc.700` | `string` |
| `zinc.800` | `string` |
| `zinc.900` | `string` |
| `zinc.950` | `string` |

#### Defined in

[src/colors.ts:1](https://github.com/yolmio/boost/blob/b239488/src/colors.ts#L1)

___

### nodes

• `Const` **nodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `barChart` | (`opts`: `Omit`<[`BarChartNode`](modules.md#barchartnode), ``"t"``\>) => [`BarChartNode`](modules.md#barchartnode) |
| `dataGrid` | (`opts`: `DatagridOpts`) => [`DataGridNode`](modules.md#datagridnode) |
| `each` | (`props`: `Omit`<[`EachNode`](modules.md#eachnode), ``"t"``\>) => [`EachNode`](modules.md#eachnode) |
| `element` | (`tag`: [`AllHtmlTags`](namespaces/yom.md#allhtmltags), `el`: `ElementOpts`) => [`ElementNode`](modules.md#elementnode) |
| `eventHandlers` | (`opts`: `EventHandlersOpts`) => [`EventHandlersNode`](interfaces/yom.EventHandlersNode.md) |
| `if` | (`expr`: `string`, `then`: [`Node`](modules.md#node)) => [`IfNode`](modules.md#ifnode)(`opts`: `Omit`<[`IfNode`](modules.md#ifnode), ``"t"``\>) => [`IfNode`](modules.md#ifnode) |
| `lineChart` | (`opts`: `Omit`<[`LineChartNode`](modules.md#linechartnode), ``"t"``\>) => [`LineChartNode`](modules.md#linechartnode) |
| `mode` | (`props`: `Omit`<[`ModeNode`](modules.md#modenode), ``"t"``\>) => [`ModeNode`](modules.md#modenode) |
| `pieChart` | (`opts`: `Omit`<[`PieChartNode`](modules.md#piechartnode), ``"t"``\>) => [`PieChartNode`](modules.md#piechartnode) |
| `portal` | (`children`: [`Node`](modules.md#node)) => [`PortalNode`](modules.md#portalnode) |
| `queryParams` | (`params`: [`QueryParam`](interfaces/yom.QueryParam.md)[], `children`: [`Node`](modules.md#node)) => [`QueryParamsNode`](modules.md#queryparamsnode) |
| `route` | (`props`: `Omit`<[`RouteNode`](modules.md#routenode), ``"t"``\>) => [`RouteNode`](modules.md#routenode) |
| `routes` | (...`routes`: [`RouteNode`](modules.md#routenode)[]) => [`RoutesNode`](interfaces/RoutesNode.md) |
| `sourceMap` | (`source`: `string`, `children`: [`Node`](modules.md#node)) => [`SourceMapNode`](modules.md#sourcemapnode) |
| `state` | (`props`: `StateNodeOpts`) => [`StateNode`](modules.md#statenode) |
| `switch` | (...`cases`: { `condition`: `string` ; `node`: `undefined` \| [`Node`](modules.md#node)  }[]) => [`SwitchNode`](interfaces/SwitchNode.md) |

#### Defined in

[src/nodeHelpers.ts:186](https://github.com/yolmio/boost/blob/b239488/src/nodeHelpers.ts#L186)

## Functions

### createProfiles

▸ **createProfiles**(`profiles`): `Record`<`string`, [`Profile`](interfaces/Profile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `profiles` | `Record`<`string`, `Partial`<[`Profile`](interfaces/Profile.md)\>\> |

#### Returns

`Record`<`string`, [`Profile`](interfaces/Profile.md)\>

#### Defined in

[src/profile.ts:11](https://github.com/yolmio/boost/blob/b239488/src/profile.ts#L11)
