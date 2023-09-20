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
- [RecordRuleFn](interfaces/RecordRuleFn.md)
- [RecordRuleFnOutput](interfaces/RecordRuleFnOutput.md)
- [RoutesNode](interfaces/RoutesNode.md)
- [RuleFunction](interfaces/RuleFunction.md)
- [ScalarFunction](interfaces/ScalarFunction.md)
- [ScriptDb](interfaces/ScriptDb.md)
- [ScriptDbMappingFileDefinition](interfaces/ScriptDbMappingFileDefinition.md)
- [ScriptDbModelDefinition](interfaces/ScriptDbModelDefinition.md)
- [SearchConfig](interfaces/SearchConfig.md)
- [SimpleRfn](interfaces/SimpleRfn.md)
- [SwitchNode](interfaces/SwitchNode.md)
- [SwitchNodeCase](interfaces/SwitchNodeCase.md)
- [TableControlOpts](interfaces/TableControlOpts.md)
- [TableFunction](interfaces/TableFunction.md)
- [WebAppConfig](interfaces/WebAppConfig.md)

## Type Aliases

### BarChartNode

Ƭ **BarChartNode**: `Omit`<[`BarChartNode`](interfaces/yom.BarChartNode.md), ``"classes"``\> & { `styles`: { [K in keyof BarChartClasses]: Style }  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:70

___

### BoolRfn

Ƭ **BoolRfn**: { `name`: `string` ; `trues`: `string`[]  } \| { `falses`: `string`[] ; `name`: `string`  }

#### Defined in

@yolm/boost/dist/app.d.ts:746

___

### CSSPseudoSelectorProps

Ƭ **CSSPseudoSelectorProps**: { [K in CSS.Pseudos \| "dark" \| "light" \| Breakpoint]?: Style }

Map of all CSS pseudo selectors (`:hover`, `:focus`, ...).

#### Defined in

@yolm/boost/dist/styleTypes.d.ts:343

___

### Currency

Ƭ **Currency**: ``"USD"``

#### Defined in

@yolm/boost/dist/app.d.ts:311

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

@yolm/boost/dist/app.d.ts:181

___

### DataGridNode

Ƭ **DataGridNode**: `Omit`<[`DataGridNode`](interfaces/yom.DataGridNode.md), ``"columns"`` \| ``"classes"``\> & { `columns`: [`DataGridColumn`](interfaces/DataGridColumn.md)[] ; `styles`: [`DataGridStyles`](modules.md#datagridstyles)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:49

___

### DataGridStyles

Ƭ **DataGridStyles**: { [K in keyof DataGridNode["classes"]]?: Style }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:46

___

### DecimalUsage

Ƭ **DecimalUsage**: [`MoneyUsage`](interfaces/MoneyUsage.md) \| { `type`: ``"Percentage"``  }

#### Defined in

@yolm/boost/dist/app.d.ts:354

___

### DurationSize

Ƭ **DurationSize**: ``"seconds"`` \| ``"minutes"`` \| ``"hours"``

#### Defined in

@yolm/boost/dist/app.d.ts:306

___

### EachNode

Ƭ **EachNode**: `Omit`<[`EachNode`](interfaces/yom.EachNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:6

___

### ElementNode

Ƭ **ElementNode**: `Omit`<[`ElementNode`](interfaces/yom.ElementNode.md), ``"children"``\> & { `children?`: [`Node`](modules.md#node) ; `styles?`: [`Style`](modules.md#style)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:60

___

### EnumControl

Ƭ **EnumControl**: { `type`: ``"Select"``  } \| { `type`: ``"Combobox"``  } \| { `f`: (`props`: [`TableControlOpts`](interfaces/TableControlOpts.md)) => [`Node`](modules.md#node) ; `type`: ``"Custom"``  }

#### Defined in

@yolm/boost/dist/app.d.ts:689

___

### EventHandlersNode

Ƭ **EventHandlersNode**: [`EventHandlersNode`](interfaces/yom.EventHandlersNode.md)

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:5

___

### Field

Ƭ **Field**: [`StringField`](classes/StringField.md) \| [`NumericFields`](modules.md#numericfields) \| [`DateField`](classes/DateField.md) \| [`ForeignKeyField`](classes/ForeignKeyField.md) \| [`BoolField`](classes/BoolField.md) \| [`EnumField`](classes/EnumField.md) \| [`OrderingField`](classes/OrderingField.md) \| [`UuidField`](classes/UuidField.md) \| [`TimestampField`](classes/TimestampField.md) \| [`TimeField`](classes/TimeField.md) \| [`TxField`](classes/TxField.md)

#### Defined in

@yolm/boost/dist/app.d.ts:413

___

### FieldGroup

Ƭ **FieldGroup**: [`AddressFieldGroup`](interfaces/AddressFieldGroup.md) \| [`ImageSetFieldGroup`](interfaces/ImageSetFieldGroup.md)

#### Defined in

@yolm/boost/dist/app.d.ts:225

___

### HelperFieldType

Ƭ **HelperFieldType**: [`FieldType`](namespaces/yom.md#fieldtype) \| [`FieldIntegerTypes`](namespaces/yom.md#fieldintegertypes) \| [`SimpleScalarTypes`](namespaces/yom.md#simplescalartypes)

#### Defined in

@yolm/boost/dist/app.d.ts:719

___

### HelperScalarType

Ƭ **HelperScalarType**: [`ScalarType`](namespaces/yom.md#scalartype) \| [`SimpleScalarTypes`](namespaces/yom.md#simplescalartypes) \| [`ScalarIntegerTypes`](namespaces/yom.md#scalarintegertypes) \| ``"String"``

#### Defined in

@yolm/boost/dist/app.d.ts:648

___

### IfNode

Ƭ **IfNode**: `Omit`<[`IfNode`](interfaces/yom.IfNode.md), ``"then"`` \| ``"else"``\> & { `else?`: [`Node`](modules.md#node) ; `then?`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:27

___

### ImageUsage

Ƭ **ImageUsage**: ``"dialog_full"`` \| ``"general_full"`` \| ``"square_thumbnail"`` \| ``"general_thumbnail"``

#### Defined in

@yolm/boost/dist/app.d.ts:214

___

### IntegerField

Ƭ **IntegerField**: [`TinyUintField`](classes/TinyUintField.md) \| [`TinyIntField`](classes/TinyIntField.md) \| [`SmallUintField`](classes/SmallUintField.md) \| [`SmallIntField`](classes/SmallIntField.md) \| [`UintField`](classes/UintField.md) \| [`IntField`](classes/IntField.md) \| [`BigUintField`](classes/BigUintField.md) \| [`BigIntField`](classes/BigIntField.md)

#### Defined in

@yolm/boost/dist/app.d.ts:345

___

### IntegerUsage

Ƭ **IntegerUsage**: [`DurationUsage`](interfaces/DurationUsage.md) \| [`MoneyUsage`](interfaces/MoneyUsage.md)

#### Defined in

@yolm/boost/dist/app.d.ts:316

___

### LineChartNode

Ƭ **LineChartNode**: `Omit`<[`LineChartNode`](interfaces/yom.LineChartNode.md), ``"classes"``\> & { `styles`: { [K in keyof LineChartClasses]: Style }  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:65

___

### ModeNode

Ƭ **ModeNode**: `Omit`<[`ModeNode`](interfaces/yom.ModeNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:15

___

### Node

Ƭ **Node**: `string` \| ([`Node`](modules.md#node) \| ``null`` \| `undefined`)[] \| [`EachNode`](modules.md#eachnode) \| [`IfNode`](modules.md#ifnode) \| [`SwitchNode`](interfaces/SwitchNode.md) \| [`StateNode`](modules.md#statenode) \| [`ModeNode`](modules.md#modenode) \| [`RouteNode`](modules.md#routenode) \| [`RoutesNode`](interfaces/RoutesNode.md) \| [`PortalNode`](modules.md#portalnode) \| [`ElementNode`](modules.md#elementnode) \| [`QueryParamsNode`](modules.md#queryparamsnode) \| [`LineChartNode`](modules.md#linechartnode) \| [`BarChartNode`](modules.md#barchartnode) \| [`PieChartNode`](modules.md#piechartnode) \| [`DataGridNode`](modules.md#datagridnode) \| [`SourceMapNode`](modules.md#sourcemapnode) \| [`RecursiveNode`](modules.md#recursivenode) \| [`RecurseNode`](modules.md#recursenode) \| [`EventHandlersNode`](modules.md#eventhandlersnode)

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:3

___

### NumericFields

Ƭ **NumericFields**: [`TinyUintField`](classes/TinyUintField.md) \| [`TinyIntField`](classes/TinyIntField.md) \| [`SmallUintField`](classes/SmallUintField.md) \| [`SmallIntField`](classes/SmallIntField.md) \| [`UintField`](classes/UintField.md) \| [`IntField`](classes/IntField.md) \| [`BigUintField`](classes/BigUintField.md) \| [`BigIntField`](classes/BigIntField.md) \| [`RealField`](classes/RealField.md) \| [`DoubleField`](classes/DoubleField.md) \| [`DecimalField`](classes/DecimalField.md)

#### Defined in

@yolm/boost/dist/app.d.ts:365

___

### PartialElNode

Ƭ **PartialElNode**: `Partial`<[`ElementNode`](modules.md#elementnode)\>

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:64

___

### PieChartNode

Ƭ **PieChartNode**: `Omit`<[`PieChartNode`](interfaces/yom.PieChartNode.md), ``"classes"``\> & { `styles`: { [K in keyof PieChartClasses]: Style }  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:75

___

### PortalNode

Ƭ **PortalNode**: `Omit`<[`PortalNode`](interfaces/yom.PortalNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:21

___

### Profiles

Ƭ **Profiles**: { `default`: [`Profile`](interfaces/Profile.md)  } & `Record`<`string`, [`Profile`](interfaces/Profile.md)\>

#### Defined in

@yolm/boost/dist/profile.d.ts:6

___

### QueryParamsNode

Ƭ **QueryParamsNode**: `Omit`<[`QueryParamsNode`](interfaces/yom.QueryParamsNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:24

___

### RecurseNode

Ƭ **RecurseNode**: [`RecurseNode`](interfaces/yom.RecurseNode.md)

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:4

___

### RecursiveNode

Ƭ **RecursiveNode**: `Omit`<[`RecursiveNode`](interfaces/yom.RecursiveNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:9

___

### RouteNode

Ƭ **RouteNode**: `Omit`<[`RouteNode`](interfaces/yom.RouteNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:18

___

### SimplifiedPaletteVars

Ƭ **SimplifiedPaletteVars**: `SkipPalette`<`PaletteCssVars`\>

#### Defined in

@yolm/boost/dist/styleTypes.d.ts:4

___

### SourceMapNode

Ƭ **SourceMapNode**: `Omit`<[`SourceMapNode`](interfaces/yom.SourceMapNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:31

___

### StandardCSSProperties

Ƭ **StandardCSSProperties**: `CSS.PropertiesFallback`<`number` \| `string`\>

#### Defined in

@yolm/boost/dist/styleTypes.d.ts:5

___

### StateNode

Ƭ **StateNode**: `Omit`<[`StateNode`](interfaces/yom.StateNode.md), ``"children"``\> & { `children`: [`Node`](modules.md#node)  }

#### Defined in

@yolm/boost/dist/nodeTypes.d.ts:12

___

### StringUsage

Ƭ **StringUsage**: { `type`: ``"Email"``  } \| { `type`: ``"PhoneNumber"``  }

#### Defined in

@yolm/boost/dist/app.d.ts:285

___

### Style

Ƭ **Style**: [`StyleObject`](modules.md#styleobject) \| ``null`` \| ``false`` \| `undefined` \| [`Style`](modules.md#style)[]

#### Defined in

@yolm/boost/dist/styleTypes.d.ts:370

___

### StyleObject

Ƭ **StyleObject**: [`SystemCssProperties`](modules.md#systemcssproperties) \| [`CSSPseudoSelectorProps`](modules.md#csspseudoselectorprops) \| [`CSSSelectorObjectOrCssVariables`](interfaces/CSSSelectorObjectOrCssVariables.md)

#### Defined in

@yolm/boost/dist/styleTypes.d.ts:369

___

### SystemCssProperties

Ƭ **SystemCssProperties**: { [K in keyof AllSystemCSSProperties]: AllSystemCSSProperties[K] \| Style }

#### Defined in

@yolm/boost/dist/styleTypes.d.ts:366

___

### TableControl

Ƭ **TableControl**: { `type`: ``"Select"``  } \| { `type`: ``"Combobox"``  } \| { `f`: [`CustomTableControl`](modules.md#customtablecontrol) ; `type`: ``"Custom"``  }

#### Defined in

@yolm/boost/dist/app.d.ts:182

## Variables

### app

• `Const` **app**: [`App`](classes/App.md)

The total model of the app, everything that is needed to generate the app is done through this single
variable.

#### Defined in

@yolm/boost/dist/app.d.ts:806

___

### colors

• `Const` **colors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blue` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
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
| `green` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
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
| `grey` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
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
| `lime` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
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
| `neutral` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string` ; `950`: `string`  } |
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
| `purple` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
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
| `red` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
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
| `slate` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
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
| `stone` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string` ; `950`: `string`  } |
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
| `yellow` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
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
| `zinc` | { `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string` ; `950`: `string`  } |
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

@yolm/boost/dist/colors.d.ts:1

___

### nodes

• `Const` **nodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `barChart` | typeof `barChart` |
| `dataGrid` | typeof `dataGrid` |
| `each` | typeof `each` |
| `element` | typeof `element` |
| `eventHandlers` | typeof `eventHandlers` |
| `if` | typeof `if_` |
| `lineChart` | typeof `lineChart` |
| `mode` | typeof `mode` |
| `pieChart` | typeof `pieChart` |
| `portal` | typeof `portal` |
| `queryParams` | typeof `queryParams` |
| `recurse` | typeof `recurse` |
| `recursive` | typeof `recursive` |
| `route` | typeof `route` |
| `routes` | typeof `routes` |
| `sourceMap` | typeof `sourceMap` |
| `state` | typeof `state` |
| `switch` | typeof `switch_` |

#### Defined in

@yolm/boost/dist/nodeHelpers.d.ts:52

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

@yolm/boost/dist/profile.d.ts:9

___

### fieldTypeFromHelper

▸ **fieldTypeFromHelper**(`ty`): [`FieldType`](namespaces/yom.md#fieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ty` | [`HelperFieldType`](modules.md#helperfieldtype) |

#### Returns

[`FieldType`](namespaces/yom.md#fieldtype)

#### Defined in

@yolm/boost/dist/app.d.ts:727
