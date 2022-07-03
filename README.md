#### D Emmoji D

RIP `base64url (no pad)`

```
Do not stand at my grave and weep
I am not there. I do not sleep.
I am a thousand winds that blow.
I am the diamond glints on snow.
I am the sunlight on ripened grain.
I am the gentle autumn rain.
When you awaken in the morning’s hush
I am the swift uplifting rush
Of quiet birds in circled flight.
I am the soft stars that shine at night.
Do not stand at my grave and cry;
I am not there. I did not die.
```

## Get Started

```
npm i @or13/demojid --save
```

```js
const demojid = require("@or13/demojid");
```

### Decentralized Identifiers

```js
const encoded = demojid.encode(
  "did:key:z6MkpBcRnDUxz34RyvGFeBV6okX8VHABansfJ8Ya8wohRouy",
  {
    contentType: "application/did+json",
  }
);
// "did:key:🐅🦬🌰🐙🦤🌲🪰🐌🦢🌴🐜🦎🐅🦧🦓🐌🐍🐊🌿🌾🪱🌲🐝🦬🦉🐙🐞🐪🐝🍀🌱🌲🦂🦢🦚🐬🌷🐪🦗🦂🐪🐢🦉🐠🐌🦉🐸🐍"
```

### JSON Web Tokens

```js
const message =
  "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RpU3pxRjlrcXdkVThWa2RCS3g1NkVZelhmcGduTlBVQUd6bnBpY05pV2ZuI3o2TWt0aVN6cUY5a3F3ZFU4VmtkQkt4NTZFWXpYZnBnbk5QVUFHem5waWNOaVdmbiJ9.eyJpc3MiOiJkaWQ6a2V5Ono2TWt0aVN6cUY5a3F3ZFU4VmtkQkt4NTZFWXpYZnBnbk5QVUFHem5waWNOaVdmbiIsInN1YiI6ImRpZDpleGFtcGxlOjEyMyIsInZjIjp7IkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly93M2lkLm9yZy92Yy1yZXZvY2F0aW9uLWxpc3QtMjAyMC92MSIsImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sImlkIjoidXJuOnV1aWQ6NDM0MzgxNzYtNDlkZi00M2I0LWE0ODMtMzQ3Mjk1NjQ3YTM5IiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJpc3N1ZXIiOiJkaWQ6a2V5Ono2TWt0aVN6cUY5a3F3ZFU4VmtkQkt4NTZFWXpYZnBnbk5QVUFHem5waWNOaVdmbiIsImlzc3VhbmNlRGF0ZSI6IjIwMTAtMDEtMDFUMTk6MjM6MjRaIiwiY3JlZGVudGlhbFN0YXR1cyI6eyJpZCI6Imh0dHBzOi8vYXBpLmRpZC5hY3Rvci9yZXZvY2F0aW9uLWxpc3RzLzEuanNvbiMwIiwidHlwZSI6IlJldm9jYXRpb25MaXN0MjAyMFN0YXR1cyIsInJldm9jYXRpb25MaXN0SW5kZXgiOjAsInJldm9jYXRpb25MaXN0Q3JlZGVudGlhbCI6Imh0dHBzOi8vYXBpLmRpZC5hY3Rvci9yZXZvY2F0aW9uLWxpc3RzLzEuanNvbiJ9LCJjcmVkZW50aWFsU3ViamVjdCI6eyJpZCI6ImRpZDpleGFtcGxlOjEyMyJ9fSwianRpIjoidXJuOnV1aWQ6NDM0MzgxNzYtNDlkZi00M2I0LWE0ODMtMzQ3Mjk1NjQ3YTM5IiwibmJmIjoxMjYyMzczODA0fQ.jkWiBFUGAnHe95dO_cybV81MoJYHKMA2i27uu-HlkddbSV1y3Jj7H0kdPqAJT2GIh6B4ea_X6fNu_gGw4tdoDQ";
const options = {
  contentType: "application/jwt",
};
const encoded = demojid.encode(message, options);
// "🪱🐍🌷🐠🦟🌿🪰🐡🦞🐡🌷🌾🪳🌵🐌🐛🦑🦋🌻🦚🌻🦆🦜🦤🪳🌳🌻🦬🌻🦆🐌🦤🪳🌴🦤🦩🪳🐞🐙🦬🪱🦈🪳🦀🦂🦧🐌🦤🐜🦧🦤🦎🐌🦈🦅🦩🪰🐞🐋🐙🐝🐛🐠🪲🦂🦍🐌🌳🦋🦧🐟🐒🦀🐙🐝🪳🪱🦅🐠🦆🪰🌿🐋🐸🐛🦅🌲🐝🦑🐜🐋🦬🦟🦢🌲🦤🦗🐆🦌🦤🐝🦍🪳🐸🌻🦧🦉🦍🐛🪲🦜🐆🦂🐝🦀🦬🪰🐜🦗🦌🦂🦧🌾🦧🪳🌾🐜🦓🐝🦆🦜🐙🦑🐙🦜🦓🦀🐛🪳🌾🪲🐞🦤🦗🪳🦢🌲🦢🦟🐙🦌🦑🐝🐜🌾🍀🪱🦆🦌🐢🦂🪲🦀🦞🦂🐝🐋🦆🦟🐡🌷🦙.🪱🐍🌷🦤🪰🦧🌰🐡🦞🐡🌷🐙🦂🪲🦑🦬🦂🦍🐝🦌🦞🦢🦉🦍🐛🪲🦜🐆🦂🐝🦀🦬🪰🐜🦗🦌🦂🦧🌾🦧🪳🌾🐜🦓🐝🦆🦜🐙🦑🐙🦜🦓🦀🐛🪳🌾🪲🐞🦤🦗🪳🦢🌲🦢🦟🐙🦌🦑🐝🐜🌾🍀🪱🦆🦌🐢🦂🪲🦀🦞🦂🐝🐋🦆🦟🐡🌻🦚🌻🦢🦀🐒🦗🐡🌻🦬🌻🦆🐌🦤🪳🌴🦤🦅🪱🌿🌾🦜🪰🌿🦎🦅🦞🦈🌵🐍🌰🐍🌻🦚🌻🦢🪳🦈🌻🦈🦤🐐🌻🐙🌲🦈🦟🦍🦌🐆🪳🐞🐠🐆🌻🦈🦤🦟🌻🦆🐠🐆🐋🍀🌲🐅🦞🐡🐪🐊🐋🦧🐋🦧🍄🦢🪰🐅🍄🦆🦙🐍🪳🐍🐪🐍🌰🌴🌵🦓🍄🦍🦀🐍🪳🪲🐌🦅🦟🦢🐌🦤🦗🪲🦎🐅🍄🦧🦗🦎🌻🐡🐢🐡🦂🍀🐌🐆🪰🍀🌰🦬🍄🐍🦙🦧🌰🦍🦅🐙🍄🦆🦙🐍🪳🐍🦙🦍🦗🐍🐒🐍🪳🐞🪳🐊🦗🦍🌾🐆🦂🪲🦙🐸🍄🪲🦎🦤🪰🦧🦑🦜🌰🦈🌱🐍🌰🌳🦙🦍🌰🦋🌻🦚🌻🦆🐠🐆🐋🍀🌲🐅🦞🐡🐪🐊🐋🦧🐋🦧🍄🦢🪰🐅🍄🦆🦙🐍🪳🐍🐪🐍🌰🌴🌵🦓🍄🦍🦀🐍🪳🪲🐌🦅🦟🦢🐌🦤🦗🪲🦎🐅🍄🦧🦗🦎🌻🦅🐆🦚🌻🦆🦅🐙🌻🦈🦉🐡🐋🐞🌷🐸🦞🦢🐝🐒🦂🪲🦑🦬🦀🌴🌰🐆🌰🐅🐟🦎🦀🐅🦗🦜🦀🌴🦅🐙🪳🐡🐆🐆🌰🦍🌻🐆🍄🪲🌵🐆🦞🌴🌰🦜🌰🐅🦑🦧🌰🦈🐙🐒🦀🦈🦑🦧🦗🐛🌰🦌🌻🐡🐢🐡🐋🍀🦅🐢🪳🦋🌻🦬🪲🐍🌷🪲🪳🐞🌷🦤🪳🦆🦅🐠🦗🦆🦎🦅🦑🦧🌷🦅🪳🌿🐝🐸🐋🌿🦅🐠🦟🌳🌷🐋🍄🌳🌷🦤🪰🦧🦀🐒🪳🐞🌻🐡🦞🐡🌷🐙🦂🪲🦑🦬🦂🦍🐝🦌🦞🦢🦉🦍🐛🪲🦜🐆🦂🐝🦀🦬🪰🐜🦗🦌🦂🦧🌾🦧🪳🌾🐜🦓🐝🦆🦜🐙🦑🐙🦜🦓🦀🐛🪳🌾🪲🐞🦤🦗🪳🦢🌲🦢🦟🐙🦌🦑🐝🐜🌾🍀🪱🦆🦌🐢🦂🪲🦀🦞🦂🐝🐋🦆🦟🐡🌻🦚🌻🦆🦅🐅🪰🦧🐝🐠🦟🦆🦀🦅🐌🌿🌾🐆🪳🦋🌻🦬🌻🦈🌻🐢🌰🐛🌱🦜🌰🌴🌵🦜🌰🌴🌾🐜🌰🐛🐙🦬🌰🦈🌰🦬🌰🦈🐌🦂🌻🐡🐢🐡🦗🦧🌷🦅🪳🌿🐝🐸🐋🌿🦅🐠🦟🌾🦀🐆🦗🐞🐌🐒🪰🐍🌻🦬🪱🐍🌷🦤🪳🌳🌻🦬🌻🦆🐠🐆🐋🍀🌲🐅🦞🐡🐪🐊🦗🐞🌲🦤🍄🦆🐌🦤🪳🌳🦌🐠🦗🦧🐌🐊🪰🐡🦙🐍🪳🐞🪳🐊🦗🦍🌾🐆🦂🪲🦙🐸🍄🪲🦎🦤🪰🦧🐌🐅🍄🐅🌵🐸🦂🦢🦀🐊🦟🐡🌰🐢🌻🐡🐢🐡🐋🍀🦅🐢🪳🦋🌻🦬🌻🦅🌷🦅🐋🦆🦙🦈🦗🐞🐌🦤🦟🦍🦌🌰🦂🐞🦀🐆🌰🦈🌱🐍🌰🌾🦀🐆🦗🐞🐌🐒🪰🐍🌻🦚🌻🦢🌷🦅🐋🦆🦙🦈🦗🐞🐌🦤🦟🦍🦌🌰🦂🐞🦀🐆🦋🪲🦌🐙🪳🐞🐟🐡🦞🦈🌱🦚🌻🦢🌷🦅🐋🦆🦙🦈🦗🐞🐌🦤🦟🦍🦌🌰🦂🐞🦀🐆🦑🦧🌷🦅🪳🌿🐝🐸🐋🌿🦅🐠🦟🌳🌻🦬🌻🦆🐠🐆🐋🍀🌲🐅🦞🐡🐪🐊🦗🐞🌲🦤🍄🦆🐌🦤🪳🌳🦌🐠🦗🦧🐌🐊🪰🐡🦙🐍🪳🐞🪳🐊🦗🦍🌾🐆🦂🪲🦙🐸🍄🪲🦎🦤🪰🦧🐌🐅🍄🐅🌵🐸🦂🦢🦀🐊🦟🐡🌷🦙🍄🌳🌷🦈🪰🦆🐝🐙🪳🪲🦌🐆🦂🪲🌾🦚🐜🦧🐝🐡🦂🦆🐝🦈🐋🌳🌻🦬🪱🐍🌷🦤🪳🌳🌻🦬🌻🦆🐌🦤🪳🌴🦤🦅🪱🌿🌾🦜🪰🌿🦎🦅🦞🦈🌵🐍🌰🐍🌷🦙🐬🦋🐢🐡🦂🦢🐌🦤🌻🦈🦉🐡🐋🐞🌷🐸🦞🦢🐝🐒🦂🪲🦑🦬🦀🌴🌰🐆🌰🐅🐟🦎🦀🐅🦗🦜🦀🌴🦅🐙🪳🐡🐆🐆🌰🦍🌻🐆🍄🪲🌵🐆🦞🌴🌰🦜🌰🐅🦑🦧🌰🦈🐙🐒🦀🦈🦑🦧🦗🐛🌰🦌🌻🐡🐢🐡🦟🦆🌷🦆🌻🦈🦉🦎🌰🦈🦗🐍🌰🐅🪰🐅🦞🌴🌱🐆🐬🦑.🦈🐙🪲🐡🌲🌾🐜🌿🌱🦢🍀🪱🦙🦌🐋🦞🐇🪰🐍🦟🐝🐪🐒🌰🦉🌷🦗🍀🍁🌰🌱🦍🐡🦍🐐🐸🐸🦒🍀🦅🐙🐋🐋🦟🦋🐝🐒🐍🦧🌷🦈🐐🍀🐆🐙🐋🦐🪶🌱🌷🐛🦍🌿🌻🐠🦬🌲🦓🪱🦂🐇🐞🦬🐬🦀🐸🐇🐟🌿🐢🦓🦜🐋🦉🌴🦑"
```

### Plain Text

```js
const message = "hello world";
const encoded = demojid.encode(message);
// expect(encoded).toBe("🦂🌿🐝🦚🦟🌿🐪🐟🐋🦍🦙🐍🦟🌿🦑");
const decoded = demojid.decode(encoded);
// expect(decoded).toBe(message);
```

### Larger Example

<img src="./image.png" alt="npm package lock encoded as nature and animal emojis"/>
