try:
    from pip._internal import main as pip_main
except ImportError:
    from pip import main as pip_main

# Install PyPortfolioOpt with version 1.4.1
pip_main(['install', 'PyPortfolioOpt==1.4.1'])

# Import EfficientFrontier
from pypfopt.efficient_frontier import EfficientFrontier

# Now you can use the EfficientFrontier class in your script
# For example:
# ef = EfficientFrontier(expected_returns, cov_matrix)
# ... rest of your code ...
