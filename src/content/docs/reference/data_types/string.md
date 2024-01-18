---
title: "String Types"
---

Yolm doesn't have char types, we only have a string type.

Strings are always utf-8, so you can go wild with emojis and anything in unicode.

### Max length 

Max length is required and is always in characters, which is different than many languages.

This means that characters like Ѓ, 🎂, 🤦🏻‍♂️, ﷽ will be treated as one character instead of however many bytes it takes to store behind the scenes.

### Min length

Min length is optional and is also in characters.
