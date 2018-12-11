# Angular app

## First things first

This HackJam is split into three parts:

- Introduction to Angular
- Introduction to the Angular router
- Introduction to state management with ngrx

Follow the steps in order to understand everything.

We've left a few bugs in the application that you'll have to fix in order to make the application running.
The `main.js` file is the entry point of this application, it is here that your first component is mounted and rendered.

Check the comments in the following files for further information.

## Part One

GOAL:  https://wizardly-gates-7ebf4c.netlify.com/

### app.component.ts

For now, only the dashboard is displayed. The header seems to be missing.
See what you can do about that
You can find the header in the dumb folder in

### header.component.ts

The title and the subtitle are missing.

### dashboard.component.ts

This component is quite complex and a lot of things are missing.
You need to get all the cryptos and then display them.

For that:

- You need to initialise the API service then you need to get the data from it in the getData() function
- When the data are fetched, you need to display them using the crypto-details component. Hint : check \*ngFor. Moreover, crypto-details has some issues, fix them
- Since everything is displayed properly, you need now to handle the search: check the filter.pipe.ts file to handle it
- Plug the refresh function with the refresh button

## Part Two

GOAL: https://gallant-payne-82df11.netlify.com/

### app.module.ts

The router needs to be set up in the module ( check the angular router for further information).

Routes needed:
- / -> Display DashboardComponent
- /wallet
- /crypto/:id -> you will use it in the third part, so don't think about it now 
- /sell/:id -> you will use it in the third part, so don't think about it now 


In the `header.component.ts`, we should add these links (`<a class="link">Buy</a>`) to navigate between the pages.
On the `app.component.ts`, you need to set up the routing system to make it work.

Feature: you need to display the cryptos, buy them, see your wallet and sell cryptos

Don't forget to link the "+" button in the `crypto-details.component.ts` file with the buying page.

## Part Three

To start using ngrx, you will have to configure the store in the `app.module.ts`
You will need to implement the reducer and the actions.

Your reducer will be a history reducer `(reducer/wallet.ts)` that keeps information for each transaction. A transaction can be of type BUY or SELL One action handles the selling and the other one handles the buying.

Payload structure :

```javascript
    {
        crypto(name) ,
        rate(price),
        quantity,
        date,
        cryptoId,
        type : {BUY,SELL}
    }
```

### wallet-dash-board.component.ts

You need here to connect to your ngrx store and get the history.

### buying-page.component.ts

Some stuff to do here to get all the information you need to connect it with the store and dispatch the action.
Same logic in the `selling-page.component.ts`. Check if you need to change somehting in it.

## Bonus :

For now, you get all the data with one call. If you check the code in the server. You can see that it's possible to fetch a range of the cryptos.
Make a paginated list on the dashboard.
