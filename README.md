#### D Emmoji D

base64url will never die... so maybe we can make it look prettier?

This library assumes `base64url` is the only text encoding anyone will ever use and simply replace its alphabet with emojis.

```js
const encoded = encode(
  "did:key:z6MkpBcRnDUxz34RyvGFeBV6okX8VHABansfJ8Ya8wohRouy",
  {
    contentType: "application/did+json",
  }
);
// "did:key:🐅🦬🌰🐙🦤🌲🪰🐌🦢🌴🐜🦎🐅🦧🦓🐌🐍🐊🌿🌾🪱🌲🐝🦬🦉🐙🐞🐪🐝🍀🌱🌲🦂🦢🦚🐬🌷🐪🦗🦂🐪🐢🦉🐠🐌🦉🐸🐍"
```

```js
const message =
  "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RpU3pxRjlrcXdkVThWa2RCS3g1NkVZelhmcGduTlBVQUd6bnBpY05pV2ZuI3o2TWt0aVN6cUY5a3F3ZFU4VmtkQkt4NTZFWXpYZnBnbk5QVUFHem5waWNOaVdmbiJ9.eyJpc3MiOiJkaWQ6a2V5Ono2TWt0aVN6cUY5a3F3ZFU4VmtkQkt4NTZFWXpYZnBnbk5QVUFHem5waWNOaVdmbiIsInN1YiI6ImRpZDpleGFtcGxlOjEyMyIsInZjIjp7IkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly93M2lkLm9yZy92Yy1yZXZvY2F0aW9uLWxpc3QtMjAyMC92MSIsImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sImlkIjoidXJuOnV1aWQ6NDM0MzgxNzYtNDlkZi00M2I0LWE0ODMtMzQ3Mjk1NjQ3YTM5IiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJpc3N1ZXIiOiJkaWQ6a2V5Ono2TWt0aVN6cUY5a3F3ZFU4VmtkQkt4NTZFWXpYZnBnbk5QVUFHem5waWNOaVdmbiIsImlzc3VhbmNlRGF0ZSI6IjIwMTAtMDEtMDFUMTk6MjM6MjRaIiwiY3JlZGVudGlhbFN0YXR1cyI6eyJpZCI6Imh0dHBzOi8vYXBpLmRpZC5hY3Rvci9yZXZvY2F0aW9uLWxpc3RzLzEuanNvbiMwIiwidHlwZSI6IlJldm9jYXRpb25MaXN0MjAyMFN0YXR1cyIsInJldm9jYXRpb25MaXN0SW5kZXgiOjAsInJldm9jYXRpb25MaXN0Q3JlZGVudGlhbCI6Imh0dHBzOi8vYXBpLmRpZC5hY3Rvci9yZXZvY2F0aW9uLWxpc3RzLzEuanNvbiJ9LCJjcmVkZW50aWFsU3ViamVjdCI6eyJpZCI6ImRpZDpleGFtcGxlOjEyMyJ9fSwianRpIjoidXJuOnV1aWQ6NDM0MzgxNzYtNDlkZi00M2I0LWE0ODMtMzQ3Mjk1NjQ3YTM5IiwibmJmIjoxMjYyMzczODA0fQ.jkWiBFUGAnHe95dO_cybV81MoJYHKMA2i27uu-HlkddbSV1y3Jj7H0kdPqAJT2GIh6B4ea_X6fNu_gGw4tdoDQ";
const options = {
  contentType: "application/jwt",
};
const encoded = encode(message, options);
// "🪱🐍🌷🐠🦟🌿🪰🐡🦞🐡🌷🌾🪳🌵🐌🐛🦑🦋🌻🦚🌻🦆🦜🦤🪳🌳🌻🦬🌻🦆🐌🦤🪳🌴🦤🦩🪳🐞🐙🦬🪱🦈🪳🦀🦂🦧🐌🦤🐜🦧🦤🦎🐌🦈🦅🦩🪰🐞🐋🐙🐝🐛🐠🪲🦂🦍🐌🌳🦋🦧🐟🐒🦀🐙🐝🪳🪱🦅🐠🦆🪰🌿🐋🐸🐛🦅🌲🐝🦑🐜🐋🦬🦟🦢🌲🦤🦗🐆🦌🦤🐝🦍🪳🐸🌻🦧🦉🦍🐛🪲🦜🐆🦂🐝🦀🦬🪰🐜🦗🦌🦂🦧🌾🦧🪳🌾🐜🦓🐝🦆🦜🐙🦑🐙🦜🦓🦀🐛🪳🌾🪲🐞🦤🦗🪳🦢🌲🦢🦟🐙🦌🦑🐝🐜🌾🍀🪱🦆🦌🐢🦂🪲🦀🦞🦂🐝🐋🦆🦟🐡🌷🦙.🪱🐍🌷🦤🪰🦧🌰🐡🦞🐡🌷🐙🦂🪲🦑🦬🦂🦍🐝🦌🦞🦢🦉🦍🐛🪲🦜🐆🦂🐝🦀🦬🪰🐜🦗🦌🦂🦧🌾🦧🪳🌾🐜🦓🐝🦆🦜🐙🦑🐙🦜🦓🦀🐛🪳🌾🪲🐞🦤🦗🪳🦢🌲🦢🦟🐙🦌🦑🐝🐜🌾🍀🪱🦆🦌🐢🦂🪲🦀🦞🦂🐝🐋🦆🦟🐡🌻🦚🌻🦢🦀🐒🦗🐡🌻🦬🌻🦆🐌🦤🪳🌴🦤🦅🪱🌿🌾🦜🪰🌿🦎🦅🦞🦈🌵🐍🌰🐍🌻🦚🌻🦢🪳🦈🌻🦈🦤🐐🌻🐙🌲🦈🦟🦍🦌🐆🪳🐞🐠🐆🌻🦈🦤🦟🌻🦆🐠🐆🐋🍀🌲🐅🦞🐡🐪🐊🐋🦧🐋🦧🍄🦢🪰🐅🍄🦆🦙🐍🪳🐍🐪🐍🌰🌴🌵🦓🍄🦍🦀🐍🪳🪲🐌🦅🦟🦢🐌🦤🦗🪲🦎🐅🍄🦧🦗🦎🌻🐡🐢🐡🦂🍀🐌🐆🪰🍀🌰🦬🍄🐍🦙🦧🌰🦍🦅🐙🍄🦆🦙🐍🪳🐍🦙🦍🦗🐍🐒🐍🪳🐞🪳🐊🦗🦍🌾🐆🦂🪲🦙🐸🍄🪲🦎🦤🪰🦧🦑🦜🌰🦈🌱🐍🌰🌳🦙🦍🌰🦋🌻🦚🌻🦆🐠🐆🐋🍀🌲🐅🦞🐡🐪🐊🐋🦧🐋🦧🍄🦢🪰🐅🍄🦆🦙🐍🪳🐍🐪🐍🌰🌴🌵🦓🍄🦍🦀🐍🪳🪲🐌🦅🦟🦢🐌🦤🦗🪲🦎🐅🍄🦧🦗🦎🌻🦅🐆🦚🌻🦆🦅🐙🌻🦈🦉🐡🐋🐞🌷🐸🦞🦢🐝🐒🦂🪲🦑🦬🦀🌴🌰🐆🌰🐅🐟🦎🦀🐅🦗🦜🦀🌴🦅🐙🪳🐡🐆🐆🌰🦍🌻🐆🍄🪲🌵🐆🦞🌴🌰🦜🌰🐅🦑🦧🌰🦈🐙🐒🦀🦈🦑🦧🦗🐛🌰🦌🌻🐡🐢🐡🐋🍀🦅🐢🪳🦋🌻🦬🪲🐍🌷🪲🪳🐞🌷🦤🪳🦆🦅🐠🦗🦆🦎🦅🦑🦧🌷🦅🪳🌿🐝🐸🐋🌿🦅🐠🦟🌳🌷🐋🍄🌳🌷🦤🪰🦧🦀🐒🪳🐞🌻🐡🦞🐡🌷🐙🦂🪲🦑🦬🦂🦍🐝🦌🦞🦢🦉🦍🐛🪲🦜🐆🦂🐝🦀🦬🪰🐜🦗🦌🦂🦧🌾🦧🪳🌾🐜🦓🐝🦆🦜🐙🦑🐙🦜🦓🦀🐛🪳🌾🪲🐞🦤🦗🪳🦢🌲🦢🦟🐙🦌🦑🐝🐜🌾🍀🪱🦆🦌🐢🦂🪲🦀🦞🦂🐝🐋🦆🦟🐡🌻🦚🌻🦆🦅🐅🪰🦧🐝🐠🦟🦆🦀🦅🐌🌿🌾🐆🪳🦋🌻🦬🌻🦈🌻🐢🌰🐛🌱🦜🌰🌴🌵🦜🌰🌴🌾🐜🌰🐛🐙🦬🌰🦈🌰🦬🌰🦈🐌🦂🌻🐡🐢🐡🦗🦧🌷🦅🪳🌿🐝🐸🐋🌿🦅🐠🦟🌾🦀🐆🦗🐞🐌🐒🪰🐍🌻🦬🪱🐍🌷🦤🪳🌳🌻🦬🌻🦆🐠🐆🐋🍀🌲🐅🦞🐡🐪🐊🦗🐞🌲🦤🍄🦆🐌🦤🪳🌳🦌🐠🦗🦧🐌🐊🪰🐡🦙🐍🪳🐞🪳🐊🦗🦍🌾🐆🦂🪲🦙🐸🍄🪲🦎🦤🪰🦧🐌🐅🍄🐅🌵🐸🦂🦢🦀🐊🦟🐡🌰🐢🌻🐡🐢🐡🐋🍀🦅🐢🪳🦋🌻🦬🌻🦅🌷🦅🐋🦆🦙🦈🦗🐞🐌🦤🦟🦍🦌🌰🦂🐞🦀🐆🌰🦈🌱🐍🌰🌾🦀🐆🦗🐞🐌🐒🪰🐍🌻🦚🌻🦢🌷🦅🐋🦆🦙🦈🦗🐞🐌🦤🦟🦍🦌🌰🦂🐞🦀🐆🦋🪲🦌🐙🪳🐞🐟🐡🦞🦈🌱🦚🌻🦢🌷🦅🐋🦆🦙🦈🦗🐞🐌🦤🦟🦍🦌🌰🦂🐞🦀🐆🦑🦧🌷🦅🪳🌿🐝🐸🐋🌿🦅🐠🦟🌳🌻🦬🌻🦆🐠🐆🐋🍀🌲🐅🦞🐡🐪🐊🦗🐞🌲🦤🍄🦆🐌🦤🪳🌳🦌🐠🦗🦧🐌🐊🪰🐡🦙🐍🪳🐞🪳🐊🦗🦍🌾🐆🦂🪲🦙🐸🍄🪲🦎🦤🪰🦧🐌🐅🍄🐅🌵🐸🦂🦢🦀🐊🦟🐡🌷🦙🍄🌳🌷🦈🪰🦆🐝🐙🪳🪲🦌🐆🦂🪲🌾🦚🐜🦧🐝🐡🦂🦆🐝🦈🐋🌳🌻🦬🪱🐍🌷🦤🪳🌳🌻🦬🌻🦆🐌🦤🪳🌴🦤🦅🪱🌿🌾🦜🪰🌿🦎🦅🦞🦈🌵🐍🌰🐍🌷🦙🐬🦋🐢🐡🦂🦢🐌🦤🌻🦈🦉🐡🐋🐞🌷🐸🦞🦢🐝🐒🦂🪲🦑🦬🦀🌴🌰🐆🌰🐅🐟🦎🦀🐅🦗🦜🦀🌴🦅🐙🪳🐡🐆🐆🌰🦍🌻🐆🍄🪲🌵🐆🦞🌴🌰🦜🌰🐅🦑🦧🌰🦈🐙🐒🦀🦈🦑🦧🦗🐛🌰🦌🌻🐡🐢🐡🦟🦆🌷🦆🌻🦈🦉🦎🌰🦈🦗🐍🌰🐅🪰🐅🦞🌴🌱🐆🐬🦑.🦈🐙🪲🐡🌲🌾🐜🌿🌱🦢🍀🪱🦙🦌🐋🦞🐇🪰🐍🦟🐝🐪🐒🌰🦉🌷🦗🍀🍁🌰🌱🦍🐡🦍🐐🐸🐸🦒🍀🦅🐙🐋🐋🦟🦋🐝🐒🐍🦧🌷🦈🐐🍀🐆🐙🐋🦐🪶🌱🌷🐛🦍🌿🌻🐠🦬🌲🦓🪱🦂🐇🐞🦬🐬🦀🐸🐇🐟🌿🐢🦓🦜🐋🦉🌴🦑"
```
