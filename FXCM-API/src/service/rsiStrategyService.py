
# Relative Strength Index
import pandas as pd
# import matplotlib.pyplot as plt
import logging


def applyRSICalculation(_histdata:pd.DataFrame):
    
    logging.info("Inside applyRSICalculation: Started ")

    try:
        df = _histdata

        # Now, creating mean from last 200 days basically 200 days moving averages
        df['MA200'] = df['BidClose'].rolling(window=200).mean()

        # Relative Returns to define up and down moves
        df['price_change'] =  df['BidClose'].pct_change()

        # Let's define the up moves, like taking value if positive
        df['upmove'] = df['price_change'].apply(lambda x: x if x > 0 else 0)

        # Let's do ti for down move
        df['downmove'] = df['price_change'].apply(lambda x: abs(x) if x < 0 else 0)

        # Now, let's take average of up and down moves
        df['avg_up'] = df['upmove'].ewm(span=19).mean()
        df['avg_down'] = df['downmove'].ewm(span=19).mean()

        df = df.dropna()

        # Now calculating RS
        df['RS'] = df['avg_up']/df['avg_down'] 

        # Now calculating RSI
        df['RSI'] = df['RS'].apply(lambda x: 100-(100/x+1))

        # Now let's efine when we have to buy and sell

        df.loc[(df['BidClose'] > df['MA200']) & (df['RSI'] < 30),'Buy'] = 'Yes' 
        df.loc[(df['BidClose'] < df['MA200']) | (df['RSI'] > 30),'Buy'] = 'No' 

        logging.info("returning form applyRSICalculation")
        return df
    
    except Exception as ex:
        logging.error(f"Exception Occurred in applyRSICalculation - {ex} ")
        raise ex
        




#         df.to_csv("rsi_backtest_for_eur.csv")
    

#         # plotting the graph
#         plotBuySellDatesGrapgh(df)

# def getBuySellDates(df):
#     buyingDates = []
#     sellingDates = []

#     for i in range (len(df)):
#         if "Yes" in df['Buy'].iloc[i]:
#             buyingDates.append(df.iloc[i+1].name)

#             for j in range(1,11):
#                 if df['RSI'].iloc[i+j] > 40:
#                     sellingDates.append(df.iloc[i+j+1].name)
#                     break
#                 elif j ==10:
#                     sellingDates.append(df.iloc[i+j+1].name)

#     return buyingDates, sellingDates

# def plotBuySellDatesGrapgh(df):

#     buy, sell = getBuySellDates(df)


#     plt.figure(figsize=(12,5))
#     plt.scatter(df.loc(buy).index, df.loc[buy]['BidClose'], marker="^", c='g')
#     plt.plot(df['BidClose'], alpha=0.7)
#     plt.show()















