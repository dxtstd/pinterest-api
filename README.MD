<head>
    <a href="https://github.com/DentaCH/dxtstd-bot">
        <img src="../../blob/assets/pinterest-api/banner.jpg"> </img>
    </a>
</head>
<body>

Pinterest API Scrapper
## Install
```bash
yarn add git:DentaCH/pinterest-api
cd node_modules/pinterest-api
npm build
```

## Example
### Search Keyword
Search for pinterest pins by keyword:
```typescript
import { Pinterest } from 'pinterest-api';

const pinterest = new Pinterest();

(async () => {
    const result = await pinterest.search.keyword('cat')
    console.log(result)
})();
```

</body>
