# Books vue app, to allow my books to be browsed and searched.

This is a simple book cataloguing service.

It consists of two parts in (for now) one repo:

- Vue app to serve the front end
- Node server for getting/creating book record entries

## Project setup

```
npm install
```

## Front end

### Compiles and hot-reloads for development

```
npm run serve
```

Then visit `http://localhost:8080/`

### Compiles and minifies for production

```
npm run build
```

## Node server

```
npm run server
```

This is just a basic node server, and will need to be restarted after changes are made.

- [ ] Could be refactored to GraphQL
- [ ] Once the books.json is big enough, a more efficient save to file method needs to be implemented
