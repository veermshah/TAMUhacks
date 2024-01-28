from collections import OrderedDict
import pandas as pd
import numpy as np
from BLP import Model
from Allocations import getAllocations
import json      

def Allocator(r):        
    def writeResults(filename, models):
        writeDf = pd.concat([models[0].framer.prior] + [m.df for m in models])
        writeDf.to_csv(filename, header=False)
        
    assetInfo = {'Communication Services':.1,'Consumer Discretionary':.09,'Consumer Staples':.09,'Energy':.09,'Financials':.09,'Health Care':.09,'Industrials':.09,'Information Technology':.09,'Materials':.09,'Real Estate':.09,'Utilities':.09}
    assetClasses = list(assetInfo.keys())
    assetWeights = list(assetInfo.values())

    data = pd.read_csv(r'10yBackData.csv', usecols=assetClasses)
    covMatrix = data.cov()

    # 
    
    print('Computing models...')

    allocations = getAllocations()

    P_value=np.asarray([[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]])
    Q_value=np.asarray([[allocations[0]],[allocations[1]], [allocations[2]], [allocations[3]], [allocations[4]], [allocations[5]], [allocations[6]],
    [allocations[7]],         [allocations[8]],  [allocations[9]],         [allocations[10]]        ])


    # for i in range(1): 
        #len(data.columns)
    model = Model.fromPriorData(
        assetClasses, 
        assetWeights, 
        riskAversion=r, 
        covMatrix=covMatrix,
        tau=0.1,
        tauv=0.1, 
        P=P_value,
        Q=Q_value,
        identifier=1
    )

    # print(model.optimalPortfolio['weights'])
    optimalWeights = model.optimalPortfolio['weights']
    assetWeightsDict = {asset: weight for asset, weight in zip(assetClasses, optimalWeights)}
    sharpe = model.optimalPortfolio['sharpe']

    
    weights_dict = {}

    for asset, weight in assetWeightsDict.items():
        print(f'{ asset }: { weight }')
        weights_dict[asset] = weight
        
        
    # Convert the dictionary to a JSON-formatted string
    json_weights = json.dumps(weights_dict)

    print(f'portfolio Sharpe ratio: { sharpe }')



    model_two = Model.fromPriorData(
        assetClasses, 
        assetWeights, 
        riskAversion=r, 
        covMatrix=covMatrix,
        tau=0.1,
        tauv=0.01, 
        P=np.asarray([[1,0,1,0,1,0,1,0,1,0,1]]),
        Q=np.asarray([[0.015]]),
        identifier=2
    )

    model_three = Model.fromPriorData(
        assetClasses, 
        assetWeights, 
        riskAversion=r, 
        covMatrix=covMatrix,
        tau=0.1,
        tauv=0.01, 
        P=np.asarray([[0,0,0,0,0,0,0,0,1,0,0]]),
        Q=np.asarray([[0.015]]),
        identifier=3
    )
    # print(model_one)
    models = (model_three, model_two)
    outFile = 'new_example_output.csv'
    writeResults(outFile, models)

    print('Done.')
    print(f'Check the model results in { outFile }')

    return json_weights
    
print(Allocator(7))
